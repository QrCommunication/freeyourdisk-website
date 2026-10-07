"use client";

import { useState } from "react";
import {
  DownloadSimple,
  Copy,
  Check,
  ArrowUpRight,
  LinuxLogo,
  AppleLogo,
  WindowsLogo,
  ShieldCheck,
  type Icon,
} from "@phosphor-icons/react";
import { DOWNLOADS, OS_ORDER, RELEASE, VERSION, type OS } from "@/lib/content";
import type { Dictionary } from "@/dictionaries";
import { useOs } from "@/lib/useOs";
import Reveal from "./Reveal";

const OS_ICON: Record<OS, Icon> = {
  linux: LinuxLogo,
  macos: AppleLogo,
  windows: WindowsLogo,
};

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
      className="group/cmd mt-4 flex w-full cursor-pointer items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2.5 text-left transition-colors hover:border-line-strong"
    >
      <code className="flex-1 truncate font-mono text-xs text-muted">{value}</code>
      {copied ? (
        <Check size={15} weight="bold" className="shrink-0 text-green" />
      ) : (
        <Copy size={15} className="shrink-0 text-faint group-hover/cmd:text-ink" />
      )}
    </button>
  );
}

function OsGroup({
  os,
  items,
  t,
  featured,
}: {
  os: OS;
  items: typeof DOWNLOADS;
  t: Dictionary["download"];
  featured: boolean;
}) {
  const Logo = OS_ICON[os];
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Logo size={21} weight="fill" aria-hidden className="text-teal-deep" />
          {t.os[os]}
        </span>
        <span className="font-mono text-xs text-faint">{t.osNote[os]}</span>
        {featured && (
          <span className="rounded-full bg-teal-soft px-2.5 py-1 text-[11px] font-medium text-teal-deep">
            {t.forYou}
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((d) => (
          <div
            key={d.format}
            className={`card flex h-full flex-col p-6 ${
              featured ? "border-teal/40 shadow-[0_18px_50px_-28px_rgba(14,154,168,0.45)]" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-mono text-xl font-semibold tracking-tight">{d.format}</h3>
                <p className="mt-1 text-sm text-muted">{t.labels[d.format]}</p>
              </div>
              {d.size && (
                <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-faint">
                  {d.size}
                </span>
              )}
            </div>

            <a
              href={d.href}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
            >
              <DownloadSimple size={16} weight="bold" />
              {t.cta}
            </a>
            {d.install ? <Cmd value={d.install} /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Download({ dict }: { dict: Dictionary }) {
  const t = dict.download;
  const detected = useOs();

  // Detected OS first (after mount); server render keeps the canonical order.
  const ordered: OS[] = detected
    ? [detected, ...OS_ORDER.filter((o) => o !== detected)]
    : OS_ORDER;

  return (
    <section id="download" className="scroll-mt-20 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-teal-deep">
                {t.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-balance md:text-5xl">
                {t.titleA} <span className="gradient-text">v{VERSION}</span>
              </h2>
            </div>
            <p className="text-muted lg:pb-1 lg:text-right">{t.sub}</p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-12">
          {ordered.map((os, gi) => {
            const items = DOWNLOADS.filter((d) => d.os === os);
            const featured = os === detected;
            const showOtherHeading = !featured && gi > 0 && ordered[gi - 1] === detected;
            return (
              <Reveal key={os} delay={Math.min(gi, 2) * 0.05}>
                {featured && (
                  <div className="mb-6 border-t border-line pt-6">
                    <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-teal-deep">
                      <ShieldCheck size={14} weight="bold" />
                      {t.forYou}
                    </h3>
                  </div>
                )}
                {showOtherHeading && (
                  <div className="mb-6 border-t border-line pt-6">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
                      {t.other}
                    </h3>
                  </div>
                )}
                <OsGroup os={os} items={items} t={t} featured={featured} />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-10 text-center text-sm text-faint">{t.unsignedHint}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 card px-6 py-4 text-sm text-muted sm:flex-row">
            <span>
              {t.recommendedPre}{" "}
              <code className="font-mono text-ink">nvme-cli</code>,{" "}
              <code className="font-mono text-ink">smartmontools</code>.
            </span>
            <a
              href={RELEASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-ink hover:text-teal-deep"
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
