# FreeYourDisk — Marketing site

Bilingual (FR / EN) presentation site for [FreeYourDisk](https://github.com/QrCommunication/FreeYourDisk),
the Linux disk-cleaning desktop app. Built to be hosted on **Vercel**.

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
- Screenshots are localised: French set is the base, English adds an `-en` suffix.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000  (redirects to /en or /fr)
pnpm build        # production build
pnpm start        # serve the production build
```

## Content & versioning

Single sources of truth in `src/lib/content.ts`:

- `VERSION` — drives the download links, version badges and the `?v=` asset
  cache-buster. Bump it on each app release.
- `DOWNLOADS`, `REPO`, `RELEASE`, `LEGAL` — neutral data.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import it in Vercel — the framework (Next.js) is auto-detected, no config
   needed. Build: `next build`, output handled automatically.
3. Point your domain (e.g. `freeyourdisk.com`) at the project.

## Structure

```
src/
  app/[locale]/        layout (html lang, Nav + Footer), page, legal pages
  app/{robots,sitemap}.ts, favicon.ico, globals.css
  components/          Hero, Features, Screenshots, Safety, Download, Faq, Footer, …
  dictionaries/        fr.ts (canonical), en.ts, index.ts (getDictionary)
  lib/content.ts       version, links, downloads, legal facts (neutral)
  proxy.ts             Accept-Language redirect
public/screenshots/    FR + EN app captures
```

Editor: **QR Communication** (SAS). Site under the same ownership; the app is
GPL-3.0-or-later.
