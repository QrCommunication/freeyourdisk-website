// Language-neutral data. All display strings live in src/dictionaries.

export const VERSION = "0.6.5";
export const REPO = "https://github.com/QrCommunication/FreeYourDisk";
export const RELEASE = `${REPO}/releases/tag/v${VERSION}`;
const ASSET = `${REPO}/releases/download/v${VERSION}`;

// Release artifact file names — derived from VERSION so a single bump updates
// the download links and the copy-paste install commands everywhere.
const FILE = {
  appimage: `FreeYourDisk_${VERSION}_amd64.AppImage`,
  deb: `FreeYourDisk_${VERSION}_amd64.deb`,
  rpm: `FreeYourDisk-${VERSION}-1.x86_64.rpm`,
  dmgAppleSilicon: `FreeYourDisk_${VERSION}_aarch64.dmg`,
  dmgIntel: `FreeYourDisk_${VERSION}_x86_64.dmg`,
  exe: `FreeYourDisk_${VERSION}_x64-setup.exe`,
};

export type Locale = "fr" | "en";
export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "en";

// Version-stamp static assets so caches always serve the current file.
export const asset = (path: string) => `${path}?v=${VERSION}`;

// French is the base set; English adds "-en". Both themes are native captures.
export const SHOT_KEYS = [
  "home",
  "taskmanager",
  "health",
  "applications",
  "biggest",
  "settings",
] as const;
export type ShotKey = (typeof SHOT_KEYS)[number];
export type ShotTheme = "light" | "dark";
export const SHOT_WIDTH = 1180;
export const SHOT_HEIGHT = 760;

export function shotSrc(key: ShotKey, locale: Locale, theme: ShotTheme = "light"): string {
  const suffix = locale === "en" ? "-en" : "";
  return asset(`/screenshots/${key}${suffix}-${theme}.png`);
}

// Supported operating systems, used to group the downloads by platform so a
// visitor instantly sees which package targets their OS.
export type OS = "linux" | "macos" | "windows";
export const OS_ORDER: OS[] = ["linux", "macos", "windows"];

// Download artifacts — neutral (OS, format, size, URL, optional install command).
export type DownloadLink = {
  os: OS;
  format: string;
  size?: string;
  href: string;
  install?: string;
};

export const DOWNLOADS: DownloadLink[] = [
  {
    os: "linux",
    format: "AppImage",
    href: `${ASSET}/${FILE.appimage}`,
    install: `chmod +x ${FILE.appimage} && ./${FILE.appimage}`,
  },
  {
    os: "linux",
    format: ".deb",
    href: `${ASSET}/${FILE.deb}`,
    install: `sudo apt install ./${FILE.deb}`,
  },
  {
    os: "linux",
    format: ".rpm",
    href: `${ASSET}/${FILE.rpm}`,
    install: `sudo dnf install ./${FILE.rpm}`,
  },
  {
    os: "windows",
    format: ".exe",
    href: `${ASSET}/${FILE.exe}`,
    // NSIS installer — just run it (unsigned: SmartScreen › More info › Run anyway).
  },
  {
    os: "macos",
    format: "DMG · Apple Silicon",
    href: `${ASSET}/${FILE.dmgAppleSilicon}`,
  },
  {
    os: "macos",
    format: "DMG · Intel",
    href: `${ASSET}/${FILE.dmgIntel}`,
  },
];

export const STACK = [
  "Tauri 2",
  "Rust",
  "Svelte 5",
  "TypeScript",
  "Tailwind v4",
  "three.js",
  "ECharts",
];

// Neutral legal facts (publisher / host).
export const LEGAL = {
  company: "QR Communication",
  siren: "940 163 496",
  address: "23 rue de Richelieu, 75001 Paris, France",
  email: "contact@qrcommunication.com",
  phone: "+33 1 88 83 34 51",
  host: {
    name: "Vercel Inc.",
    address: "340 S Lemon Ave #4133, Walnut, CA 91789",
    site: "https://vercel.com",
  },
};
