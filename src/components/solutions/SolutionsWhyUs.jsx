import React from 'react';
import { Award, Cpu, MapPin, CheckCircle2, Shield, Gem } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsWhyUs() {
  const { lang, st } = useLanguage();

  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Gem size={26} color="#FF6B22" />;
      case 1:
        return <Cpu size={26} color="#FF6B22" />;
      case 2:
        return <MapPin size={26} color="#FF6B22" />;
      default:
        return <Award size={26} color="#FF6B22" />;
    }
  };

  return (
    <section
      id="why-us"
      data-testid="solutions-why-us"
      style={{
        padding: 'clamp(48px, 7vw, 84px) clamp(16px, 4vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 107, 34, 0.12)',
            border: '1px solid rgba(255, 107, 34, 0.35)',
            color: '#FF6B22',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '14px',
          }}
        >
          <Award size={14} />
          <span>{st.whyUs.badge}</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 900,
            color: '#0F172A',
            letterSpacing: '-0.5px',
            marginBottom: '14px',
            lineHeight: 1.25,
          }}
        >
          {st.whyUs.title}
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
          {st.whyUs.subtitle}
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '24px',
        }}
      >
        {st.whyUs.points.map((point, idx) => (
          <div
            key={idx}
            className="bento-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px 30px',
              border: '1px solid #D8DCE6',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 107, 34, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              {getIcon(idx)}
            </div>

            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#0F172A',
                marginBottom: '12px',
                lineHeight: 1.35,
              }}
            >
              {point.title}
            </h3>

            <p
              style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
              }}
            >
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

