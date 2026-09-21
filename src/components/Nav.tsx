"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubLogo, DownloadSimple, List, X } from "@phosphor-icons/react";
import Logo from "./Logo";
import type { Dictionary } from "@/dictionaries";
import { REPO, VERSION, type Locale } from "@/lib/content";

export default function Nav({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Link href={home} className="flex shrink-0 items-center gap-2.5">
          <Logo size={28} />
          <span className="font-semibold tracking-tight">FreeYourDisk</span>
          <span className="hidden font-mono text-[10px] text-faint sm:inline">v{VERSION}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          {/* Language switcher */}
          <div className="flex items-center rounded-full border border-line p-0.5 text-[11px] font-medium">
            {(["fr", "en"] as Locale[]).map((l) => (
              <Link
                key={l}
                href={switchTo(l)}
                aria-label={l === "fr" ? "Français" : "English"}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  l === locale ? "bg-ink text-paper" : "text-faint hover:text-ink"
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
            className="hidden size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper-2 hover:text-ink sm:flex"
          >
            <GithubLogo size={19} />
          </a>
          <Link
            href={`${home}#download`}
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-teal-deep sm:flex"
          >
            <DownloadSimple size={15} weight="bold" />
            {dict.nav.cta}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-sm text-muted last:border-0 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
