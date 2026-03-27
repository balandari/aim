# Unknowns: aim-website-refresh

Nonce: `USM-20260326-aim-website-refresh`

---

## Hypotheses

### H1: Existing codebase is a giveaway-event-specific build, not a general-purpose site
**Status: CONFIRMED**
Evidence: `app/layout.tsx` line 5 metadata title is "Antiques in Moore | Win a 55\" Smart TV - March 7 Giveaway". The Hero component (`components/Hero.tsx`) is dominated by March 7 event content (lines 64-167). The entire site was purpose-built around the March 7 TV giveaway with no abstraction for other events or general content.

### H2: No data abstraction layer exists -- all content is hardcoded in JSX
**Status: CONFIRMED**
Evidence: Event details (date, prize, rules) are hardcoded directly in `components/Hero.tsx` and `app/events/page.tsx`. No `data/`, `lib/`, `constants/`, or `config/` directories with content data. No JSON data files. The scope requirement "Event content in single data file" (constraint) will require creating this from scratch.

### H3: Navigation needs significant expansion
**Status: CONFIRMED**
Evidence: `components/Header.tsx` has three nav links: Events, Visit, About. Scope S7 requires: Events, Vendors, Gallery, About, Contact. Two links change (Visit->Vendors), two are new (Gallery, Contact). Mobile hamburger does not exist -- current nav is `flex-wrap` inline links with no responsive collapse.

### H4: Footer is minimal and needs full rebuild
**Status: CONFIRMED**
Evidence: `components/Footer.tsx` is 15 lines total. Contains only address and hours. Missing: phone (405-623-8698), email (mikesok49@gmail.com), social links (Facebook, Instagram @antiquesinmoore, TikTok @mikeandfrank), quick links, "A Mike Ramsey Jr. Production" credit. Full rebuild required per S6.

### H5: Gallery page does not exist
**Status: CONFIRMED**
Evidence: No `app/gallery/` directory found. No gallery-related components. The gallery page (S3) must be created entirely from scratch including route, component, lightbox functionality, and photo data array.

### H6: Gallery source photos contain exact duplicates
**Status: CONFIRMED**
Evidence: `C:\ts\aim\` contains 10 files. Three files have `(1)` suffix duplicates with identical file sizes:
- `654313797...n.jpg` and `654313797...n (1).jpg` (both 905,795 bytes)
- `656268835...n.jpg` and `656268835...n (1).jpg` (both 1,292,059 bytes)
- `656868333...n.jpg` and `656868333...n (1).jpg` (both 1,201,664 bytes)
Removing 3 duplicates leaves exactly **7 unique images**, matching the scope requirement.

### H7: Existing images in public/ are large and unoptimized PNGs
**Status: CONFIRMED**
Evidence: `public/` contains three PNGs: store-exterior.png (2.6 MB), store-hero.png (3.5 MB), vizio-tv.png (3.4 MB). The store-hero.png is used in the Hero component. These sizes will challenge the <3s page load and Lighthouse >90 performance constraints. next/image helps but source images should be reviewed.

### H8: The color palette is giveaway-specific, not antique-store-appropriate
**Status: CONFIRMED**
Evidence: `tailwind.config.ts` defines `primary: "#DC143C"` (crimson red) with comment "Bold giveaway palette - excitement and energy". The scope constraint specifies "aged wood, warm metals, Oklahoma red earth" direction. The Tailwind config needs a full palette replacement via /craft design tokens.

### H9: Existing pages (about, events, visit) will be replaced or removed
**Status: CONFIRMED**
Evidence: Scope says "Homepage + Gallery page only." Current routes:
- `/` (homepage) -- kept, heavily modified
- `/about` -- removed as standalone route; content folded into homepage Community/About section (S5)
- `/events` -- removed as standalone route; events become a homepage section (S4)
- `/visit` -- removed as standalone route; contact info goes to footer (S6)
- `/gallery` -- new route (S3)

### H10: framer-motion is already a dependency
**Status: CONFIRMED**
Evidence: `package.json` lists `"framer-motion": "^11.15.0"` as a dependency. `components/Hero.tsx` uses `motion` from framer-motion. This can be reused for gallery lightbox animations and hero entrance effects without adding new dependencies.

---

## Unexamined Assumptions

### UA1: No existing AIM logo file in the repository
The scope says "Preserve existing AIM logo (truck, barn, water tower)" and CLAUDE.md references it, but no logo file (SVG, PNG, or any format) exists in `public/`. The current Header renders "Antiques in Moore" as styled text, not an image. Either the logo needs to be sourced from elsewhere, or the text treatment is considered the logo. This must be clarified before implementation.

### UA2: "Vendors" nav link destination unclear
S7 specifies a "Vendors" link in navigation. But the scope limits work to "Homepage + Gallery page only." The Vendors link would either point to a non-existent page, an anchor section on the homepage, or an external URL. The existing `/about` page has vendor-related content that could serve as a temporary target.

### UA3: "Contact" nav link destination unclear
Same issue as UA2. S7 specifies a "Contact" link. No contact page is in scope. Could be a smooth-scroll anchor to the footer, a mailto link, or a placeholder.

### UA4: Lightbox implementation approach undecided
S3 requires "lightbox on click" for the gallery. Options: (a) build from scratch with framer-motion (already a dependency), (b) add a lightweight library like `yet-another-react-lightbox` or `react-photoswipe-lite`. No lightbox library is currently in package.json. Building with framer-motion avoids a new dependency and leverages existing code patterns.

### UA5: "Open Every Weekend" card data structure
S1 and S4 specify a standing "Open Every Weekend" secondary card with hours "Fri 12-5, Sat-Sun 9-5". This implies the hours have changed from the current "Saturday & Sunday, 9 AM - 5 PM" (no Friday). The new hours (including Friday 12-5) must be used consistently across hero, footer, and event cards.

### UA6: Store interior image availability
S2 specifies "store interior image" for the hero. Current `public/store-hero.png` shows the storefront (alt text: "Antiques in Moore storefront"). The gallery source photos at `C:\ts\aim\` appear to be interior/merchandise shots (Facebook post format filenames). One of these could serve as the hero interior image, or a separate interior photo needs sourcing.

---

## Remaining Unknowns

### U1: Logo source file location [BLOCKING for S7]
Where is the AIM logo (truck, barn, water tower)? Is it a file that exists elsewhere on disk, or does it need to be obtained? Current site uses text-only branding.

### U2: Vendors and Contact link targets [NON-BLOCKING]
What should /Vendors and /Contact nav links point to given only homepage + gallery are in scope? Options: (a) anchor links to homepage sections, (b) placeholder pages, (c) omit from this work unit. Recommendation: anchor links to homepage sections (S5 community section doubles as about/vendors, footer doubles as contact).

### U3: Hours discrepancy -- Friday hours are new? [LOW-RISK]
Scope-boundary.md specifies "Fri 12-5, Sat-Sun 9-5" but all existing code shows "Saturday & Sunday, 9 AM - 5 PM". The scope data is authoritative. Implementation should use the new hours everywhere.

### U4: Image optimization strategy for existing PNGs [NON-BLOCKING]
The three existing PNGs total 9.6 MB. Should they be converted to WebP/AVIF before deployment, or rely solely on next/image runtime optimization? next/image handles format conversion at request time, but source file sizes affect build and initial deploy size on Vercel free tier.

---

## Constraint Inventory

| # | Constraint | Source | Validated | Notes |
|---|-----------|--------|-----------|-------|
| C1 | Next.js on Vercel free tier | scope-boundary.md | YES | package.json confirms Next.js 15.1.3; Vercel deployment assumed |
| C2 | Static/marketing site, no backend | scope-boundary.md | YES | No API routes, no database config found |
| C3 | Preserve existing AIM logo | scope-boundary.md | PARTIAL | No logo file found in repo (see U1) |
| C4 | Event content in single data file | scope-boundary.md | YES | Does not exist yet; must be created |
| C5 | Page load <3s | scope-boundary.md | AT RISK | 9.6 MB of PNGs in public/; gallery adds 7 more images (~7 MB) |
| C6 | Lighthouse >90 | scope-boundary.md | AT RISK | Image sizes, framer-motion bundle size, no current optimization |
| C7 | Use /craft for design tokens | scope-boundary.md | YES | Current palette is giveaway-specific; full replacement needed |
| C8 | Homepage + Gallery page only | scope-boundary.md | YES | Three existing routes (about, events, visit) to be removed or consolidated |
| C9 | Stitch reference project ID 12648737340326082222 | scope-boundary.md | YES | Available for design reference during implementation |
| C10 | 7 unique gallery photos from C:\ts\aim\ | scope-boundary.md | YES | 10 files, 3 duplicates, 7 unique confirmed |

---

## Existing Infrastructure

### Components (3 files)
| Component | File | Reusable? | Changes Needed |
|-----------|------|-----------|----------------|
| Header | `components/Header.tsx` | REBUILD | New nav links (Events/Vendors/Gallery/About/Contact), logo, mobile hamburger menu. "use client" + usePathname pattern reusable. |
| Hero | `components/Hero.tsx` | REBUILD | Remove all March 7 content. New: store interior image, headline, two CTAs, events section, community section. framer-motion pattern reusable. |
| Footer | `components/Footer.tsx` | REBUILD | Add phone, email, social links, quick links, credit line, updated hours. Currently 15 lines; needs full expansion. |

### Pages (6 files)
| Page | File | Action |
|------|------|--------|
| Home | `app/page.tsx` | MODIFY -- add new section components |
| Layout | `app/layout.tsx` | MODIFY -- update metadata (remove March 7 title/description) |
| Globals | `app/globals.css` | MODIFY -- update base styles if /craft tokens change |
| About | `app/about/page.tsx` | REMOVE -- content moves to homepage S5 |
| Events | `app/events/page.tsx` | REMOVE -- content moves to homepage S4 |
| Visit | `app/visit/page.tsx` | REMOVE -- content moves to footer S6 |

### New Files Needed
| File | Purpose |
|------|---------|
| `app/gallery/page.tsx` | Gallery page route (S3) |
| `components/Gallery.tsx` or inline | Gallery grid + lightbox component |
| `components/Events.tsx` | Homepage events section (S4) |
| `components/Community.tsx` | Homepage community/about section (S5) |
| `data/events.ts` | Event data file (constraint C4) |
| `data/gallery.ts` | Gallery photo metadata array (S3) |
| `public/gallery/*.jpg` | 7 unique photos copied and renamed from C:\ts\aim\ |

### Configuration
| File | Status | Changes Needed |
|------|--------|----------------|
| `tailwind.config.ts` | EXISTS | Full palette replacement (giveaway -> antique store) per /craft tokens |
| `package.json` | EXISTS | Possible lightbox library addition; no other deps expected |
| `next.config.ts` | EXISTS | May need image optimization config (remotePatterns unlikely for static) |
| `tsconfig.json` | EXISTS | No changes expected |
| `postcss.config.mjs` | EXISTS | No changes expected |

### Public Assets
| File | Size | Action |
|------|------|--------|
| `store-hero.png` | 3.5 MB | KEEP -- may serve as hero or gallery image |
| `store-exterior.png` | 2.6 MB | KEEP -- useful for about/community section |
| `vizio-tv.png` | 3.4 MB | REMOVE -- March 7 giveaway prize image no longer needed |

---

## Counter-Arguments

### CA1: "Just update the event content, don't rebuild everything"
Rejected. The current site is structurally built around a single giveaway event. There is no component separation (Hero contains event content), no data layer, no gallery, no proper footer. A content swap would leave an architecture that cannot support the "events in a data file" constraint or the gallery page requirement. The scope explicitly calls for section-level changes (S1-S7) that touch every component.

### CA2: "Keep the existing pages (about, events, visit) alongside new homepage sections"
Rejected by scope: "Homepage + Gallery page only." Maintaining orphan routes creates confusion and maintenance burden. The scope consolidates about content into S5, events into S4, and visit/contact into S6 footer. Removing the routes is the clean path.

### CA3: "Use a CSS-only lightbox instead of JavaScript"
Viable but limited. CSS-only lightbox (using `:target` or checkbox hack) cannot provide smooth transitions, keyboard navigation, or swipe gestures. Since framer-motion is already a dependency, a JS lightbox adds no bundle cost beyond the component code itself. The scope says "lightbox on click" which is achievable either way, but framer-motion provides a better UX at no dependency cost.

---

## Re-derivation Instructions

To re-derive these findings:
1. Read all files in `app/`, `components/`, and project root configs (9 source files + 3 configs)
2. List `C:\ts\aim\` with `-la` flag to identify duplicate photos by matching base names and file sizes
3. List `public/` to inventory existing images
4. Search for "March 7", "giveaway", "VIZIO", "TV" across `.tsx` files to map stale content locations
5. Check `tailwind.config.ts` color comments to confirm palette purpose
6. Verify no `data/`, `lib/`, `constants/` directories exist outside `node_modules/`
7. Compare navigation links in `components/Header.tsx` against S7 requirements
8. Compare footer content in `components/Footer.tsx` against S6 requirements

---

## Verification

- [x] All source files read (page.tsx, layout.tsx, globals.css, Header.tsx, Hero.tsx, Footer.tsx, about/page.tsx, events/page.tsx, visit/page.tsx, tailwind.config.ts, package.json, next.config.ts, postcss.config.mjs, tsconfig.json, CLAUDE.md)
- [x] Gallery source photos inventoried (10 files, 3 duplicates confirmed by identical sizes, 7 unique)
- [x] Public directory inventoried (3 PNG images, 9.6 MB total)
- [x] March 7 content locations mapped (layout.tsx metadata, Hero.tsx lines 64-167, events/page.tsx lines 24-109)
- [x] No data files or constants files found in project source
- [x] No gallery route exists
- [x] No mobile hamburger menu exists
- [x] No logo file found in repository
- [x] Scope items S1-S7 mapped to existing infrastructure

---

## Security Posture

### A01: Broken Access Control -- NOT APPLICABLE
Static marketing site with no authentication, no user accounts, no admin panel. All content is public. No access control needed.

### A02: Cryptographic Failures -- NOT APPLICABLE
No API keys, secrets, tokens, or sensitive data. No `.env` files. No server-side secrets. Content is entirely static and public. Email address (mikesok49@gmail.com) in footer is intentionally public contact info.

### A04: Insecure Design -- NOT APPLICABLE
No trust boundaries. No user input processing. No forms (event RSVP and giveaway entry are explicitly out of scope). Static content served via Vercel CDN. next/image provides some protection against image-based attacks via on-demand optimization.

### A07: Identification and Authentication Failures -- NOT APPLICABLE
No authentication system exists or is needed. No login, no sessions, no cookies beyond what Vercel/Next.js set for analytics (if any).

**Overall posture:** Minimal attack surface. Static site with no user input, no backend, no secrets. Primary risks are limited to: (1) Vercel platform vulnerabilities (out of scope), (2) dependency vulnerabilities in Next.js/React/framer-motion (mitigated by staying on current versions), (3) image optimization DoS (mitigated by Vercel's built-in rate limiting).

---

## Scope Coverage

| Scope Item | Coverage | Key Findings |
|-----------|----------|--------------|
| S1: Remove March 7, add April 25 + "Open Every Weekend" | FULL | March 7 content in 3 files (layout.tsx, Hero.tsx, events/page.tsx). vizio-tv.png removable. New event data file needed. Hours updated to include Friday. |
| S2: Hero section refresh | FULL | Hero.tsx needs full rebuild. store-hero.png exists (exterior); interior image needed from gallery source or separate source (see UA6). Two CTAs: Explore Events, Browse Gallery. |
| S3: Photo gallery page | FULL | No gallery route exists. 7 unique photos identified from C:\ts\aim\ (3 duplicates excluded). Need: route, grid component, lightbox, data array, photo copy+rename to public/gallery/. |
| S4: Events section on homepage | FULL | Current events are standalone page + Hero section. Need: card-based homepage section, data-driven from events.ts, "Open Every Weekend" default card. |
| S5: Community/About section | FULL | Stats defined (50+ vendors, 3K followers, 94% recommend, 8K sqft). Social links defined (Facebook, Instagram @antiquesinmoore, TikTok @mikeandfrank). Current about page content can inform copy. |
| S6: Footer rebuild | FULL | All data points identified: address (825 NW 24th St, Bldg B, Moore OK 73160), phone (405-623-8698), email (mikesok49@gmail.com), social links, hours (Fri 12-5, Sat-Sun 9-5), credit ("A Mike Ramsey Jr. Production"). |
| S7: Navigation | FULL | Current: 3 links (Events, Visit, About). Target: 5 links (Events, Vendors, Gallery, About, Contact) + mobile hamburger. Vendors and Contact targets need resolution (see U2). |
