import React, { useEffect } from 'react';
import SolutionsNavbar from './SolutionsNavbar';
import SolutionsHero from './SolutionsHero';
import SolutionsPainPoints from './SolutionsPainPoints';
import SolutionsModules from './SolutionsModules';
import SolutionsRoadmap from './SolutionsRoadmap';
import SolutionsWhyUs from './SolutionsWhyUs';
import SolutionsFaq from './SolutionsFaq';
import SolutionsFooter from './SolutionsFooter';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsLanding() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = lang === 'en' 
      ? 'SME Automation & IT Solutions | AlphaOne Technology'
      : '中小企智能自動化與 IT 方案 ｜ 思琳科技 AlphaOne Technology';
  }, [lang]);
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-dark, #E8EBF0)',
        color: '#0F172A',
        fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)',
        overflowX: 'hidden',
      }}
    >
      {/* S1: Sticky Navigation Bar with Multi-Product Switcher */}
      <SolutionsNavbar />

      {/* S2: High-Converting Hero Section */}
      <SolutionsHero />

      {/* S3: Operational Pain Points Matrix & Labor ROI Callout */}
      <SolutionsPainPoints />

      {/* S4: 4 Core Service Modules (2 Sharp Wedges + 2 Enterprise Add-ons Bento Grid) */}
      <SolutionsModules />

      {/* S5: Dual-Track Roadmap & Enterprise Data Trust */}
      <SolutionsRoadmap />

      {/* S6: Why AlphaOne Engineering & Dual-City Backing */}
      <SolutionsWhyUs />

      {/* S7: Interactive FAQ Accordion Addressing Key Buyer Hesitations */}
      <SolutionsFaq />

      {/* S8: Bottom CTA Banner & Official Hong Kong/Shenzhen Registry */}
      <SolutionsFooter />
    </div>
  );
}

