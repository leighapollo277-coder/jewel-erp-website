import React, { useState } from 'react';
import { Gem, Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '核心體系', href: '#features' },
    { label: '工藝與模組', href: '#process' },
    { label: 'RFID 便攜盤點', href: '#rfid' },
    { label: '常見問題', href: '#faq' },
    { label: '官方聯絡', href: '#contact' },
  ];

  return (
    <nav
      data-testid="navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(232, 235, 240, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #D8DCE6',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Identity */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: '#FF6B22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(255, 107, 34, 0.28)',
            }}
          >
            <Gem size={22} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.3px',
                  color: '#0F172A',
                }}
              >
                珠寶源<span style={{ fontSize: '0.85rem', verticalAlign: 'super', fontWeight: 600 }}>®</span> JES
              </span>
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                color: '#64748B',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              思琳科技 AlphaOne Technology
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#334155',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B22')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Action */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          className="desktop-nav"
        >
          <a
            href="tel:+85227224360"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#0F172A',
              textDecoration: 'none',
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid #D0D5DD',
              backgroundColor: '#FFFFFF',
            }}
          >
            <PhoneCall size={15} color="#FF6B22" />
            +852 2722 4360
          </a>
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: '9px 18px', fontSize: '0.88rem' }}
          >
            預約官方展示
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#0F172A',
            cursor: 'pointer',
            padding: '6px',
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #D8DCE6',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1E293B',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <a
              href="tel:+85227224360"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #D0D5DD',
                textDecoration: 'none',
                color: '#0F172A',
                fontWeight: 600,
              }}
            >
              <PhoneCall size={16} color="#FF6B22" />
              電話諮詢: +852 2722 4360
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ justifyContent: 'center' }}
            >
              預約官方展示
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
