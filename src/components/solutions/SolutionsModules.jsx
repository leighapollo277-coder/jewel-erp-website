import React from 'react';
import { 
  FileCheck2, 
  MessageSquare, 
  Workflow, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Radio,
  FileSpreadsheet
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsModules() {
  const { lang, st } = useLanguage();

  const getModuleIcon = (id) => {
    switch (id) {
      case 'doc-ai':
        return <FileCheck2 size={24} />;
      case 'whatsapp-ops':
        return <MessageSquare size={24} />;
      case 'cross-sync':
        return <Workflow size={24} />;
      case 'custom-iot':
        return <Radio size={24} />;
      default:
        return <Cpu size={24} />;
    }
  };

  return (
    <section
      id="modules"
      data-testid="solutions-modules"
      style={{
        padding: 'clamp(48px, 7vw, 84px) clamp(16px, 4vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
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
          <Sparkles size={14} />
          <span>{st.modules.badge}</span>
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
          {st.modules.title}
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
          {st.modules.subtitle}
        </p>
      </div>

      {/* Bento Grid Layout: 2 Sharp Wedges (Dominant) + 2 Enterprise Add-ons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
        }}
      >
        {st.modules.items.map((item, idx) => {
          const isWedge = item.type === 'wedge';
          return (
            <div
              key={item.id}
              className="bento-card"
              style={{
                gridColumn: isWedge ? 'span 6' : 'span 6',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: 'clamp(24px, 4vw, 36px)',
                border: isWedge ? '1px solid #D8DCE6' : '1px solid #E2E8F0',
                boxShadow: isWedge 
                  ? '0 12px 32px rgba(15, 23, 42, 0.06)' 
                  : '0 4px 16px rgba(15, 23, 42, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Top Tag & Metric */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '18px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: isWedge ? 'rgba(255, 107, 34, 0.12)' : '#F1F5F9',
                      color: isWedge ? '#FF5500' : '#475569',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {item.tag}
                  </span>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#059669',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Zap size={13} />
                    {item.metric}
                  </span>
                </div>

                {/* Module Title with Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: isWedge ? '#FF6B22' : '#0F172A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {getModuleIcon(item.id)}
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                      fontWeight: 900,
                      color: '#0F172A',
                      lineHeight: 1.35,
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#475569',
                    lineHeight: 1.65,
                    marginBottom: '22px',
                  }}
                >
                  {item.desc}
                </p>

                {/* Feature Checkpoints */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '10px',
                    marginBottom: '24px',
                  }}
                >
                  {item.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#1E293B',
                      }}
                    >
                      <CheckCircle2 size={15} color="#FF6B22" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <a
                  href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E6%80%9D%E7%90%B3%E7%A7%91%E6%8A%80%E7%9A%84"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#FF6B22',
                    textDecoration: 'none',
                  }}
                >
                  <span>{lang === 'en' ? 'Inquire About Deployment' : '諮詢此模組落地方式'}</span>
                  <ArrowRight size={15} />
                </a>
                <span style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                  {isWedge ? (lang === 'en' ? '2-Wk Quick-Win' : '2週極速驗收') : (lang === 'en' ? 'Custom Scope' : '客製排程')}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bento-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

