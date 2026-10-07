import { LEGAL, REPO } from "@/lib/content";
import type { Dictionary } from "./fr";

const en: Dictionary = {
  langName: "English",
  meta: {
    title: "FreeYourDisk — Free your disk, safely",
    description:
      "FreeYourDisk 0.6.5: disk analysis and cleanup, applications and on-demand updates, task manager and disk health for Linux, macOS and Windows. Open-source, GPL-3.0.",
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
    sub: "Analyze your disk, find caches and large files, and manage applications and their updates on Linux, macOS and Windows. A 3D donut makes disk space visible, with a preview and confirmation before cleanup.",
    ctaDownload: "Download",
    ctaSource: "Source code",
    trust: ["No admin rights for scanning", "No telemetry", "100% local analysis"],
    availableOn: "Available on",
    downloadFor: "Download for",
    hint: "Interactive preview — in the app, the donut is 3D.",
    marquee: [
      "Temporary files",
      "Large files",
      "Git worktrees",
      "Dev caches",
      "App & browser caches",
      "Applications",
      "Disk health",
      "Task manager",
    ],
    demo: {
      title: "The donut that fills up",
      total: "Disk",
      used: "Used",
      reclaimable: "Reclaimable",
      selected: "Selected",
      toReclaim: "reclaimable",
      selectedLabel: "selected",
      rows: [
        { label: "Dev caches", gb: 128 },
        { label: "Temporary files", gb: 41 },
        { label: "Browser caches", gb: 35 },
      ],
      footnote:
        "Example on a fictional 913 GB disk — in the app, the donut is 3D and reflects your real disk.",
    },
  },
  features: {
    eyebrow: "// What it does",
    title: "One tool to take back control of your space",
    sub: "From the 3D donut to the task manager: see what takes up space and choose the operations to run, with safeguards suited to each action.",
    items: [
      { icon: "ChartDonut", wide: true, title: "Unified scan, 3D donut", body: "One click runs every scan and the file-type breakdown. A 3D donut shows used, reclaimable and free space — the green layer grows as you tick items." },
      { icon: "Broom", wide: false, title: "Cleanup categories", body: "Temporary files, large files, stale git worktrees, dev caches (node_modules, target, .next…) and regenerable app & browser caches." },
      { icon: "Package", wide: false, title: "Applications and updates", body: "Browse a responsive inventory of your applications on Linux, Windows and macOS. Check for updates on demand through APT / Flatpak / Snap, winget or Homebrew, then choose what to install. AppImages and apps without a supported package manager remain manually managed." },
      { icon: "Gauge", wide: true, title: "Task manager", body: "Real-time CPU / RAM / swap graph, per-core utilization heatmap, temperature, a sortable process table, and an emergency “kill the biggest hog.” Configurable global hotkey." },
      { icon: "Heartbeat", wide: false, title: "Disk health", body: "SMART status, temperature and power-on hours when exposed by your drive, operating system and available tools. Follow real-time throughput too. The app identifies missing tools and compatible installation options." },
      { icon: "ShieldCheck", wide: false, title: "Safe by design", body: "Read-only scans, a preview before deletion, trash by default, a zone whitelist, and git actions that never touch uncommitted work." },
    ],
  },
  preview: {
    eyebrow: "// Preview",
    title: "Built to be read at a glance",
    themeLabel: "Screenshot theme",
    light: "Light",
    dark: "Dark",
    shots: [
      { key: "home", title: "Home", caption: "3D usage donut and a whole-disk breakdown by file type." },
      { key: "taskmanager", title: "Task manager", caption: "Real-time CPU / RAM / swap, per-core heatmap and temperature." },
      { key: "health", title: "Disk health", caption: "SMART, real-time throughput and uptime, disk by disk." },
      { key: "applications", title: "Applications", caption: "Responsive inventory, on-demand update checks and actions on your selection." },
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
      { icon: "Recycle", title: "Trash by default", body: "File cleanup uses the system trash by default: XDG on Linux, Trash on macOS or the Recycle Bin on Windows. Permanent deletion requires an explicit choice." },
      { icon: "MapPinArea", title: "Zone whitelist", body: "Deletions are validated against allowed zones; symlinks escaping them are refused." },
      { icon: "GitBranch", title: "Git-safe", body: "Git actions never remove a worktree that has uncommitted changes." },
      { icon: "Lock", title: "Least privilege", body: "The interface and routine scans run without administrator rights. Operations that need them request authorization through the system's mechanism, including Polkit on Linux." },
    ],
  },
  download: {
    eyebrow: "// Download",
    titleA: "Install FreeYourDisk",
    sub: "Version 0.6.5, free and open-source. Pick the format and architecture for your system.",
    cta: "Download",
    forYou: "Recommended for your system",
    other: "Other systems",
    recommendedPre: "Recommended for disk health:",
    releaseNotes: "Release notes & checksums",
    unsignedHint:
      "The macOS builds are Developer ID signed and notarized by Apple. The Windows installer is unsigned, so SmartScreen may display a warning. Check the source of the download before running it.",
    os: { linux: "Linux", macos: "macOS", windows: "Windows" },
    osNote: {
      linux: "x86-64",
      macos: "Apple Silicon (arm64) and Intel (x64)",
      windows: "x64",
    },
    labels: {
      AppImage: "AppImage · Linux x86-64",
      ".deb": "Debian · Ubuntu",
      ".rpm": "Fedora · RHEL",
      "DMG · Apple Silicon": "DMG · Apple Silicon",
      "DMG · Intel": "DMG · Intel",
      ".exe": "Windows 10 / 11 · installer",
    },
  },
  faq: {
    eyebrow: "// Questions",
    title: "Everything you need to know",
    items: [
      { q: "Which systems does FreeYourDisk run on?", a: "Version 0.6.5 is available for Linux x86-64 as .deb, .rpm and AppImage; Windows 10/11 x64 as .exe; and macOS as DMG for Apple Silicon or Intel. The DMGs are signed and notarized. The Windows installer is unsigned and may trigger SmartScreen." },
      { q: "Can my files be deleted by mistake?", a: "Scans are read-only, every deletion shows an exact preview and goes to the recoverable trash by default. Deletable zones are whitelisted and uncommitted git worktrees are never touched." },
      { q: "Does the app need administrator rights?", a: "Not for routine scans. Some SMART reads, system cleanup operations or package actions may request authorization. On Linux, a limited helper uses Polkit; other systems follow their own authorization mechanisms. The interface continues to run under your user account." },
      { q: "How are application updates checked?", a: "Opening the Applications tab loads only the inventory. The check button then queries available package managers: APT, Flatpak and Snap on Linux, winget on Windows, and Homebrew on macOS. Only supported updates are offered. AppImages and manually installed applications are not automatically updated." },
      { q: "Is it free and open-source?", a: "Yes. FreeYourDisk is released under the GPL-3.0-or-later license. The full code is on GitHub." },
      { q: "How do I get SMART information for my drives?", a: "Availability depends on your drive, its drivers and installed tools. On Linux, FreeYourDisk can use nvme-cli and smartmontools, with installation through a compatible package manager. On macOS and Windows, available information also depends on system interfaces and permissions. These tools remain optional for the app's other features." },
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
    updated: "Last updated: October 2026",
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
