import React, { useState, useEffect } from 'react';
import SingleScreenProfile from './components/SingleScreenProfile';
import UnderConstruction from './components/UnderConstruction';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isUnderConstruction = currentPath === '/under-construction' || currentPath === '/coming-soon';

  if (isUnderConstruction) {
    return <UnderConstruction />;
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* 100% Grounded Single-Screen Profile (Option B) */}
      <SingleScreenProfile />
    </div>
  );
}
