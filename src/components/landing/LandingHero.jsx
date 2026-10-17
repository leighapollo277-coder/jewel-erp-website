import React from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  Activity,
  Boxes
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LandingHero() {
  const { t, lang } = useLanguage();

  return (
    <section
      data-testid="hero-section"
      className="hero-section"
      style={{
        padding: 'clamp(36px, 6vw, 64px) clamp(16px, 4vw, 24px) clamp(48px, 8vw, 80px) clamp(16px, 4vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left Column: Headlines & Call to Actions */}
        <div className="hero-left-col">
          {/* Eyebrow Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 107, 34, 0.10)',
              border: '1px solid rgba(255, 107, 34, 0.30)',
              color: '#E65100',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.3px',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} color="#FF6B22" />
            {t.hero.badge}
          </div>

          {/* 大大隻字 Bold Headline */}
          <h1
            className="hero-title"
            style={{
              fontSize: lang === 'en' ? 'clamp(1.4rem, 4.2vw, 2.75rem)' : 'clamp(1.5rem, 5.2vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              color: '#0F172A',
              letterSpacing: '-0.8px',
              marginBottom: '20px',
              wordBreak: 'break-word',
            }}
          >
            {t.hero.titlePart1}
            <span style={{ color: '#FF6B22', display: 'block' }}>
              {t.hero.titlePart2}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle"
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.08rem)',
              lineHeight: 1.68,
              color: '#475569',
              marginBottom: '32px',
              maxWidth: '560px',
              wordBreak: 'break-word',
            }}
          >
            {t.hero.subtitle}
          </p>

          {/* Dual CTAs */}
          <div
            className="hero-cta-group"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                fontSize: '0.98rem',
                padding: '13px 26px',
              }}
            >
              {t.hero.ctaDemo}
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+85227224360"
              className="btn-secondary"
              style={{
                fontSize: '0.98rem',
                padding: '13px 22px',
              }}
            >
              <PhoneCall size={18} color="#FF6B22" />
              {t.hero.ctaCall}
            </a>
          </div>

          {/* Trust Value Badges */}
          <div
            className="hero-trust-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '14px',
              paddingTop: '20px',
              borderTop: '1px solid #D8DCE6',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#FF6B22" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                {t.hero.trust1}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#FF6B22" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                {t.hero.trust2}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={16} color="#FF6B22" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                {t.hero.trust3}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Composite Software & Hardware Visual Panel */}
        <div className="hero-right-col" style={{ position: 'relative' }}>
          {/* Main Software Panel: JES Workshop Process Monitor */}
          <div
            className="bento-card hero-preview-card"
            style={{
              padding: '24px',
              border: '1px solid #D8DCE6',
              boxShadow: '0 10px 30px -4px rgba(15, 23, 42, 0.08)',
            }}
          >
            {/* Window Topbar */}
            <div
              className="hero-topbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', flexShrink: 0 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', flexShrink: 0 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginLeft: '8px',
                  }}
                >
                  {t.hero.monitorTitle}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#FF6B22',
                  backgroundColor: 'rgba(255, 107, 34, 0.10)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#FF6B22',
                  }}
                />
                {t.hero.monitorStatus}
              </div>
            </div>

            {/* Production Process Flow Nodes */}
            <div style={{ marginBottom: '22px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#64748B',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '10px',
                }}
              >
                {t.hero.flowTitle}
              </div>
              <div
                className="hero-process-steps"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '6px',
                  textAlign: 'center',
                }}
              >
                {t.hero.steps.map((item, idx) => {
                  const isActive = idx === 1;
                  return (
                    <div
                      key={idx}
                      className="hero-process-item"
                      style={{
                        padding: '8px 4px',
                        borderRadius: '8px',
                        backgroundColor: isActive ? 'rgba(255, 107, 34, 0.12)' : '#F8FAFC',
                        border: `1px solid ${isActive ? '#FF6B22' : '#E2E8F0'}`,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          color: isActive ? '#FF6B22' : '#94A3B8',
                        }}
                      >
                        {item.step}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: isActive ? '#0F172A' : '#475569',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          color: isActive ? '#FF6B22' : '#94A3B8',
                          marginTop: '2px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.status}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick KPI Strip - Grounded Architecture Facts */}
            <div
              className="hero-kpi-strip"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                  {t.hero.kpi1Label}
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 900, color: '#0F172A', marginTop: '2px' }}>
                  {t.hero.kpi1Val}{' '}
                  <span style={{ fontSize: '0.72rem', color: '#FF6B22', fontWeight: 700, display: 'inline-block' }}>
                    {t.hero.kpi1Sub}
                  </span>
                </div>
              </div>
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                  {t.hero.kpi2Label}
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 900, color: '#0F172A', marginTop: '2px' }}>
                  {t.hero.kpi2Val}{' '}
                  <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600, display: 'inline-block' }}>
                    {t.hero.kpi2Sub}
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Hardware Floating Card: TiaraNxt RFID Ecosystem */}
            <div
              className="hero-rfid-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(255, 107, 34, 0.35)',
                padding: '14px 16px',
                boxShadow: '0 6px 16px -2px rgba(255, 107, 34, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#FF6B22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <Radio size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                    {t.hero.rfidTitle}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.4 }}>
                    {t.hero.rfidDesc}
                  </div>
                </div>
              </div>
              <div
                className="hero-rfid-badge"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#FF6B22',
                  backgroundColor: 'rgba(255, 107, 34, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {t.hero.rfidBadge}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 100% !important;
            gap: 36px !important;
          }
          .hero-left-col,
          .hero-right-col {
            min-width: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            padding: 28px 16px 44px 16px !important;
          }
          .hero-left-col,
          .hero-right-col {
            min-width: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .hero-cta-group a {
            width: 100% !important;
            box-sizing: border-box !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 13px 18px !important;
          }
          .hero-trust-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .hero-preview-card {
            padding: 16px 14px !important;
            border-radius: 14px !important;
            box-sizing: border-box !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .hero-topbar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .hero-process-steps {
            display: flex !important;
            overflow-x: auto !important;
            gap: 8px !important;
            padding-bottom: 8px !important;
            -webkit-overflow-scrolling: touch !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-process-item {
            flex: 0 0 84px !important;
            min-width: 84px !important;
          }
          .hero-kpi-strip {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .hero-rfid-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            padding: 14px 12px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .hero-rfid-badge {
            align-self: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
