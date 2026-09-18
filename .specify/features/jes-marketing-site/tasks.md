# 珠寶源 JES Marketing Site — Tasks (Migrated)

> All `[x]` tasks represent existing implemented functionality.
> Tasks marked `[ ]` are inferred gaps or improvement opportunities.

---

## Existing Implementation (Completed)

### Foundation
- [x] Vite + React 18 project scaffold
- [x] Global CSS design token system (`src/index.css`)
- [x] Utility classes: `.glass-card`, `.glass-panel`, `.btn-primary`, `.btn-secondary`, `.badge-gold`, `.title-gold`

### Navigation
- [x] Sticky Navbar with brand logo
- [x] CTA button → opens DemoModal
- [x] Anchor links to page sections

### Hero Section
- [x] Brand badge ("專為珠寶生產生態與品牌鏈訂製 · 珠寶源 JES")
- [x] Headline with gold gradient text
- [x] Sub-headline copy
- [x] Primary CTA (預約專屬演示) → DemoModal
- [x] Secondary CTA (探索解決方案) → anchor scroll
- [x] Trust micro-badges (20+ 年, 15% 損耗, 30 天)
- [x] 3 KPI stat cards (accuracy, loss reduction, onboarding days)
- [x] Metal utilization panel with animated progress bars (Au, Ag, Pt, 玫瑰金)
- [x] Live system activity feed (5 mock events)

### Feature Sections
- [x] DualColumnToggle — manufacturer vs retailer persona toggle
- [x] SocialProof — trust metrics section
- [x] SafeTransition — 30-day onboarding / ROI section

### Conversion
- [x] DemoModal — lead-gen form modal
- [x] Modal state lifted to App.jsx, shared via `onOpenDemoModal` prop

### Footer
- [x] Brand footer implemented

---

## Identified Gaps (Open Tasks)

### SEO & Meta
- [ ] Verify `<title>` tag is descriptive and keyword-rich
- [ ] Add `<meta name="description">` to `index.html`
- [ ] Add Open Graph tags for social sharing

### Accessibility
- [ ] Audit all interactive elements for keyboard accessibility
- [ ] Verify all images have meaningful `alt` attributes
- [ ] Check colour contrast ratios on muted text (`--text-muted` on dark bg)

### DemoModal Submission
- [ ] Confirm/implement form submission endpoint or API
- [ ] Add client-side validation with error messages
- [ ] Add success/error state feedback after submission

### Performance
- [ ] Audit Lighthouse score and identify bottlenecks
- [ ] Consider lazy-loading below-fold sections

### Analytics
- [ ] Instrument CTA click tracking
- [ ] Track modal open / form submission conversion funnel

### Testing
- [ ] Set up Playwright for E2E testing
- [ ] Write E2E test: hero CTA → modal opens → form submission
- [ ] Write E2E test: persona toggle switches content correctly

### Content Depth
- [ ] Analyse `DualColumnToggle.jsx` and update spec with full feature list
- [ ] Analyse `SocialProof.jsx` and update spec with actual metrics
- [ ] Analyse `SafeTransition.jsx` and update spec with messaging content
