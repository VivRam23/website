# vivrames.com (Astro + Tailwind, Vercel)

Pinned versions (no ^ or ~): astro 4.16.19, @astrojs/sitemap 3.6.0, @astrojs/tailwind 5.1.3, tailwindcss 3.4.14.

## Run
    npm install
    npm run dev      # local
    npm run build    # static output in dist/

Deploy: import the GitHub repo in Vercel (framework preset: Astro, defaults are fine).
Sitemap is generated at /sitemap-index.xml; robots.txt points to it.

## Before you replace your live site
- Add your existing `public/images/og-default.jpg` and favicon (a placeholder `favicon.svg` is included).
- Merge any structured data from your current layout into the JSON-LD block at the top of `src/pages/index.astro`.
- Keep your existing /services and /about pages if you still want them; this package only contains the new homepage.
- The portrait (`public/images/portrait.jpg`) is 400px and shown at 260px; swap in a larger file when you have one.
- The page styling is inline, lifted from the approved design; Tailwind is installed with base styles only.
- Booking buttons point to https://calendly.com/hello-vivrames/30min.
