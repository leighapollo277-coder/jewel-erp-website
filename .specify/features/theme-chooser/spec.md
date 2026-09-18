# Feature Specification: Color Theme Chooser (珠寶源 JES)

## Overview
Enable real-time color theme switching on the **珠寶源 JES** B2B website. Retain the signature **Classic Gold (尊爵香檳金)** as the default luxury theme while introducing three curated **Orange + Grey (熾橙與鈦灰)** styles that reflect modern industrial jewelry engineering and high-contrast precision.

---

## User Scenarios

### Scenario 1: Quick Theme Switching Across Site
As a luxury jewelry brand owner or manufacturer evaluating JES, I want to toggle between different aesthetic palettes (Classic Gold vs. modern Orange + Grey styles) using a floating theme chooser widget so that I can experience how the JES interface and branding adapt to different enterprise luxury sensibilities.

### Scenario 2: Theme Persistence
As a visiting decision-maker or demo presenter, when I select a theme and refresh the page or navigate around, the website must remember my chosen theme via local browser storage so the demo presentation remains consistent.

### Scenario 3: Non-Intrusive Floating & Responsive Access
As a mobile or desktop user, the theme selector should be available on the screen via an elegant floating button that expands into a rich palette chooser without obscuring primary conversion CTAs or body copy.

---

## Functional Requirements

### FR-01: Theme Palette Definitions
The system shall support four distinct luxury themes defined via dynamic CSS variables:
1. **Classic Gold (尊爵香檳金 - Default)**:
   - Base Dark: `#0A0B0E`, Card: `#12141C`, Surface: `#151821`
   - Primary: `#D4AF37`, Light: `#F3E5AB`, Dark: `#AA820A`
   - Glow: `rgba(212, 175, 55, 0.25)`
2. **Titanium Sunset (鈦灰日落橙)**:
   - Base Grey: `#0D0F14`, Card: `#151922`, Surface: `#181D27`
   - Primary: `#FF7A00`, Light: `#FFB366`, Dark: `#CC5800`
   - Glow: `rgba(255, 122, 0, 0.28)`
3. **Amber Graphite (石墨琥珀橙)**:
   - Base Graphite: `#111215`, Card: `#191B20`, Surface: `#1C1E24`
   - Primary: `#F97316`, Light: `#FDBA74`, Dark: `#C2410C`
   - Glow: `rgba(249, 115, 22, 0.28)`
4. **Basalt Cyber Slate (冷岩極速橙)**:
   - Base Basalt: `#12151A`, Card: `#1A1F26`, Surface: `#1D232B`
   - Primary: `#FF5500`, Light: `#FFA166`, Dark: `#C73B00`
   - Glow: `rgba(255, 85, 0, 0.30)`

### FR-02: Zero-Regression CSS Variable Overrides
- All themes shall be activated via the `[data-theme="<theme-id>"]` attribute on the `<html>` root element.
- Theme tokens must dynamically map to standard variables (`--gold-primary`, `--gold-gradient`, `--gold-glow`, `--border-gold`, `--bg-dark`, `--bg-card`, `--bg-surface`, `--gold-primary-rgb`).
- All existing components (`HeroSection`, `DualColumnToggle`, `SocialProof`, `SafeTransition`, `DemoModal`, `Navbar`, `Footer`) must adapt instantly without structural breakage.

### FR-03: Theme Chooser Component (`ThemeChooser.jsx`)
- Built using the existing luxury design system (`.glass-panel`, `.glass-card`).
- Floating trigger button fixed at the bottom-right of the viewport with icon and current theme indicator.
- Expandable palette modal/drawer displaying the 4 theme options with live color swatch chips (surface color + accent color), Chinese title, and description.
- Active theme indicator with checkmark or glowing border.
- Click-outside and close button functionality to dismiss the chooser.

### FR-04: Persistence
- Active theme preference is stored in `localStorage` under key `jes-theme`.
- On initial load, script reads `jes-theme` from `localStorage` (falling back to `'classic-gold'`).

---

## Non-Functional Requirements
- **Performance**: Zero-dependency implementation; instant theme switching with CSS transitions (`--transition-smooth`).
- **Design Consistency**: Must comply with `.agents/AGENTS.md` (no Tailwind, pure CSS variables, dark luxury aesthetic).
- **Accessibility**: Keyboard accessible toggle button with ARIA attributes (`aria-label`, `aria-expanded`).

---

## Success Criteria
- [ ] Switching themes in the chooser updates all site sections instantly without page reload.
- [ ] Reloading the page retains the active theme selection.
- [ ] No visual regressions in existing typography, layout cards, or modal behavior.
- [ ] Floating chooser functions cleanly on both mobile (<768px) and desktop viewports.
