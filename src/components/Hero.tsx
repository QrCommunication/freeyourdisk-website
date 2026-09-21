import type { CSSProperties } from "react";
import Link from "next/link";
import {
  GithubLogo,
  ShieldCheck,
  EyeSlash,
  Prohibit,
} from "@phosphor-icons/react/dist/ssr";
import Donut from "./Donut";
import OsCta from "./OsCta";
import type { Dictionary } from "@/dictionaries";
import { REPO, VERSION, type Locale } from "@/lib/content";

const d = (s: number) => ({ "--enter-delay": `${s}s` }) as CSSProperties;

const TRUST_ICON = [Prohibit, EyeSlash, ShieldCheck];

export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.hero;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-20">
        {/* Dateline — mono metadata row over a hairline, like a broadsheet. */}
        <div
          style={d(0)}
          className="enter flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-widest text-faint"
        >
          <span>{h.badge}</span>
          <span>v{VERSION} — 2026</span>
          <span className="hidden sm:inline">Linux · macOS · Windows</span>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h1
              style={d(0.07)}
              className="enter text-[clamp(2.9rem,7.5vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-balance"
            >
              {h.titleA}
              <br />
              <span className="gradient-text">{h.titleB}</span>
            </h1>

            <p
              style={d(0.14)}
              className="enter mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              {h.sub}
            </p>

            <div style={d(0.2)} className="enter mt-9 flex flex-wrap items-center gap-3">
              <OsCta dict={dict} locale={locale} />
              <a
                href={REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-ink transition-colors hover:bg-surface"
              >
                <GithubLogo size={18} />
                {h.ctaSource}
              </a>
            </div>

            <ul
              style={d(0.26)}
              className="enter mt-9 flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-6"
            >
              {h.trust.map((t, i) => {
                const TrustIcon = TRUST_ICON[i % TRUST_ICON.length];
                return (
                  <li key={t} className="flex items-center gap-2 text-sm text-muted">
                    <TrustIcon size={16} weight="bold" className="text-teal-deep" aria-hidden />
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>

          <div style={d(0.24)} className="enter">
            <Donut demo={h.demo} />
            <p className="mt-3 text-center font-mono text-[11px] text-faint">{h.hint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
