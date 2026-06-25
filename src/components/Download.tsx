"use client";

import { useState } from "react";
import { DownloadSimple, Copy, Check, ArrowUpRight } from "@phosphor-icons/react";
import { DOWNLOADS, RELEASE, VERSION } from "@/lib/content";
import type { Dictionary } from "@/dictionaries";
import Reveal from "./Reveal";

function Cmd({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      onClick={copy}
      className="group/cmd mt-4 flex w-full items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-base)] px-3 py-2.5 text-left transition-colors hover:border-[var(--color-line-strong)]"
    >
      <code className="flex-1 truncate font-mono text-xs text-[var(--color-muted)]">{value}</code>
      {copied ? (
        <Check size={15} weight="bold" className="shrink-0 text-[var(--color-teal)]" />
      ) : (
        <Copy size={15} className="shrink-0 text-[var(--color-faint)] group-hover/cmd:text-[var(--color-ink)]" />
      )}
    </button>
  );
}

export default function Download({ dict }: { dict: Dictionary }) {
  const t = dict.download;
  return (
    <section id="download" className="relative px-5 py-24 md:py-32">
      <div aria-hidden className="mesh !inset-x-0 !top-auto !bottom-0 !h-[40vh] opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="font-mono text-sm text-[var(--color-teal)]">{t.eyebrow}</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {t.titleA} <span className="gradient-text">v{VERSION}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">{t.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {DOWNLOADS.map((d, i) => (
            <Reveal key={d.format} delay={i * 0.06}>
              <div className="card edge-top flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-mono text-xl font-semibold tracking-tight">{d.format}</h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{t.labels[d.format]}</p>
                  </div>
                  <span className="rounded-full border border-[var(--color-line)] px-2.5 py-1 text-[11px] text-[var(--color-faint)]">
                    {d.size}
                  </span>
                </div>

                <a
                  href={d.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-teal)] px-4 py-2.5 text-sm font-semibold text-[#04181c] transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.97]"
                >
                  <DownloadSimple size={16} weight="bold" />
                  {t.cta}
                </a>
                <Cmd value={d.install} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-4 text-sm text-[var(--color-muted)] sm:flex-row">
            <span>
              {t.recommendedPre}{" "}
              <code className="font-mono text-[var(--color-ink)]">nvme-cli</code>,{" "}
              <code className="font-mono text-[var(--color-ink)]">smartmontools</code>.
            </span>
            <a
              href={RELEASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[var(--color-ink)] hover:text-[var(--color-teal)]"
            >
              {t.releaseNotes}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
