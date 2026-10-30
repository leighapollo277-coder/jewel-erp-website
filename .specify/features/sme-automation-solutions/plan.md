# Implementation Plan: SME Automation & IT Solutions (`/solutions`)

## 1. Overview & Architectural Boundaries

This plan outlines the technical implementation of the new SME Automation & IT Solutions section for AlphaOne Technology Limited (思琳科技).
The deliverable establishes a dedicated client-facing landing page at `/solutions` (and `/en/solutions`), providing high-converting, professional presentation of SME automation capabilities without touching or regressing the existing Jewel Source® JES homepage (`/`).

---

## 2. Independent Auditor Challenge (`#independent-auditor`)

### 2.1 Summary of Friction
> [!WARNING] Friction Summary
> 1. **Commercial & Brand Identity Friction**: Placing generic SME automation under a dominant "Jewel ERP" navbar creates acute brand dissonance. Skeptical SME buyers may question why a jewelry niche provider is selling general automation.
> 2. **Technical Routing & Language Preservation Defect**: In `LanguageContext.jsx`, toggling between English and Traditional Chinese previously hardcoded `/` and `/en`, which would kick users off `/solutions` back to the homepage. Additionally, calling `window.history.pushState` does not natively dispatch `popstate`, leading to broken SPA tab switching without a full page reload.
> 3. **Commercial Scope & TVP Collision**: Promising both "2-week quick-win POC" and "TVP government voucher funding" without distinction creates a regulatory impossibility under HK ITC rules (TVP prohibits retrospective funding and requires prior open tender).

### 2.2 Agent Proposal
- Add a route `/solutions` in `App.jsx`.
- Insert a tab switcher in `LandingNavbar.jsx` connecting JES and Automation.
- Create modular components under `src/components/solutions/` styled with vanilla CSS tokens from `src/index.css`.
- Add Traditional Chinese and English copy to `src/i18n/solutionsTranslations.js`.

### 2.3 Auditor's Challenge
1. **Brand Architecture**: The agent must elevate AlphaOne Technology (思琳科技) as the parent corporate authority and introduce a distinct product identifier (`AlphaFlow` / 通用中小企智能自動化) so it is perceived as an enterprise infrastructure spinoff rather than a desperate freelance sideline.
2. **Path-Preserving Routing Invariant**: The agent must fix `LanguageContext.jsx` to preserve arbitrary URL sub-paths (`/solutions` ⇄ `/en/solutions`) and dispatch synthetic `PopStateEvent` on internal navigation.
3. **Dual-Track Commercial Reality**: The agent must segment the offering into "Track A: Self-funded 2-week Agile POC (HK$8,800–$28,000)" and "Track B: TVP / BUD Full Digital Transformation (HK$200k–$500k)".
4. **Data Privacy Assurance**: Must explicitly feature HK PDPO compliance, TLS 1.3 encryption, and Zero-Data-Retention guarantees to assuage SME fears of leaking supplier prices or client data.

### 2.4 Reconciled Plan
All four Auditor critiques are codified directly into the revised specification `spec.md` and the implementation tasks below:
- Clear parent corporate branding: "思琳科技 AlphaOne Enterprise Solutions", featuring the `[ 💎 珠寶源 JES ] ⇄ [ ⚡ 中小企自動化 (AlphaFlow) ]` segmented switcher.
- Path-preserving localization helper in `LanguageContext.jsx` and `navigateTo()` SPA helper.
- Explicit dual-track commercial framing and transparent price anchors.
- Enterprise data security badge and FAQ entry.

---

## 3. Testability-First Analysis (`#testability-first`)

### 3.1 Testability Surface
- **Unit / Pure Logic**:
  - `getLocalizedPath(targetLang, currentPath)`: Pure function transforming paths between `/` ⇄ `/en`, `/solutions` ⇄ `/en/solutions`.
  - `navigateTo(path)`: History push state + PopStateEvent emission.
- **Integration / Build**:
  - `scripts/audit_ground_truth.py`: Strict validation of ground truth claims before build.
  - `npm run build`: Zero Vite build or syntax errors.
- **End-to-End Visual & Interaction Verification**:
  - Desktop (1280px) and Mobile (375px) responsive layouts.
  - Smooth tab switching between `/` and `/solutions`.
  - Path-preserving language switcher toggling correctly without kicking users to `/`.
  - Direct CTA links (`tel:`, `mailto:`, and WhatsApp click-to-chat).

### 3.2 Regression Prevention Strategy
- The existing `AirwallexLanding.jsx` component and its sub-components will be completely isolated and remain 100% untouched.
- All SME automation components will be strictly confined to `src/components/solutions/` and `src/i18n/solutionsTranslations.js`.
- The existing homepage `/` will be validated with automated browser checks before and after implementation.

---

## 4. Technical Architecture & File Boundaries

### 4.1 Modifications to Existing Files (Surgical Only)
1. **`src/App.jsx`**:
   - Add route detection for `isSolutionsRoute = currentPath === '/solutions' || currentPath === '/en/solutions'`.
   - Render `<SolutionsLanding />` when `isSolutionsRoute` is true.
2. **`src/context/LanguageContext.jsx`**:
   - Implement `getLocalizedPath` to preserve current sub-path when changing language.
   - Dispatch `window.dispatchEvent(new PopStateEvent('popstate'))` after `pushState`.
   - Update `document.title` dynamically based on route.
3. **`src/components/landing/LandingNavbar.jsx`**:
   - Add product switcher pill `[ 💎 珠寶源 JES ] ⇄ [ ⚡ 中小企自動化 (AlphaFlow) ]`.
   - Support navigation via `navigateTo()`.
   - Support mobile drawer product switching.

### 4.2 New Files to Create
1. **`src/i18n/solutionsTranslations.js`**: Dedicated bilingual translation dictionary for SME Automation.
2. **`src/components/solutions/`**:
   - `SolutionsLanding.jsx`: Main container component.
   - `SolutionsNavbar.jsx`: Route-aware navbar tailored for solutions page.
   - `SolutionsHero.jsx`: S2 Hero section with dual CTA and labor savings badge.
   - `SolutionsPainPoints.jsx`: S3 Manual vs. Automated ROI comparison matrix.
   - `SolutionsModules.jsx`: S4 Modern Bento Grid featuring 2 sharp wedges + 2 enterprise add-ons.
   - `SolutionsRoadmap.jsx`: S5 Dual-track delivery framework and pricing anchors.
   - `SolutionsWhyUs.jsx`: S6 Engineering heritage and Hong Kong/Shenzhen backing.
   - `SolutionsFaq.jsx`: S7 Interactive accordion answering 5 key SME buyer objections.
   - `SolutionsFooter.jsx`: S8 High-impact CTA banner and official contact registry.

