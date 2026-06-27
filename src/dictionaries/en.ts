import { LEGAL, REPO } from "@/lib/content";
import type { Dictionary } from "./fr";

const en: Dictionary = {
  langName: "English",
  meta: {
    title: "FreeYourDisk — Free your disk, safely",
    description:
      "A cross-platform desktop utility for Linux, macOS and Windows that scans your disk and safely reclaims space: caches, large files, applications, task manager and disk health — around a 3D usage donut. Open-source, GPL-3.0.",
  },
  nav: {
    features: "Features",
    preview: "Preview",
    safety: "Safety",
    download: "Download",
    source: "Source code",
    cta: "Download",
  },
  hero: {
    badge: "Open-source · GPL-3.0",
    titleA: "Free your disk,",
    titleB: "safely.",
    sub: "A cross-platform desktop utility for Linux, macOS and Windows that scans your disk and reclaims space without risk — caches, large files, applications, task manager and disk health, around a 3D usage donut. Trash by default, zero blind deletion.",
    ctaDownload: "Download",
    ctaSource: "Source code",
    trust: ["No root privileges", "No telemetry", "100% local"],
    availableOn: "Available on",
  },
  features: {
    eyebrow: "// What it does",
    title: "One tool to take back control of your space",
    sub: "From the 3D donut to the emergency task manager: every category is measured accurately and every action is reversible.",
    items: [
      { icon: "ChartDonut", wide: true, title: "Unified scan, 3D donut", body: "One click runs every scan and the file-type breakdown. A 3D donut shows used, reclaimable and free space — the green layer grows as you tick items." },
      { icon: "Broom", wide: false, title: "Cleanup categories", body: "Temporary files, large files, stale git worktrees, dev caches (node_modules, target, .next…) and regenerable app & browser caches." },
      { icon: "Package", wide: false, title: "Applications", body: "An application inventory ranked by space — apt / flatpak / snap / AppImage on Linux, the registry & Microsoft Store on Windows — updates surfaced on open, batch uninstall and update. Essential system components are protected." },
      { icon: "Gauge", wide: true, title: "Task manager", body: "Real-time CPU / RAM / swap graph, per-core utilization heatmap, temperature, a sortable process table, and an emergency “kill the biggest hog.” Configurable global hotkey." },
      { icon: "Heartbeat", wide: false, title: "Disk health", body: "Per-disk SMART via nvme-cli (NVMe) or smartctl (SATA) — health, power-on hours, temperature — with real-time throughput graphs. Missing tools install in one click for your distribution." },
      { icon: "ShieldCheck", wide: false, title: "Safe by design", body: "Read-only scans, a preview before deletion, trash by default, a zone whitelist, and git actions that never touch uncommitted work." },
    ],
  },
  preview: {
    eyebrow: "// Preview",
    title: "Built to be read at a glance",
    shots: [
      { key: "home", title: "Home", caption: "3D usage donut and a whole-disk breakdown by file type." },
      { key: "taskmanager", title: "Task manager", caption: "Real-time CPU / RAM / swap, per-core heatmap and temperature." },
      { key: "health", title: "Disk health", caption: "SMART, real-time throughput and uptime, disk by disk." },
      { key: "applications", title: "Applications", caption: "Ranked by space, updates surfaced, batch uninstall." },
      { key: "biggest", title: "Largest files", caption: "A read-only explorer of what takes the most space." },
      { key: "settings", title: "Settings", caption: "Theme, language, startup, low-space monitor and shortcuts." },
    ],
  },
  safety: {
    eyebrow: "// Safe by design",
    title: "Six non-negotiable guarantees",
    sub: "A disk cleaner should never lose your data. FreeYourDisk is built around invariants the tests enforce.",
    items: [
      { icon: "Eye", title: "Read-only scans", body: "Scanning never modifies the filesystem — enforced by tests." },
      { icon: "ListChecks", title: "Preview before deletion", body: "Every deletion shows an exact preview (count, size, destination) and requires confirmation." },
      { icon: "Recycle", title: "Trash by default", body: "Files go to the recoverable XDG trash; permanent deletion is an explicit choice." },
      { icon: "MapPinArea", title: "Zone whitelist", body: "Deletions are validated against allowed zones; symlinks escaping them are refused." },
      { icon: "GitBranch", title: "Git-safe", body: "Git actions never remove a worktree that has uncommitted changes." },
      { icon: "Lock", title: "Least privilege", body: "The UI runs unprivileged; a minimal Polkit helper covers the rare need for root. The WebView never runs as root." },
    ],
  },
  download: {
    eyebrow: "// Download",
    titleA: "Install FreeYourDisk",
    sub: "Free and open-source. Pick the format for your system.",
    cta: "Download",
    recommendedPre: "Recommended for disk health:",
    releaseNotes: "Release notes & checksums",
    unsignedHint:
      "macOS and Windows builds are unsigned: on macOS, right-click the app › Open; on Windows, click “More info” › “Run anyway”.",
    os: { linux: "Linux", macos: "macOS", windows: "Windows" },
    osNote: {
      linux: "x86-64",
      macos: "Apple Silicon (arm64)",
      windows: "x64",
    },
    labels: {
      AppImage: "Universal · all distributions",
      ".deb": "Debian · Ubuntu",
      ".rpm": "Fedora · RHEL",
      DMG: "macOS · Apple Silicon (unsigned)",
      ".exe": "Windows 10 / 11 · installer",
    },
  },
  faq: {
    eyebrow: "// Questions",
    title: "Everything you need to know",
    items: [
      { q: "Which systems does FreeYourDisk run on?", a: "Linux, macOS and Windows. On Linux: a universal AppImage plus native .deb (Debian, Ubuntu) and .rpm (Fedora, RHEL) packages. On Windows: an installer (Windows 10/11, x64). On macOS: an Apple Silicon build. The macOS and Windows builds are unsigned betas for now." },
      { q: "Can my files be deleted by mistake?", a: "Scans are read-only, every deletion shows an exact preview and goes to the recoverable trash by default. Deletable zones are whitelisted and uncommitted git worktrees are never touched." },
      { q: "Does the app need root?", a: "Not for everyday use. The UI runs as a normal user; a minimal helper is invoked via Polkit only for the rare privileged actions (NVMe SMART reads, /var/tmp, apt/snap packages)." },
      { q: "Is it free and open-source?", a: "Yes. FreeYourDisk is released under the GPL-3.0-or-later license. The full code is on GitHub." },
      { q: "How do I get SMART info for my NVMe drives?", a: "FreeYourDisk detects the missing tools (nvme-cli for NVMe, smartmontools for SATA) and installs them in one click via your package manager (apt, dnf, pacman, zypper). These are recommended, not required dependencies: the rest works without them." },
    ],
  },
  footer: {
    tagline: "Free your disk, safely. Open-source under the GPL-3.0 license.",
    cols: [
      { title: "Product", links: [
        { label: "Features", href: "#features", external: false },
        { label: "Preview", href: "#screenshots", external: false },
        { label: "Safety", href: "#safety", external: false },
        { label: "Download", href: "#download", external: false },
      ]},
      { title: "Code", links: [
        { label: "GitHub", href: REPO, external: true },
        { label: "Release notes", href: `${REPO}/releases`, external: true },
        { label: "Changelog", href: `${REPO}/blob/master/CHANGELOG.md`, external: true },
        { label: "GPL-3.0 license", href: `${REPO}/blob/master/LICENSE`, external: true },
      ]},
      { title: "Legal", links: [
        { label: "Legal notice", href: "/mentions-legales", external: false },
        { label: "Privacy", href: "/confidentialite", external: false },
      ]},
    ],
    rights: "GPL-3.0-or-later",
    noData: "Built for Linux, macOS and Windows. No data collected.",
  },
  legalLinks: { notice: "Legal notice", privacy: "Privacy" },
  legal: {
    updated: "Last updated: June 2026",
    back: "Back to home",
    notice: {
      title: "Legal notice",
      blocks: [
        { h: "1. Site publisher", p: ["The FreeYourDisk site is published by:"], ul: [
          `Company: ${LEGAL.company} (SAS)`,
          `SIREN: ${LEGAL.siren}`,
          "Main activity: Media advertising agency (APE code: 73.12Z)",
          `Registered office: ${LEGAL.address}`,
          `Email: ${LEGAL.email}`,
          `Phone: ${LEGAL.phone}`,
        ]},
        { h: "2. Publication director", p: [`The publication director is the legal representative of ${LEGAL.company}.`], ul: [] },
        { h: "3. Hosting", p: ["The site is hosted by:"], ul: [
          `Host: ${LEGAL.host.name}`,
          `Address: ${LEGAL.host.address}, USA`,
          `Website: ${LEGAL.host.site}`,
        ]},
        { h: "4. Software & license", p: [`FreeYourDisk is free software distributed under the GNU General Public License v3.0 or later (GPL-3.0-or-later). Its source code is publicly available on GitHub (${REPO}). Use of the software is governed by that license.`], ul: [] },
        { h: "5. Intellectual property", p: [`The contents of this marketing site (text, graphics, logo, screenshots) are the property of ${LEGAL.company}, unless stated otherwise. The application's source code is governed by the GPL-3.0 license.`], ul: [] },
        { h: "6. Personal data", p: ["This marketing site collects no personal data and uses no tracking cookies. FreeYourDisk runs entirely locally and transmits no data. See our privacy policy."], ul: [] },
        { h: "7. Liability", p: [`${LEGAL.company} strives to keep the information accurate but cannot guarantee completeness. The software is provided “as is”, without warranty, under the GPL-3.0 license.`], ul: [] },
      ],
    },
    privacy: {
      title: "Privacy policy",
      intro: "FreeYourDisk is built around a simple principle: your data never leaves your machine. This page explains what that means, for the software and for this site.",
      blocks: [
        { h: "1. The FreeYourDisk application", p: [], ul: [
          "No telemetry: the app sends no usage data, statistics or identifiers.",
          "100% local processing: disk analysis, SMART and process management run on your computer.",
          "No account: no sign-up or login.",
          "Network access: only what you trigger (checking for updates via your package managers, opening links).",
        ]},
        { h: "2. This marketing site", p: [], ul: [
          "Static site: no database, no collection form.",
          "No tracking cookies or advertising trackers.",
          `Hosting: the site is served by ${LEGAL.host.name}; temporary technical logs may exist for security, without being shared with us for profiling.`,
          "Downloads: installer files are served by GitHub, subject to its privacy policy.",
        ]},
        { h: "3. Your rights (GDPR)", p: [`As we collect no personal data, there is nothing to access, rectify or delete. If you email us, your message is only used to reply. You can exercise your rights at ${LEGAL.email}.`], ul: [] },
        { h: "4. Data controller", p: [`${LEGAL.company} (SAS), ${LEGAL.address}. Contact: ${LEGAL.email}.`], ul: [] },
      ],
    },
  },
};

export default en;
