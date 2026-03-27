# Findings: aim-website-refresh

Nonce: `FSM-20260326-aim-website-refresh`

---

## Transparent Cognition

### What pulled me and how I redirected it

**Familiarity bias toward yet-another-react-lightbox (full version).** The full library is the most-documented option and the first result in every search. I initially focused research there. But the scope calls for a gallery of 7 images on a static site -- the full library's plugin system (captions, download, fullscreen, slideshow, thumbnails, sharing) is dead weight. I redirected to evaluate the lite version and the framer-motion DIY approach, which better match the actual scope.

**Loss aversion around adding a new dependency.** framer-motion is already in the project, so "build with what we have" feels safe. But the investigation correctly identified that a custom framer-motion lightbox requires implementing keyboard navigation, touch/swipe gestures, scroll lock, backdrop close, preloading, and focus trapping from scratch. The effort-to-quality tradeoff favors a purpose-built 5KB library over a hand-rolled solution.

**Execution avoidance on the font question.** The scope says "Libre Caslon Text or similar" and "Source Sans 3 or similar" -- the "or similar" creates a temptation to defer the decision. I resolved it: both fonts are available on Google Fonts with next/font/google support, eliminating the need for alternatives.

---

## Alternative Framings

### Framing 1: "Rebuild everything from scratch"
The investigation confirmed every component needs rebuilding (H1-H5 all confirmed). This framing is accurate but risks over-engineering. The scope is narrow: 2 pages, static content, no backend. The rebuild should be component-by-component replacement, not a greenfield re-architecture.

### Framing 2: "Incremental update -- swap content, keep structure"
Rejected by investigation. The site structure is giveaway-specific (Hero contains event logic, no data layer, no gallery route). Incremental updates would leave architectural debt that blocks future work units. The scope explicitly requires section-level changes (S1-S7) that touch every file.

### Framing 3: "Design-first -- run /craft, get tokens, then build"
This is the correct framing and matches the scope constraint C7. The design token system (/craft) should produce the Tailwind config replacement before any component work begins. Building components against the giveaway palette and then re-theming wastes effort.

---

## Answered Unknowns

### U1: Logo file location -- RESOLVED as non-blocking

**Finding:** No logo file exists in the repository or in any referenced directory. The current site renders "Antiques in Moore" as styled serif text (`components/Header.tsx` line 15). The CLAUDE.md references a logo with "truck, barn, water tower" imagery, and the scope says "Preserve existing AIM logo."

**Resolution:** The text treatment IS the current logo. There is no image file to preserve. The scope constraint "preserve existing AIM logo" means preserving the brand identity in the header -- the serif text "Antiques in Moore" with the tagline. If a graphic logo exists elsewhere (physical signage, social media profile), it was never digitized for the website.

**Recommendation:** Proceed with styled text branding in the header. If a graphic logo surfaces later, it can be added without structural changes (swap text for `<Image>` in Header component). Mark this as non-blocking for implementation.

### U2: Lightbox implementation -- yet-another-react-lightbox-lite RECOMMENDED

**Research conducted:** Evaluated three approaches against scope requirements (7 images, lightbox on click, responsive, Next.js 14+ App Router).

| Approach | Bundle Size | Effort | Features | Risk |
|----------|-------------|--------|----------|------|
| yet-another-react-lightbox (full) | ~34KB min | Low | Plugins: captions, thumbnails, zoom, download, fullscreen, slideshow | Over-engineered for 7-image static gallery |
| yet-another-react-lightbox-lite | ~5KB min+gz | Low | Keyboard/mouse/touch nav, zoom, preloading, responsive images, customizable | Right-sized for scope |
| Custom framer-motion lightbox | 0KB (already loaded) | High | Must implement: keyboard nav, touch/swipe, scroll lock, backdrop close, focus trap, preloading | Quality risk; framer-motion AnimatePresence + manual a11y |
| CSS-only (:target / checkbox) | 0KB | Medium | No smooth transitions, no keyboard nav, no swipe, no preloading | Poor UX; fails "lightbox on click" expectation |

**Decision: yet-another-react-lightbox-lite.**

Rationale:
- 5KB gzipped is negligible against a Lighthouse >90 target (C6).
- Built-in next/image integration via custom `render.slide` function -- works with Next.js App Router, supports `blurDataURL` through module augmentation.
- Keyboard, mouse, touchpad, and touchscreen navigation included -- no manual a11y implementation needed.
- CSS stylesheet is a single import (`yet-another-react-lightbox-lite/styles.css`).
- MIT license; React 18+ compatible (project is React 19).
- Can be loaded with `next/dynamic` to defer the bundle entirely until user interaction, meaning zero impact on initial page load and Lighthouse score.

The full version adds 29KB for plugin infrastructure this project will never use. The DIY framer-motion approach saves 5KB but costs significant implementation time and creates accessibility risk (swipe gestures, focus trapping, keyboard navigation are hard to get right).

**Next.js integration pattern:**
```typescript
// Dynamic import -- zero initial bundle impact
const LightboxComponent = dynamic(() => import('@/components/Lightbox'), {
  ssr: false,
});

// Custom render for next/image integration
function NextJsImage({ slide, rect }) {
  return (
    <div style={{ position: "relative", width, height }}>
      <Image fill alt={slide.alt} src={slide.src}
        placeholder={slide.blurDataURL ? "blur" : undefined}
        style={{ objectFit: "contain" }} />
    </div>
  );
}
```

### U3: Font loading strategy -- next/font/google CONFIRMED

**Research conducted:** Verified availability of both specified fonts on Google Fonts and compatibility with `next/font/google`.

**Libre Caslon Text:**
- Available on Google Fonts: YES
- Import: `import { Libre_Caslon_Text } from 'next/font/google'`
- Available weights: 400 (Regular), 700 (Bold), both with italic variants
- NOT a variable font (weight values must be explicitly specified)
- Optimized for body text at 16px+
- Companion: Libre Caslon Display (single weight 400) optimized for headlines 24px+

**Source Sans 3:**
- Available on Google Fonts: YES
- Import: `import { Source_Sans_3 } from 'next/font/google'`
- Variable font with weight range 200-900
- Full Latin subset support

**Recommendation:** Use Libre Caslon Display (not Text) for headlines and Libre Caslon Text for serif body passages. Use Source Sans 3 for general body text. Both load via `next/font/google` which self-hosts the font files, eliminates external network requests, and provides automatic `font-display: swap` behavior.

**Implementation in layout.tsx:**
```typescript
import { Libre_Caslon_Text, Libre_Caslon_Display, Source_Sans_3 } from 'next/font/google';

const libreCaslonDisplay = Libre_Caslon_Display({ weight: '400', subsets: ['latin'], variable: '--font-serif-display' });
const libreCaslonText = Libre_Caslon_Text({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-serif' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans' });
```

Then reference CSS variables in `tailwind.config.ts`:
```typescript
fontFamily: {
  serif: ['var(--font-serif)', 'Georgia', 'serif'],
  display: ['var(--font-serif-display)', 'Georgia', 'serif'],
  sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
},
```

This replaces the current system font stack (Georgia, Segoe UI) with the specified design fonts while maintaining fallbacks.

### U4: Gallery data structure -- typed array in data/gallery.ts

**Recommendation:** Simple TypeScript array of objects, co-located with event data.

```typescript
// data/gallery.ts
export interface GalleryImage {
  src: string;       // path relative to public/
  alt: string;       // descriptive alt text
  width: number;     // intrinsic width
  height: number;    // intrinsic height
  caption?: string;  // optional display caption
}

export const galleryImages: GalleryImage[] = [
  { src: '/gallery/store-interior-displays.jpg', alt: 'Antique displays...', width: 1200, height: 900 },
  // ... 6 more entries
];
```

**Why this structure:**
- TypeScript interface enables IDE autocomplete and compile-time checks (DW8: tsc --noEmit passes).
- `width` and `height` are required by `next/image` for non-statically-imported images; including them in data avoids runtime dimension detection.
- `src` as public-relative path works with both `next/image` string src and the lightbox library.
- Array order = display order, editable by non-developers who understand JSON-like structures.
- Matches the scope constraint C4 ("event content in single data file") pattern -- both `data/events.ts` and `data/gallery.ts` follow the same convention.

### U5: Image optimization strategy -- next/image + responsive sizes + blur placeholders

**Research findings:**

1. **Format conversion:** next/image automatically serves WebP or AVIF based on browser Accept headers. No manual conversion needed. Source JPGs from `C:\ts\aim\` (905KB - 1.3MB each) will be served as WebP at ~60-80% size reduction.

2. **Responsive sizes:** The `sizes` prop tells the browser which image width to request from the automatic srcset. For a gallery grid:
   - Mobile (1 column): `sizes="100vw"`
   - Tablet (2 columns): `sizes="(min-width: 768px) 50vw, 100vw"`
   - Desktop (3 columns): `sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"`
   This can save 30-70% bandwidth compared to serving the full-width image at all breakpoints.

3. **Blur placeholders:** For images referenced by string path (not static import), `blurDataURL` must be provided manually. Two approaches:
   - **Build-time generation:** Use a script to generate base64 blur data URLs from the source images. Store in the `galleryImages` data array.
   - **Simplified approach:** Use `placeholder="empty"` (default) for gallery grid thumbnails, since they load lazily and the grid layout provides visual structure. Use `placeholder="blur"` only for the hero image (above the fold, LCP candidate).

4. **Hero image (LCP):** The hero image should use `priority` prop (disables lazy loading), explicit `sizes` prop tuned to layout width, and `placeholder="blur"` with a generated `blurDataURL`. This directly targets the <3s load time constraint (C5) and Lighthouse >90 (C6).

5. **Gallery images (below fold):** Default lazy loading (no `priority`), `sizes` prop matching grid columns, no blur placeholder needed (images load as user scrolls). The 7 gallery images total ~7.4MB as source JPGs but will be served as ~1.5-2.5MB total via WebP conversion and responsive sizing.

**Recommendation:** Rely on next/image runtime optimization. No need to pre-convert images to WebP/AVIF. Copy the 7 unique JPGs to `public/gallery/` with descriptive names. Generate blur data URLs for the hero image only (or skip entirely if using a color placeholder).

### U6: Navigation pattern -- useState hamburger with Tailwind transitions

**Research conducted:** Evaluated CSS-only vs useState-based hamburger menus for Next.js App Router.

**CSS-only approaches (`:target`, checkbox hack, `<details>`):**
- No JavaScript required
- Cannot integrate with Next.js router events (menu stays open after navigation)
- No animation control beyond CSS transitions
- Accessibility concerns: checkbox hack has no ARIA semantics; `<details>` has inconsistent screen reader support

**useState + Tailwind approach (RECOMMENDED):**
- Header.tsx already has `"use client"` directive and imports `usePathname` -- adding `useState` is zero new dependencies.
- Tailwind's `transition-all duration-300` provides smooth open/close animation.
- `usePathname` can close the menu on route change (already available in component).
- Full ARIA control: `aria-expanded`, `aria-controls`, `aria-label` on the toggle button.
- framer-motion `AnimatePresence` available for enhanced animation if desired (already a dependency).

**Implementation pattern:**
```typescript
const [menuOpen, setMenuOpen] = useState(false);
const pathname = usePathname();

// Close menu on route change
useEffect(() => { setMenuOpen(false); }, [pathname]);

// Toggle button (visible on mobile)
<button
  className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-expanded={menuOpen}
  aria-label="Toggle navigation menu"
>
  {/* Hamburger icon / X icon based on menuOpen */}
</button>

// Mobile nav (shown/hidden based on menuOpen)
<nav className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
  {/* Nav links */}
</nav>

// Desktop nav (always visible)
<nav className="hidden md:flex gap-8">
  {/* Nav links */}
</nav>
```

No new dependencies. Uses patterns already in the component.

---

## Approach Recommendation

### Recommended Implementation Sequence

**Phase 0: Design tokens (prerequisite)**
Run /craft to establish design tokens before any component work. This produces:
- Tailwind color palette replacement (aged wood, warm metals, Oklahoma red earth)
- Font configuration (Libre Caslon Display/Text + Source Sans 3 via next/font/google)
- Spacing, border radius, shadow tokens
- Component-level design decisions

This must happen first because every component references the Tailwind theme.

**Phase 1: Foundation (layout.tsx, tailwind.config.ts, globals.css)**
- Install yet-another-react-lightbox-lite
- Configure next/font/google with three font imports
- Replace Tailwind color palette with /craft tokens
- Update layout.tsx metadata (remove March 7 references)
- Update globals.css base styles

**Phase 2: Data layer (data/events.ts, data/gallery.ts)**
- Create event data structure with April 25 Outdoor Pop Up Market
- Create "Open Every Weekend" standing event
- Create gallery image metadata array
- Copy and rename 7 unique photos from `C:\ts\aim\` to `public/gallery/`

**Phase 3: Navigation and layout (Header.tsx, Footer.tsx)**
- Rebuild Header: new nav links (Events, Vendors, Gallery, About, Contact), mobile hamburger, styled text logo
- Rebuild Footer: full contact info, social links, hours (including Friday), quick links, credit line
- Vendors link -> `#community` anchor; Contact link -> `#footer` anchor (resolves U2)

**Phase 4: Homepage sections (Hero.tsx, Events.tsx, Community.tsx)**
- Hero: full-width store interior image, headline, two CTAs
- Events section: card-based layout driven by data/events.ts
- Community section: stats, social links, "A Haven for the Curious and the Collector"

**Phase 5: Gallery page (app/gallery/page.tsx)**
- Responsive grid using CSS columns (Tailwind `columns-2 md:columns-3`)
- Lightbox integration with yet-another-react-lightbox-lite
- Dynamic import for lightbox (zero initial bundle impact)
- next/image integration via custom render function

**Phase 6: Cleanup**
- Remove `/about`, `/events`, `/visit` routes
- Remove `public/vizio-tv.png`
- Verify DW1-DW8

### Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Lightbox library | yet-another-react-lightbox-lite | 5KB, built-in a11y, next/image support, MIT license |
| Font loading | next/font/google | Self-hosted, no external requests, automatic font-display:swap |
| Headline font | Libre Caslon Display (400) + Libre Caslon Text (400, 700) | Google Fonts available, Display optimized for headlines, Text for body |
| Body font | Source Sans 3 (variable, 200-900) | Google Fonts, variable font = single file for all weights |
| Gallery grid | CSS columns via Tailwind | No JS library needed; `columns-2 md:columns-3 gap-4` with `break-inside-avoid` |
| Mobile menu | useState + Tailwind transitions | Zero new dependencies; Header already "use client" with usePathname |
| Image optimization | next/image runtime | Automatic WebP/AVIF, responsive srcset, lazy loading below fold |
| Blur placeholder | Hero only | Gallery images load lazily; blur adds complexity for minimal UX gain |
| Vendors/Contact links | Anchor links to homepage sections | No new pages needed within "Homepage + Gallery only" scope |
| framer-motion optimization | LazyMotion + m component | Reduces initial bundle from ~34KB to ~5KB; keep for hero animations |

---

## Counter-Arguments

### CA1: "Use the full yet-another-react-lightbox instead of lite"
The full library adds ~29KB for plugin infrastructure (captions, download, fullscreen, slideshow, thumbnails, sharing). None of these features are in scope. The gallery is 7 images with "lightbox on click" -- the lite version covers this completely. If future work units need thumbnails or download, migration from lite to full is a dependency swap, not a rewrite.

### CA2: "Build the lightbox with framer-motion to avoid any new dependency"
framer-motion provides AnimatePresence and spring animations, but a production-quality lightbox requires: keyboard navigation (arrow keys, escape), touch/swipe gestures, scroll lock, focus trapping, preloading adjacent images, responsive image sizing, and backdrop click handling. Implementing all of these correctly costs more engineering time than the 5KB bundle cost of a purpose-built library. The accessibility risk of a hand-rolled solution is the deciding factor -- the lite library handles WCAG keyboard navigation and screen reader support out of the box.

### CA3: "Use CSS columns masonry instead of a standard grid"
CSS columns create a vertical-first ordering (items flow down column 1, then column 2), not the left-to-right reading order users expect. For 7 images where ordering matters (the data array defines display order), this creates a confusing layout. However, for a photo gallery where images have varying heights and the order is aesthetic rather than sequential, vertical ordering is acceptable and the visual result closely resembles true masonry. **Recommendation: CSS columns is fine for this gallery** because the images are interchangeable photographs, not ordered content. If ordering becomes important later, switch to CSS Grid with fixed-height rows.

### CA4: "Use Libre Caslon Display for ALL headings instead of mixing Display and Text"
Libre Caslon Display is optimized for 24px+ and only has weight 400. For smaller headings (h3, h4 at 20-22px), Libre Caslon Text at weight 700 provides better readability. The recommendation: Display for h1/h2 (hero headline, section titles), Text Bold for h3/h4 (card titles, sub-headings), Source Sans 3 for body and UI text. This matches the scope's "serif headlines, clean sans body" direction.

### CA5: "The 9.6MB of existing PNGs will kill Lighthouse scores"
next/image converts PNGs to WebP on-demand, reducing file size by 60-80%. A 3.5MB PNG becomes ~700KB-1.4MB WebP. With the `sizes` prop sending appropriately-sized images per viewport, actual transferred bytes drop further. The hero image needs `priority` to preload for LCP, but gallery images lazy-load and never affect initial page metrics. The Lighthouse >90 constraint (C6) is achievable without pre-converting source images, though converting the 3 existing PNGs from PNG to JPG would reduce the `public/` directory size for deployment.

---

## Security Findings

### A01: Broken Access Control -- NOT APPLICABLE
Static marketing site. No authentication, no user accounts, no admin panel, no API routes. All content is public. No access control model needed or present.

### A05: Injection -- NOT APPLICABLE
No user input surfaces exist or are planned. No forms (event RSVP and giveaway entry are explicitly out of scope). No search functionality. No URL parameter processing. Content is statically rendered from TypeScript data files at build time.

### A03: Software Supply Chain Failures

**Current dependency inventory:**
| Package | Version | Purpose | Risk |
|---------|---------|---------|------|
| next | ^15.1.3 | Framework | Low -- Vercel-maintained, frequent security patches |
| react | ^19.0.0 | UI library | Low -- Meta-maintained, major release |
| react-dom | ^19.0.0 | DOM renderer | Low -- ships with React |
| framer-motion | ^11.15.0 | Animations | Low -- widely adopted, active maintenance |

**Proposed new dependency:**
| Package | Version | Purpose | Risk Assessment |
|---------|---------|---------|-----------------|
| yet-another-react-lightbox-lite | latest | Gallery lightbox | **Low** -- MIT license, ~5KB bundle, zero runtime dependencies (peer dep: React 18+), actively maintained by igordanchenko, separate repo from full version, source available on GitHub |

**Supply chain risk assessment:**
- Adding 1 new production dependency (yet-another-react-lightbox-lite) to a project with 4 existing production dependencies. The package is small, single-purpose, and has no transitive dependencies beyond React.
- The alternative (building with framer-motion) adds zero dependencies but introduces hand-rolled code that is harder to audit and maintain.
- **Recommendation:** Adding the lite lightbox library is acceptable. Run `npm audit` after installation to verify no known vulnerabilities.

### A06: Vulnerable and Outdated Components

**Current component currency:**
| Component | Current | Latest Stable | Status |
|-----------|---------|---------------|--------|
| Next.js | ^15.1.3 | 15.x (active) | CURRENT -- minor updates available, no security advisories |
| React | ^19.0.0 | 19.x | CURRENT |
| framer-motion | ^11.15.0 | 11.x (now "motion") | CURRENT -- library renamed to "motion" but framer-motion package still maintained |
| TypeScript | ^5.7.0 | 5.x | CURRENT |
| Tailwind CSS | ^3.4.0 | 3.4.x / 4.x beta | CURRENT for v3 line |
| ESLint | ^9.0.0 | 9.x | CURRENT |

**Note on framer-motion -> motion rename:** The library formerly known as framer-motion is now published as "motion" (import from `motion/react`). The `framer-motion` package continues to work but may stop receiving updates. Migration is not urgent but should be tracked for a future maintenance work unit.

**Note on Tailwind CSS v4:** Tailwind v4 represents a significant architecture change (CSS-first configuration, no `tailwind.config.ts`). The current project uses v3.4.x which is stable and supported. Migration to v4 is out of scope for this work unit.

**Overall security posture:** Minimal attack surface. Static site with no user input, no backend, no secrets, no authentication. The single new dependency (lightbox-lite) is small, auditable, and MIT-licensed. No security concerns block implementation.

---

## Remaining Unknowns

### RU1: Exact photo dimensions for gallery data array [NON-BLOCKING]
The 7 source JPGs at `C:\ts\aim\` need their pixel dimensions (width x height) read to populate the `galleryImages` data array. This can be done during implementation Phase 2 when copying files to `public/gallery/`. Use `identify` (ImageMagick) or read EXIF data to extract dimensions.

### RU2: Hero interior image selection [NON-BLOCKING]
Scope S2 specifies "store interior image" for the hero. The current `store-hero.png` shows the exterior/storefront. One of the 7 gallery source photos likely shows the store interior and could serve dual purpose (hero background + gallery item). Selection can happen during implementation when photos are reviewed visually.

### RU3: /craft design token output format [NON-BLOCKING]
The exact token values (colors, spacing) depend on running /craft during implementation Phase 0. This is a prerequisite for Phase 1 but does not block research completion. The Tailwind config structure is known; only the specific color values are TBD.

### RU4: framer-motion -> motion migration timing [DEFERRED]
The library rename from framer-motion to motion (import from `motion/react`) is a non-breaking change for this work unit since `framer-motion` still works. Track for a future maintenance pass.

---

## Scope Coverage

| Scope Item | Coverage | Key Findings |
|-----------|----------|--------------|
| S1: Event content swap (March 7 -> April 25 + Open Every Weekend) | FULL | Data-driven approach via `data/events.ts`. March 7 content in 3 files (layout.tsx, Hero.tsx, events/page.tsx). Hours updated to include Friday 12-5. Standing "Open Every Weekend" card as default when no specific event. |
| S2: Hero refresh | FULL | Full-width interior image with headline "Where the past meets the present" (already in Hero.tsx line 21, can be preserved). Two CTAs (Explore Events -> `#events`, Browse Gallery -> `/gallery`). next/image with `priority` and responsive `sizes` for LCP. Hero image selection from gallery source photos (RU2). |
| S3: Photo gallery page | FULL | Route: `app/gallery/page.tsx`. Grid: CSS columns (`columns-2 md:columns-3`). Lightbox: yet-another-react-lightbox-lite (~5KB, dynamic import). Data: `data/gallery.ts` typed array. Images: 7 unique JPGs copied to `public/gallery/`. next/image integration via custom render.slide function. |
| S4: Events section on homepage | FULL | New `components/Events.tsx`. Card-based layout driven by `data/events.ts`. April 25 Outdoor Pop Up Market as featured card. "Open Every Weekend" as standing secondary card with Fri 12-5, Sat-Sun 9-5. |
| S5: Community/About section | FULL | New `components/Community.tsx`. Stats: 50+ vendors, 3K followers, 94% recommend, 8K sqft. Social: Facebook, Instagram @antiquesinmoore, TikTok @mikeandfrank. "A Haven for the Curious and the Collector" heading. Vendors nav link anchors here (`#community`). |
| S6: Footer rebuild | FULL | Full rebuild of `components/Footer.tsx`. Address: 825 NW 24th St, Bldg B, Moore OK 73160. Phone: 405-623-8698. Email: mikesok49@gmail.com. Social links. Hours: Fri 12-5, Sat-Sun 9-5. Quick links. Credit: "A Mike Ramsey Jr. Production". Contact nav link anchors here (`#footer`). |
| S7: Navigation | FULL | Rebuild `components/Header.tsx`. Links: Events (`#events`), Vendors (`#community`), Gallery (`/gallery`), About (`#community`), Contact (`#footer`). Mobile hamburger: useState + Tailwind transitions (no new dependencies). Styled text branding (no logo file exists). Close-on-route-change via usePathname. |

---

## Verification

- [x] External research conducted FIRST: lightbox libraries, fonts, image optimization, masonry grid, hamburger menu
- [x] All 6 unknowns from investigation answered (U1-U6)
- [x] All hypotheses from investigation validated against codebase evidence
- [x] Three lightbox approaches compared with bundle size, effort, features, and risk
- [x] Font availability confirmed on Google Fonts with next/font/google import names
- [x] Image optimization strategy addresses constraints C5 (<3s load) and C6 (Lighthouse >90)
- [x] Gallery grid approach selected with tradeoff analysis
- [x] Navigation pattern uses zero new dependencies
- [x] Security findings address A01, A03, A05, A06 per research phase requirements
- [x] New dependency (yet-another-react-lightbox-lite) assessed for supply chain risk
- [x] All scope items S1-S7 have implementation approach documented
- [x] Remaining unknowns are all non-blocking or deferred
