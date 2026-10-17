import React, { useState, useEffect } from 'react';
import AirwallexLanding from './components/AirwallexLanding';
import SingleScreenProfile from './components/SingleScreenProfile';
import UnderConstruction from './components/UnderConstruction';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isUnderConstruction = currentPath === '/under-construction' || currentPath === '/coming-soon';
  const isProfileMode = currentPath === '/profile' || currentPath === '/single-screen';
  const isEnglishRoute = currentPath.startsWith('/en');

  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  if (isProfileMode) {
    return <SingleScreenProfile />;
  }

  return (
    <LanguageProvider initialLang={isEnglishRoute ? 'en' : undefined}>
      <div style={{ minHeight: '100vh', background: 'var(--bg-dark, #E8EBF0)' }}>
        {/* Airwallex-Style Modern Long-Scroll Landing Page (淺橙加灰) */}
        <AirwallexLanding />
      </div>
    </LanguageProvider>
  );
}
