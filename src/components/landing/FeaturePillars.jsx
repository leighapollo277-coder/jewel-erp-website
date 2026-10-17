import React from 'react';
import { Layers, ShoppingBag, Radio, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FeaturePillars() {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 'erp',
      icon: Layers,
      ...t.pillars.pillar1,
    },
    {
      id: 'pos',
      icon: ShoppingBag,
      ...t.pillars.pillar2,
    },
    {
      id: 'rfid',
      icon: Radio,
      ...t.pillars.pillar3,
    },
  ];

  return (
    <section
      id="features"
      data-testid="feature-pillars"
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
          {t.pillars.badge}
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
          {t.pillars.title}
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
          {t.pillars.subtitle}
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="pillars-grid"
      >
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="bento-card pillar-card"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Pillar Icon & Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '22px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#FF6B22',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 10px rgba(255, 107, 34, 0.25)',
                    }}
                  >
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#64748B',
                      backgroundColor: '#F1F5F9',
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    marginBottom: '10px',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: '#475569',
                    marginBottom: '22px',
                  }}
                >
                  {pillar.subtitle}
                </p>

                {/* Feature Bullet Points */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '11px',
                    marginBottom: '26px',
                  }}
                >
                  {pillar.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.86rem',
                        color: '#1E293B',
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="#FF6B22"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Spec Badge */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#FF6B22',
                  }}
                >
                  {pillar.specBadge}
                </span>
                <a
                  href="#contact"
                  style={{
                    color: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  {t.pillars.consultBtn}
                  <ArrowRight size={14} color="#FF6B22" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 960px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .pillar-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
