# Industrial Bearing & Chain Centre — Project Brief
> **Read this file first** when resuming work on this project in any AI tool.

---

## Client Details

| Field | Value |
|---|---|
| **Business** | Industrial Bearing & Chain Centre (IBCC) |
| **Proprietor** | Ajitkumar Jaiswal |
| **Address** | Plot #29, Industrial Area, 2nd Gate, Gokul Road, Hubballi – 580030, Karnataka |
| **Phone 1** | 9062186130 |
| **Phone 2** | 9036843910 |
| **Landline** | 0836-4507884 |
| **Email** | industrialbearing.hubli@gmail.com |
| **WhatsApp** | https://wa.me/919062186130 |
| **GSTIN** | 29BRWPA5389N1ZO |
| **Established** | 2016 |

## Stack

- **Next.js 15** (App Router) + TypeScript + Tailwind CSS v4
- No backend, no database — static marketing site only
- Contact form is UI-only with validation + success state (no real email sending yet)
- Deploy target: Vercel (`.vercel.app` preview URL for demo; `.in` domain later via Hostinger)

## Brand / Design

- **Primary:** Navy blue `#0B3D91` / Dark navy `#072a6b`
- **Accent:** Amber/yellow `#F2A900`
- **Font:** Inter (Google Fonts)
- Industrial, serious B2B aesthetic — NOT consumer/startup
- Reference site structure: [bearingandchaincentre.in](https://www.bearingandchaincentre.in)

## Pages Built

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Done |
| Products | `/products` | ✅ Done (client-side filtering + search) |
| About | `/about` | ✅ Done |
| Gallery | `/gallery` | ✅ Done (masonry grid + lightbox) |
| Contact | `/contact` | ✅ Done (validated form + map) |

## Global Components

- `Navbar.tsx` — sticky, scroll-aware, mobile hamburger, WhatsApp + Call CTA
- `Footer.tsx` — full contact info, quick links, product list, Google Maps embed
- `WhatsAppFloat.tsx` — fixed bottom-right pulsing WhatsApp button

## Product Data File

**Edit products here:** `src/data/products.ts`  
- Array of `Product[]` — no component changes needed to add/edit products
- Categories: Bearings, V-Belts, Fenner Poly-F, V-Pulley, Roller Chain, Sprockets, Chain Pulley Block, Rice Mill Spares, Crusher Spares, Conveyor Belts, Feed Spares

## Brand Partners (Authorised Stockist)

SKF · FAG · NTN · ARB · NBC · Fenner · Rolon · Diamond · Hero

## Images

All images in `/public/images/`:
- `hero-factory.png` — hero background (conveyor/factory)
- `product-bearings.png` — bearings category
- `product-vbelts.png` — V-belts
- `product-chains-sprockets.png` — roller chains & sprockets
- `product-conveyor-belts.png` — conveyor belts
- `product-ricemill-spares.png` — rice mill spares
- `product-crusher-spares.png` — crusher spares
- `product-vpulley.png` — V-pulleys
- `product-pulley-block.png` — chain pulley blocks
- `product-feed-spares.png` — feed mill spares
- `about-warehouse.png` — warehouse/about page

> Replace any of these with real client photos — just keep the same filename.

## TODO / What's Left

- [ ] Replace AI-generated images with real product photos from client once provided
- [ ] Confirm exact business hours with client (currently: Mon–Sat 9:30 AM – 7:00 PM)
- [ ] Add Resend or EmailJS integration for actual contact form email delivery
- [ ] Review Google Maps embed URL — update pin to exact location once confirmed
- [ ] Get client logo file (if any) — currently uses styled text "IB" badge
- [ ] Final SEO pass — add Google Search Console + sitemap
- [ ] Set up GitHub repo → push → deploy to Vercel → connect Hostinger domain

## Session Log

### Session 1 — 2026-06-18
**What's done:** Full 5-page site built — Home, Products (with search + filter), About, Gallery (lightbox), Contact (validated form). All global components done. 11 AI-generated product images created and used. Dev server running on localhost:3000.

**What's left:** Client photo replacement, real email integration, domain setup.
