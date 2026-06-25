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
      className="relative border-y border-[var(--color-line)] bg-[var(--color-surface)]/40 px-5 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--color-teal)]">{dict.preview.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {dict.preview.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.4fr] lg:items-start">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {shots.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-xl border px-4 py-3 text-left transition-colors duration-200 lg:w-full ${
                    on
                      ? "border-[var(--color-line-strong)] bg-[var(--color-elevated)]"
                      : "border-transparent hover:bg-[var(--color-surface)]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-1.5 rounded-full transition-colors ${
                        on ? "bg-[var(--color-teal)]" : "bg-[var(--color-faint)]"
                      }`}
                    />
                    <span className={`text-sm font-medium ${on ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]"}`}>
                      {s.title}
                    </span>
                  </div>
                  <p className="mt-1 hidden text-xs leading-relaxed text-[var(--color-faint)] lg:block">
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
            <p className="mt-4 text-sm text-[var(--color-muted)] lg:hidden">{shot.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
