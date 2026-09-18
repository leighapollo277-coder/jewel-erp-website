# 珠寶源 JES Marketing Site — Technical Plan (Migrated)

## Current Architecture

Single-page React application served by Vite dev server. No routing — all content
is rendered in a single scrollable page. State is minimal and local.

```
App.jsx
├── Navbar.jsx          — Sticky nav, CTA → opens DemoModal
├── HeroSection.jsx     — Hero copy + KPI stats grid + metal utilization
├── DualColumnToggle.jsx — Manufacturer vs Retailer persona toggle
├── SocialProof.jsx     — Trust metrics and proof section
├── SafeTransition.jsx  — 30-day onboarding / ROI messaging
├── Footer.jsx          — Site footer
└── DemoModal.jsx       — Lead-gen modal (shared, lifted to App state)
```

---

## Technology Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | 18.2.0 |
| Build Tool | Vite | 5.1.4 |
| Icons | lucide-react | 0.344.0 |
| Styling | Vanilla CSS (inline styles + global tokens) | — |
| Language | JavaScript (no TypeScript) | — |
| Package Manager | npm | — |

---

## Component Map

| Component | Responsibility | Key Props |
|---|---|---|
| `App.jsx` | Root layout, modal state management | — |
| `Navbar.jsx` | Sticky header, brand logo, CTA | `onOpenDemoModal` |
| `HeroSection.jsx` | Above-fold content, KPI grid, metal bars, activity feed | `onOpenDemoModal` |
| `DualColumnToggle.jsx` | Persona toggle (manufacturer/retailer), feature lists | `onOpenDemoModal` |
| `SocialProof.jsx` | Trust metrics, testimonials [INFERRED] | `onOpenDemoModal` |
| `SafeTransition.jsx` | Risk-reduction, 30-day onboarding messaging | `onOpenDemoModal` |
| `DemoModal.jsx` | Lead capture form, modal overlay | `isOpen`, `onClose` |
| `Footer.jsx` | Brand footer | `onOpenDemoModal` |

---

## Design System

All design tokens live in `src/index.css` as CSS custom properties:

```css
/* Colours */
--bg-dark: #0A0B0E;           /* Page background */
--bg-card: #12141C;           /* Card surfaces */
--gold-primary: #D4AF37;      /* Primary accent */
--gold-gradient: linear-gradient(135deg, #F5E8B9, #D4AF37, #997400);

/* Typography */
--font-serif: 'Noto Serif TC', 'Cinzel', serif;
--font-sans: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;

/* Radii */
--radius-md: 16px;
--radius-lg: 24px;
--radius-full: 9999px;
```

Utility classes: `.glass-card`, `.glass-panel`, `.btn-primary`, `.btn-secondary`,
`.badge-gold`, `.title-gold`, `.font-serif`, `.container`, `.section-padding`

---

## State Management

| State | Location | Type |
|---|---|---|
| `isDemoModalOpen` | `App.jsx` | `useState(false)` |
| `barsVisible` | `HeroSection.jsx` | `useState(false)` — drives bar animation |
| Persona toggle state | `DualColumnToggle.jsx` | Local `useState` [INFERRED] |

No global state management (no Redux, Zustand, Context API in use).

---

## Build & Dev

```bash
npm run dev      # Vite dev server (HMR), defaults to :3000, falls back to :3002
npm run build    # Production bundle → dist/
npm run preview  # Preview production build
```

---

## Identified Architecture Gaps

- [ ] No error boundaries around any component
- [ ] No lazy loading / code splitting (entire app loads eagerly)
- [ ] `DemoModal` form has no confirmed submission endpoint
- [ ] No SEO meta tag strategy confirmed
- [ ] No analytics / conversion tracking instrumented
