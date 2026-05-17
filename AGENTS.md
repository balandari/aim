# AGENTS.md -- AIM (Antiques in Moore)

**Domain:** antiquesinmoore.com (LIVE on Vercel; renews Nov 16, 2027)
**Status:** LIVE — site deployed and serving. March 7 launch event passed; backlog tracks ongoing edits.
**Priority:** 1 (replaces aimvendors as keystone project)

---

## Session Protocols

**On any session start:** Read this AGENTS.md, then follow `D:\MRAMSEYBUILDS\.Codex\protocols\PROJECT-SESSION-FLOW.md`.

**On done/exit/checkpoint:** Hub master AGENTS.md applies (`D:\MRAMSEYBUILDS\AGENTS.md`).

**Context Search:** Use `search_context` MCP for prior decisions/learnings. Auto-prompt `/cc` after architectural decisions, debugging breakthroughs, or convention changes.

---

## Project Overview

**What:** Community hub for Antiques in Moore -- event-driven site that includes vendor showcases, event information, and business details.

**Why:**
- Domain secured (antiquesinmoore.com from Danny)
- Events drive traffic (March 7 TV giveaway during Outdoor Pop-up)
- Stronger value proposition than vendor-only site
- Aligns with what community already calls the place

**Current phase:** Awaiting Dad's input on scope (see `antiquesinmoore-strategy-questions.md` and PDF version in this folder).

---

## Architecture Vision

**antiquesinmoore.com structure:**
1. **Event Hub** -- upcoming events, giveaways, special sales (PRIMARY FOCUS)
2. **Vendor Showcase** -- vendors post items, shoppers browse (builds on aimvendors learnings)
3. **Business Info** -- hours, location, contact, about the store
4. **Community Features** -- news, updates, photo galleries from past events

**Key differentiator:** event-driven (not just vendor listings).

---

## Tech Stack

TBD -- decide during planning, based on:
- Event management needs (calendar, RSVP, giveaway entries?)
- Vendor posting features (reuse aimvendors approach?)
- Content management (who updates events -- Dad, Mike, staff?)
- Integration needs (social media, email signups?)

---

## Project Structure

TBD -- fresh codebase, not copied from aimvendors.

---

## Domain Strategy

- **Primary:** antiquesinmoore.com
- **Secondary:** aimvendors.com (decision pending -- redirect, keep separate, or retire)
- **Domain transfer:** completed from Danny 2026-01-18 (Order #192360192, $11.68 incl. 1-yr renewal); next renewal Nov 16, 2027

---

## Key Decisions Pending

Waiting on Dad's answers to:
1. Event frequency and ownership
2. March 7 giveaway mechanics (online entry? in-person only?)
3. Site content priorities (what's MVP vs Phase 2?)
4. Timeline (hard deadline for March 7 or soft?)
5. aimvendors.com fate (redirect, keep, retire?)

Source: `antiquesinmoore-strategy-questions.md` (in this folder, PDF version created for Dad, Jan 18, 2026).

---

## Skills

- **GSD: MANDATORY** -- complex multi-faceted work (event management, vendor features, business site, community hub).
- **Frontend-Design: ALL UI** -- landing page (event-focused), event detail pages, vendor showcase, business info, forms (event RSVP, giveaway entry, vendor posting).

---

## Reference Files

**Reusable from aimvendors:**
- Vendor posting UX patterns
- Image handling (Supabase storage, Vercel optimization lessons)
- Google OAuth setup patterns
- Supabase configuration approaches
- Vercel deployment workflows
- Mobile camera integration patterns

**Different from aimvendors:**
- Event management (NEW)
- Business info pages (NEW)
- Community features (NEW)
- Multi-faceted architecture (not single-purpose)

---

## Important Context

**Dad's Recovery:** right shoulder replacement Jan 14, 2026. In pain, dealing with real-life issues. Mike is driving this project (Dad provides input when ready). No pressure on Dad for timeline or decisions.

**March 7 Giveaway:** TV giveaway during Outdoor Pop-up event. Potential launch moment for site. ~7 weeks away (tight but doable). Waiting to confirm if hard deadline or just first event to feature.

**The Real Goal:** same as aimvendors -- lifestyle design, Dad needs Mike to run it, legitimate reason to stay home.

---

## Notes

This is a pivot, not an addition:
- antiquesinmoore.com becomes THE project
- aimvendors.com work informs vendor features here
- Fresh start allows proper architecture for broader scope
- Keep aimvendors folder as reference until this is stable

---

## Hub Context

This project lives in `D:\MRAMSEYBUILDS\projects\aim\`. All protocols inherited from `D:\MRAMSEYBUILDS\AGENTS.md`.
