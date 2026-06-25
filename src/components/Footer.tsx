import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import type { Dictionary } from "@/dictionaries";
import { REPO, STACK, VERSION, LEGAL, type Locale } from "@/lib/content";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const f = dict.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] px-5 pt-16 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={30} />
              <span className="font-semibold tracking-tight">FreeYourDisk</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">{f.tagline}</p>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-ink"
            >
              <GithubLogo size={18} />
              QrCommunication/FreeYourDisk
            </a>
          </div>

          {f.cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) =>
                  l.external ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-muted)] transition-colors hover:text-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link
                        href={`/${locale}${l.href}`}
                        className="text-sm text-[var(--color-muted)] transition-colors hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {STACK.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-faint)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {LEGAL.company} · FreeYourDisk v{VERSION} · {f.rights}
          </p>
          <p>{f.noData}</p>
        </div>
      </div>
    </footer>
  );
}
