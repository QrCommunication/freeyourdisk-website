"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // stay visible
    if (!("IntersectionObserver" in window)) return; // stay visible
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.dataset.shown = "true";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    el.dataset.armed = "true";
    return () => {
      io.disconnect();
      delete el.dataset.armed;
      delete el.dataset.shown;
    };
  }, []);

  const style = { "--rv-delay": `${delay}s`, "--rv-y": `${y}px` } as CSSProperties;

  return (
    <div
      ref={ref}
      data-reveal
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}
