// Language-neutral data. All display strings live in src/dictionaries.

export const VERSION = "0.4.5";
export const REPO = "https://github.com/QrCommunication/FreeYourDisk";
export const RELEASE = `${REPO}/releases/tag/v${VERSION}`;
const ASSET = `${REPO}/releases/download/v${VERSION}`;

// Release artifact file names — derived from VERSION so a single bump updates
// the download links and the copy-paste install commands everywhere.
const FILE = {
  appimage: `FreeYourDisk_${VERSION}_amd64.AppImage`,
  deb: `FreeYourDisk_${VERSION}_amd64.deb`,
  rpm: `FreeYourDisk-${VERSION}-1.x86_64.rpm`,
  dmg: `FreeYourDisk_${VERSION}_aarch64.dmg`,
  exe: `FreeYourDisk_${VERSION}_x64-setup.exe`,
};

export type Locale = "fr" | "en";
export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "en";

// Version-stamp static assets so caches always serve the current file.
export const asset = (path: string) => `${path}?v=${VERSION}`;

// Screenshot source for a given panel, localised (French is the base set,
// English adds an "-en" suffix).
export const SHOT_KEYS = [
  "home",
  "taskmanager",
  "health",
  "applications",
  "biggest",
  "settings",
] as const;
export type ShotKey = (typeof SHOT_KEYS)[number];

export function shotSrc(key: ShotKey, locale: Locale): string {
  const suffix = locale === "en" ? "-en" : "";
  return asset(`/screenshots/${key}${suffix}.png`);
}

// Supported operating systems, used to group the downloads by platform so a
// visitor instantly sees which package targets their OS.
export type OS = "linux" | "macos" | "windows";
export const OS_ORDER: OS[] = ["linux", "macos", "windows"];

// Download artifacts — neutral (OS, format, size, URL, optional install command).
export type DownloadLink = {
  os: OS;
  format: string;
  size: string;
  href: string;
  install?: string;
};

export const DOWNLOADS: DownloadLink[] = [
  {
    os: "linux",
    format: "AppImage",
    size: "80 MB",
    href: `${ASSET}/${FILE.appimage}`,
    install: `chmod +x ${FILE.appimage} && ./${FILE.appimage}`,
  },
  {
    os: "linux",
    format: ".deb",
    size: "4.1 MB",
    href: `${ASSET}/${FILE.deb}`,
    install: `sudo apt install ./${FILE.deb}`,
  },
  {
    os: "linux",
    format: ".rpm",
    size: "4.1 MB",
    href: `${ASSET}/${FILE.rpm}`,
    install: `sudo dnf install ./${FILE.rpm}`,
  },
  {
    os: "windows",
    format: ".exe",
    size: "4 MB",
    href: `${ASSET}/${FILE.exe}`,
    // NSIS installer — just run it (unsigned: SmartScreen › More info › Run anyway).
  },
  {
    os: "macos",
    format: "DMG",
    size: "4.2 MB",
    href: `${ASSET}/${FILE.dmg}`,
    // Unsigned build: clear the quarantine flag (or right-click → Open once).
    install: `xattr -dr com.apple.quarantine /Applications/FreeYourDisk.app`,
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
