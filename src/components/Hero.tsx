import type { CSSProperties } from "react";
import Link from "next/link";
import { DownloadSimple, GithubLogo, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import BrowserFrame from "./BrowserFrame";
import type { Dictionary } from "@/dictionaries";
import { REPO, VERSION, shotSrc, type Locale } from "@/lib/content";

const d = (s: number) => ({ "--enter-delay": `${s}s` }) as CSSProperties;

export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.hero;
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mesh" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            style={d(0)}
            className="enter inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            <span className="size-1.5 rounded-full bg-[var(--color-teal)]" />
            {h.badge} · v{VERSION}
            <ArrowRight size={12} />
          </a>

          <h1
            style={d(0.07)}
            className="enter mt-6 text-5xl leading-[1.02] font-semibold tracking-tighter text-balance md:text-7xl"
          >
            {h.titleA}
            <br />
            <span className="gradient-text">{h.titleB}</span>
          </h1>

          <p
            style={d(0.14)}
            className="enter mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {h.sub}
          </p>

          <div style={d(0.2)} className="enter mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}#download`}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-teal)] px-5 py-3 font-semibold text-[#04181c] transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.97]"
            >
              <DownloadSimple size={18} weight="bold" />
              {h.ctaDownload}
            </Link>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-line-strong)] px-5 py-3 font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-elevated)]"
            >
              <GithubLogo size={18} />
              {h.ctaSource}
            </a>
          </div>

          <div
            style={d(0.26)}
            className="enter mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--color-faint)]"
          >
            {h.trust.map((t, i) => (
              <span key={t} className="flex items-center gap-5">
                {i > 0 && <span className="text-[var(--color-line-strong)]">•</span>}
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={d(0.18)} className="enter relative">
          <div
            aria-hidden
            className="brand-gradient absolute -inset-4 -z-10 rounded-[2rem] opacity-20 blur-2xl"
          />
          <BrowserFrame src={shotSrc("home", locale)} alt="FreeYourDisk" priority />
        </div>
      </div>
    </section>
  );
}
