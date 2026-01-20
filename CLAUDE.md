# CLAUDE.md — AIM (Antiques in Moore)

**Domain:** antiquesinmoore.com
**Status:** PLANNING (domain transfer in progress)
**Priority:** 1 (replaces aimvendors as keystone project)

---

## Project Overview

**What:** Community hub for Antiques in Moore - event-driven site that includes vendor showcases, event information, and business details.

**Why:**
- Domain secured (antiquesinmoore.com from Danny)
- Events drive traffic (March 7 TV giveaway during Outdoor Pop-up)
- Stronger value proposition than vendor-only site
- Aligns with what community already calls the place

**Current phase:** Awaiting Dad's input on scope (see `antiquesinmoore-strategy-questions.md` and PDF version in this folder)

---

## Architecture Vision

**antiquesinmoore.com structure:**
1. **Event Hub** - Upcoming events, giveaways, special sales (PRIMARY FOCUS)
2. **Vendor Showcase** - Vendors post items, shoppers browse (builds on aimvendors.com learnings)
3. **Business Info** - Hours, location, contact, about the store
4. **Community Features** - News, updates, photo galleries from past events

**Key differentiator:** Event-driven (not just vendor listings)

---

## Tech Stack

**TBD** - Will be determined during planning phase based on:
- Event management needs (calendar, RSVP, giveaway entries?)
- Vendor posting features (reuse aimvendors approach?)
- Content management (who updates events - Dad, Mike, staff?)
- Integration needs (social media, email signups?)

---

## Project Structure

**TBD** - Fresh codebase, not copied from aimvendors

---

## Domain Strategy

**Primary:** antiquesinmoore.com
**Secondary:** aimvendors.com (decision pending - redirect, keep separate, or retire)

**Domain transfer:** In progress with Danny (authorization code received)

---

## Key Decisions Pending

**Waiting on Dad's answers to:**
1. Event frequency and ownership
2. March 7 giveaway mechanics (online entry? in-person only?)
3. Site content priorities (what's MVP vs Phase 2?)
4. Timeline (hard deadline for March 7 or soft?)
5. aimvendors.com fate (redirect, keep, retire?)

**Source:** `antiquesinmoore-strategy-questions.md` (in this folder, PDF version created for Dad, Jan 18, 2026)

---

## GSD Applicability

**YES** - This is complex, multi-faceted work:
- Event management system
- Vendor features (informed by aimvendors learnings)
- Business site content
- Community hub features

GSD planning is MANDATORY before implementation.

---

## Frontend-Design Usage

**YES** - Use `/frontend-design` for ALL UI work:
- Landing page (event-focused, not vendor-focused)
- Event detail pages
- Vendor showcase pages
- Business info pages
- Forms (event RSVP, giveaway entry, vendor posting)

---

## Session Protocols

**On ANY session start** (greeting, "continue", or first message):
1. First read `E:\MRAMSEYBUILDS\CLAUDE.md` (master protocols, The Refinement, commands)
2. Then read this file (project context)
3. Then read SESSION.md (resume point)

This ensures hub upgrades propagate to all projects.

---

**On "continue" (project session start):**
- **MANDATORY:** Follow `.claude/protocols/PROJECT-SESSION-FLOW.md`
- Location: `E:\MRAMSEYBUILDS\.claude\protocols\PROJECT-SESSION-FLOW.md`

**What PROJECT-SESSION-FLOW.md does:**
1. Read THIS project's CLAUDE.md (ground in project context)
2. Read THIS project's SESSION.md (load state)
3. Check git status (if repo exists)
4. Check "In Progress" section → resume immediately if present
5. Present brief status and ready to work

**What it does NOT do:**
- Weather briefing (hub-only)
- Daily tips (hub-only)
- News offer (hub-only)
- Ideas folder check (hub-only)
- Backpocket check (hub-only)
- Active Hub Work menu (hub-only)
- Project selection (hub-only)

**Skill auto-invoke (from PROJECT-SESSION-FLOW.md):**
- GSD: If `.planning/phases/[XX-name]/PLAN.md` exists → Load and execute
- Frontend-Design: If building UI → Load before coding
- Learnings: Auto-load relevant files (UI-PATTERNS.md, VETTED-LIBRARIES.md, etc.)

**On "done"/"exit"/"checkpoint":** Follow master hub protocols at `E:\MRAMSEYBUILDS\CLAUDE.md`

---

## Reference Files

**Learnings from aimvendors:**
- Vendor posting UX patterns
- Image handling (Supabase storage, Vercel optimization lessons)
- OAuth implementation
- Mobile-first design decisions

**Reusable from aimvendors:**
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

**Dad's Recovery:**
- Right shoulder replacement Jan 14, 2026
- In pain, dealing with real-life issues
- Mike is driving this project (Dad provides input when ready)
- No pressure on Dad for timeline or decisions

**March 7 Giveaway:**
- TV giveaway during Outdoor Pop-up event
- Potential launch moment for site
- ~7 weeks away (tight but doable)
- Waiting to confirm if this is hard deadline or just first event to feature

**The Real Goal:** Same as aimvendors - lifestyle design, Dad needs Mike to run it, legitimate reason to stay home.

---

## Notes

**This is a pivot, not an addition:**
- antiquesinmoore.com becomes THE project
- aimvendors.com work informs vendor features here
- Fresh start allows proper architecture for broader scope
- Keep aimvendors folder as reference until this is stable
