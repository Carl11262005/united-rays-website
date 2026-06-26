# Skill: Designing a Good & Nice Website

> A reference for building websites that are **usable** (people can do what they came to do)
> and **nice** (they feel good, look crafted, and earn trust). Use it when designing,
> reviewing, or critiquing any website — landing page, product site, portfolio, app marketing,
> or content site.

A genuinely good website is never just "pretty." It is the product of strategic, user-centric
decisions layered under the visual surface. Treat design as a tool with a job — every element
should either remove friction or earn its place. "A thousand no's for every yes."

---

## 0. Before you design — answer these first

A website with no clear purpose produces slop. Lock these down before touching layout:

1. **Who is the audience?** Their context, device, motivation, level of expertise.
2. **What is the ONE primary action per page?** ("One page, one goal.") The homepage might be
   "start free trial"; the about page "see our work." When you promote many actions equally,
   visitors freeze.
3. **What does the brand need to *feel* like?** Trustworthy/clinical, playful/warm,
   premium/cinematic, raw/utilitarian. This decides type, color, motion, density.
4. **What's the content?** Real copy and real imagery beat lorem ipsum and placeholders.
   Design around true content, not the other way around.

If you can't answer these, ask — don't guess.

---

## 1. The two halves of "good"

| Usable (it works) | Nice (it delights) |
|---|---|
| Clear navigation & IA | Strong visual hierarchy |
| Fast load | Confident typography |
| Accessible to everyone | Generous, intentional whitespace |
| Predictable, consistent | Restrained, purposeful color |
| Obvious next step | Polished, meaningful motion |
| Works on every device | Cohesive, branded craft |

Neither half alone is enough. A stunning layout that buries the CTA bounces users; a usable
but charmless page fails to build trust or memory. Aim for both.

---

## 2. Information architecture & navigation

Good IA lets users find what they need with minimal effort.

- **Keep the top nav short.** ~5–7 top-level items max; more overwhelms.
- **Use descriptive, literal labels.** "Services" not "What We Do"; "Pricing" not "Investment."
  Users should know exactly where a link goes before clicking.
- **Structure content logically** with a clear hierarchy (sections → pages → subpages).
- **Always show where the user is** and how to get back (breadcrumbs, active states, a clickable logo home).
- **Match the real world** — order information and use language the way users already think,
  not in internal jargon.

## 3. Visual hierarchy — the backbone of a "nice" page

Visual hierarchy answers three questions instantly: *What do I read first? What's important?
What do I do next?* Build it with:

- **Size & scale** — the most important headline / CTA is the largest. If everything is loud,
  nothing is.
- **Weight & contrast** — bold, high-contrast elements rise to the top of attention.
- **Color** — reserve your brightest/most saturated color for the single primary action.
  A dashboard with six saturated button styles reads as chaos.
- **Proximity & grouping** — related items sit close; unrelated items get separated by space.
- **Isolation** — surround a key element (e.g. the CTA) with whitespace and it commands attention.
- **Reading patterns** — people scan in **F-patterns** (dense text) and **Z-patterns** (sparse
  landing pages). Put the key message top-left / above the fold and place CTAs along the path
  the eye already travels.

Common failure: "visual gridlock" — a beautiful page where every element competes, so the eye
finds no path. Fix by demoting decoration and amplifying the one thing that matters.

## 4. Typography

Type is most of what a website *is* — get it right and the page already looks crafted.

- **1–3 type families, max.** Often one strong family used across weights is enough. Pair a
  display/heading face with a highly legible body face. (Avoid over-used defaults — reach for a
  deliberate pairing.)
- **Build a clear type scale.** Distinct, consistent steps for h1/h2/h3/body/caption. Use size,
  **weight**, and case (not five different fonts) to express hierarchy.
- **Body copy: comfortable and legible.** Roughly 16px+ base on the web; line length ~45–75
  characters; line-height ~1.4–1.6 for body. Headings can run much larger for impact.
- **Use relative units (`rem`/`em`) and fluid type** (`clamp()`) so text scales with user zoom
  and viewport instead of breaking.
- **Mind the micro-spacing** — letter-spacing and line-height that are too tight feel cramped;
  too loose breaks the flow. Tighten large display headings slightly; open up small text.
- **Consistency across pages** creates a predictable, professional rhythm.

## 5. Color

- **Start with a tight palette:** one or two brand colors + a neutral range. Restraint reads as
  premium; a rainbow of accents reads as amateur.
- **Reserve high-saturation color for action and emphasis** — primary CTA, key highlights.
  Everything else lives on a calm neutral base.
- **Use subtly-toned neutrals** rather than pure `#fff`/`#000`. Define harmonious accents in a
  perceptual space (e.g. OKLCH) so they share lightness/chroma and only vary in hue.
- **Contrast is non-negotiable** — text must meet WCAG AA (4.5:1 body, 3:1 large text). Check it.
- **Color must never be the only signal** (e.g. don't rely on red/green alone for error/success).

## 6. Whitespace & layout

- **Whitespace is not wasted space** — it improves comprehension, reduces cognitive load, and
  makes the important things louder. Be *ruthless* about giving elements room to breathe.
- **The trick to making something pretty is often the absence of something pretty** — don't crowd
  attractive elements together; they cancel each other out.
- **Use a grid** (a 12-column grid is a safe default) for alignment and rhythm. Misalignment —
  even a few pixels — creates subconscious tension and reads as "off."
- **Align to columns, keep consistent spacing**, and let structure stay calm while content varies.
- **Remove anything purely decorative** that doesn't serve the goal. New designers add; good
  designers subtract until only what's needed remains.

## 7. Performance — design's hidden half

Speed is a UX, SEO, and conversion factor simultaneously. The best-looking page means nothing if
users leave before it renders.

- **Target sub-3-second loads.** A large share of mobile users abandon slower sites; every extra
  second can measurably cut conversions.
- **Optimize the big offenders — images.** Use modern formats (AVIF, then WebP), compress, size
  correctly, `loading="lazy"` below the fold, `preload` the hero, and set `width`/`height` or
  `aspect-ratio` to prevent layout shift.
- **Mind Core Web Vitals:** LCP (loading), INP (responsiveness), CLS (visual stability).
- **Lean code & assets:** minimize, defer non-critical JS, cache, subset fonts, prefer SVG for
  icons/logos. Reserve heavy 3D/WebGL for hero moments where the payoff justifies the cost, and
  lazy-load it.

## 8. Responsive & mobile-first

- **Design for the smallest screen first**, then scale up. The majority of traffic is mobile, and
  the constraint forces you to prioritize the core content and cut the rest.
- **One fluid layout, not a separate mobile site.** Use flexbox, CSS grid, container queries,
  fluid type, and flexible media so everything scales proportionally.
- **Touch targets ≥ 44×44px**, with enough spacing that fingers don't mis-tap.
- **Test the extremes** — small phones and large desktops both look intentional, nothing overflows
  or shrinks to illegibility.

## 9. Accessibility (a11y) — a baseline, not a feature

Accessibility benefits everyone and is increasingly a legal requirement (WCAG 2.2, ADA, European
Accessibility Act). Bake it in from the start; never bolt it on at the end. Follow **POUR**:

- **Perceivable** — text alternatives (`alt`) for images, captions for media, sufficient color
  contrast, content that doesn't depend on color alone.
- **Operable** — full keyboard navigation, visible focus indicators, no keyboard traps, generous
  hit areas, no content that flashes dangerously.
- **Understandable** — predictable behavior, clear labels, helpful error messages and recovery.
- **Robust** — semantic HTML5 (proper headings, landmarks, lists, buttons vs links), ARIA only
  where semantics fall short, labeled form fields.

## 10. Interaction & motion

- **Micro-interactions give feedback:** hover states, button presses, inline form validation,
  progress indicators, loading skeletons. They make a UI feel alive and responsive.
- **Motion must have a job** — guide attention, show relationships, reinforce the story. Decorative
  motion that distracts is worse than none.
- **Keep it smooth and quick** (≈150–300ms for most UI transitions); respect
  `prefers-reduced-motion`.
- **Always show system status** — never leave the user wondering whether a click registered.

## 11. Content & copy

- **Concise, confident, jargon-free.** Every word earns its place.
- **Front-load value** — say what it is and why it matters before the scroll.
- **Scannable structure** — meaningful headings, short paragraphs, bullets for lists, pull quotes
  to break up long reads.
- **No filler.** Don't pad with dummy stats, decorative numbers, or sections that exist only to
  fill space.

## 12. Trust & credibility

A nice site signals that a real, competent organization stands behind it:

- Clear visual identity and consistency across pages.
- Honest social proof — real testimonials, logos, case studies, numbers.
- Obvious, reachable contact info; transparent pricing where relevant.
- Professional polish (no broken images, dead links, typos, or misaligned elements).
- **No dark patterns.** Don't trick users into actions; ethical UX builds lasting trust.

## 13. Conversion

- **Every page guides toward its one primary action.** A site without clear CTAs is a store with
  no checkout counter.
- **Make the primary CTA unmissable** — size, color, placement, and whitespace set it apart; a
  secondary CTA stays visibly subordinate (e.g. outline vs filled).
- **Reduce friction** — fewer form fields, no surprise steps, clear progress, reassurance near the
  point of commitment.

---

## 14. Nielsen's 10 usability heuristics (the timeless checklist)

These remain the industry standard for evaluating any interface:

1. **Visibility of system status** — keep users informed with timely feedback.
2. **Match between system and the real world** — speak the users' language and conventions.
3. **User control and freedom** — easy undo/redo and clearly marked exits.
4. **Consistency and standards** — follow platform and internal conventions; don't reinvent.
5. **Error prevention** — design so mistakes are hard to make in the first place.
6. **Recognition rather than recall** — make options visible; don't force users to remember.
7. **Flexibility and efficiency of use** — shortcuts/accelerators for experts, simple for novices.
8. **Aesthetic and minimalist design** — every extra element competes with the essential ones.
9. **Help users recognize, diagnose, and recover from errors** — plain-language messages + a fix.
10. **Help and documentation** — available, searchable, and task-focused when needed.

Run a quick heuristic pass against these before shipping — it catches the obvious problems cheaply.

---

## 15. Aesthetic direction — picking a "nice" that fits

"Nice" is contextual. Match the aesthetic to the audience and trust requirements:

- **Refined minimalism** (sophisticated palette, strong type, ruthless whitespace) — versatile,
  fast, focused; safe for most B2B, SaaS, and premium brands.
- **Cinematic / dark-mode** (glowing serif or bold sans on dark, restrained motion) — premium,
  high-end product or portfolio feel.
- **Expressive / oversized type & earthy tones** — bold, memorable, editorial brands.
- **Neubrutalism / anti-design** (sharp geometry, raw utilitarian layouts) — differentiation for
  creative agencies, fashion, some tech. **Avoid** for finance, healthcare, enterprise B2B, where
  conventional polish *is* the trust signal.

Commit to one direction and execute it consistently. Borrow "one thing" from great references
(a nav, an about page, a hover effect) rather than copying a whole site. Print design — magazines,
book covers, packaging — is an underused source of layout, grid, and type inspiration.

---

## 16. Anti-patterns to avoid ("slop")

- Gratuitous gradient backgrounds and glows used as decoration.
- Generic container cards with rounded corners + a left-border accent stripe, repeated everywhere.
- Emoji as iconography (unless genuinely on-brand).
- Over-used default fonts chosen by reflex rather than intent.
- Hand-drawn SVG illustrations of complex objects — use real imagery or honest placeholders.
- "Data slop": stats, counters, and icons that convey nothing.
- Six competing CTAs; everything bold; everything bright.
- Decorative motion that fights the content.
- Filler sections added to look substantial.

---

## 17. Pre-ship checklist

**Strategy**
- [ ] Clear audience and a single primary goal per page
- [ ] Real content & imagery (no lorem/placeholder shipping)

**Usability**
- [ ] ≤7 top-level nav items, descriptive labels, clear "where am I"
- [ ] One obvious primary CTA per page; secondary actions subordinate
- [ ] Passes a Nielsen 10-heuristic pass
- [ ] Visible feedback on every interaction; graceful errors

**Visual craft**
- [ ] Strong hierarchy — eye knows where to go first
- [ ] 1–3 fonts, consistent type scale, comfortable body settings
- [ ] Tight palette; saturated color reserved for action
- [ ] Generous, intentional whitespace; grid-aligned
- [ ] Nothing purely decorative survived the cut

**Technical**
- [ ] Loads in < 3s; images optimized & lazy-loaded; no layout shift
- [ ] Mobile-first, fluid, tested small → large; touch targets ≥44px
- [ ] WCAG AA contrast; keyboard navigable; semantic HTML; alt text
- [ ] `prefers-reduced-motion` respected

**Trust**
- [ ] Consistent identity, honest social proof, reachable contact
- [ ] No broken links/images, typos, or misalignments
- [ ] No dark patterns

---

### One-line summary
Design with a clear purpose, guide the eye with hierarchy and whitespace, commit to confident type
and a restrained palette, make it fast and accessible on every device, and cut everything that
doesn't earn its place.
