# 珠寶源 JES — Project Agent Rules

## Stack Constraints
- **Framework**: React 18 + Vite 5 (NO Next.js, NO CRA)
- **Styling**: Vanilla CSS via `src/index.css` design tokens — NO Tailwind, NO CSS modules, NO styled-components
- **Icons**: `lucide-react` only — do NOT add other icon libraries
- **No new dependencies** without explicit user approval

## Design System Non-Negotiables
- ALL colours MUST reference CSS variables defined in `src/index.css`
  (`--gold-primary`, `--bg-dark`, `--bg-card`, `--text-muted`, etc.)
- Pearl Light Minimalist aesthetic (Style 3): pearl grey background (`#F0F2F6`), pure white cards (`#FFFFFF`), warm terracotta orange accents (`#EA580C`); legacy dark gold preserved via `[data-theme="classic-gold"]`
- ALL new card surfaces MUST use `.glass-card` or `.glass-panel` utility classes
- Typography: `var(--font-serif)` (Noto Serif TC / Cinzel) for headings,
  `var(--font-sans)` (Plus Jakarta Sans) for body copy
- Buttons: use `.btn-primary` (gold gradient) or `.btn-secondary` (ghost) — no ad-hoc button styles

## Component Conventions
- One component per file in `src/components/`
- All page sections receive `onOpenDemoModal` prop for CTA actions
- Inline styles are acceptable for layout — the project does not use utility classes for layout
- No prop-types or TypeScript — plain JavaScript only
- No test files exist yet; manual browser verification via `npm run dev` is current validation

## SDD Gate Rules
- New **section or component** → MUST go through `speckit.specify` → `speckit.plan` → approval → implement
- UI **tweaks** (colour, spacing, copy changes) → direct implementation allowed without SDD
- Feature additions to existing components → `speckit.specify` gate required

## Language Policy
- All user-facing copy: **Traditional Chinese (zh-TW)**
- Code, comments, variable names: **English**

## Testing Strategy
- No automated test suite currently; Playwright E2E is the preferred approach when tests are added
