# Meher Villa, Lonavala — website

One-page, statically generated landing page built with Next.js 16 (App Router) and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Settings (optional `.env.local`)

The call and WhatsApp number, +91 93247 57113, is built in (`lib/site.ts`). These variables only override it.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, country code + number, digits only (e.g. `919324757113`). The enquiry form's swipe button and every WhatsApp button use it. |
| `NEXT_PUBLIC_PHONE_NUMBER` | Number for the Call buttons, same format. |
| `NEXT_PUBLIC_EMAIL` | Optional, shown in the footer. |
| `NEXT_PUBLIC_SITE_URL` | Live domain, used for the canonical URL, sitemap and share previews. |

These values are baked in at build time, so rebuild after changing them.

## Editing content

- All copy, facts, FAQs and photo captions live in `content/villa.ts`.
- Photos live in `assets/photos/` and are imported in `content/villa.ts`. Next.js resizes them and serves AVIF/WebP automatically.
- The share image is `app/opengraph-image.jpg` (1200 × 630).
- The "Things to Do" photos in `assets/photos/explore/` come from Wikimedia Commons under Creative Commons licences or the public domain. Their credits (photographer, licence, source link) are a licence requirement and live under "Photo credits" in the footer: keep them whenever these photos are shown. The details sit next to each place in `content/villa.ts`.

## How the enquiry form works

Guests fill in name, dates, guests, pets and a message, then swipe the button. The site opens WhatsApp with the message already written to the owner's number; the guest taps send. Nothing is stored on a server. Keyboard users can press Enter on the swipe handle.
