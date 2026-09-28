# Second Shift — Marketing Site

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage is the long landing page; `/corporate` and `/league` are the two sub-pages.

To check for build/type errors before deploying:

```bash
npm run build
```

## Editing content

Nearly everything on the site — headlines, stats, sponsor lists, links, image paths, testimonials — lives in one file:

```
src/data/content.ts
```

Edit text or numbers there and every section/page picks it up automatically; you shouldn't need to touch component code for copy changes. Search that file for `TODO` to find the placeholders that still need real content:

- **Testimonials** (`testimonials`) — 3 placeholder quotes, clearly marked.
- **Contact details** (`site.email`, `site.whatsapp`, `site.linkedin`) — placeholder values.
- **Social reel links** (`socialProof.reels[].href`) — point at `@secondshift.club` for now; replace with direct reel URLs.
- **Corporate packages** (`corporate.packages`) — placeholder names/pricing structure.

## Replacing images

All images live in `public/images/`, organized by section:

```
public/images/
  sports/      football, cricket, pickleball action shots
  gallery/     Sunday League photos, reels, trophy/podium moments
  corporate/   corporate offering + activation photos
  partners/    sponsor/partner logos (white marks on black, for the dark logo chips)
```

To swap a photo: replace the file at the same path (keep the same filename), or update the `src` path in `src/data/content.ts` to point at a new file you've added. Partner logos are expected as white-on-transparent-or-black marks (they're displayed on a black chip) — if you add a new partner, export their logo the same way for visual consistency, or adjust the `LogoCard` background in `src/components/sections/partners.tsx` if a given logo needs its own treatment.

If an image path in `content.ts` doesn't resolve to a real file, `next/image` will error at request time — there's no automatic placeholder fallback, so double check new paths against what's actually in `public/images/`.

## Where things live

```
src/app/                  routes: / , /corporate , /league , /api/contact , sitemap.ts , robots.ts , icon.tsx , opengraph-image.tsx
src/components/sections/  one file per homepage section (hero, stats, about, sports, ...)
src/components/corporate/ pieces shared between the homepage corporate section and /corporate
src/components/league/    gallery lightbox used on /league
src/components/ui/        reusable primitives: SectionHeading, SlantedTag, SlashMark, StickerBadge,
                           Marquee, CountUp, PhoneMockup, MagneticButton, CustomCursor, RevealImage
src/data/content.ts        all copy, stats, sponsors, links, image paths
src/hooks/                 use-is-touch-device, use-parallax-y
```

## The contact form

`src/components/contact-form.tsx` posts to `src/app/api/contact/route.ts`, which validates the payload and currently just logs it server-side. To actually receive submissions, wire up an email/CRM integration — there's a `TODO` block in `route.ts` with a ready-to-uncomment [Resend](https://resend.com) example. Formspree or any other form backend works the same way: swap the body of the `POST` handler.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new) — no configuration needed, it's a standard Next.js App Router project.
3. If you wire up email sending, add the relevant API key (e.g. `RESEND_API_KEY`) under Project Settings → Environment Variables.
4. Update `site.url` in `src/data/content.ts` to your production domain (used for metadata, sitemap and JSON-LD).

## Notes on a few implementation details

- **Fonts**: display headlines use Unbounded, body text uses Space Grotesk (both via `next/font/google`).
- **Colors, fonts and the marquee keyframes** are defined as CSS custom properties/`@theme` tokens in `src/app/globals.css` (Tailwind v4's CSS-first config — there's no `tailwind.config.js`).
- **Smooth scroll** is Lenis, wrapped in `src/components/ui/smooth-scroll.tsx`; it's skipped entirely when the visitor has `prefers-reduced-motion` set.
- **Custom cursor** (`src/components/ui/custom-cursor.tsx`) is a fixed signal-orange dot/ring — deliberately not using a color-inverting blend mode, since that reads as a stray colored blob over multi-color sections like the volt partner strip.
- The intro loader, custom cursor and magnetic-button hover effects are all automatically disabled on touch devices and under `prefers-reduced-motion`.
