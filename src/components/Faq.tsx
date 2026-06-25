"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import type { Dictionary } from "@/dictionaries";
import Reveal from "./Reveal";

export default function Faq({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--color-teal)]">{dict.faq.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{dict.faq.title}</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {dict.faq.items.map((item, i) => {
            const on = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(on ? null : i)}
                  aria-expanded={on}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-[var(--color-ink)] md:text-lg">{item.q}</span>
                  <span
                    className="shrink-0 text-[var(--color-teal)] transition-transform duration-300 ease-out"
                    style={{ transform: on ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    <Plus size={20} />
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
                      <p className="pr-10 pb-5 leading-relaxed text-[var(--color-muted)]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
