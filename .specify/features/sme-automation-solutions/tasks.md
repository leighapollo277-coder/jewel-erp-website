# Tasks: SME Automation Solutions Implementation

## Phase 1: Routing & Localization Foundation
- [x] **T1.1: Enhance LanguageContext for Path Preservation & Dynamic Titles**
  - Implement `getLocalizedPath` in `src/utils/navigation.js` and `src/context/LanguageContext.jsx` to preserve arbitrary sub-paths (`/solutions` ⇄ `/en/solutions`).
  - Dispatch synthetic `PopStateEvent` after `pushState` to ensure React re-renders without full page reloads.
  - Dynamically set `document.title` based on language and current route (`/` vs `/solutions`).
- [x] **T1.2: Register `/solutions` Route in App.jsx**
  - Update `src/App.jsx` to detect `isSolutionsRoute = currentPath === '/solutions' || currentPath === '/en/solutions'`.
  - Wire up `<SolutionsLanding />` conditionally, preserving 100% of the default `<AirwallexLanding />` route for `/` and `/en`.
- [x] **T1.3: Create Dedicated Bilingual Dictionary**
  - Create `src/i18n/solutionsTranslations.js` containing complete Traditional Chinese (zh-TW) and English (en) copy for all SME sections (Hero, Pain Points, Modules, Pricing/Roadmap, WhyUs, FAQ, Footer).

## Phase 2: Navigation & Product Switcher
- [x] **T2.1: Add Product Switcher to LandingNavbar.jsx**
  - Add segmented pill switcher `[ 💎 珠寶源 JES ] ⇄ [ ⚡ 中小企自動化 (AlphaFlow) ]` in `LandingNavbar.jsx`.
  - Integrate `navigateTo('/solutions')` without triggering full page reloads.
  - Update mobile menu drawer to include the product switcher at the top.

## Phase 3: SME Solutions Components
- [x] **T3.1: Build SolutionsNavbar.jsx**
  - Create `src/components/solutions/SolutionsNavbar.jsx` with section anchors (`#pain-points`, `#modules`, `#pricing`, `#why-us`, `#faq`, `#contact`), product switcher, language toggle, and direct phone/WhatsApp CTA.
- [x] **T3.2: Build SolutionsHero.jsx & SolutionsPainPoints.jsx**
  - Implement `SolutionsHero.jsx` with enterprise automation badge, bold labor-saving headline, dual CTA buttons, and quick stats.
  - Implement `SolutionsPainPoints.jsx` with manual vs. automated comparison cards (highlighting 40-80 hrs saved/month and zero manual data-entry errors).
- [x] **T3.3: Build SolutionsModules.jsx (Bento Grid)**
  - Implement 4-card Bento Grid:
    - Card 1 (Wedge): AI Document & PO Extraction (with 3-way matching and 3-5s parsing latency).
    - Card 2 (Wedge): Meta Official WhatsApp Business Hub (with central CRM and receipt OCR).
    - Card 3 (Add-on): Cross-System Workflow & Executive Daily Briefs.
    - Card 4 (Add-on): Lightweight Custom Web Tools & UHF RFID Bulk Audit.
- [x] **T3.4: Build SolutionsRoadmap.jsx & SolutionsWhyUs.jsx**
  - Implement `SolutionsRoadmap.jsx` showcasing the dual-track model (Track A: 2-Week Quick-Win POC with HK$8,800 / HK$28,000 price anchors; Track B: TVP / BUD Full Digitalization) and Enterprise Data Trust badge (PDPO / TLS 1.3 / Zero-Data-Retention).
  - Implement `SolutionsWhyUs.jsx` highlighting precision software engineering heritage, Hong Kong Hung Hom Demo Center, and Shenzhen R&D facility.
- [x] **T3.5: Build SolutionsFaq.jsx, SolutionsFooter.jsx & SolutionsLanding.jsx**
  - Implement `SolutionsFaq.jsx` with interactive accordion covering 5 core SME buyer objections.
  - Implement `SolutionsFooter.jsx` with high-impact CTA banner and official Hong Kong/Shenzhen registry from GT-009.
  - Orchestrate all sections cleanly inside `SolutionsLanding.jsx`.

## Phase 4: Validation & Quality Gate
- [x] **T4.1: Ground Truth & Build Integrity Verification**
  - Run `python3 scripts/audit_ground_truth.py --file GROUND_TRUTH.md --strict`.
  - Run `npm run build` to ensure zero compilation or asset errors.
- [x] **T4.2: End-to-End Visual & Functional Browser Verification**
  - Execute automated browser tests with Playwright:
    - Verify `/` (JES Homepage) remains 100% pixel-perfect and functional (Desktop 1280px & Mobile 375px).
    - Test product switcher navigation (`/` ⇄ `/solutions`).
    - Test path-preserving language toggle (`/solutions` ⇄ `/en/solutions`).
    - Verify all FAQ accordions and CTA links (`tel:`, `mailto:`, WhatsApp) on `/solutions`.
