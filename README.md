# FreeYourDisk — Marketing site

Bilingual (FR / EN) presentation site for [FreeYourDisk](https://github.com/QrCommunication/FreeYourDisk),
the disk-cleaning and system-monitoring desktop app for **Linux, Windows and macOS**.
The site presents application release **0.6.5** and is hosted on **Vercel**.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19.2** · **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme`)
- **motion** (subtle, no-JS-safe animations) · **Geist** fonts · **Phosphor** icons

## Internationalisation

- Route-based: `/fr` and `/en` (statically prerendered).
- `src/proxy.ts` redirects `/` to the locale matching the browser's
  `Accept-Language` (French → `/fr`, otherwise `/en`).
- A header **FR / EN** switcher preserves the current path.
- All copy lives in `src/dictionaries/{fr,en}.ts`; the English dictionary is
  type-checked against the French shape.
- Screenshots are localised and available in light and dark themes. French is
  the base set; English adds an `-en` suffix before the theme.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000  (redirects to /en or /fr)
pnpm build        # production build
pnpm start        # serve the production build
pnpm exec tsc --noEmit  # TypeScript validation
```

## Content & versioning

Single sources of truth in `src/lib/content.ts`:

- `VERSION` — drives the download links, version badges and the `?v=` asset
  cache-buster. Bump it on each app release.
- `DOWNLOADS`, `REPO`, `RELEASE`, `LEGAL` — neutral data.
- Six downloadable packages: Linux `.AppImage`, `.deb` and `.rpm`; Windows
  `.exe`; macOS `.dmg` for Apple Silicon and Intel. Keep names aligned with the
  assets actually published in the application repository. Package sizes are
  optional and must be measured from those assets rather than copied from an
  older release.
- `shotSrc(panel, locale, theme)` — versioned screenshot path; `theme` defaults
  to `light`. Captures use the native application's 1180 × 760 window dimensions.

## Application screenshots

The gallery uses captures from the installed application, with the language and
theme selected in its settings. Capture each of the six panels after its data
has loaded: `home`, `taskmanager`, `health`, `applications`, `biggest` and
`settings`. Do not capture the loading screen or use an interface mockup.

Store the 24 PNG files in `public/screenshots/` with these names:

```text
home-light.png       home-dark.png          # French
home-en-light.png    home-en-dark.png       # English
```

Apply the same naming pattern to every panel. The site's gallery lets visitors
switch the displayed application's theme without changing the site's language.

## Deploy to Vercel

The repository is `QrCommunication/freeyourdisk-website`; its current default
branch is `master`. Vercel automatically builds the configured Production Branch
on push. Check that setting before publishing: the Git branch and Vercel's
Production Branch must match. This repository has no separate deployment script.

Vercel detects Next.js automatically and runs the production build. The public
domain is [freeyourdisk.com](https://freeyourdisk.com). After deployment, verify
both `/en` and `/fr`, the release badge, all six downloads, and the light/dark
gallery on desktop and mobile. Publish site release links only after the GitHub
application release and all of its packages are available.

## Structure

```
src/
  app/[locale]/        layout (html lang, Nav + Footer), page, legal pages
  app/{robots,sitemap}.ts, favicon.ico, globals.css
  components/          Hero, Features, Screenshots, Safety, Download, Faq, Footer, …
  dictionaries/        fr.ts (canonical), en.ts, index.ts (getDictionary)
  lib/content.ts       version, links, downloads, legal facts (neutral)
  proxy.ts             Accept-Language redirect
public/screenshots/    FR + EN installed-app captures, light + dark
```

Editor: **QR Communication** (SAS). Site under the same ownership; the app is
GPL-3.0-or-later.

## En français

Site bilingue de FreeYourDisk **0.6.5**, disponible pour Linux, Windows et macOS.
Les textes sont dans `src/dictionaries/{fr,en}.ts` et les liens de téléchargement
dans `src/lib/content.ts`. La galerie présente les six écrans de l'application
installée en thèmes clair et sombre, dans les deux langues. Les captures françaises
portent les suffixes `-light.png` et `-dark.png` ; les anglaises ajoutent `-en`
avant le thème.

Le déploiement est automatique sur Vercel au push de la branche configurée en
production. La branche par défaut actuellement présente dans Git est `master` :
vérifier sa correspondance avec le réglage Vercel avant le push. Contrôler ensuite
les pages `/fr` et `/en`, les six fichiers téléchargeables et les captures sur le
site public.
