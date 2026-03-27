# Plan: aim-website-refresh

**Work Unit:** aim-website-refresh
**Triage:** standard | **Scope:** feature | **Concerns:** [security]
**Target:** C:/MRAMSEYBUILDS/projects/aim

## Tasks

### T1: Design Token Establishment
**Uses: frontend-design**

**What:** Use /craft skill to establish design tokens. Color palette (aged wood, warm metals, Oklahoma red earth), typography (Libre Caslon Display headlines, Libre Caslon Text serif body, Source Sans 3 sans body), spacing, borders, shadows. Stitch reference: project ID 12648737340326082222.
**Why:** Every subsequent task depends on consistent tokens.
**Dependencies:** None
**Done when:** Token spec produced covering colors, typography, spacing, borders, shadows.
**Context weight:** Light

### T2: Foundation (Layout, Fonts, Config, Data Files, Gallery Assets)

**What:** Apply T1 tokens: rewrite tailwind.config.ts, rewrite layout.tsx (next/font/google), rewrite globals.css, create data/events.ts (April 25th event + helper), create data/gallery.ts (9 image entries), copy 7 gallery photos to public/gallery/ with descriptive names, install yet-another-react-lightbox, delete public/vizio-tv.png.
**Why:** Infrastructure for all component tasks.
**Dependencies:** T1
**Done when:** Tailwind has new palette, fonts loaded, data files typed, gallery images in place, lightbox installed.
**Context weight:** Medium

### T3: Header / Navigation
**Uses: frontend-design**

**What:** Rewrite Header.tsx: text logo "Antiques in Moore" (Libre Caslon Display), desktop nav (Home, Gallery, Events#, Vendors#, Contact#), mobile hamburger (useState + Tailwind transitions).
**Why:** Navigation defines site structure.
**Dependencies:** T2
**Done when:** Desktop nav + mobile hamburger work. No /about /events /visit links.
**Context weight:** Medium

### T4: Hero Section
**Uses: frontend-design**

**What:** Rewrite Hero.tsx: full-width store-hero.png via next/image with priority, headline overlay, two CTAs (Browse Gallery -> /gallery, Upcoming Events -> #events). Remove framer-motion.
**Why:** First visual impression.
**Dependencies:** T2, T3
**Done when:** Hero shows store image, CTAs, no March 7 content, no framer-motion.
**Context weight:** Medium

### T5: Events Section
**Uses: frontend-design**

**What:** Create EventsSection.tsx with id="events". Reads data/events.ts. Card layout for events. Fallback "Open Every Weekend" (Fri 12-5, Sat-Sun 9-5).
**Why:** Data-driven events replace hardcoded giveaway.
**Dependencies:** T2
**Done when:** April 25th event renders. Empty array shows fallback.
**Context weight:** Light

### T6: Community / About Section
**Uses: frontend-design**

**What:** Create CommunitySection.tsx with id="community". Stats: 50+ vendors, 3K followers, 94% recommend, 8K sqft. Social links. Brief about prose.
**Why:** Consolidates old /about into homepage section.
**Dependencies:** T2
**Done when:** Stats display, Facebook/Instagram/TikTok links present.
**Context weight:** Light

### T7: Footer
**Uses: frontend-design**

**What:** Rewrite Footer.tsx with id="footer". Address, phone, email, hours (Fri 12-5, Sat-Sun 9-5), social links, "A Mike Ramsey Jr. Production" credit.
**Why:** DW6 requires comprehensive footer.
**Dependencies:** T2
**Done when:** All contact info, hours, social links present.
**Context weight:** Light

### T8: Gallery Page
**Uses: frontend-design**

**What:** Create app/gallery/page.tsx. CSS columns (1/2/3 responsive). Images from data/gallery.ts via next/image. Lightbox via yet-another-react-lightbox (dynamic import). Header + Footer.
**Why:** Second page, photo showcase.
**Dependencies:** T2, T3, T7
**Done when:** /gallery renders, responsive grid, lightbox works, 8+ photos.
**Context weight:** Medium

### T9: Cleanup + Verification

**What:** Delete /about, /events, /visit routes. Remove framer-motion from package.json. Run tsc --noEmit. Grep for March 7/giveaway/VIZIO. Compose homepage (Hero + Events + Community). Mobile spot-check.
**Why:** Final sweep for DW1, DW7, DW8.
**Dependencies:** T3-T8
**Done when:** No stale content, tsc passes, homepage assembles correctly.
**Context weight:** Medium

## Execution Order

1. T1 -> T2 -> T3 -> T4 -> T5 -> T6 -> T7 -> T8 -> T9

## Scope Check

| DW | Criterion | Task(s) |
|----|-----------|---------|
| DW1 | No March 7 content | T2, T4, T5, T9 |
| DW2 | Hero with store image + CTAs | T4 |
| DW3 | Gallery page, grid, lightbox, 8+ photos | T8 |
| DW4 | Events section with cards/default | T5 |
| DW5 | Community section with stats + Facebook | T6 |
| DW6 | Footer with address, phone, Facebook, hours | T7 |
| DW7 | Mobile responsive | T3, T9 |
| DW8 | tsc --noEmit passes | T9 |

## Security Implementation

Static marketing site. No user input, no auth, no API keys, no database. External links use target="_blank" rel="noopener noreferrer". Only new dependency: yet-another-react-lightbox. All images from /public/.

## Pre-Mortem

| # | Failure Mode | Mitigation |
|---|-------------|------------|
| 1 | Font FOUT | next/font/google self-hosts, display: swap |
| 2 | Gallery images too large | next/image handles WebP/AVIF + responsive srcset |
| 3 | Lightbox package API mismatch | Fall back to standard yet-another-react-lightbox |
| 4 | TypeScript errors from new patterns | T9 runs tsc --noEmit explicitly |

## Session Boundaries

| Session | Tasks | Rationale |
|---------|-------|-----------|
| 1 | T1, T2 | Foundation: tokens + config + data + assets |
| 2 | T3, T4, T5, T6, T7 | All homepage components |
| 3 | T8, T9 | Gallery page + cleanup/verification |
