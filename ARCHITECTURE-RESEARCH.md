# Architecture Research: Scalable Patterns for Progressive Expansion

**Research Date:** January 18, 2026
**Context:** Antiques in Moore site architecture - Phase 1 (simple) to Phase 2 (feature expansion) without rebuild

---

## Executive Summary

**Key Finding:** The **Modular Monolith** architecture pattern is the optimal approach for AIM's needs. It provides simplicity for Phase 1 launch while enabling Phase 2 expansion without requiring a complete rebuild.

**Why Modular Monolith Wins:**
- Single deployment unit (simpler ops than microservices)
- Strong module boundaries (enables future extraction to separate services)
- Reduced operational overhead (no network complexity, single database)
- Migration path to microservices if scale demands it later
- Industry-proven (Shopify handles 30TB/minute with modular monolith)

**Strategic Principle:** "Start with a modular monolith, and let it evolve" - Kelsey Hightower

---

## Core Architecture Principles

### 1. Modular Monolith Pattern

**Definition:** Software architecture combining unified deployment of traditional monolith with modularity of microservices. Structures application into loosely coupled, domain-driven modules within single codebase.

**For AIM Phase 1 (March 7, 2026 Launch):**
- Module: Events (calendar, giveaways, RSVPs)
- Module: Business Info (hours, location, contact, about)
- Module: Email Collection (newsletter signups, giveaway entries)
- Module: Content (pages, images, media)

**For AIM Phase 2 (Post-Launch):**
- Module: Vendors (posting, inventory, profiles) - ADD without refactoring existing
- Module: Community (photo galleries, news, updates) - ADD without refactoring existing
- Module: Analytics (traffic, engagement, conversions) - ADD without refactoring existing

**Key Benefits:**
- No network hops between modules (all in one process)
- Single database (simpler data integrity)
- Simple deployment (one build, one deploy)
- Clear boundaries enable future microservice extraction if needed

**Source:** [Modular Monolith Pattern](https://dev.to/shieldstring/modular-monolith-pattern-building-scalable-systems-without-microservice-overhead-1gol), [What Is a Modular Monolith?](https://www.milanjovanovic.tech/blog/what-is-a-modular-monolith)

---

### 2. Database Schema for Extensibility

**Core Principle:** Design schema with future expansion in mind, but don't over-engineer for unknown requirements.

**Entity vs Event Modeling:**
- **Entities:** Core objects with current state (Users, Vendors, Events, Locations, Products)
- **Events:** Records of actions over time (Giveaway Entries, Page Views, RSVP Actions, Vendor Posts)

**Recommended Schema Pattern for AIM:**

#### Phase 1 Tables (Required for March 7):
```
users (id, email, name, phone, created_at, updated_at, metadata_json)
  - metadata_json enables future custom fields without schema changes

events (id, title, description, event_date, end_date, location, image_url, event_type, metadata_json, created_at, updated_at)
  - event_type: 'giveaway', 'sale', 'popup', 'other'
  - metadata_json: flexible for giveaway rules, RSVP limits, etc.

giveaway_entries (id, event_id, user_id, entry_date, status, metadata_json)
  - Links users to giveaway events
  - metadata_json: capture method, social shares, etc.

email_signups (id, email, source, subscribed, created_at)
  - source: 'homepage', 'giveaway', 'footer', etc.

pages (id, slug, title, content, published, created_at, updated_at)
  - Static content management (about, hours, contact)
```

#### Phase 2 Tables (Future - Can Add Without Breaking Phase 1):
```
vendors (id, user_id, business_name, description, booth_number, verified, created_at, updated_at)
  - Links to existing users table
  - Adds vendor-specific fields

vendor_items (id, vendor_id, title, description, price, image_urls, category, status, created_at, updated_at)
  - Vendor inventory

galleries (id, event_id, title, description, created_at)
  - Photo galleries for past events

gallery_images (id, gallery_id, image_url, caption, uploaded_by, created_at)
```

**Extension Techniques:**
1. **metadata_json fields:** Store custom attributes without schema changes
2. **Modular tables:** New features = new tables that reference existing tables
3. **Backward compatibility:** New columns nullable, new tables optional
4. **Foreign key discipline:** Maintain referential integrity from day one

**Source:** [Database Schema Design Principles](https://medium.com/@artemkhrenov/database-schema-design-principles-every-developer-must-know-fee567414f6d), [Data Modeling - Entities and Events](https://dev.to/alexmercedcoder/data-modeling-entities-and-events-42i1)

---

### 3. Content Type Architecture

**For Phase 1:**
- Event content type (structured fields: title, date, description, image, type)
- Page content type (flexible content: about, hours, contact)
- Media content type (images, potentially videos later)

**For Phase 2 Expansion:**
- Vendor content type (business info, booth, contact)
- Product/Item content type (vendor inventory)
- Gallery content type (photo collections)
- News/Update content type (announcements)

**CMS Strategy:**
- **Headless CMS approach:** Content management decoupled from presentation
- **Custom content types:** Define own types beyond standard blog/page
- **Multi-channel ready:** Same content across web, social, email

**Flexible Content Modeling Principle:**
Content Types are building blocks defining structure and schema of content entries. Modern CMSs allow creating custom content types and fields easily adapted to changing requirements.

**Source:** [Content Modeling in Headless CMS](https://www.dotcms.com/blog/structured-content-and-content-modeling-in-a-headless-cms), [Schema Builder - Visual Content Modeling](https://www.datocms.com/features/schema-builder)

---

### 4. Technical Debt vs Innovation Trade-Offs

**Key Principle:** "Low levels of technical debt are expected - in fact, often necessary to move fast and iterate. However, too much technical debt compounds rapidly."

**For AIM Phase 1 (March 7 Deadline):**

**Acceptable Debt (Intentional Trade-Offs):**
- Simplified admin (manual event posting vs full CMS initially)
- Basic email collection (simple form vs advanced automation)
- Minimal analytics (Google Analytics vs custom dashboards)
- Static content (hardcoded hours/location vs dynamic CMS)

**Unacceptable Debt (Will Block Phase 2):**
- Monolithic code without module boundaries
- Schema without foreign keys or relationships
- Hardcoded business logic scattered throughout
- No separation of concerns (data, business logic, presentation mixed)

**Prudent vs Reckless Debt:**
- **Prudent:** "We're hardcoding hours in Phase 1 because CMS adds 2 weeks, but we'll add editable content in Phase 2"
- **Reckless:** "We're mixing database queries directly in UI components to ship faster"

**Refactoring Strategy:**
- Allocate 10-15% of post-launch capacity for debt repayment
- Continuous refactoring > big rewrites
- "Ship Phase 1, then immediately schedule Phase 2 planning" (not "ship and forget")

**Source:** [Technical Debt vs. Innovation](https://medium.com/@helal.hamed/technical-debt-vs-innovation-how-to-manage-trade-offs-in-startups-and-scale-ups-d00abd8add4a), [When to Prioritize Refactoring](https://www.revelo.com/blog/rethinking-technical-debt-prioritizing-refactoring-vs-new-features)

---

## Real-World Case Studies

### Airbnb: Simple to Complex Evolution

**Early Stage (2009):**
- Simple website, basic listings
- Generating $200/week in revenue

**Growth Catalyst:**
- Design-driven improvements (professional photos)
- Doubled revenue to $400/week, then scaled

**Current State (2026):**
- $8.4 billion revenue, 192 countries
- Component-based architecture with modular elements
- React for web/mobile, AWS for infrastructure
- AI/ML for fraud detection, pricing, recommendations

**Key Lesson:** "Start simple, enhance based on actual user needs, scale architecture as growth demands it."

**Source:** [Airbnb Case Study](https://savvycomsoftware.com/blog/airbnb-case-study/), [How Design Was Key to Airbnb's Success](https://passionates.com/how-great-design-was-key-to-airbnbs-massive-success/)

---

### Etsy: Monolith to Modular Monolith

**Early Stage:**
- Built with monolithic architecture
- Enabled quick development and feature deployment
- Worked until scale created issues

**Evolution:**
- Migrated to **modular monolithic architecture** (not full microservices)
- Improved deployment processes and performance
- 2-tier API with meta-endpoints to aggregate services
- Serves millions of buyers/sellers, tens of millions of items

**Key Lesson:** "You don't have to go full microservices - modular monolith provides scaling benefits without operational complexity."

**Source:** [Etsy Microservices Examples](https://www.sayonetech.com/blog/5-microservices-examples-amazon-netflix-uber-spotify-and-etsy/), [Microservices, Monoliths and Laser Nail Guns](https://medium.com/s-c-a-l-e/microservices-monoliths-and-laser-nail-guns-how-etsy-finds-the-right-focus-in-a-sea-of-cf718a92dc90)

---

### Shopify: Modular Monolith at Massive Scale

**Architecture:**
- Modular monolith design
- Handles 30TB/minute during Black Friday peak
- Each module could be extracted to microservice if needed
- Demonstrates modular monolith works at extreme scale

**Key Lesson:** "Modular monolith is not a stepping stone - it's a legitimate final architecture even at massive scale."

**Source:** [Behold the Modular Monolith](https://dev.to/naveens16/behold-the-modular-monolith-the-architecture-balancing-simplicity-and-scalability-2d4)

---

## When to Build for Future vs Stay Simple

### Build for Future When:
1. **Core data models are known** (users, events, vendors exist in Phase 1 or Phase 2)
   - Design relationships correctly from day one (foreign keys, referential integrity)
   - Use extensible patterns (metadata_json fields for unknown attributes)

2. **Module boundaries are clear** (events, vendors, content, users are separate concerns)
   - Enforce separation from day one (separate directories, clear interfaces)
   - Enables future extraction without rewriting

3. **Cost of change is high** (database schema changes, authentication patterns)
   - Get it right initially (changing auth mid-flight is painful)
   - Use proven patterns (don't reinvent security, use established libraries)

### Stay Simple When:
1. **Requirements are genuinely unknown** (which community features will users want?)
   - Ship basic version, observe usage, then build what's needed
   - Don't build speculatively ("we might need forums" = don't build forums yet)

2. **Feature might not be used** (advanced vendor analytics before vendors exist)
   - Wait for Phase 2 launch to validate vendor adoption
   - Then add analytics based on actual needs

3. **External dependency** (third-party integrations, payment processors)
   - Use simplest integration initially (direct links to payment pages)
   - Add sophisticated integration when volume justifies it

**The False Choice:**
"The notion that we either have to rush to market OR design for the future—but not both—is a false choice. Once teams have experience, it takes no additional time to use paired test-first techniques and refactor as you go."

**Source:** [Avoiding Technical Debt](https://resources.scrumalliance.org/Article/avoiding-technical-debt-core-four-practices)

---

## Architecture Recommendations for AIM

### Phase 1: March 7, 2026 Launch

**Architecture:** Modular Monolith

**Modules:**
1. **Events Module**
   - Event calendar/listing
   - Giveaway entry system
   - Event detail pages

2. **Content Module**
   - Static pages (about, hours, contact)
   - Image management
   - Basic CMS

3. **User Module**
   - Email collection
   - User records (for giveaway entries)
   - Basic authentication (if needed for giveaway entries)

4. **Shared/Core Module**
   - Database access
   - Email sending
   - Image upload/storage
   - Utilities

**Tech Stack Considerations:**
- **Framework:** Next.js (React-based, supports modular architecture, excellent for SEO)
- **Database:** PostgreSQL (relational integrity, JSON fields for flexibility, proven at scale)
- **Storage:** Vercel Blob or Supabase Storage (simple integration, scalable)
- **Email:** Resend or SendGrid (event notifications, giveaway confirmations)
- **Hosting:** Vercel (simple deployment, scales automatically, integrates with Next.js)

**Database Schema:**
- Implement Phase 1 tables with foreign keys and relationships from day one
- Use metadata_json fields for flexible attributes
- Design user/event relationship structure that accommodates vendors later

**Build for Future:**
- Separate module directories from day one
- Clear module interfaces (events module doesn't directly access user database, uses interface)
- Extensible schema (vendor tables can reference user table later)

**Stay Simple:**
- Manual event posting (admin adds events via code or simple form)
- Basic email (confirmation only, no automation)
- Simple analytics (Google Analytics, no custom dashboards)
- Static business info (hardcode hours/location in content)

---

### Phase 2: Post-Launch Expansion

**New Modules to Add:**

1. **Vendors Module**
   - Vendor registration/profiles
   - Item posting system
   - Vendor dashboard
   - References existing User module

2. **Community Module**
   - Photo galleries
   - News/updates
   - Past event archives
   - References existing Event module

3. **Analytics Module**
   - Traffic analysis
   - Engagement metrics
   - Conversion tracking
   - Reads data from all modules

**Add Without Rebuild:**
- New modules reference existing tables (vendors.user_id -> users.id)
- Existing modules don't need changes (events module unaware of vendors)
- Share core utilities (same database access, email sending, image storage)

**Database Expansion:**
- Add vendor tables (reference users.id)
- Add gallery tables (reference events.id)
- Existing tables unchanged (maybe add columns, but structure stays)

**Migration Path (If Needed Later):**
- Extract high-traffic modules to separate services (if vendor posting becomes heavy)
- Use Strangler Fig Pattern (gradually replace modules while monolith runs)
- Separate databases per module (if data isolation becomes critical)

---

## Data Model Recommendations

### Core Entities (Phase 1)

```sql
-- Users (email signups, giveaway entries)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'
);

-- Events (March 7 giveaway, future events)
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP,
  location VARCHAR(255),
  image_url TEXT,
  event_type VARCHAR(50) NOT NULL, -- 'giveaway', 'sale', 'popup', 'other'
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'
);

-- Giveaway Entries (who entered which giveaway)
CREATE TABLE giveaway_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  entry_date TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'entered', -- 'entered', 'winner', 'notified', 'claimed'
  metadata JSONB DEFAULT '{}',
  UNIQUE(event_id, user_id) -- One entry per user per event
);

-- Email Signups (newsletter, general interest)
CREATE TABLE email_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  source VARCHAR(100), -- 'homepage', 'giveaway', 'footer', 'event'
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Pages (static content management)
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(100) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Phase 2 Entities (Add Later Without Breaking Phase 1)

```sql
-- Vendors (booth holders, item sellers)
CREATE TABLE vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  business_name VARCHAR(255) NOT NULL,
  description TEXT,
  booth_number VARCHAR(20),
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'
);

-- Vendor Items (inventory posted by vendors)
CREATE TABLE vendor_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  image_urls TEXT[], -- Array of image URLs
  category VARCHAR(100),
  status VARCHAR(50) DEFAULT 'available', -- 'available', 'sold', 'reserved'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Galleries (photo collections from events)
CREATE TABLE galleries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Gallery Images (individual photos in galleries)
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  gallery_id UUID NOT NULL REFERENCES galleries(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  uploaded_by UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Key Design Principles:**
1. **Foreign Keys from Day One:** Referential integrity prevents orphaned data
2. **UUIDs:** Easier to merge databases or distribute later than auto-increment IDs
3. **JSONB metadata:** Flexible attributes without schema changes
4. **Timestamps:** Track creation/updates for all entities
5. **Soft Constraints:** Use application logic for business rules, database for data integrity
6. **Nullable References:** Phase 2 tables reference Phase 1, but Phase 1 doesn't know Phase 2 exists

---

## Progressive Enhancement Strategy

### Phase 1 (Weeks 1-7: Now to March 7, 2026)

**Must Have:**
- Event listing page (shows upcoming events)
- March 7 TV Giveaway detail page
- Giveaway entry form (email capture, user info)
- Business info pages (hours, location, about, contact)
- Mobile-responsive design
- Basic SEO

**Nice to Have:**
- Email confirmation for giveaway entries
- Admin interface for adding events
- Image galleries for events
- Social sharing

**Explicitly Defer:**
- Vendor posting features
- Community photo uploads
- Advanced analytics
- Content management system

### Phase 2 (Post-March 7, After Launch Validation)

**Evaluate Based on Phase 1 Results:**
- Did giveaway drive traffic? (If yes -> more giveaway features)
- Did users ask about vendors? (If yes -> vendor posting)
- Did users engage with content? (If yes -> community features)

**Add Features Based on Validation:**
- Vendor registration + posting (if demand exists)
- Community galleries (if users want to share)
- Advanced event features (RSVP, capacity limits, recurring)
- Content CMS (if frequent updates needed)

**Architecture Enables Addition:**
- New modules don't touch existing code
- New tables reference existing tables
- Existing features keep working
- No "big rewrite" required

---

## Avoiding Over-Engineering

### Don't Build Speculatively

**Bad:**
- "We might need multi-location support someday" -> Build location entities now
- "Vendors might want inventory sync" -> Build API integrations now
- "Could add forums for community" -> Build forum module now

**Good:**
- "March 7 is one location" -> Hardcode location in Phase 1
- "No vendors yet" -> No vendor features in Phase 1
- "No evidence users want forums" -> No forum in Phase 1 or Phase 2

### Do Build Foundationally

**Good:**
- "Users and events will exist in both phases" -> Design relationship correctly now
- "Images will be everywhere" -> Implement storage pattern correctly now
- "Security matters" -> Use proven auth library now, not custom

**Principle:**
Build the foundation right (data models, core patterns, security). Stay simple on features (ship minimal, add based on validation).

---

## When to Refactor vs Rebuild

### Refactor When:
- Module boundaries were maintained (can improve code within module)
- Data model is sound (can optimize queries, add indexes)
- Core patterns are good (can enhance implementations)

**Example for AIM:**
Phase 1 ships with basic email sending. Phase 2 adds email templates, automation, tracking. Same email module, better implementation.

### Rebuild When:
- No module boundaries (business logic mixed with UI throughout)
- Data model is broken (missing foreign keys, no relationships)
- Core patterns are wrong (security vulnerabilities, fundamental architectural flaws)

**What Modular Monolith Prevents:**
By maintaining module boundaries from day one, AIM avoids the "big rewrite" trap. Phase 2 adds modules, doesn't rewrite Phase 1.

---

## Architecture Decision Framework

**For Every Technical Decision in Phase 1:**

1. **Is this foundational?** (data models, security, core patterns)
   - Yes -> Research and implement correctly now
   - No -> Use simplest approach that works

2. **Will Phase 2 need this?**
   - Yes -> Design with extensibility (modular, interfaces, metadata fields)
   - No -> Implement minimally (can change later)

3. **Is the requirement validated?**
   - Yes -> Build the feature
   - No -> Defer until validated

4. **What's the cost of changing later?**
   - High (schema, auth) -> Get it right now
   - Low (UI, copy, styling) -> Ship fast, iterate

**Example Applications:**

| Decision | Foundational? | Phase 2 Needs? | Validated? | Cost to Change? | Verdict |
|----------|---------------|----------------|------------|-----------------|---------|
| User/event data model | Yes | Yes | Yes | High | Design correctly now |
| Giveaway entry form | No | Yes | Yes | Low | Build minimally, enhance later |
| Vendor posting | No | Yes | No | Medium | Defer to Phase 2 |
| Email automation | No | Maybe | No | Low | Defer (manual emails fine) |
| Photo galleries | No | Yes | No | Low | Defer to Phase 2 |
| Hours/location CMS | No | Maybe | No | Low | Hardcode in Phase 1 |

---

## Summary: Build vs Buy vs Defer

### Build Now (Phase 1):
- Event data model with relationships
- User data model with extensibility
- Giveaway entry system
- Event listing/detail pages
- Business info pages
- Email capture
- Image storage pattern
- Module structure

### Buy/Use Existing (Phase 1):
- Framework (Next.js)
- Database (PostgreSQL)
- Hosting (Vercel)
- Storage (Vercel Blob or Supabase)
- Email (Resend)
- Analytics (Google Analytics)

### Defer (Phase 2):
- Vendor features
- Community features
- Advanced event features
- Content CMS
- Custom analytics
- Social features

---

## Sources

- [Modular Monolith Pattern](https://dev.to/shieldstring/modular-monolith-pattern-building-scalable-systems-without-microservice-overhead-1gol)
- [What Is a Modular Monolith?](https://www.milanjovanovic.tech/blog/what-is-a-modular-monolith)
- [Behold the Modular Monolith](https://dev.to/naveens16/behold-the-modular-monolith-the-architecture-balancing-simplicity-and-scalability-2d4)
- [Database Schema Design Principles](https://medium.com/@artemkhrenov/database-schema-design-principles-every-developer-must-know-fee567414f6d)
- [Data Modeling - Entities and Events](https://dev.to/alexmercedcoder/data-modeling-entities-and-events-42i1)
- [Technical Debt vs. Innovation](https://medium.com/@helal.hamed/technical-debt-vs-innovation-how-to-manage-trade-offs-in-startups-and-scale-ups-d00abd8add4a)
- [When to Prioritize Refactoring](https://www.revelo.com/blog/rethinking-technical-debt-prioritizing-refactoring-vs-new-features)
- [Airbnb Case Study](https://savvycomsoftware.com/blog/airbnb-case-study/)
- [Etsy Microservices Examples](https://www.sayonetech.com/blog/5-microservices-examples-amazon-netflix-uber-spotify-and-etsy/)
- [Choosing Scalable Architecture: Headless CMS vs. Monolithic](https://www.fullestop.com/blog/headless-cms-vs-monolithic-choosing-the-right-architecture-for-scalable-custom-websites)
- [Content Modeling in Headless CMS](https://www.dotcms.com/blog/structured-content-and-content-modeling-in-a-headless-cms)
- [Avoiding Technical Debt](https://resources.scrumalliance.org/Article/avoiding-technical-debt-core-four-practices)
