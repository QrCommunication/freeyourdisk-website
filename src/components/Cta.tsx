import Link from "next/link";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/dictionaries";
import { VERSION, type Locale } from "@/lib/content";

// Closing call-to-action: the brand gradient as a full panel, with the
// concentric donut rings ghosted behind the type.
export default function Cta({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="px-5 pb-24 pt-4">
      <div className="brand-gradient relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-16 text-center text-white md:py-24">
        <svg
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-[420px] opacity-15"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="78" stroke="#fff" strokeWidth="26" />
          <circle cx="100" cy="100" r="34" stroke="#fff" strokeWidth="12" />
          <circle cx="100" cy="100" r="7" fill="#fff" />
        </svg>
        <svg
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-28 size-[380px] opacity-10"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="78" stroke="#fff" strokeWidth="26" />
          <circle cx="100" cy="100" r="7" fill="#fff" />
        </svg>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-balance md:text-5xl">
            {dict.hero.titleA} {dict.hero.titleB}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">{dict.download.sub}</p>
          <Link
            href={`/${locale}#download`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
          >
            <DownloadSimple size={18} weight="bold" />
            {dict.nav.cta} — v{VERSION}
          </Link>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-white/70">
            {dict.hero.badge}
          </p>
        </div>
      </div>
    </section>
  );
}
