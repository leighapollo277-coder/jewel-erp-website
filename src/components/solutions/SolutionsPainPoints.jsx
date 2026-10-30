import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingUp, XCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsPainPoints() {
  const { lang, st } = useLanguage();

  return (
    <section
      id="pain-points"
      data-testid="solutions-pain-points"
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
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            color: '#DC2626',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '14px',
          }}
        >
          <AlertTriangle size={14} />
          <span>{st.painPoints.badge}</span>
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
          {st.painPoints.title}
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
          {st.painPoints.subtitle}
        </p>
      </div>

      {/* Comparison Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '24px',
          marginBottom: '32px',
        }}
      >
        {/* Left: Traditional Manual Operations */}
        <div
          className="bento-card"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            padding: '32px 28px',
            border: '1px solid #E2E8F0',
            borderTop: '4px solid #EF4444',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#DC2626',
              }}
            >
              <XCircle size={20} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
              {st.painPoints.manualCard.title}
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {st.painPoints.manualCard.items.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: '#EF4444', marginTop: '3px', flexShrink: 0 }}>✕</span>
                <span style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.55 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: AlphaOne Smart Automation */}
        <div
          className="bento-card"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            padding: '32px 28px',
            border: '1px solid #D8DCE6',
            borderTop: '4px solid #FF6B22',
            boxShadow: '0 12px 32px rgba(255, 107, 34, 0.08)',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 107, 34, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF6B22',
              }}
            >
              <CheckCircle2 size={20} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}>
              {st.painPoints.automatedCard.title}
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {st.painPoints.automatedCard.items.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} color="#059669" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.94rem', color: '#0F172A', fontWeight: 600, lineHeight: 1.55 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Bottom Callout Banner */}
      <div
        style={{
          backgroundColor: '#0F172A',
          borderRadius: '16px',
          padding: '24px 32px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              backgroundColor: '#FF6B22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0,
            }}
          >
            <TrendingUp size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.2px' }}>
              {lang === 'en'
                ? 'ROI Calculation: 1 Full-Time Clerk (HK$ 16,000/mo) vs Automation (40–80 hrs saved/mo)'
                : '投資回報實證：1 名全職文員月薪 HK$ 16,000–$ 18,000 vs 智能自動化每月節省 40–80 小時'}
            </div>
            <div style={{ fontSize: '0.84rem', color: '#94A3B8', marginTop: '2px' }}>
              {lang === 'en'
                ? 'Eliminate recurring typos, margin leakage, and employee turnover overhead within the first 30 days.'
                : '首月即實現正向現金流回報，徹底根除人手開錯單虧損與員工離職交接陣痛。'}
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%8415%E5%88%86%E9%90%98%E4%B8%AD%E5%B0%8F%E4%BC%81%E8%87%AA%E5%8B%95%E5%8C%96%E6%B5%81%E7%A8%8B%E8%A8%BA%E6%96%B7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
        >
          {st.hero.ctaPrimary}
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

