# Scope: aim-website-refresh

## In Scope
- S1: Remove stale March 7 event content. Replace with April 25th Outdoor Pop Up Market event (Saturday April 25th, 2026, 9am-5pm, parking lot, 825 NW 24th Street). Include "Open Every Weekend" standing secondary card with hours (Fri 12-5, Sat-Sun 9-5).
- S2: Hero section refresh -- full-width hero image of store interior, "Where the past meets the present" headline, two CTAs (Explore Events, Browse Gallery). Warm, inviting, professional.
- S3: Photo gallery page -- responsive masonry or grid layout, lightbox on click, "Discover the Collection" framing. Real store photos from C:\ts\aim\ (7 unique images). Copy to public/gallery/, rename descriptively, optimize via next/image. Data-driven from array file.
- S4: Upcoming Events section on homepage -- card-based layout. When no specific event, show "Open Every Weekend" default card.
- S5: Community/About section -- "A Haven for the Curious and the Collector." Stats: 50+ vendors, 3K Facebook followers, 94% recommend, 8,000 sq ft. Links to Facebook, Instagram (@antiquesinmoore), TikTok (@mikeandfrank).
- S6: Proper footer -- address (825 NW 24th Street, Bldg B, Moore, OK 73160), phone (405-623-8698), email (mikesok49@gmail.com), social links, hours (Fri 12-5, Sat-Sun 9-5), quick links, "A Mike Ramsey Jr. Production" credit.
- S7: Navigation -- Antiques in Moore header with links: Events, Vendors, Gallery, About, Contact. Mobile hamburger menu.

## Done When
- DW1: No March 7 content visible anywhere on the site
- DW2: Homepage has hero section with store interior image and event CTAs
- DW3: Photo gallery page exists with responsive grid, lightbox, and minimum 8 photos
- DW4: Homepage events section shows cards (or "Open Every Weekend" default)
- DW5: Community section with vendor count, follower count, and Facebook link on homepage
- DW6: Footer with address, phone, Facebook, hours on every page
- DW7: Mobile responsive -- all pages render cleanly on phone screens
- DW8: tsc --noEmit passes

## Constraints and Assumptions

### Technology
Existing Next.js project on Vercel. Vercel free tier. No new backend -- static/marketing site with hardcoded content or local data files. Photos in /public or Vercel-optimized via next/image.

### Behavioral
Existing AIM logo (truck, barn, water tower) must be preserved and used prominently. Event content must be easy to update (single data file, not scattered).

### Performance
Page load under 3 seconds on mobile. Images optimized via next/image. Lighthouse performance score above 90.

### Design
Use /craft to establish design tokens. Direction: warm, inviting, professional. Not rustic-kitsch (no wood plank textures). Curated marketplace aesthetic -- clean modern, warm discovery. Color palette: aged wood, warm metals, Oklahoma red earth. Serif headlines (Libre Caslon Text or similar), clean sans body (Source Sans 3 or similar). Stitch reference at project ID 12648737340326082222.

### Scope
Homepage + Gallery page only. No vendor management, event RSVP, e-commerce.

## Out of Scope (Deferred)
- Vendor management/posting system (Phase 2)
- Event RSVP or giveaway entry forms (Phase 2)
- E-commerce or payment processing
- AIMVendors.com integration
- Blog or news section
- SEO optimization beyond basic meta tags
- Logo redesign (preserve existing)

---

## Completion Report

When this WU is complete, output this as your final response to the user:

```
============ REFINEMENT REPORT ============
Work Unit: 1/1: aim-website-refresh
Date:      [date]
Target:    C:/MRAMSEYBUILDS/projects/aim
Commit:    [hash]

## Outcome
[SUCCESS / PARTIAL / BLOCKED] -- [1-2 sentence summary]

## Done-When Verification
| # | Criterion | Status | Evidence |
|---|-----------|--------|----------|
| DW1 | No March 7 content visible | Met/Partial/Unmet | [evidence] |
| DW2 | Hero section with store image and CTAs | Met/Partial/Unmet | [evidence] |
| DW3 | Gallery page with grid, lightbox, 8+ photos | Met/Partial/Unmet | [evidence] |
| DW4 | Events section with cards | Met/Partial/Unmet | [evidence] |
| DW5 | Community section with stats and Facebook | Met/Partial/Unmet | [evidence] |
| DW6 | Footer with address, phone, Facebook, hours | Met/Partial/Unmet | [evidence] |
| DW7 | Mobile responsive | Met/Partial/Unmet | [evidence] |
| DW8 | tsc --noEmit passes | Met/Partial/Unmet | [evidence] |

## Key Decisions
[list]

## Files Changed
- [N] files created ([list])
- [N] files modified ([list])

## Deviations
[any]

## Status: [COMPLETE / PARTIAL / BLOCKED]
=============================================
```
