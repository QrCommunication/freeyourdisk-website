"use client";

import Link from "next/link";
import { DownloadSimple, LinuxLogo, AppleLogo, WindowsLogo, type Icon } from "@phosphor-icons/react";
import { useOs } from "@/lib/useOs";
import type { Dictionary } from "@/dictionaries";
import type { OS } from "@/lib/content";

const OS_ICON: Record<OS, Icon> = {
  linux: LinuxLogo,
  macos: AppleLogo,
  windows: WindowsLogo,
};

// Primary hero CTA — once mounted it names the visitor's OS.
export default function OsCta({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const os = useOs();
  const OsIcon = OS_ICON[os];

  return (
    <Link
      href={`/${locale}#download`}
      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-colors hover:bg-teal-deep"
    >
      <OsIcon size={17} weight="fill" aria-hidden />
      {dict.hero.downloadFor} {dict.download.os[os]}
      <DownloadSimple size={16} weight="bold" aria-hidden />
    </Link>
  );
}
