import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DualColumnToggle from './components/DualColumnToggle';
import SocialProof from './components/SocialProof';
import SafeTransition from './components/SafeTransition';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';
import ThemeChooser from './components/ThemeChooser';
import UnderConstruction from './components/UnderConstruction';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isPreview = currentPath.startsWith('/preview') ||
                    currentPath.startsWith('/jes') ||
                    window.location.search.includes('preview');

  if (!isPreview) {
    return <UnderConstruction />;
  }

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Navigation Header */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Hero Section */}
      <HeroSection onOpenDemoModal={handleOpenDemoModal} />

      {/* Dual Column Toggle Section (Manufacturer vs Retailer) */}
      <DualColumnToggle onOpenDemoModal={handleOpenDemoModal} />

      {/* Social Proof & Metrics Section (20+ yrs, 15% loss optimization, River Mounts) */}
      <SocialProof onOpenDemoModal={handleOpenDemoModal} />

      {/* Safe Transition Section (30-day blueprint, Artisan UI, Cloud ROI) */}
      <SafeTransition onOpenDemoModal={handleOpenDemoModal} />

      {/* Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* B2B Demo Request Lead Form Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />

      {/* Luxury Color Theme Chooser Widget */}
      <ThemeChooser />
    </div>
  );
}
