import React, { useState } from 'react';
import { Cpu, Menu, X, PhoneCall, ArrowUpRight, Globe, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { navigateTo } from '../../utils/navigation';

export default function SolutionsNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, toggleLanguage, st } = useLanguage();

  const navLinks = [
    { label: st.nav.painPoints, href: '#pain-points' },
    { label: st.nav.modules, href: '#modules' },
    { label: st.nav.pricing, href: '#pricing' },
    { label: st.nav.whyUs, href: '#why-us' },
    { label: st.nav.faq, href: '#faq' },
    { label: st.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      data-testid="solutions-navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(232, 235, 240, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #D8DCE6',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top Multi-Product Switcher Strip */}
      <div
        style={{
          backgroundColor: '#0F172A',
          color: '#94A3B8',
          fontSize: '0.8rem',
          padding: '6px clamp(16px, 4vw, 24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#94A3B8', fontWeight: 600, fontSize: '0.76rem', letterSpacing: '0.3px' }}>
              {lang === 'en' ? 'AlphaOne Enterprise Solutions:' : '思琳科技 企業服務體系：'}
            </span>
            <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '6px', padding: '2px' }}>
              <button
                onClick={() => navigateTo(lang === 'en' ? '/en' : '/')}
                style={{
                  padding: '3px 10px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#CBD5E1',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
              >
                💎 {lang === 'en' ? 'Jewel Source® JES' : '珠寶源® JES (珠寶系統)'}
              </button>
              <button
                onClick={() => navigateTo(lang === 'en' ? '/en/solutions' : '/solutions')}
                style={{
                  padding: '3px 10px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: '#FF6B22',
                  color: '#FFFFFF',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                ⚡ {lang === 'en' ? 'SME Automation (AlphaFlow)' : '中小企智能自動化 (AlphaFlow)'}
              </button>
            </div>
          </div>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.75rem', color: '#94A3B8' }}>
            <span>🇭🇰 香港紅磡總部 · 🇨🇳 深圳研發中心</span>
          </div>
        </div>
      </div>

      <div
        className="nav-container"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '12px clamp(16px, 4vw, 24px)',
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
            className="nav-logo-icon"
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
            <Cpu size={22} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                className="nav-logo-text"
                style={{
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.3px',
                  color: '#0F172A',
                }}
              >
                {lang === 'en' ? (
                  <>AlphaOne<span style={{ color: '#FF6B22', marginLeft: '4px' }}>Flow</span></>
                ) : (
                  <>思琳智能自動化<span style={{ fontSize: '0.85rem', verticalAlign: 'super', fontWeight: 600, color: '#FF6B22', marginLeft: '2px' }}>PRO</span></>
                )}
              </span>
            </div>
            <div
              className="nav-sub-text"
              style={{
                fontSize: '0.72rem',
                color: '#64748B',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              {lang === 'en' ? 'AlphaOne Technology Limited' : '思琳科技 AlphaOne Technology'}
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
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

        {/* Desktop CTA Action & Language Switcher */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          className="desktop-nav"
        >
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              borderRadius: '8px',
              border: '1px solid #D0D5DD',
              backgroundColor: '#FFFFFF',
              color: '#0F172A',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title={lang === 'zh' ? 'Switch to English' : '切換至繁體中文'}
          >
            <Globe size={15} color="#FF6B22" />
            <span>{lang === 'zh' ? 'EN' : '繁體'}</span>
          </button>

          <a
            href="tel:+85227224360"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.86rem',
              fontWeight: 600,
              color: '#0F172A',
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #D0D5DD',
              backgroundColor: '#FFFFFF',
            }}
          >
            <PhoneCall size={14} color="#FF6B22" />
            +852 2722 4360
          </a>
          <a
            href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%8415%E5%88%86%E9%90%98%E4%B8%AD%E5%B0%8F%E4%BC%81%E8%87%AA%E5%8B%95%E5%8C%96%E6%B5%81%E7%A8%8B%E8%A8%BA%E6%96%B7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.86rem' }}
          >
            {st.nav.ctaDiagnosis}
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: '#FFFFFF',
            border: '1px solid #D8DCE6',
            color: '#0F172A',
            cursor: 'pointer',
            padding: '7px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} color="#FF6B22" /> : <Menu size={22} color="#0F172A" />}
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
          {/* Mobile Product Line Switcher */}
          <div
            style={{
              padding: '12px 14px',
              backgroundColor: '#0F172A',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {lang === 'en' ? 'Product Line' : '服務體系切換'}
            </span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => { setMobileMenuOpen(false); navigateTo(lang === 'en' ? '/en' : '/'); }}
                style={{
                  flex: 1,
                  padding: '7px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#CBD5E1',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                💎 珠寶源 JES
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); navigateTo(lang === 'en' ? '/en/solutions' : '/solutions'); }}
                style={{
                  flex: 1,
                  padding: '7px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#FF6B22',
                  color: '#FFFFFF',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                ⚡ 中小企自動化
              </button>
            </div>
          </div>

          {/* Mobile Language Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              backgroundColor: '#F8FAFC',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>
              <Globe size={16} color="#FF6B22" />
              <span>Language</span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => setLang('zh')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: lang === 'zh' ? '1px solid #FF6B22' : '1px solid #CBD5E1',
                  backgroundColor: lang === 'zh' ? '#FF6B22' : '#FFFFFF',
                  color: lang === 'zh' ? '#FFFFFF' : '#475569',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                繁體中文
              </button>
              <button
                onClick={() => setLang('en')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: lang === 'en' ? '1px solid #FF6B22' : '1px solid #CBD5E1',
                  backgroundColor: lang === 'en' ? '#FF6B22' : '#FFFFFF',
                  color: lang === 'en' ? '#FFFFFF' : '#475569',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                English
              </button>
            </div>
          </div>

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
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
              +852 2722 4360
            </a>
            <a
              href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%8415%E5%88%86%E9%90%98%E4%B8%AD%E5%B0%8F%E4%BC%81%E8%87%AA%E5%8B%95%E5%8C%96%E6%B5%81%E7%A8%8B%E8%A8%BA%E6%96%B7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ justifyContent: 'center' }}
            >
              {st.nav.ctaDiagnosis}
            </a>
          </div>
        </div>
      )}

      <style>{`
        .mobile-toggle {
          display: none;
        }
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 640px) {
          .nav-container {
            padding: 10px 16px !important;
          }
          .nav-logo-icon {
            width: 34px !important;
            height: 34px !important;
            border-radius: 8px !important;
          }
          .nav-logo-text {
            font-size: 1.1rem !important;
          }
          .nav-sub-text {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </nav>
  );
}

