"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// Scroll reveal that degrades gracefully: the content renders visible on the
// server and for no-JS visitors. JS only "arms" the hidden→visible transition
// once an IntersectionObserver is in place to fire it — so content is never
// stranded invisible. Pure CSS transition (off the main thread).
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // stay visible
    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--rv-delay": `${delay}s`, "--rv-y": `${y}px` } as CSSProperties;

  return (
    <div
      ref={ref}
      data-reveal
      data-armed={armed ? "true" : undefined}
      data-shown={shown ? "true" : undefined}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}
