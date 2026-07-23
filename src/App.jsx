import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DualColumnToggle from './components/DualColumnToggle';
import SocialProof from './components/SocialProof';
import SafeTransition from './components/SafeTransition';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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
    </div>
  );
}
