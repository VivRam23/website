# vivrames.com

Viviana Rames' professional site — built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Fully static, server-rendered HTML (no client-side rendering required for content), deployable to Vercel.

**Visual identity (v2):** off-white background, near-black type, one orange accent (`#F15A24`), Archivo (display) + Inter (body). No olive/serif/cream — that was the v1 palette and has been fully replaced. See `tailwind.config.mjs` for tokens.

## Structure

```
src/
  data/site.ts        ← ALL editable copy lives here: hero text, stats, case studies,
                         engagement models, contact email. Start here for content edits.
  layouts/
    BaseLayout.astro   ← <head>, SEO meta, OG/Twitter tags, JSON-LD schema, nav + footer wrapper
  components/          ← one component per homepage section, plus the full case-study block
  pages/
    index.astro        ← homepage
    work.astro          ← /work — all three case studies as anchor sections (#skytree, #capture6, #brush-it-on)
    about.astro          ← /about — full bio
public/
  images/               ← logos, case-study images, portrait, OG image, favicon
  robots.txt
```

`sitemap.xml` is generated automatically at build time by `@astrojs/sitemap` — you won't find it in the repo, it appears in `dist/` after `npm run build`.

## Local development

**Dependency versions are pinned exactly** (no `^`/`~`) in `package.json`. `@astrojs/sitemap` has a known compatibility break with certain Astro versions that surfaces as `Cannot read properties of undefined (reading 'reduce')` during build — don't loosen or bump these versions without testing the build first.

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Build

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo. Vercel auto-detects Astro — no config needed.
3. Set the production domain to `vivrames.com` in Vercel's domain settings (and point your DNS at Vercel per their instructions).
4. Every push to `main` redeploys automatically.

## Editing content later

Almost everything — hero copy, proof stats, case study text, engagement models, contact email — lives in `src/data/site.ts`. Editing that file is usually enough; you shouldn't need to touch the `.astro` component files for a copy change. Just ask Claude (Claude Code, or paste the file into a chat) to make the edit and it can go straight to that file.

To swap the portrait or add a new case-study image, drop the file into `public/images/` and reference it as `/images/filename.jpg` from `site.ts`.

## Note on this build

This project was authored without a live build step (no network access in the authoring environment to run `npm install`). Everything follows known-correct Astro + Tailwind patterns, but please run `npm install && npm run build` after cloning and flag anything that breaks — most likely a small import or syntax fix.
