# Tech Stack Research: Distinctive, Custom-Designed Websites (2026)

**Research Date:** January 18, 2026
**Project:** antiquesinmoore.com
**Philosophy:** "We create. We don't assemble." - The Refinement

---

## Executive Summary

This research investigates modern tech stacks that enable building distinctive, custom-designed websites quickly while maintaining The Refinement philosophy - creating value rather than assembling pre-built components.

**Key Finding:** The 2026 landscape offers powerful tools for rapid custom creation. The winning combination pairs framework infrastructure (Next.js with React Server Components) with headless primitives (Radix UI/Base UI via shadcn/ui) and design tokens (Tailwind with heavy customization), enabling distinctive design without starting from zero.

**Recommended Stack for antiquesinmoore.com:**
- **Framework:** Next.js 15+ (App Router, React Server Components)
- **Styling:** Tailwind CSS with custom design tokens + shadcn/ui primitives
- **CMS:** Payload CMS (TypeScript-first, developer-friendly, custom fields)
- **Animation:** Framer Motion (React-native, smaller bundle, modern API)
- **Deployment:** Vercel (Next.js optimization, edge functions, preview deployments)
- **Event Management:** Custom-built using Payload + calendar integrations (not third-party platform)

---

## Framework Analysis

### The 2026 Landscape

Four major frameworks dominate custom web development in 2026: Next.js, Remix, Astro, and SvelteKit. Each excels in different areas.

| Framework | Best For | Performance | Bundle Size | DX | Custom Design |
|-----------|----------|-------------|-------------|-----|---------------|
| **Next.js** | Full-stack React apps, dynamic content | Excellent (RSC) | Medium | Excellent | Full control |
| **Astro** | Content-heavy, minimal JS | Outstanding | Smallest | Good | Full control |
| **Remix** | Data-heavy apps, complex server logic | Excellent | Medium | Excellent | Full control |
| **SvelteKit** | Performance-critical, simpler apps | Outstanding | Small (50% smaller) | Good | Full control |

### Framework Recommendation: Next.js

**Why Next.js for antiquesinmoore.com:**

1. **React Server Components (2026 Maturity)**
   - Only framework with production-ready RSC support
   - Reduces shipped JavaScript significantly
   - Better Time to Interactive (TTI) on slower devices
   - Server-side data fetching eliminates waterfall requests
   - Source: [React Server Components Performance](https://www.developerway.com/posts/react-server-components-performance)

2. **Community & Ecosystem**
   - Largest community means more solutions for custom problems
   - Vercel's tight integration provides deployment advantages
   - Extensive documentation for custom implementations

3. **Flexibility for Distinctive Design**
   - No prescribed UI patterns - full creative control
   - Server Components keep client bundle minimal for custom animations
   - App Router supports complex custom layouts

4. **Event Management Needs**
   - Dynamic content (upcoming events, RSVP counts)
   - Server-side logic for giveaway entries
   - Real-time updates for vendor posts
   - Form handling with validation

**Trade-offs:**
- Larger bundle than Astro/SvelteKit (but RSC mitigates this)
- Vercel-optimized (works elsewhere but loses edge)
- Steeper learning curve than Astro

**Why NOT the alternatives:**
- **Astro:** Best for static/content sites. Event management requires more dynamic features.
- **Remix:** Excellent but smaller ecosystem. Next.js has more resources for custom solutions.
- **SvelteKit:** Great performance but smaller community. Less support for custom complex features.

Source: [Framework Comparison 2026](https://www.nxcode.io/resources/news/nextjs-vs-remix-vs-sveltekit-2025-comparison)

---

## Styling Approach

### The Custom Design Challenge

The Refinement requires creating distinctive designs, not assembling templates. The 2026 solution: **Tailwind CSS with custom design tokens + headless primitives**.

### Why Tailwind for Custom Design

**Common Misconception:** "Tailwind makes everything look the same."

**Reality:** Tailwind is a *tool*, not a template. Generic appearance comes from using default values without customization.

**How Tailwind Enables Distinctive Design:**

1. **Design Tokens in `tailwind.config.js`**
   - Define custom color palettes (not default blues/grays)
   - Create brand-specific spacing scales
   - Custom typography systems (font families, sizes, line heights)
   - Unique border radii, shadows, animations
   - Source: [Tailwind Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns)

2. **Full Creative Control**
   - Every utility is customizable
   - No prescribed aesthetic
   - Build any design that can be expressed in CSS
   - Source: [Design Tokens Guide](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/)

3. **Performance Benefits**
   - Tree-shaking removes unused styles
   - Smaller CSS bundles than traditional approaches
   - Works seamlessly with React Server Components

**Example Custom Configuration:**
```javascript
// tailwind.config.js - Antiques in Moore brand
module.exports = {
  theme: {
    extend: {
      colors: {
        'aim-vintage': '#8B4513', // Custom brown
        'aim-cream': '#F5F5DC',
        'aim-accent': '#D4A574'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'], // Custom fonts
        'body': ['Lato', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem', // Custom spacing for specific needs
      },
      borderRadius: {
        'vintage': '0.25rem', // Subtle custom radius
      }
    }
  }
}
```

This creates a unique design language - not generic Tailwind.

### Headless Components: shadcn/ui + Radix UI

**What:** Component primitives with behavior/accessibility, zero imposed styling.

**How it supports "We create":**
- Provides infrastructure (accessibility, keyboard nav, focus management)
- Zero visual opinions - you style everything
- Copy source code into codebase (not npm dependency)
- Full customization capability
- Source: [shadcn/ui Foundation](https://ui.shadcn.com/)

**Why shadcn/ui over component libraries:**
| Approach | We create? | Distinctive? | Speed |
|----------|------------|--------------|-------|
| shadcn/ui + Radix | YES | YES | Fast |
| Material UI, Chakra | NO | NO | Fast |
| Build from scratch | YES | YES | Slow |

**Note:** Radix UI creators announced reduced maintenance. shadcn/ui now supports Base UI as alternative primitive library. Choose Base UI for new projects.

Source: [shadcn/ui vs Radix UI](https://shadcnstudio.com/blog/radix-ui-vs-shadcn-ui)

### Animation: Framer Motion

**For distinctive, polished experiences:**
- React-native API (declarative, integrates with components)
- Smaller bundle than GSAP (32 KB gzipped)
- Excellent for UI animations (page transitions, micro-interactions)
- Layout animations with zero config
- Source: [Framer Motion vs GSAP](https://motion.dev/docs/gsap-vs-motion)

**When to use GSAP instead:**
- Complex timeline sequences
- Marketing hero sections with intricate animations
- Non-React contexts

For antiquesinmoore.com (event hub, vendor showcase, forms), Framer Motion is the right choice.

### Recommended Styling Stack

**Core:** Next.js + Tailwind CSS + shadcn/ui (Base UI primitives) + Framer Motion

**Why this combination:**
1. Infrastructure without aesthetic constraints
2. Full creative control for distinctive design
3. Accessibility built-in (Radix/Base UI handles it)
4. Fast development (utilities + primitives)
5. Small bundles (Tailwind tree-shaking + RSC)
6. Polish without complexity (Framer Motion)

**This aligns with The Refinement:**
- Creating custom designs (not assembling templates)
- Using infrastructure (framework, primitives, utilities)
- Avoiding pre-built value (component libraries with opinions)

---

## Content Management

### The CMS Challenge for Non-Technical Users

**Key Research Finding:** Headless CMS platforms in 2026 still present usability challenges for non-technical users compared to traditional CMS solutions.

> "Setting up an intuitive content preview for non-technical users can be more complex than with a traditional CMS because the backend is decoupled from the frontend."

Source: [Headless CMS 2026](https://thebcms.com/blog/headless-cms-101)

### CMS Options Analysis

| CMS | Developer Experience | Non-Technical Users | Custom Fields | TypeScript | Self-Host |
|-----|---------------------|---------------------|---------------|------------|-----------|
| **Payload** | Excellent | Good | Excellent | Native | Yes |
| **Strapi** | Good | Good | Good | Supported | Yes |
| **Sanity** | Complex | Fair | Excellent | Complex | No |
| **Contentful** | Good | Fair | Good | Supported | No |

### CMS Recommendation: Payload CMS

**Why Payload:**

1. **TypeScript-First Architecture**
   - Everything typed: fields, endpoints, hooks, schemas
   - Prevents entire classes of issues early
   - Lowers barrier for new developers
   - Source: [Payload vs Strapi vs Sanity](https://pooya.blog/blog/headless-cms-consultancy/)

2. **Developer Experience = Faster Custom Features**
   - Config-based setup (no admin UI schema building)
   - Define schema in code, get instant TypeScript backend + admin panel
   - Custom fields are straightforward
   - Source: [Payload Developer Experience](https://kernelics.com/blog/headless-cms-comparison-guide)

3. **Custom Field Flexibility**
   - Strong type safety for group fields
   - Custom metadata for uploads (vendor item photos)
   - Schema-driven approach with full control
   - Source: [Payload Custom Fields](https://shakuro.com/blog/payload-vs-other-cms)

4. **Non-Technical User Considerations**
   - Auto-generated admin panel (Dad doesn't write code)
   - Clean UI for content entry
   - Better than Sanity's steep learning curve
   - Self-hosted = full control over UX improvements

5. **Event Management Fit**
   - Custom collections for events, vendors, items, giveaways
   - Hooks for custom logic (giveaway entry validation)
   - Media handling for vendor item photos
   - Relational fields for vendor-to-items connections

**Why NOT alternatives:**
- **Strapi:** Less type-safe, AI features not needed, component UI workarounds for custom metadata
- **Sanity:** GROQ learning curve, complex TypeScript, marketed to non-devs (but harder for them)
- **Contentful:** Vendor lock-in, can't self-host, more expensive

**Dad's User Experience:**
- Payload auto-generates clean admin UI
- Forms for adding events (title, date, description, photos)
- Vendor management interface
- Giveaway entry viewing
- No code required

Source: [Payload CMS Developer Experience](https://payloadcms.com/compare/sanity)

---

## Deployment Platform

### Vercel vs Netlify (2026)

| Feature | Vercel | Netlify |
|---------|--------|---------|
| **Next.js Optimization** | Native (same company) | Good |
| **Edge Functions** | V8 runtime, 9x faster cold starts | Deno runtime, fast cold starts |
| **Preview Deployments** | Excellent | Excellent |
| **Framework Support** | Next.js-centric | Framework-agnostic |
| **Pricing** | Higher for serverless | Lower for bandwidth |

### Deployment Recommendation: Vercel

**Why Vercel for antiquesinmoore.com:**

1. **Next.js Integration**
   - Built by same team
   - Automatic optimization
   - Seamless App Router + RSC deployment
   - Source: [Vercel vs Netlify 2026](https://northflank.com/blog/vercel-vs-netlify-choosing-the-deployment-platform-in-2025)

2. **Preview Deployments for Client Review**
   - Every git push = unique URL
   - Show Dad new features before going live
   - Test event pages before launch

3. **Edge Functions Performance**
   - 9x faster cold starts vs serverless
   - Better for dynamic event data
   - Source: [Edge Performance 2026](https://dev.to/dataformathub/cloudflare-vs-vercel-vs-netlify-the-truth-about-edge-performance-2026-50h0)

4. **Developer Experience**
   - Zero-config deployments
   - Automatic HTTPS
   - Built-in analytics

**Why NOT Netlify:**
- Framework-agnostic advantage doesn't matter (we're using Next.js)
- Vercel's Next.js optimization is superior
- Similar pricing for this project scale

**Deployment Strategy:**
- Frontend (Next.js): Vercel
- Backend/CMS (Payload): Self-hosted or Vercel (Payload can deploy to Vercel)
- Database: Vercel Postgres or external (Supabase, Railway)

Source: [Vercel Edge Functions](https://medium.com/@takafumi.endo/how-vercel-simplifies-deployment-for-developers-beaabe0ada32)

---

## Event Management Approach

### Third-Party Platforms vs Custom Build

**Third-party options researched:**
- RSVPify, Jotform, Zoho Backstage, AddEvent
- Source: [Event RSVP Tools 2026](https://www.jotform.com/rsvp-tool/)

**Why NOT third-party platforms:**
1. **Generic user experience** (violates "We create")
2. **Limited customization** (can't match site design)
3. **Data silos** (vendor info separate from events)
4. **Monthly costs** (unnecessary with custom build)
5. **Integration friction** (embed widgets, not native)

### Custom Event Management Strategy

**Build with Payload CMS + Next.js:**

**Collections in Payload:**
```typescript
// Event collection
{
  title: string
  date: datetime
  description: richText
  eventType: 'giveaway' | 'sale' | 'popup' | 'special'
  rsvpEnabled: boolean
  rsvpLimit?: number
  images: upload[]
  relatedVendors: relationship[]
}

// RSVP collection
{
  event: relationship
  name: string
  email: string
  phone?: string
  entryDate: datetime
  confirmed: boolean
}

// Giveaway Entry collection
{
  event: relationship
  name: string
  email: string
  phone: string
  agreeToContact: boolean
  entryDate: datetime
}
```

**Features:**
- Dad manages events via Payload admin
- Custom calendar view on site
- RSVP forms match site design
- Giveaway entry validation (one per email)
- Email confirmations (Payload hooks + Resend/SendGrid)
- Calendar file generation (.ics for "Add to Calendar")
- Entry count displays
- Past event galleries

**Calendar Integration:**
- Generate .ics files server-side
- "Add to Calendar" buttons (Google, Apple, Outlook)
- Use existing libraries (add-to-calendar-button)
- Source: [Add to Calendar Integration](https://docs.add-to-calendar-pro.com/integration/general)

**Why this approach:**
- Full design control (distinctive, not generic)
- Data ownership (all in Payload)
- Integrated with vendor features
- No monthly fees
- Custom logic (giveaway rules, RSVP limits)
- Aligns with "We create" philosophy

---

## Design Token Strategy

### What Are Design Tokens?

> "Design tokens are the smallest indivisible elements of a design system, representing individual design decisions as data."

Source: [Design Tokens Explained](https://www.contentful.com/blog/design-token-system/)

### Implementing Tokens for Distinctive Design

**Where tokens prevent generic appearance:**

1. **Color System**
   - NOT: Default Tailwind blues/grays
   - YES: Brand-specific vintage palette
   ```javascript
   colors: {
     primary: '#8B4513',    // Saddle brown (antique wood)
     secondary: '#D4A574',  // Tan (vintage patina)
     accent: '#B8860B',     // Dark goldenrod (brass fixtures)
     neutral: {
       50: '#F5F5DC',  // Beige (not generic gray)
       900: '#3E2723'  // Dark brown (not black)
     }
   }
   ```

2. **Typography System**
   - NOT: System fonts or default Inter
   - YES: Fonts that communicate "antiques"
   ```javascript
   fontFamily: {
     display: ['Playfair Display', 'serif'], // Elegant, classic
     body: ['Lato', 'sans-serif'],           // Clean, readable
     accent: ['Cinzel', 'serif']             // Vintage headers
   }
   ```

3. **Spacing Scale**
   - NOT: Default Tailwind scale
   - YES: Custom scale matching design needs
   ```javascript
   spacing: {
     '18': '4.5rem',   // Specific for event card spacing
     '22': '5.5rem',   // Hero section padding
   }
   ```

4. **Custom Animations**
   ```javascript
   animation: {
     'fade-in-up': 'fadeInUp 0.6s ease-out',
     'vintage-hover': 'vintageHover 0.3s ease'
   },
   keyframes: {
     fadeInUp: {
       '0%': { opacity: '0', transform: 'translateY(20px)' },
       '100%': { opacity: '1', transform: 'translateY(0)' }
     }
   }
   ```

**Result:** Every site using this config has unique appearance, even with Tailwind.

**Best Practice (2026):** Define tokens in `tailwind.config.js` for compile-time optimization, use CSS variables only when runtime theming needed.

Source: [Tailwind Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns)

---

## Performance Best Practices (2026)

### React Server Components Optimization

**Key principles:**

1. **'use client' as Deep as Possible**
   - Don't mark entire pages as Client Components
   - Only interactive elements need 'use client'
   - Example: Event list (Server) → RSVP button (Client)
   - Source: [RSC Best Practices](https://www.developerway.com/posts/react-server-components-performance)

2. **Default to Server Components**
   - Everything is Server Component unless marked otherwise
   - Reduces JavaScript bundle significantly
   - Better for slower devices (Dad's customers)

3. **Data Fetching Strategy**
   - Fetch data at component level on server
   - Eliminates waterfall requests
   - Faster perceived performance

**Performance Metrics:**
- Less JavaScript = better Time to Interactive
- Server Components never ship JS to client
- Especially important for elderly users on older devices
- Source: [React 2026 Performance](https://medium.com/@expertappdevs/react-js-2026-performance-secure-architecture-84f78ad650ab)

### UI Library Selection for Performance

> "Libraries that minimize or eliminate runtime JavaScript for styling are best positioned for the future. For greenfield projects, using Shadcn/UI paired with Tailwind CSS is recommended for unmatched customization and the lowest possible client-side JavaScript footprint."

Source: [React UI Frameworks 2026](https://vocal.media/futurism/the-8-react-ui-frameworks-you-must-master-for-2026)

**Why this matters for antiquesinmoore.com:**
- Elderly users may have older phones/computers
- Faster sites = better user experience
- Better SEO rankings
- Lower bounce rates

---

## Distinctive Design in Practice

### Research Finding: What Makes Design Distinctive

From January 2026 article on distinctive vs generic web design:

> "The misconception is that distinctive web design requires expensive custom builds, but this is wrong—distinctiveness actually comes from deliberate choices aligned with your actual business."

**Performance impact:**
> "Research from the Web Design Institute found that distinctive local websites convert at 2.4x the rate of generic templates in the home services sector."

Source: [Distinctive Web Design 2026](https://newswatchtv.com/2026/01/09/why-norwich-businesses-are-getting-left-behind-with-generic-web-design/)

### Low-Cost Distinctive Design Strategies

**From research - four cost-effective changes:**

1. **Local Knowledge Demonstration**
   - For AIM: Moore, OK history in antiques
   - "We've been serving Moore collectors since..."
   - Specific to the community

2. **Team Visibility**
   - Dad's story, experience
   - Vendor spotlights
   - Real faces, not stock photos

3. **Local Case Studies**
   - Event photo galleries
   - Customer finds
   - Community testimonials

4. **Plain Language**
   - Speak to collectors, not "consumers"
   - Dad's voice, not corporate speak

**These cost nothing but create distinctiveness.**

### Applying to antiquesinmoore.com

**Distinctive elements:**
- Custom color palette (vintage browns, creams, brass tones)
- Typography that communicates "antiques" (serifs, classic fonts)
- Photography-first design (Dad's items, not illustrations)
- Event-driven layout (not standard business site structure)
- Custom animations (subtle, refined - not flashy)
- Moore, OK-specific content (local knowledge)

**What makes it distinctive:**
- NOT using default Tailwind colors
- NOT using generic component library styling
- NOT using stock photos or illustrations
- NOT copying another antique store's design
- YES creating custom layouts for event showcases
- YES custom vendor item presentation
- YES unique visual hierarchy for giveaways

---

## Recommended Tech Stack (Final)

### The Complete Stack

```
FRAMEWORK
├─ Next.js 15+ (App Router, React Server Components)
├─ React 19
└─ TypeScript

STYLING
├─ Tailwind CSS (custom design tokens)
├─ shadcn/ui (Base UI primitives for accessibility)
└─ Framer Motion (UI animations, page transitions)

CMS & DATA
├─ Payload CMS (TypeScript-first, custom collections)
├─ PostgreSQL (database)
└─ Vercel Postgres or Supabase (hosting)

MEDIA
├─ Payload upload handling
├─ Vercel Image Optimization
└─ Supabase Storage (alternative)

DEPLOYMENT
├─ Vercel (frontend + edge functions)
├─ Vercel Postgres (database)
└─ GitHub (version control, preview deployments)

INTEGRATIONS
├─ Resend or SendGrid (transactional emails)
├─ Add-to-Calendar (calendar integration)
└─ Google Analytics (optional)
```

### Why This Stack for antiquesinmoore.com

**Aligns with The Refinement:**
1. **We create** - Full control over design, no templates
2. **Infrastructure without aesthetic constraints** - Tools enable, don't dictate
3. **Quality + speed** - Rapid development with custom results

**Meets project requirements:**
1. **Event-driven** - Custom event collections, RSVP, giveaways
2. **Distinctive design** - Full creative freedom with design tokens
3. **Content management** - Payload admin for Dad (non-technical)
4. **Mobile-first** - Tailwind responsive utilities, RSC performance
5. **Excellent performance** - Server Components, optimized images, minimal JS
6. **Revenue potential** - Professional appearance, conversion optimization

**Developer experience:**
- TypeScript throughout (type safety)
- Hot reload in development
- Preview deployments for client review
- Modern tooling (Prettier, ESLint)

**Scalability:**
- Starts simple, grows with needs
- Can add features incrementally
- Performance doesn't degrade with content

---

## Implementation Priorities

### Phase 1: Foundation
1. Next.js project setup with TypeScript
2. Tailwind config with custom design tokens
3. shadcn/ui installation (Base UI)
4. Payload CMS setup with Event/Vendor collections
5. Database connection (Postgres)

### Phase 2: Core Features
1. Event listing page (Server Component)
2. Event detail pages (dynamic routes)
3. RSVP form (Client Component, server action)
4. Vendor showcase structure
5. Admin UI for Dad (Payload)

### Phase 3: Polish
1. Framer Motion page transitions
2. Image optimization
3. Calendar integration
4. Email confirmations
5. Giveaway entry system

### Phase 4: Launch
1. Domain connection (antiquesinmoore.com)
2. Vercel deployment
3. Production database
4. Analytics setup
5. March 7 event page ready

---

## Trade-offs & Considerations

### What We're Trading

**Faster setup for better outcome:**
- Could use WordPress → 2 hours
- Custom build → 2 weeks
- But: Generic vs distinctive (2.4x conversion difference)

**Learning curve for maintainability:**
- Template = instant, limited flexibility
- Custom = learning, unlimited flexibility
- Mike owns this, can modify anything

**Initial development time for long-term velocity:**
- First feature: slower (setting up foundation)
- Second feature: faster (infrastructure in place)
- Third feature: much faster (patterns established)

### Risks & Mitigations

**Risk: Complexity for Dad**
- Mitigation: Payload admin UI is auto-generated, clean
- Mitigation: Training session before launch
- Mitigation: Mike handles technical issues

**Risk: Over-engineering**
- Mitigation: Start simple (events + basic vendor showcase)
- Mitigation: Add features based on actual need
- Mitigation: GSD planning prevents scope creep

**Risk: Performance issues**
- Mitigation: Next.js + RSC optimized by default
- Mitigation: Image optimization built-in
- Mitigation: Monitor with Vercel Analytics

---

## Alternative Stacks Considered

### Alternative 1: Astro + Decap CMS
**Pros:** Fastest possible static site, minimal JS
**Cons:** Event management requires more dynamic features, smaller ecosystem
**Verdict:** Wrong tool for event-driven content

### Alternative 2: Remix + Sanity
**Pros:** Excellent data loading, powerful CMS
**Cons:** Smaller community, Sanity learning curve, vendor lock-in
**Verdict:** More complexity, less support

### Alternative 3: WordPress + ACF
**Pros:** Fast setup, Dad familiar with WP
**Cons:** Violates "We create," generic appearance, PHP/plugin headaches
**Verdict:** Conflicts with The Refinement philosophy

### Alternative 4: SvelteKit + Strapi
**Pros:** Excellent performance, good DX
**Cons:** Smaller ecosystem, less TypeScript integration
**Verdict:** Less support for custom problem-solving

**Conclusion:** Next.js + Payload offers the best balance of speed, flexibility, performance, and alignment with The Refinement.

---

## Sources

### Framework Research
- [Best Next.js Alternatives 2026](https://naturaily.com/blog/best-nextjs-alternatives)
- [Next.js vs Remix vs SvelteKit Comparison](https://www.nxcode.io/resources/news/nextjs-vs-remix-vs-sveltekit-2025-comparison)
- [Framework Comparison 2026](https://talentblocks.com/blog/which-javascript-framework-should-you-use-a-comparison-of-remix-nextjs-astro-and-sveltekit)

### Styling & Design
- [Tailwind CSS Best Practices 2025-2026](https://www.frontendtools.tech/blog/tailwind-css-best-practices-design-system-patterns)
- [Design Tokens Explained](https://www.contentful.com/blog/design-token-system/)
- [Design Tokens Developer Guide](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/)
- [shadcn/ui Foundation](https://ui.shadcn.com/)
- [Radix UI vs shadcn/ui Comparison](https://shadcnstudio.com/blog/radix-ui-vs-shadcn-ui)
- [Distinctive Web Design 2026](https://newswatchtv.com/2026/01/09/why-norwich-businesses-are-getting-left-behind-with-generic-web-design/)

### Content Management
- [Headless CMS 2026 Overview](https://thebcms.com/blog/headless-cms-101)
- [Payload vs Strapi vs Sanity Comparison](https://pooya.blog/blog/headless-cms-consultancy/)
- [Payload Developer Experience](https://kernelics.com/blog/headless-cms-comparison-guide)
- [Payload Custom Fields](https://shakuro.com/blog/payload-vs-other-cms)
- [Payload vs Sanity](https://payloadcms.com/compare/sanity)

### Animation Libraries
- [Framer Motion vs GSAP Comparison](https://motion.dev/docs/gsap-vs-motion)
- [GSAP vs Framer Motion](https://pentaclay.com/blog/framer-vs-gsap-which-animation-library-should-you-choose)
- [React Animation Libraries 2026](https://dev.to/ciphernutz/top-react-animation-libraries-framer-motion-gsap-react-spring-and-more-4854)

### Deployment & Performance
- [Vercel vs Netlify 2026](https://northflank.com/blog/vercel-vs-netlify-choosing-the-deployment-platform-in-2025)
- [Edge Performance Comparison](https://dev.to/dataformathub/cloudflare-vs-vercel-vs-netlify-the-truth-about-edge-performance-2026-50h0)
- [React Server Components Performance](https://www.developerway.com/posts/react-server-components-performance)
- [React 2026 Performance Best Practices](https://medium.com/@expertappdevs/react-js-2026-performance-secure-architecture-84f78ad650ab)
- [React UI Frameworks 2026](https://vocal.media/futurism/the-8-react-ui-frameworks-you-must-master-for-2026)

### Event Management
- [Event RSVP Tools 2026](https://www.jotform.com/rsvp-tool/)
- [Add to Calendar Integration](https://docs.add-to-calendar-pro.com/integration/general)

---

## Next Steps

1. **Review with Mike** - Validate stack aligns with vision
2. **Await Dad's input** - Confirm scope from strategy questions
3. **GSD Planning** - Create roadmap once requirements clear
4. **Prototype** - Build event listing page to validate stack
5. **Iterate** - Refine based on real implementation

---

**Research completed:** January 18, 2026
**Researcher:** Claude (Mike Ramsey's AI partner)
**Philosophy alignment:** The Refinement - "We create. We don't assemble."
