# Antiques in Moore Community Hub

## What This Is

Event-driven community hub for Antiques in Moore antique mall. Phase 1 launches March 7, 2026 with business information and TV giveaway promotion featuring distinctive design that makes people ask "who built this?" Phase 2 expands based on pop-up results with potential vendor features, additional events, and community content.

## Core Value

March 7 TV giveaway promotion must work perfectly - email collection, event details, drives in-store visits. This is the launch moment that validates the event-driven approach.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Business information clearly presented (hours, location, contact, map)
- [ ] March 7 TV giveaway promotion page with event details
- [ ] Email collection system for in-person giveaway entry
- [ ] Distinctive "wow factor" design - custom layouts, professional appearance
- [ ] Impressive content delivery - makes simple business info feel premium
- [ ] Mobile-first responsive experience (most users on phones)
- [ ] Content update mechanism Mike can use to post event information
- [ ] Fast page loads and excellent Core Web Vitals
- [ ] Accessible design for all users

### Out of Scope

- Vendor posting features — Phase 2 decision based on March 7 results; vendor feedback shows reluctance (Bruce/Jessie don't see value vs Facebook)
- Event RSVP system — In-person giveaway entry only for Phase 1; online RSVP is Phase 2 consideration
- Photo galleries from past events — Focus on upcoming events, not historical content
- Newsletter/email automation — Just collect emails in Phase 1; automated campaigns are Phase 2
- User accounts/authentication — No login required for Phase 1 browsing
- Vendor directory with individual pages — May revisit in Phase 2 as passive inclusion (no vendor posting required)

## Context

**Business Context:**
- Dad (store owner) recovering from shoulder surgery (Jan 14, 2026)
- Domain secured from Danny Moore (antiquesinmoore.com) - community recognizes this name
- Events drive foot traffic more effectively than vendor listings alone
- March 7 Outdoor Pop-up with TV giveaway is first major event
- "Antiques in Moore" is what community calls the place (not "AIM Vendors")

**Vendor Feedback (Critical):**
- Bruce: "This isn't different from Facebook" - doesn't see pain point for posting
- Jessie: Reluctant about newsletter - not interested in active content participation
- Another vendor: Thought they'd be charged - pricing misconceptions exist
- **Takeaway:** Build FOR THE STORE (events, community, business info), not FOR VENDORS (posting platform)

**Technical Context:**
- aimvendors.com work provides learnings: vendor posting UX, image handling, OAuth, mobile-first design
- Reusable patterns: Google OAuth setup, Supabase configuration, Vercel deployment, mobile camera integration
- Different needs: Event management (NEW), business info pages (NEW), community features (NEW)
- Keep aimvendors folder as reference until AIM vendor features (if any) are stable

**Strategic Context:**
- Same lifestyle goal as aimvendors: Dad needs Mike to run it, legitimate reason to stay home
- This is a pivot, not an addition - antiquesinmoore.com becomes THE project
- aimvendors.com fate TBD (Dad: "Not sure / your call")
- Phase 2 scope determined after March 7 pop-up (Dad: "Things are gonna be determined after that")

## Constraints

- **Timeline**: March 7, 2026 hard deadline — Site must be live for TV giveaway promotion (7 weeks from Jan 18)
- **Content Management**: Mike manages updates — Need mechanism for Mike to post event information without requiring code changes
- **Scalability**: Architecture must support Phase 2 expansion — Phase 1 shines as business site, Phase 2 adds features without rebuild
- **Mobile-First**: Mandatory mobile optimization — Most customers access on phones, need large touch targets for ease of use
- **Tech Familiarity**: Leverage React/Next.js experience — Mike familiar with this stack from aimvendors project
- **Performance**: Fast load times required — "Wow factor" can't sacrifice speed; excellent Core Web Vitals needed

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| antiquesinmoore.com as primary domain | Community recognizes "Antiques in Moore" name; Danny willing to transfer; stronger brand than "AIM Vendors" | — Pending |
| Event-driven focus (not vendor-focused) | Events create urgency, drive traffic, differentiate from "just another antique mall"; vendor feedback shows reluctance to post | — Pending |
| Fresh codebase (not copied from aimvendors) | Different scope (community hub + events vs vendor-only showcase) requires different architecture; clean start allows proper design | — Pending |
| Vendor posting is OPTIONAL Phase 2 | Vendor feedback: won't actively post; build for THE STORE (events, community) not FOR VENDORS (posting platform) | — Pending |
| "Wow factor" is mandatory | Not "another business site" - must impress with appearance AND content delivery; this is a showcase of Mike's capabilities | — Pending |
| Phase 2 scope TBD after March 7 | Dad: "Things are gonna be determined after that March 7 pop-up"; validate event-driven approach before expanding features | — Pending |
| In-person giveaway entry only | Collect emails at store (must visit in person); simpler Phase 1 scope; drives foot traffic | — Pending |
| Mike manages content updates | Dad: "We'll figure it out together"; Mike posts event info; need update mechanism that doesn't require code deployment | — Pending |

---
*Last updated: January 18, 2026 after initialization*
