> **This specification was auto-generated via `speckit.migrate` from the existing codebase.**
> Review and refine before using for future development. Confidence scores are noted inline.

# 珠寶源 JES Marketing Site — Specification (Migrated)

## Overview

A single-page B2B marketing website for **珠寶源 JES** (Jewel ERP System) — an ERP platform
purpose-built for the jewellery manufacturing and branded-chain retail industry. The site's
sole conversion objective is to drive demo booking requests via a lead-capture modal.

**Target users**: Traditional Chinese-speaking jewellery manufacturers and retailers
**Conversion goal**: Demo booking (`DemoModal` lead form)
**Live URL**: localhost:3002 (dev); production URL TBD

---

## Functional Requirements

### FR-01: Navigation
- Sticky navigation bar with brand logo and primary CTA ("預約演示")
- Smooth-scroll anchor links to page sections
- CTA button opens `DemoModal`

### FR-02: Hero Section
- Brand badge, headline, and sub-headline communicating the JES value proposition
- Two CTA buttons: primary (demo booking) and secondary (scroll to features)
- Trust micro-badges: "20+ 年權威經驗", "平均優化 15% 損耗", "30 天無痛藍圖"
- **[MIGRATED]** Stats & feature grid below the copy:
  - 3 KPI stat cards (accuracy, metal loss reduction, onboarding time)
  - Metal utilization breakdown with animated progress bars (Au, Ag, Pt, 玫瑰金)
  - Live system activity feed (5 mock events)

### FR-03: Dual-Column Toggle (Manufacturer vs Retailer)
- Toggle UI switching between two audience personas: manufacturer (製造商) and retailer (零售商)
- Each persona has its own feature list and CTA
- [INFERRED] Implemented in `DualColumnToggle.jsx`

### FR-04: Social Proof Section
- Metrics and trust signals (20+ years, 15% loss optimization, reference to "River Mounts")
- [INFERRED] Implemented in `SocialProof.jsx`

### FR-05: Safe Transition Section
- 30-day onboarding blueprint messaging
- Artisan UI positioning
- Cloud ROI messaging
- [INFERRED] Implemented in `SafeTransition.jsx`

### FR-06: Demo Request Modal
- Lead capture form for demo bookings
- Triggered from multiple CTAs across all sections
- [INFERRED] Implemented in `DemoModal.jsx`

### FR-07: Footer
- Brand footer with links and legal copy
- [INFERRED] Implemented in `Footer.jsx`

---

## Key Entities

| Entity | Description |
|---|---|
| `DemoModal` | Lead-gen form modal, opened via `onOpenDemoModal` prop |
| `HeroSection` | Above-the-fold section with headline + stats grid |
| `DualColumnToggle` | Persona-switching feature comparison section |
| `SocialProof` | Trust metrics and social proof section |
| `SafeTransition` | Onboarding / risk-reduction messaging section |
| `Navbar` | Sticky navigation with CTA |
| `Footer` | Site footer |

---

## Non-Functional Requirements

- **Performance**: Single-page, no routing, minimal JS bundle
- **Responsiveness**: Mobile-aware (wrapping layouts), though desktop is primary target
- **Accessibility**: Semantic HTML elements, `alt` on images [INFERRED - not verified]
- **Language**: Traditional Chinese (zh-TW) for all user-facing copy

---

## Identified Gaps / Open Questions

- [ ] No automated tests exist — Playwright E2E coverage is absent
- [ ] No SEO meta tags verified beyond `index.html` title
- [ ] `DualColumnToggle`, `SocialProof`, `SafeTransition` not fully analysed (specs inferred from comments)
- [ ] Production deployment target unknown
- [ ] Form submission endpoint for `DemoModal` not confirmed
