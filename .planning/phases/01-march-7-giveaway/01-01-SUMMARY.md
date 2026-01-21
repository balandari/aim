# Phase 1 Plan 1: Landing Page Design & Email Collection Summary

**Elegant business-first landing page with event-driven giveaway section - foundation for antiquesinmoore.com**

## Accomplishments

- Built complete landing page with executive editorial aesthetic (Georgia serif typography, timeless design)
- Established information hierarchy: Business identity FIRST, March 7th event as timely content SECOND
- Created navigation structure for Phase 1: Events | Visit | About (Vendors/Photos deferred to Phase 2)
- Designed email collection section with trust signals and mobile-first approach
- Corrected business hours (Saturday & Sunday, 9 AM - 5 PM) throughout site

## Files Created/Modified

- `components/Hero.tsx` - Complete landing page component with:
  - Header with navigation (Events, Visit, About)
  - Business hero section ("Where the past meets the present")
  - Upcoming Event section (March 7th Pop Up Market with TV giveaway)
  - Email collection form section
  - Footer with location
- `tailwind.config.ts` - Custom design tokens:
  - Typography: Georgia serif (display), Segoe UI (sans)
  - Colors: Crimson red (primary), Navy blue (secondary), Yellow (accent)
  - Font sizes: 18px base minimum for readability
- `app/page.tsx` - Home page using Hero component
- `public/vizio-tv.png` - TV product photo for giveaway section

## Design Evolution

**Journey to elegant solution:**
1. Started with vintage palette (browns, tans) - rejected as "museum announcement"
2. Tried bold giveaway colors with flyer-style layout - rejected as "flyer on website"
3. Attempted gradient PowerPoint aesthetic - rejected as "too corporate"
4. Tried centered product-focused layout - rejected as "TV infomercial"
5. **SUCCESS:** Event-first editorial layout with business identity leading
   - Business hero establishes Antiques in Moore
   - Event section presents March 7th as upcoming opportunity
   - TV giveaway as compelling detail, not main story
   - Navigation ready for key pages (Events, Visit, About)

## Key Decisions

**Business-first hierarchy:** The giveaway is timely promotional content, not the business story. After March 7th, that section can be replaced with next event while maintaining site structure.

**Typography:** Georgia serif for timeless antiques aesthetic (replacing initial Impact font which was completely wrong for brand identity).

**Navigation scope:** Phase 1 includes Events, Visit, About pages. Vendors and Photos deferred to Phase 2 pending vendor commitment.

**Hero photo requirement:** Need compelling store/item photo THIS WEEK before deployment to replace placeholder in business hero section.

**Form integration:** Email collection section built with static form structure. Typeform/backend integration deferred to implementation phase (pending decision on collection method).

## Issues Encountered

**Multiple design rejections:** Initial approaches failed to balance giveaway excitement with business credibility. Solution required complete mental model shift from "giveaway landing page" to "business homepage with exciting event."

**Business hours error:** Initially stated "Open seven days a week" - corrected to accurate "Open weekends" (Saturday & Sunday only).

## Next Steps

**Immediate (before March 7th deployment):**
1. Source hero photo for business section (store interior or compelling item)
2. Build three navigation pages: Events | Visit | About (editorial style, simple content)
3. Connect email collection to backend/Typeform
4. Test full flow on mobile devices

**Phase 2 (post-March 7th):**
1. Vendor directory/showcase (pending vendor commitment)
2. Photo gallery
3. Replace March 7th event section with next promotional content

Ready for next plan: Building Events, Visit, About pages.
