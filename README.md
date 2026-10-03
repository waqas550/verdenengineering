# Verden Engineering

Corporate website for Verden Engineering. Content that should change often — navigation, services, partners, contact details — lives in `data/siteConfig.ts`.

Square-bracket placeholders such as `[EMAIL]`, `[PHONE]`, `[ADDRESS]` and `[COMPANY_REGISTRATION]` are unknown facts. Replace them before launch. Partner wording in `content/partners-copy.md` is sourced from the partners' sites.

Photography is free stock used as atmosphere. It does not document Verden Engineering projects, clients or staff.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run typecheck
npm run lint
npm run build
```

Set the public site URL for canonical links, Open Graph and the sitemap:

```bash
copy .env.example .env.local
```

Edit `NEXT_PUBLIC_SITE_URL` and replace `https://[DOMAIN]`.

## Edit the copy

Open `data/siteConfig.ts`. Service pages, the partners page, contact details and navigation all read from that file.

## Images

Every photograph shipped in `public/images` is WebP and must stay under 40KB. Originals are not committed.

1. Save the source file as a `.jpg` in `/images-src` using one of these exact names:
   - `hero-refinery.jpg` (max width 1920)
   - `energy-grid.jpg`, `energy-solar.jpg`, `construction-steel.jpg`, `refinery-pipes.jpg` (max width 1600)
   - `automation-robot.jpg`, `automation-control-room.jpg`, `about-industrial.jpg` (max width 1200)
2. Run:

```bash
npm run images
```

The script writes `public/images/<name>.webp` (quality 65, effort 6). If a file is still 40KB or larger it narrows the width by 20% (floor 1000px for the hero, 800px otherwise), then lowers quality by 5 (floor 50), and exits with an error if it still cannot comply.

`/images-src` is gitignored. Commit the WebP files in `public/images`, not the originals.

Partner marks in `public/images/partners/` are labeled placeholders, not photographs. Replace them with the official SVG or PNG from each partner and update `logo.src` in `data/siteConfig.ts`.

The company logo is `public/brand/verden-logo.webp`.

## Contact form

The form posts to `app/api/contact/route.ts`, which checks the fields and writes the enquiry to the server log.

Before production, connect that route to an email service. Search the file for `TODO`.

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, import the project. Framework preset: Next.js.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` with the production domain, including `https://`.
4. Deploy. Vercel runs `npm run build`.
5. Wire the contact route to email before announcing the address.

## Static export (cPanel or other shared hosting)

The default build is a Node server so the contact API can run. A static export has no API routes.

1. In `next.config.mjs`, set:

```js
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

2. Delete the `app/api` folder, or the export build will fail.
3. Point the form at an external endpoint by setting `NEXT_PUBLIC_CONTACT_ENDPOINT` in `.env.local` (see `.env.example`). The form already reads that variable when it is present.
4. Build and upload the generated site:

```bash
npm run build
```

Upload the contents of the `out` folder to the host's web root (`public_html` on most cPanel accounts). Use an Apache or nginx rule so unknown paths serve `404.html`.

## Stock photography

Images were prepared from Pexels and Unsplash (free to use). They are illustrative only.

| File | Subject |
| --- | --- |
| `hero-refinery.webp` | Oil refinery beside the water |
| `energy-grid.webp` | Electricity pylons |
| `energy-solar.webp` | Solar farm |
| `construction-steel.webp` | Construction site steel structure |
| `refinery-pipes.webp` | Petrochemical plant pipes |
| `automation-robot.webp` | Robotic arm in a factory |
| `automation-control-room.webp` | Industrial electrical control room |
| `about-industrial.webp` | Industrial site — not company staff |
