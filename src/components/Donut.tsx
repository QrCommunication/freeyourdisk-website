"use client";

import { useEffect, useState } from "react";
import { Check } from "@phosphor-icons/react";
import type { Dictionary } from "@/dictionaries";

// Fictional disk mirroring the real app's first scan (913 GB total, 417 used,
// 204 GB reclaimable across the three demo rows). Presentational only.
const TOTAL = 913;
const USED = 417;

const pct = (gb: number) => (gb / TOTAL) * 100;
const GAP = 1.6; // visual gap between segments, in pathLength units

export default function Donut({ demo }: { demo: Dictionary["hero"]["demo"] }) {
  const rows = demo.rows;
  const [checked, setChecked] = useState<boolean[]>(rows.map(() => false));
  const [mounted, setMounted] = useState(false);

  // Entrance: sweep the reclaimable arc in after first paint.
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  const selected = rows.reduce((sum, r, i) => sum + (checked[i] ? r.gb : 0), 0);
  const reclaimable = rows.reduce((sum, r) => sum + r.gb, 0);

  const usedArc = pct(USED) - GAP;
  const reclaimArc = mounted ? pct(reclaimable) - GAP : 0;
  const selectedArc = pct(selected);
  const reclaimStart = -90 + pct(USED) * 3.6;

  return (
    <div className="card overflow-hidden shadow-[0_24px_70px_-30px_rgba(19,22,27,0.35)]">
      <div className="border-b border-line px-6 py-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-teal-deep">
          {demo.title}
        </p>
      </div>

      <div className="flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:gap-7 sm:px-7">
        {/* Donut — pathLength=100 so dashes are plain percentages */}
        <div className="relative mx-auto size-40 shrink-0 sm:mx-0 sm:size-44">
          <svg viewBox="0 0 200 200" className="size-full -rotate-0" aria-hidden>
            <circle
              cx="100" cy="100" r="78"
              fill="none" stroke="var(--color-paper-2)" strokeWidth="30"
            />
            <circle
              className="arc"
              cx="100" cy="100" r="78" pathLength={100}
              fill="none" stroke="#3d4552" strokeWidth="30"
              strokeDasharray={`${usedArc} ${100 - usedArc}`}
              transform="rotate(-90 100 100)"
            />
            <circle
              className="arc"
              cx="100" cy="100" r="78" pathLength={100}
              fill="none" stroke="#e2a91d" strokeWidth="30"
              strokeDasharray={`${reclaimArc} ${100 - reclaimArc}`}
              transform={`rotate(${reclaimStart} 100 100)`}
            />
            {selected > 0 && (
              <circle
                className="arc"
                cx="100" cy="100" r="78" pathLength={100}
                fill="none" stroke="#12a06b" strokeWidth="30"
                strokeDasharray={`${selectedArc} ${100 - selectedArc}`}
                transform={`rotate(${reclaimStart} 100 100)`}
              />
            )}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span
              className={`font-mono text-xl font-semibold tabular-nums transition-colors sm:text-2xl ${
                selected > 0 ? "text-green" : "text-gold"
              }`}
            >
              {selected > 0 ? `${selected} GB` : `${reclaimable} GB`}
            </span>
            <span className="mt-0.5 text-[11px] leading-tight text-faint">
              {selected > 0 ? demo.selectedLabel : demo.toReclaim}
            </span>
          </div>
        </div>

        {/* Legend + selectable rows */}
        <div className="min-w-0 flex-1">
          <div className="mb-3 space-y-1.5 font-mono text-[11px] text-faint">
            <p className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <i className="size-2 shrink-0 rounded-full bg-[#3d4552]" />
                {demo.used}
              </span>
              <span className="tabular-nums whitespace-nowrap">{USED} GB</span>
            </p>
            <p className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <i className="size-2 shrink-0 rounded-full bg-[#e2a91d]" />
                {demo.reclaimable}
              </span>
              <span className="tabular-nums whitespace-nowrap">{reclaimable} GB</span>
            </p>
          </div>

          <div
            role="group"
            aria-label={demo.title}
            className="space-y-1.5 border-t border-line pt-3"
          >
            {rows.map((row, i) => {
              const on = checked[i];
              return (
                <button
                  key={row.label}
                  role="checkbox"
                  aria-checked={on}
                  onClick={() =>
                    setChecked((c) => c.map((v, j) => (j === i ? !v : v)))
                  }
                  className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-1.5 py-1.5 text-left transition-colors hover:bg-paper-2"
                >
                  <span
                    className={`flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
                      on ? "border-green bg-green" : "border-line-strong bg-surface"
                    }`}
                  >
                    {on && <Check size={12} weight="bold" className="text-white" />}
                  </span>
                  <span className="flex-1 truncate text-[13px] text-ink">{row.label}</span>
                  <span
                    className={`font-mono text-xs tabular-nums transition-colors ${
                      on ? "text-green" : "text-faint"
                    }`}
                  >
                    +{row.gb} GB
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="border-t border-line bg-paper px-6 py-3 text-[11px] leading-relaxed text-faint">
        {demo.footnote}
      </p>
    </div>
  );
}
