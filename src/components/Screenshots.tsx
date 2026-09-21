"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import BrowserFrame from "./BrowserFrame";
import Reveal from "./Reveal";
import type { Dictionary } from "@/dictionaries";
import { shotSrc, type Locale, type ShotKey } from "@/lib/content";

export default function Screenshots({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const shots = dict.preview.shots;
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <section
      id="screenshots"
      className="scroll-mt-20 border-y border-line bg-paper-2/50 px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-teal-deep">
                {dict.preview.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-balance md:text-5xl">
                {dict.preview.title}
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:items-start">
          <div className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {shots.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`shrink-0 rounded-xl border px-4 py-3 text-left transition-colors duration-200 lg:w-full ${
                    on
                      ? "border-line bg-surface shadow-[0_10px_30px_-18px_rgba(19,22,27,0.35)]"
                      : "border-transparent hover:bg-surface/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-[11px] tabular-nums ${
                        on ? "text-teal-deep" : "text-faint"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        on ? "text-ink" : "text-muted"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  <p
                    className={`mt-1.5 hidden pl-7 text-xs leading-relaxed text-faint ${
                      on ? "lg:block" : ""
                    }`}
                  >
                    {s.caption}
                  </p>
                </button>
              );
            })}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={shot.key}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
              >
                <BrowserFrame src={shotSrc(shot.key as ShotKey, locale)} alt={shot.title} />
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 flex items-baseline gap-3 text-sm text-muted lg:hidden">
              <span className="font-mono text-[11px] text-faint">
                {String(active + 1).padStart(2, "0")}
              </span>
              {shot.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
