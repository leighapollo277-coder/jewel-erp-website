import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsFaq() {
  const { lang, st } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      data-testid="solutions-faq"
      style={{
        padding: 'clamp(48px, 7vw, 84px) clamp(16px, 4vw, 24px)',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
          <HelpCircle size={14} />
          <span>{st.faq.badge}</span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 900,
            color: '#0F172A',
            letterSpacing: '-0.5px',
            marginBottom: '14px',
            lineHeight: 1.25,
          }}
        >
          {st.faq.title}
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
          {st.faq.subtitle}
        </p>
      </div>

      {/* Accordions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {st.faq.items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bento-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: isOpen ? '1px solid #FF6B22' : '1px solid #D8DCE6',
                overflow: 'hidden',
                boxShadow: isOpen ? '0 8px 24px rgba(255, 107, 34, 0.06)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                transition: 'all 0.2s ease',
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '22px 24px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: isOpen ? '#FF6B22' : '#0F172A',
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </span>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: isOpen ? 'rgba(255, 107, 34, 0.12)' : '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isOpen ? '#FF6B22' : '#64748B',
                    flexShrink: 0,
                  }}
                >
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 24px 24px 24px',
                    fontSize: '0.95rem',
                    color: '#475569',
                    lineHeight: 1.7,
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '16px',
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

