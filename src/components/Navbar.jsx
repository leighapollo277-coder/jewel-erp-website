import React, { useState, useEffect } from 'react';
import { Gem, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        padding: scrolled ? '16px 0' : '24px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px var(--gold-glow)'
          }}>
            <Gem size={24} color="#FFFFFF" />
          </div>
          <div>
            <span className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-heading)', letterSpacing: '0.5px' }}>
              珠寶源 <span className="title-gold" style={{ fontSize: '1.1rem', marginLeft: '4px', fontWeight: 800 }}>JES</span>
            </span>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Jewelry Management Platform
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          <a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--text-heading)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            全方位解決方案
          </a>
          <a href="#proof" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--text-heading)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            行業實力證實
          </a>
          <a href="#process" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--text-heading)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>
            無痛轉型藍圖
          </a>
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onOpenDemoModal} className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            <span>預約專屬演示</span>
            <ArrowRight size={16} />
          </button>
          
          {/* Mobile menu toggle button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-heading)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '8px'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
