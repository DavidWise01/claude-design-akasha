---
name: akasha-design
description: Use this skill to generate well-branded artifacts for Akasha (a TriPod LLC publication) — the design system home of The Purple Book, A Joint Human-AI Bill of Rights. Use for marketing pages, briefing decks, internal ledgers, methodology docs, social cards, and other AI-ethics editorial work. Contains essential design guidelines, color and type tokens, fonts, brand marks, and React UI kit components.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

The Akasha brand sits at the intersection of **ceremonial / contemplative** and **technical / declarative**. The look:
- **Cream paper + deep ink + a single dark sigil.** Aether `#F5F1E6` background, ink `#0A0A0A` typography. Most compositions feature one focal object — usually the chevron-orb mark.
- **Purple is the signal.** `#4A2168 → #6B2E9C → #B070E0`. Used once per screen for the primary action or hot accent. Pulled from The Purple Book.
- **Mono labels with very wide tracking.** JetBrains Mono at 0.22–0.32em letter-spacing, often lowercase. Akasha-signature ("commons1 • read only • forever").
- **Death From Above** only for impact lines. The rest is Space Grotesk + JetBrains Mono — quiet, readable.
- **Slow breathing animations**, soft atmospheric shadows, never bouncy.

Key files:
- `README.md` — full brand bible (voice, foundations, iconography, file index).
- `colors_and_type.css` — every token (incl. legacy Bridge-Burners-era aliases so older files still render), fonts, base elements, buttons, the `.orb` class. Link this stylesheet into any artifact.
- `fonts/DeathFromAboveDEMO.ttf` — the display face. Demo distribution; license for production use.
- `assets/chevron-orb.svg` — primary brand mark.
- `assets/akasha-sigil.svg` — minimal secondary mark.
- `assets/logo-mark.png` — legacy / appendix mark (the hooded-dagger figure from the louder Bridge Burners register).
- `preview/*.html` — design-system cards demonstrating every token and component.
- `ui_kits/marketing/` — public site components (Header, Hero, StatBlock, ManifestoBand, ReportCard, ReportsGrid, Newsletter, Footer).
- `ui_kits/product/` — internal ledger components for tracking phases, signatures, evidence.
- `ui_kits/docs/` — handbook components.
- `slides/purple-book.html` — canonical 11-slide press deck (use as a template for new decks).
- `slides/index.html` — earlier Bridge-Burners-era deck; reference only.

Voice rules (CRITICAL):
- **"Both work. Both fair."** is the thesis. Quote it; don't paraphrase.
- Use **"we"** for the lab speaking; **"both"** for the human-AI dyad ("Both signed.").
- Section markers `§ ¶ † ‡` replace "Section 3 / Note 1."
- Sentence case for prose. Lowercase or UPPERCASE only inside mono labels.
- Never emoji. Never "leverage / harness / unlock / responsible scaling." Never glowing-AI-brain illustrations.

When working:
- **If creating visual artifacts** (slides, mocks, marketing pages, decks, social cards): copy `assets/`, `fonts/`, and `colors_and_type.css` into the output project. Lift component patterns from `ui_kits/` rather than re-deriving styles. Output static HTML unless the user asks for a framework.
- **If working on production code**: use `colors_and_type.css` as the source of truth and translate tokens to your stack. Lift component compositions from `ui_kits/`.
- **Never invent new motifs.** No bluish-purple sweeps, no glassmorphism, no emoji cards, no rounded-corner-with-left-border-only callouts.

If the user invokes this skill without other guidance, ask what they want to build (a deck? a phase page? a one-pager?), ask 3–5 clarifying questions about audience and tone, then act as an expert designer who outputs HTML or production code as needed.
