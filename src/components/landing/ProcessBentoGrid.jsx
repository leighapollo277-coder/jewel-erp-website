import React from 'react';
import { 
  GitBranch, 
  Database, 
  Sparkles, 
  Radio, 
  ShieldCheck, 
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import mfgImg from '../../assets/manufacturing.png';
import retailImg from '../../assets/retail.png';

export default function ProcessBentoGrid() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      data-testid="bento-grid"
      style={{
        padding: 'clamp(44px, 6vw, 72px) clamp(16px, 4vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '5px 14px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 107, 34, 0.10)',
            border: '1px solid rgba(255, 107, 34, 0.28)',
            color: '#E65100',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '12px',
          }}
        >
          {t.process.badge}
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.55rem, 5.2vw, 2.5rem)',
            fontWeight: 900,
            color: '#0F172A',
            letterSpacing: '-0.5px',
            marginBottom: '14px',
            lineHeight: 1.25,
          }}
        >
          {t.process.title}
        </h2>
        <p
          style={{
            fontSize: 'clamp(0.92rem, 2.4vw, 1.02rem)',
            color: '#64748B',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          {t.process.subtitle}
        </p>
      </div>

      {/* Bento Layout Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '24px',
          alignItems: 'start',
        }}
        className="bento-container"
      >
        {/* Left Bento: Detailed Workshop Process Flow with Authentic Casting Photo */}
        <div
          className="bento-card bento-detail-card"
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: '#FF6B22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <GitBranch size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                  {t.process.flowTitle}
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#FF6B22',
                  backgroundColor: 'rgba(255, 107, 34, 0.10)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                }}
              >
                {t.process.flowBadge}
              </span>
            </div>

            {/* Authentic Workshop Casting Photography Asset */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '20px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#0F172A',
                boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.08)',
              }}
            >
              <img
                src={mfgImg}
                alt={t.process.manufacturingCaption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(15, 23, 42, 0.78)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#FF6B22',
                  }}
                />
                {t.process.manufacturingTag} · {t.process.manufacturingCaption}
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '22px' }}>
              {t.process.flowDesc}
            </p>

            {/* Step-by-Step Flow Nodes */}
            <div
              className="bento-stage-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '10px',
                marginBottom: '24px',
              }}
            >
              {t.process.stages.map((node, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                    padding: '12px',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: '#FF6B22',
                      marginBottom: '4px',
                    }}
                  >
                    STAGE {node.step}
                  </div>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '2px',
                    }}
                  >
                    {node.title}
                  </div>
                  <div style={{ fontSize: '0.73rem', color: '#64748B' }}>
                    {node.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Highlight */}
          <div
            className="bento-highlight-bar"
            style={{
              padding: '14px 16px',
              backgroundColor: '#F1F5F9',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#FF6B22" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.83rem', fontWeight: 700, color: '#1E293B' }}>
                {t.process.highlightText}
              </span>
            </div>
            <a
              href="#contact"
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#FF6B22',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {t.process.highlightCta}
            </a>
          </div>
        </div>

        {/* Right Bento Column: Stacked 7 Core Modules + TiaraNxt RFID Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Card 1: 7 Core ERP Modules Matrix (Anchor: id="modules") */}
          <div
            id="modules"
            className="bento-card bento-detail-card"
            style={{
              padding: '28px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Database size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                  {t.process.matrixTitle}
                </h3>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  {t.process.matrixSubtitle}
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {t.process.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="module-item"
                  style={{
                    padding: '11px 14px',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#FF6B22',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                      {mod.title}
                    </div>
                  </div>
                  <span
                    className="module-code"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#64748B',
                      backgroundColor: '#FFFFFF',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {mod.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: TiaraNxt RFID & Retail Boutique Card (Anchor: id="rfid") */}
          <div
            id="rfid"
            className="bento-card bento-detail-card"
            style={{
              padding: '24px',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
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
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A' }}>
                    {t.hero.rfidTitle}
                  </h3>
                  <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    {t.hero.rfidDesc}
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#FF6B22',
                  backgroundColor: 'rgba(255, 107, 34, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {t.process.rfidSpeedBadge}
              </span>
            </div>

            {/* Authentic Boutique RFID Scanning Photography Asset */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '16px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#0F172A',
                boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.08)',
              }}
            >
              <img
                src={retailImg}
                alt={t.process.retailCaption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '170px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(15, 23, 42, 0.78)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontSize: '0.74rem',
                  fontWeight: 700,
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
                {t.process.retailTag} · {t.process.retailCaption}
              </div>
            </div>

            {/* RWLINK Middleware Strip */}
            <div
              style={{
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0F172A' }}>
                  {t.process.rwlinkTitle}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                  {t.process.rwlinkDesc}
                </div>
              </div>
              <a
                href="#contact"
                className="btn-primary"
                style={{ padding: '7px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
              >
                {t.process.rwlinkCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bento-container {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .bento-detail-card {
            padding: 20px 16px !important;
          }
          .bento-stage-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .bento-highlight-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
