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
          {/* Main Software & Hardware Ecosystem Topology Map (DEC-019 Option 3) */}
          <div
            data-testid="ecosystem-map"
            className="bento-card hero-preview-card"
            style={{
              padding: '24px',
              border: '1px solid #D8DCE6',
              boxShadow: '0 10px 30px -4px rgba(15, 23, 42, 0.08)',
              backgroundColor: '#FFFFFF',
            }}
          >
            {/* 1. Terminal Topbar with Live Pulse */}
            <div
              className="hero-topbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '14px',
                marginBottom: '16px',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', flexShrink: 0 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', flexShrink: 0 }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginLeft: '6px',
                  }}
                >
                  {t.hero.ecosystem.networkStatus}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.10)',
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
                    backgroundColor: '#10B981',
                  }}
                  className="anim-node-pulse"
                />
                LIVE SYNC
              </div>
            </div>

            {/* 2. Central Hub Node: JES ERP Cloud Engine */}
            <div
              data-testid="node-hub"
              className="ecosystem-hub-card"
              style={{
                padding: '16px 18px',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#FF6B22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                  className="anim-node-pulse"
                >
                  <Cpu size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#0F172A' }}>
                      {t.hero.ecosystem.hubTitle}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        backgroundColor: 'rgba(255, 107, 34, 0.12)',
                        color: '#FF6B22',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      CORE
                    </span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '2px' }}>
                    {t.hero.ecosystem.hubDesc}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600 }}>Engine</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A' }}>v8.4 SaaS</span>
              </div>
            </div>

            {/* 3. RWLINK Middleware Bi-directional Data Stream Bridge */}
            <div
              className="ecosystem-bridge-strip anim-data-stream"
              style={{
                margin: '14px 0',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #F1F5F9 0%, rgba(255,107,34,0.12) 50%, #F1F5F9 100%)',
                border: '1px dashed rgba(255, 107, 34, 0.40)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Activity size={14} color="#FF6B22" />
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#334155' }}>
                {t.hero.ecosystem.rwlinkBridge}
              </span>
            </div>

            {/* 4. Three Distributed Terminals Grid */}
            <div
              className="ecosystem-terminals-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
              }}
            >
              {/* Branch 1: Workshop Factory */}
              <div
                data-testid="node-workshop"
                className="ecosystem-terminal-card"
                style={{
                  padding: '12px 10px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 107, 34, 0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF6B22',
                    marginBottom: '8px',
                  }}
                >
                  <Boxes size={18} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '3px' }}>
                  {t.hero.ecosystem.workshopTitle}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748B', lineHeight: 1.35 }}>
                  {t.hero.ecosystem.workshopDesc}
                </div>
              </div>

              {/* Branch 2: POS Boutiques */}
              <div
                data-testid="node-pos"
                className="ecosystem-terminal-card"
                style={{
                  padding: '12px 10px',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 107, 34, 0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF6B22',
                    marginBottom: '8px',
                  }}
                >
                  <Layers size={18} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '3px' }}>
                  {t.hero.ecosystem.posTitle}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748B', lineHeight: 1.35 }}>
                  {t.hero.ecosystem.posDesc}
                </div>
              </div>

              {/* Branch 3: TiaraNxt RFID */}
              <div
                data-testid="node-rfid"
                className="ecosystem-terminal-card"
                style={{
                  padding: '12px 10px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(255, 107, 34, 0.40)',
                  boxShadow: '0 4px 12px -2px rgba(255, 107, 34, 0.12)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#FF6B22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginBottom: '8px',
                  }}
                >
                  <Radio size={18} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '3px' }}>
                  {t.hero.ecosystem.rfidTitle}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748B', lineHeight: 1.35 }}>
                  {t.hero.ecosystem.rfidDesc}
                </div>
              </div>
            </div>

            {/* 5. Dual Spec Highlights Bottom Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginTop: '16px',
                paddingTop: '14px',
                borderTop: '1px solid #F1F5F9',
              }}
              className="ecosystem-bottom-bar"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#FF6B22" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#334155' }}>
                  {t.hero.kpi1Val} ({t.hero.kpi1Sub})
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                <ShieldCheck size={16} color="#FF6B22" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#334155' }}>
                  {t.hero.kpi2Val} · {t.hero.rfidBadge}
                </span>
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
          .ecosystem-terminals-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .ecosystem-bottom-bar {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .ecosystem-bottom-bar > div {
            justify-content: flex-start !important;
          }
          }
        }
      `}</style>
    </section>
  );
}
