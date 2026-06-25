"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubLogo, DownloadSimple, List, X } from "@phosphor-icons/react";
import Logo from "./Logo";
import type { Dictionary } from "@/dictionaries";
import { REPO, VERSION, type Locale } from "@/lib/content";

export default function Nav({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const home = `/${locale}`;
  const links = [
    { href: `${home}#features`, label: dict.nav.features },
    { href: `${home}#screenshots`, label: dict.nav.preview },
    { href: `${home}#safety`, label: dict.nav.safety },
    { href: `${home}#download`, label: dict.nav.download },
  ];

  const rest = (pathname ?? home).replace(/^\/(fr|en)/, "");
  const switchTo = (l: Locale) => `/${l}${rest}`;

  return (
    <header className="fixed inset-x-3 top-3 z-50 md:inset-x-4 md:top-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-colors duration-300 md:px-5 ${
          scrolled
            ? "border border-[var(--color-line)] bg-[color-mix(in_oklch,var(--color-base)_72%,transparent)] backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Link href={home} className="flex items-center gap-2.5">
          <Logo size={30} />
          <span className="font-semibold tracking-tight">FreeYourDisk</span>
          <span className="hidden rounded-full border border-[var(--color-line)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-muted)] sm:inline">
            v{VERSION}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center rounded-lg border border-[var(--color-line)] p-0.5 text-xs font-medium">
            {(["fr", "en"] as Locale[]).map((l) => (
              <Link
                key={l}
                href={switchTo(l)}
                aria-label={l === "fr" ? "Français" : "English"}
                className={`rounded-md px-2 py-1 uppercase transition-colors ${
                  l === locale
                    ? "bg-[var(--color-elevated)] text-ink"
                    : "text-[var(--color-faint)] hover:text-ink"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>

          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden size-9 items-center justify-center rounded-lg text-[var(--color-muted)] transition-colors hover:bg-[var(--color-elevated)] hover:text-ink sm:flex"
          >
            <GithubLogo size={20} />
          </a>
          <Link
            href={`${home}#download`}
            className="hidden items-center gap-1.5 rounded-lg bg-[var(--color-teal)] px-3.5 py-2 text-sm font-semibold text-[#04181c] transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.97] sm:flex"
          >
            <DownloadSimple size={16} weight="bold" />
            {dict.nav.cta}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex size-9 items-center justify-center rounded-lg text-ink md:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[var(--color-line)] bg-[color-mix(in_oklch,var(--color-base)_92%,transparent)] p-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-elevated)] hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
