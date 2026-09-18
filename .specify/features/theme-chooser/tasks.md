# Feature Tasks: Luxury Color Theme Chooser

## Task Breakdown

- [x] **Task 1: Pre-Hydration in `index.html`**
  - Added inline `<script>` in `<head>` to read `localStorage.getItem('jes-theme')` and set `data-theme` attribute on `document.documentElement` immediately to eliminate FOUC.

- [x] **Task 2: Theme Tokens in `src/index.css`**
  - Added `--gold-primary-rgb: 212, 175, 55;` to `:root`.
  - Added scoped CSS rules for:
    - `[data-theme="titanium-sunset"]`
    - `[data-theme="amber-graphite"]`
    - `[data-theme="basalt-slate"]`
  - Added smooth transition styling for theme property changes.

- [x] **Task 3: Create `src/components/ThemeChooser.jsx`**
  - Implemented floating button at bottom-right with `.glass-panel`.
  - Implemented expandable modal/card with 4 theme option cards, color swatches, active indicators, and dismiss actions (click-outside, escape).

- [x] **Task 4: Mount `ThemeChooser` in `src/App.jsx`**
  - Imported and mounted `<ThemeChooser />` in the root page layout.

- [x] **Task 5: Surgically Normalize Color References in Components**
  - Updated `HeroSection.jsx`, `SafeTransition.jsx`, `DualColumnToggle.jsx`, and `SocialProof.jsx` to use `var(--gold-primary)` and `rgba(var(--gold-primary-rgb), ...)`.

- [x] **Task 6: Build & Visual Verification**
  - Ran `npm run build` with 100% clean production bundle (2.10s).
  - Verified switching between all 4 themes via `browser_use_agent`.
  - Verified persistence across page reloads via `localStorage` and `data-theme` attribute check.
