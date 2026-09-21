"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import type { Dictionary } from "@/dictionaries";
import Reveal from "./Reveal";

export default function Faq({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-widest text-teal-deep">
              {dict.faq.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              {dict.faq.title}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="divide-y divide-line border-y border-line">
            {dict.faq.items.map((item, i) => {
              const on = open === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(on ? null : i)}
                    aria-expanded={on}
                    className="flex w-full cursor-pointer items-baseline gap-4 py-5 text-left"
                  >
                    <span className="font-mono text-xs text-faint tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-medium text-ink md:text-lg">
                      {item.q}
                    </span>
                    <span
                      className="shrink-0 self-center text-teal-deep transition-transform duration-300 ease-out"
                      style={{ transform: on ? "rotate(45deg)" : "rotate(0)" }}
                    >
                      <Plus size={19} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-8 leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
