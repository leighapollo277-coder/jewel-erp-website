import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      data-testid="faq-accordion"
      style={{
        padding: 'clamp(44px, 6vw, 72px) clamp(16px, 4vw, 24px)',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
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
          <HelpCircle size={14} color="#FF6B22" />
          {t.faq.badge}
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)',
            fontWeight: 900,
            color: '#0F172A',
            letterSpacing: '-0.5px',
            marginBottom: '12px',
          }}
        >
          {t.faq.title}
        </h2>
        <p style={{ fontSize: 'clamp(0.92rem, 2.4vw, 1rem)', color: '#64748B', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          {t.faq.subtitle}
        </p>
      </div>

      {/* Accordion List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {t.faq.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              data-testid={`faq-item-${idx}`}
              className="bento-card"
              style={{
                border: `1px solid ${isOpen ? 'rgba(255, 107, 34, 0.45)' : '#D8DCE6'}`,
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                transition: 'all 0.25s ease',
                overflow: 'hidden',
              }}
            >
              <button
                className="faq-button"
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                aria-expanded={isOpen}
              >
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: isOpen ? '#FF6B22' : '#0F172A',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {faq.q}
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
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <ChevronDown size={18} color={isOpen ? '#FF6B22' : '#64748B'} />
                </div>
              </button>

              {isOpen && (
                <div
                  className="faq-answer"
                  style={{
                    padding: '0 24px 22px 24px',
                    fontSize: '0.94rem',
                    lineHeight: 1.7,
                    color: '#475569',
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '16px',
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .faq-button {
            padding: 16px 18px !important;
          }
          .faq-button span {
            font-size: 0.98rem !important;
            line-height: 1.5 !important;
          }
          .faq-answer {
            padding: 0 18px 18px 18px !important;
            padding-top: 14px !important;
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </section>
  );
}
