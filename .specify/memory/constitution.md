# 珠寶源 JES — Project Constitution
<!-- Sync Impact Report
Version change: N/A → 1.0.0 (initial ratification)
Added sections: Identity, Core Principles (5), Governance
Templates requiring updates: N/A (initial scaffold)
Deferred TODOs: RATIFICATION_DATE set to project inception estimate
-->

**Constitution Version**: 1.0.0
**Ratified**: 2026-07-24
**Last Amended**: 2026-07-24

---

## Project Identity

**Project Name**: 珠寶源 JES (Jewel ERP System)
**Type**: B2B Marketing & Lead-Generation Website
**Audience**: Jewellery manufacturers and branded-chain retailers in Traditional Chinese markets
**Primary Goal**: Drive demo booking requests (`DemoModal` lead form) by communicating the JES system's value proposition

---

## Principle 1 — Design Integrity

The dark-gold luxury aesthetic is the brand's core identity signal. All visual changes MUST:
- Use only CSS variables defined in `src/index.css`
- Preserve the dark background (`--bg-dark: #0A0B0E`) and gold accent (`--gold-primary: #D4AF37`) palette
- Maintain glassmorphism card surfaces (`.glass-card`, `.glass-panel`)

Rationale: Inconsistent visual language destroys premium perception for B2B jewellery buyers.

---

## Principle 2 — Traditional Chinese First

All user-facing copy MUST be written in Traditional Chinese (zh-TW). Code, comments, and
variable names MUST be in English.

Rationale: The target market is Traditional Chinese-speaking jewellery businesses. English copy
would signal the product is not built for them.

---

## Principle 3 — Conversion Focus

Every section MUST have a clear path to the demo request modal (`onOpenDemoModal`). No section
should be a dead end. CTAs MUST use `.btn-primary` (gold gradient) for the primary action.

Rationale: The site's sole business objective is lead generation via demo bookings.

---

## Principle 4 — Minimal Dependency Footprint

MUST NOT add npm dependencies without explicit user approval. Current approved dependencies:
- `react`, `react-dom` (v18)
- `lucide-react` (icons)
- `vite`, `@vitejs/plugin-react` (build tooling)

Rationale: Dependency sprawl increases bundle size, which degrades perceived performance for
a premium product.

---

## Principle 5 — SDD Discipline

Any new component or page section MUST go through the full SpecKit SDD gate
(specify → plan → approval → implement → validate) before implementation begins.
UI micro-tweaks (spacing, colour, copy) are exempt.

Rationale: Prevents misaligned features and enforces architectural review before code is written.

---

## Governance

**Amendment Procedure**:
1. Propose change in conversation with rationale
2. Increment version per semantic versioning (MAJOR/MINOR/PATCH)
3. Update `LAST_AMENDED_DATE` to ISO date of change
4. Propagate to `.agents/AGENTS.md` and relevant templates

**Versioning Policy**:
- MAJOR: Principle removal or redefinition that breaks prior guidance
- MINOR: New principle or material expansion of existing guidance
- PATCH: Wording clarification, typo fix

**Compliance Review**: Agent MUST self-check against this constitution before any implementation plan is approved.
