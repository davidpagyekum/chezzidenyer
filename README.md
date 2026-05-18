# Chezzi Denyer — MVP

Static HTML MVP for the Chezzi Denyer website redesign. Built to develop into an Etch site.

## Files

| File | Purpose |
|------|---------|
| `styles.css` | All design tokens + global styles. ACSS-style variables (`--primary`, `--bg`, `--s-N`, `--r-N`). |
| `index.html` | **Homepage** — priority page per brief. Hero → Book → Subscribe → About → Brand arms → Podcasts → CTA. |
| `the-weird-little-girl.html` | Book page. Booktopia (AU) primary CTA + Brio Books (international) link. |
| `about.html` | About Chezzi — background, book, intuition, speaking, current projects. |
| `lello-ladies.html` | Feminine arm. Soft yellow palette via `body.page--lello`. |
| `the-weird-club.html` | Bold/dark arm. "Coming Soon" placeholder. Dark palette via `body.page--weird`. |
| `media-speaking.html` | Topics, podcasts, keynote/collab info. `mailto:media@grantdenyer.com.au` CTA. |
| `shop.html` | Placeholder product grid — ready for Shopify or WooCommerce integration. |
| `contact.html` | Form + direct emails (`chezzi@` and `media@grantdenyer.com.au`). |

## Design tokens (mapped to ACSS roles)

| Token | Value | ACSS role |
|-------|-------|-----------|
| `--primary` | `#2a1f1e` near-black aubergine | `--primary` |
| `--accent` | `#b86b5b` warm clay terracotta | `--secondary` or `--accent` |
| `--secondary` | `#c9a961` brass gold | `--tertiary` |
| `--bg` | `#faf5ee` warm cream | `--base-ultra-light` / page bg |
| `--bg-alt` | `#f2e9d9` | `--base-light` |
| `--lello-bg` | `#fbf2d4` soft yellow | Sub-brand override |
| `--weird-bg` | `#161311` near-black | Sub-brand override |
| `--weird-pop` | `#ff5b3a` vivid coral | Sub-brand accent |
| `--display` | Fraunces (serif) | Heading font |
| `--body` | Inter | Body font |

## Brief-driven decisions

- **Homepage section order** — Hero (face) → Book → Subscribe → About (moved down per brief) → Arms → Podcasts → CTA. The brief is explicit that the book should be moved up and About moved down.
- **Book section** — "By Chezzi Denyer" with "Number One Bestselling Author" subtitle directly underneath, plus the "International Copies Available Here" link to Brio Books.
- **Subscriber form** — 4 fields per brief: first name, email, postcode, mobile (optional). Headline "Keep up to date with Chezzi". Designed for Mailchimp integration (form `action` to be wired).
- **Navigation** — All 8 menu items per brief: Home, The Book, About, Lello Ladies, The Weird Club, Media/Speaking, Shop, Contact.
- **Sub-brand palettes** — Lello Ladies = soft yellow via `body.page--lello`. Weird Club = dark + coral pop via `body.page--weird`. Both inherit the global token system so the Etch build can preset them per page.
- **Contact emails** — `chezzi@grantdenyer.com.au` (general) and `media@grantdenyer.com.au` (media/speaking/collab) hardcoded as the brief requested.

## Assets wired in (from `themes/chezzidenyer/media-library/`)

WordPress media filenames match the live `chezzidenyer.com.au` site so the same paths can be reused when migrating to Etch.

| Where | File |
|-------|------|
| Header + footer wordmark | `Chezzi-Denyer-Logo.svg` (inverted in dark footers) |
| Favicon | `cropped-Chezzi-Denyer-Favicon.jpeg` |
| **Homepage hero slider (4 slides)** | `Chezzi-Denyer-5-1-scaled.jpg` (podcast studio — live site's hero), `Chezzi-Denyer-1.jpg` (tuxedo), `Chezzi-Denyer-3.jpg` (red dress), `Chezzi-Denyer-25.jpg` (holding the book) |
| Homepage about preview | `Chezzi-Denyer-6-1-scaled.jpg` (Chezzi + Grant by the river) |
| Homepage "Media & Speaking" arm card | `Chezzi-Denyer-2.jpg` (bg overlay) |
| Homepage "Shop" arm card | `Chezzi-Denyer-image-3.jpg` (bg overlay) |
| **Book section + book page cover** | `Chezzi-Denyer-24.jpg` (the **real** book cover — "The Weird Little Girl, Who Talked to Ghosts") |
| About page — Cheryl→Chezzi section | `Chezzi-Denyer-5-1-scaled.jpg` (podcast studio) |
| About page — Farm life | `Chezzi-Denyer-7-1-scaled.jpg` (family in field) |
| About page — Media career | `Chezzi-Denyer-image-2.jpg` (Stellar magazine cover) |
| About page — It's All True podcast | `Chezzi-Denyer-6-1-scaled.jpg` (with Grant) |
| About page — Spiritual path | `Chezzi-Denyer-3.jpg` (red dress, banana leaves) |
| About page — The book | `Chezzi-Denyer-25.jpg` (holding the book) |
| **Homepage gallery (9 photos)** | `Chezzi-Denyer-8-1`, `23`, `18`, `11`, `10`, `14`, `7-1`, `4-1`, `3-1` — mirroring the live site's gallery set |
| **About page gallery (9 photos)** | `23`, `18`, `image-1`, `14`, `11`, `4-1`, `10`, `8-1`, `1` |
| Lello Ladies hero portrait | `Chezzi-Denyer-3.jpg` (red dress, feminine warm) |
| **The Weird Club hero logo** | `the-weird-club-logo.jpg` — wordmark on coral red. Page palette (`--weird-bg #d63d36`, `--weird-pink #f4b0b9`, `--weird-cream #fae8d0`) sampled from the logo so the page bg sits flush with it. Alt version without the bottom heart: `the-weird-club-logo-alt.jpg`. |
| The Girl emblem (kept for sub-brand use) | `the-weird-little-girl-logo.jpg` — circular brand mark for future use |
| Footer social icons | `instagram-line.svg`, `tiktok-fill.svg`, `youtube-line.svg`, `facebook-fill.svg` (inlined as SVG) |

## About page — copy source

The full body copy on `about.html` is taken **verbatim** from `chezzidenyer.com.au` per the client's request. Eight sections cover:
1. A vibrant force of nature (Sailor, Scout, Sunday; Cheryl→Chezzi origin)
2. The 28-acre farm outside Bathurst with Grant
3. Media career origins — radio at 15, CSU, Prime News, NSW Parliament, Channel 7
4. Sunrise roles + Today Tonight + 50 Years of Television + other hats (Park Ranger, Holden, Endomologist)
5. *It's All True?* podcast — 11 series with Grant + George Sargent
6. Spiritual path — Amy Gullifer 2022 → The Medium School Canada → Arthur Findlay College UK with Tony Stockwell → Love Lello
7. Mental health advocacy — ADHD, PTSD, postnatal anxiety, PANDA, Jeans for Genes
8. The memoir + Toni Reilly Institute / doctorate

Closing pull quote is her verbatim final paragraph.

## Hero slider

CSS scroll-snap based (no JS dependency). Anchor-link dots (`#hero-slide-1` through `#hero-slide-4`). Etch translation: the same pattern works inside a custom hero section or via Splide/Swiper if auto-rotate is needed later.

## Still needed

- **Real book cover artwork** (currently the Girl logo emblem stands in).
- **Podcast logos** for "It's All True" and "Mummy Time TV".
- **Lello Ladies logo + branding** (currently using a portrait stand-in).
- Live Mailchimp form `action` URL.
- Live Shopify/WooCommerce shop integration.

## Mapping to Etch components (next phase)

| MVP section | Likely Etch component |
|-------------|----------------------|
| Hero (homepage) | `hero` (media-text recipe) |
| Book section | `hero` (media-text, alt background) or custom book card |
| Subscribe form | `contact-page` style form, or custom newsletter section |
| About preview | `media-text` |
| Brand arms grid | `feature-grid` (4-up) |
| Podcast strip | `feature-grid` (2-up with image-bg) |
| CTA band | `cta-card` (dark recipe) |
| Topics chips | `feature-grid` or pill list |
| Shop grid | `bento-grid` or `feature-grid` (product card variant) |
| Contact form | `contact-page` section |
| Footer | `footer` section |
