import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsHero() {
  const { lang, st } = useLanguage();

  return (
    <section
      data-testid="solutions-hero"
      style={{
        padding: 'clamp(40px, 6vw, 72px) clamp(16px, 4vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
          gap: 'clamp(32px, 5vw, 56px)',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Headline & Value Proposition */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 107, 34, 0.12)',
              border: '1px solid rgba(255, 107, 34, 0.35)',
              color: '#FF5500',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} />
            <span>{st.hero.badge}</span>
          </div>

          {/* Main H1 */}
          <h1
            style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.18,
              color: '#0F172A',
              letterSpacing: '-0.8px',
              marginBottom: '20px',
            }}
          >
            {st.hero.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.65,
              color: '#475569',
              marginBottom: '32px',
              maxWidth: '620px',
            }}
          >
            {st.hero.subtitle}
          </p>

          {/* CTA Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <a
              href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%8415%E5%88%86%E9%90%98%E4%B8%AD%E5%B0%8F%E4%BC%81%E8%87%AA%E5%8B%95%E5%8C%96%E6%B5%81%E7%A8%8B%E8%A8%BA%E6%96%B7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>{st.hero.ctaPrimary}</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E6%80%9D%E7%90%B3%E7%A7%91%E6%8A%80%E4%B8%AD%E5%B0%8F%E4%BC%81%E8%87%AA%E5%8B%95%E5%8C%96%E6%96%B9%E6%A1%88"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 22px',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease',
              }}
            >
              <MessageSquare size={17} color="#25D366" />
              <span>{st.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Micro Notice */}
          <div
            style={{
              fontSize: '0.82rem',
              color: '#64748B',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>{st.hero.microNotice}</span>
          </div>
        </div>

        {/* Right Column: High-Fidelity Deterministic Workflow Mockup */}
        <div style={{ position: 'relative' }}>
          {/* Main Visual Card: AI Document Pipeline Live Preview */}
          <div
            className="bento-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '24px',
              border: '1px solid #D8DCE6',
              boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Header with live status */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                paddingBottom: '16px',
                borderBottom: '1px solid #F1F5F9',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                  }}
                >
                  <FileText size={17} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                    PO_8110598711_Audit.pdf
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                    {lang === 'en' ? 'Ingested from Supplier Email · Multipage PDF' : '供應商電郵傳入 · 多頁採購發票'}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: '#059669',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                }}
              >
                <CheckCircle2 size={13} />
                <span>{lang === 'en' ? 'Verified (3.2s)' : '3.2秒 自動審計完成'}</span>
              </div>
            </div>

            {/* Extracted Structured Fields Preview */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                padding: '14px',
                border: '1px solid #E2E8F0',
                marginBottom: '16px',
                fontSize: '0.82rem',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '10px' }}>
                <div>
                  <span style={{ color: '#64748B', fontSize: '0.72rem' }}>PO NUMBER:</span>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>#8110598711</div>
                </div>
                <div>
                  <span style={{ color: '#64748B', fontSize: '0.72rem' }}>CURRENCY:</span>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>USD $</div>
                </div>
                <div>
                  <span style={{ color: '#64748B', fontSize: '0.72rem' }}>MATCH STATUS:</span>
                  <div style={{ fontWeight: 700, color: '#059669' }}>100% 3-WAY MATCH</div>
                </div>
              </div>

              {/* Line items sample table */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  padding: '8px 10px',
                  fontFamily: 'monospace',
                  fontSize: '0.76rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', borderBottom: '1px solid #F1F5F9', paddingBottom: '4px', marginBottom: '4px' }}>
                  <span>LINE ITEM / SKU</span>
                  <span>QTY</span>
                  <span>UNIT PRICE</span>
                  <span>TOTAL</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0F172A', padding: '2px 0' }}>
                  <span>10 25-101194-001-R000</span>
                  <span>2,000 EA</span>
                  <span>$0.0385</span>
                  <span>$77.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0F172A', padding: '2px 0' }}>
                  <span>20 25-101194-002-R000</span>
                  <span>5,000 EA</span>
                  <span>$0.0410</span>
                  <span>$205.00</span>
                </div>
              </div>
            </div>

            {/* Bottom floating notification card: WhatsApp Ops Brief */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <MessageSquare size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700 }}>
                    {lang === 'en' ? 'Meta Cloud API Hub · Daily Ops Brief' : '官方 WhatsApp 中樞 · 營業摘要已推播'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>
                    {lang === 'en' ? 'Today: 42 Orders Synced · HK$ 184,200 Revenue' : '今日累計完成 42 張單據對賬 · 零人工差錯'}
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: '0.7rem',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#38BDF8',
                  fontWeight: 600,
                }}
              >
                LIVE SYNC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stats Banner */}
      <div
        style={{
          marginTop: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}
      >
        {st.hero.stats.map((stat, idx) => (
          <div
            key={idx}
            className="bento-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              padding: '20px 22px',
              border: '1px solid #D8DCE6',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            }}
          >
            <div
              style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: '#FF6B22',
                letterSpacing: '-0.5px',
                marginBottom: '4px',
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: '0.84rem',
                color: '#475569',
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

