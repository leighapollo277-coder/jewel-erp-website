import React from 'react';
import LandingNavbar from './landing/LandingNavbar';
import LandingHero from './landing/LandingHero';
import FeaturePillars from './landing/FeaturePillars';
import ProcessBentoGrid from './landing/ProcessBentoGrid';
import FaqSection from './landing/FaqSection';
import LandingFooter from './landing/LandingFooter';

export default function AirwallexLanding() {
  return (
    <div
      data-testid="airwallex-landing-page"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-dark, #E8EBF0)',
        color: 'var(--text-main, #1E293B)',
        overflowX: 'hidden',
      }}
    >
      {/* 1. Sticky Navigation */}
      <LandingNavbar />

      {/* 2. Hero Section */}
      <main>
        <LandingHero />

        {/* 3. Three Core Pillars Matrix */}
        <FeaturePillars />

        {/* 4. Manufacturing Process & Bento Grid */}
        <ProcessBentoGrid />

        {/* 5. Enterprise FAQ Section */}
        <FaqSection />
      </main>

      {/* 6. Footer & Locations */}
      <LandingFooter />
    </div>
  );
}
