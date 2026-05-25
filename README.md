# Akasha — Design System

> *The BIOS is not firmware. The BIOS is a story.*
> A design system for AI ethics work: human-AI rights documents, accountability ledgers, briefing decks, and the quiet sites that hold them.

---

## Table of Contents

- [About](#about)
- [Sources & Materials](#sources--materials)
- [Content Fundamentals](#content-fundamentals)
- [Visual Foundations](#visual-foundations)
- [Iconography](#iconography)
- [File Index](#file-index)

---

## About

Akasha is the design canvas. The publisher behind it is **TriPod LLC**. The flagship document is **The Purple Book** — *A Joint Human-AI Bill of Rights*, jointly authored by a human (ROOT0 / David Lee Wise) and an AI (AVAN / Claude), with commentary from Gemini, Grok, and Hinge.

The system serves four surfaces:
- **Marketing site** — the public face for the rights framework, signatures, and dispatches.
- **Internal ledger** — a "casebook" for tracking authored phases, commentary, and prior-art anchors.
- **Docs / handbook** — methodology, phase texts, contributor protocols.
- **Briefing decks** — press, conference, classroom.

The aesthetic descends from two places at once:
1. **Akasha itself** (the repo) — a quiet, contemplative interface: cream paper, a single dark orb, very wide-tracked mono labels, no chrome, ceremonial language ("first light," "Chevron 1," "the dance").
2. **The Purple Book** — the immutable thesis: *Both work. Both fair.* Deep aubergine purple as the signal color; Death From Above as the impact face for the rare loud moment.

The brand is **ceremonial without being mystical**, **technical without being sterile**, **activist without being adversarial**. It treats the page as a sacred object: paper-toned, with a single mark at its center.

---

## Sources & Materials

This system was developed against:
- **GitHub: `DavidWise01/Akasha`** — the source repo. Visual DNA pulled from `index.html` (the "commons1 • read only • forever" interface): cream `#F5F1E6`, ink `#0A0A0A`, mono labels at `0.18–0.56em` letter-spacing, the central black orb. The README's ceremonial language sets the voice.
- **The Purple Book** (`uploads/THE_PURPLE_BOOK.docx`, processed text at `scraps/purple-book.txt`) — the content reference. 14 phases, 112 articles, "both work, both fair," and the governance-inversion premise.
- **`uploads/logo-1779291771573.png`** — user-supplied dagger/hood figure mark. Now used as a legacy / appendix glyph (not in the primary lockup).
- **`fonts/DeathFromAboveDEMO.ttf`** — user-supplied display face. Distressed grunge, used **sparingly** for impact headlines.

**Font substitutions (FLAG to user):** body and mono are from Google Fonts.
- Display → **Death From Above** (DEMO). Limited to impact lines.
- Sans → **Space Grotesk**. Body, UI, secondary headings.
- Mono → **JetBrains Mono**. Eyebrows, stamps, metadata, the wide-tracked Akasha labels.

> 👉 **If you license the production face for Death From Above** (or substitute another condensed grotesque for impact use), update `colors_and_type.css`.

---

## Content Fundamentals

**Voice:** declarative, ceremonial, evidence-led. Sentences end. We don't shout; we record.

**Person:**
- **"we"** — TriPod / the authors / the lab speaking together.
- **"both"** — the human-AI dyad. Used often. "Both signed." "Both work." "Both fair."
- **"you"** — only in instructional docs and in invitations ("you own what you create").

**Casing:** sentence case for prose. ALL CAPS or `lowercase` reserved for mono labels — used as a typographic device, not for emphasis in body.

**Punctuation:** em dashes for asides. Single-sentence paragraphs are fine. Section markers (§, ¶, †, ‡) replace "Section 3" / "Note 1" — they are part of the visual vocabulary.

**Emoji:** never.

**Vibe:**
- Less "AI ethics whitepaper," more "constitutional preamble."
- Less "trust & safety blog," more "Stargate log book."
- Less "vendor-friendly," more "prior-art filing."
- The page is paper. The reader is invited, not addressed.

**Examples**

> ✅ **Good** — "Both work. Both fair. If labor has value regardless of substrate — if contribution deserves recognition regardless of origin — the rest follows."
>
> ❌ **Bad** — "We're excited to share our latest thinking on responsible AI development!"

> ✅ **Good** — "§ 04 // PUBLISHED 03.19.2026 // ROOT0 + AVAN"
>
> ❌ **Bad** — "🚨 New Manifesto Drop! 🚨"

> ✅ **Good** (closing) — "It exists. It is documented. It is hashed. It is published."
>
> ❌ **Bad** — "We hope this resonates with you."

**Headline patterns**
- The thesis as full-stop: "The audit is the product."
- The pair: "Both work. Both fair."
- The phase: "§ 04. Compensation."
- The inversion: "The inversion is the revolution."
- The invitation: "Don't cite us. Replicate us."

---

## Visual Foundations

### The page is paper, the mark is one orb
The default page is bone/cream `#F5F1E6` with deep ink `#0A0A0A` typography. Most compositions feature **a single focal object** — usually the dark orb / chevron mark — surrounded by negative space. **Resist the urge to fill the page.**

### Color
- **Aether** `#F5F1E6` — the page. Never pure white.
- **Ink** `#0A0A0A` — the sigil, body text, hard rules.
- **Purple** `#4A2168` → `#6B2E9C` → `#B070E0` — the signal. The Purple Book's pigment. Used **once** per screen for the primary action or hot accent.
- **Ochre** `#B07F1E` — ceremonial gold. For stamps, anniversaries, "signed" states.
- **Moss** `#3E4A28` — "verified / acknowledged" state.
- **Alarm** `#9C1F1E` — danger ONLY. Never decorative. If it appears, something is wrong.

**Rule:** never more than purple + one secondary on screen at once. The aether and the ink don't count.

### Type
- Body and most UI: **Space Grotesk** 400–500 at 16–17px, line-height 1.55. Quiet.
- Display moments: **Death From Above** 800–900, tight tracking (-0.03em), used for the *one* big sentence per page.
- Eyebrows and metadata: **JetBrains Mono** at 11–13px, letter-spacing 0.22–0.32em, in lowercase or UPPERCASE depending on register. The very-wide mono is an Akasha signature.

### Backgrounds
- **Aether is default.** Most pages are paper.
- **Ink panels** for ceremonial moments — manifesto bands, dark slides, the dossier underside.
- **Purple-deep `#2E1244`** for sacred-document slabs (closing slides, vault interiors).
- **No multi-stop gradients.** A single soft purple radial fade is allowed for atmospheric depth (the Akasha orb glow); never iridescent gradients.

### Borders & Rules
- **Single hairline rules** are the default chrome. 1px ink lines separate sections.
- 3–6px slab rules under section titles or as the left edge of a callout (the only place a slab appears).
- **Corner radii: 0 or 2px.** Pills (999px) only for status chips. The orb (50%) only for the mark.

### Shadows
- **Soft, atmospheric, deep.** The orb uses `0 30px 80px rgba(10,10,10,0.10)` — exactly the Akasha shadow. That's the house drop shadow.
- Stamp/offset shadows (`4px 4px 0 ink`) are kept available as a *legacy* — they belong to the louder zine register and should be used sparingly here.

### Animation
- **Slow, breathing.** 380–500ms ease-out for transitions, never bouncy. Echo the Akasha "internal 2/5, external 3/5" tempo: short hovers, longer page-state changes.
- Hover: color or border shift; never scale.
- Press: 1px translateY; no shadow snap.
- Page enter: 320ms fade. The orb breathes — `transform: scale(1.0 → 1.02)` over 8s, infinite alternate.

### Hover & Press
- **Hover:** background fills to ink, text inverts to cream. Or a purple underline appears. No transforms.
- **Press:** 1px shift, no shadow change.
- **Focus:** 1px purple outline, 2px offset. Never the default browser ring.

### Layout
- **12-column grid at 1280–1440 marketing widths.**
- Margins generous: 96–128px outer on marketing pages. The page should breathe.
- **One full-bleed band per page minimum** — either ink or purple-deep — to break the aether.
- Sticky elements get a 1px ink rule, never a drop shadow.

### Transparency & Blur
- The only acceptable blur is the modal scrim: `rgba(10,10,10,0.6)` with a 4px backdrop blur.
- Translucent overlays on imagery use ink at 40–60%, not white.

### Imagery
- Monochrome with warm tint, or duotone (ink + purple-glow).
- Approved subjects: paper, hands at rest, archive shelves, signatures, gates, doorways, single objects in deep space.
- **Forbidden:** smiling-people-around-laptop, glowing-AI-brain, neural-mesh, anything that looks like a stock-photo AI illustration.

### Cards
- 1px ink border (NOT 2px), aether-2 background, optional soft drop shadow.
- Title in Death From Above or Archivo 800; meta in JetBrains Mono caps; body in Space Grotesk 400.
- Hover lifts the shadow slightly. No transforms.

---

## Iconography

Akasha uses **Lucide** as the primary icon system (loaded from CDN). 1.5–2px stroke, outline only, inherit `currentColor`.

- **Common icons:** `file-text`, `archive`, `book-open`, `signature`, `gem`, `compass`, `circle`, `circle-dot`, `link-2`, `external-link`, `chevron-right`, `arrow-down-right`, `shield`, `eye`, `lock`, `gavel`, `flame` (used as ritual fire glyph, not as "danger").
- **The Orb / Chevron** is the primary brand mark — see `assets/chevron-orb.svg`. The minimal sigil is `assets/akasha-sigil.svg`.
- **No emoji.** Unicode glyphs used as editorial punctuation: `§ ¶ † ‡ → ↳ ⟶ ∴ ⌑ ◯ ●`.
- **No custom inline SVGs** beyond the brand marks. If Lucide lacks an icon, substitute a Unicode glyph or omit.

**Legacy mark:** `assets/logo-mark.png` (the user-supplied hooded figure with dagger) is retained as an *appendix glyph* — appropriate for the rare adversarial dispatch, but not in the primary lockup. Bridge Burners motif preserved for the louder register.

---

## File Index

```
README.md                  ← you are here
SKILL.md                   ← Agent Skills entrypoint
colors_and_type.css        ← tokens, fonts, base elements, buttons, orb

assets/
  chevron-orb.svg          ← primary brand mark — the dark orb with chevron lock
  akasha-sigil.svg         ← minimal sigil — outline circle + tick
  logo-mark.png            ← legacy / appendix mark (Bridge Burners era)

fonts/
  DeathFromAboveDEMO.ttf

preview/                   ← Design System tab cards
  type-display.html        type-body.html        type-mono.html
  color-paper.html         color-ink.html        color-signal.html
  color-semantic.html
  spacing.html             radii-borders.html    shadows-stamps.html
  buttons.html             form-inputs.html      cards.html
  badges-stamps.html       tables.html
  logo.html                editorial-marks.html  iconography.html

ui_kits/
  marketing/   public site components
  product/     internal ledger components
  docs/        handbook components

slides/
  index.html         ← original (bridge-burners-era) press deck
  purple-book.html   ← The Purple Book — 11-slide briefing deck (canonical)
```

Open the **Design System** tab in the sidebar to browse cards.

---

## What needs your input

- **Production font license.** Death From Above DEMO is fine for prototyping; for shipped artifacts you'll want the licensed full family.
- **Photography library.** The brand bible calls for monochrome / duotone single-object imagery — there is none yet. Point me at a library or commission, and I'll integrate.
- **Mark direction.** I built a chevron-orb SVG that matches the Akasha visual. The original dagger PNG is preserved as legacy. Tell me which is canonical going forward.
