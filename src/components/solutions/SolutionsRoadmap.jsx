import React from 'react';
import { 
  Rocket, 
  Building2, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsRoadmap() {
  const { lang, st } = useLanguage();

  return (
    <section
      id="pricing"
      data-testid="solutions-roadmap"
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
          <Rocket size={14} />
          <span>{st.roadmap.badge}</span>
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
          {st.roadmap.title}
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.6 }}>
          {st.roadmap.subtitle}
        </p>
      </div>

      {/* Dual-Track Model Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
          gap: '28px',
          marginBottom: '48px',
        }}
      >
        {/* Track A: Self-funded Quick-Win POC */}
        <div
          className="bento-card"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: 'clamp(28px, 4vw, 36px)',
            border: '2px solid #FF6B22',
            boxShadow: '0 12px 32px rgba(255, 107, 34, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 107, 34, 0.12)',
                color: '#FF5500',
                fontSize: '0.78rem',
                fontWeight: 800,
                marginBottom: '14px',
              }}
            >
              {st.roadmap.trackA.badge}
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>
              {st.roadmap.trackA.title}
            </h3>

            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              {st.roadmap.trackA.desc}
            </p>

            {/* Reference Tiers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {st.roadmap.trackA.tiers.map((tier, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '12px',
                    padding: '16px 18px',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>{tier.name}</span>
                    <span style={{ fontWeight: 900, color: '#FF6B22', fontSize: '1.05rem' }}>{tier.price}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700, marginBottom: '6px' }}>
                    ⏱ {tier.period}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5 }}>
                    {tier.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E5%92%A8%E8%A9%A22%E9%80%B1%E5%BF%AB%E9%80%9FPOC%E6%A6%82%E5%BF%B5%E9%A9%97%E8%AD%89%E6%96%B9%E6%A1%88"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '12px 20px', fontSize: '0.92rem', justifyContent: 'center' }}
          >
            {lang === 'en' ? 'Start 2-Week Quick-Win POC' : '啟動 2 週極速 POC 驗證'}
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Track B: Enterprise Custom Automation */}
        <div
          className="bento-card"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: 'clamp(28px, 4vw, 36px)',
            border: '1px solid #D8DCE6',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: '#F1F5F9',
                color: '#334155',
                fontSize: '0.78rem',
                fontWeight: 800,
                marginBottom: '14px',
              }}
            >
              {st.roadmap.trackB.badge}
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>
              {st.roadmap.trackB.title}
            </h3>

            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              {st.roadmap.trackB.desc}
            </p>

            <div
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                padding: '18px',
                border: '1px solid #E2E8F0',
                marginBottom: '24px',
              }}
            >
              <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', marginBottom: '10px' }}>
                {lang === 'en' ? 'AlphaOne Enterprise Delivery Standards:' : '思琳科技 企業級交付與技術保障：'}
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.84rem', color: '#475569', lineHeight: 1.7 }}>
                <li>{lang === 'en' ? 'Comprehensive architecture blueprint & data flow diagrams' : '完整系統架構藍圖與數據流拓撲設計'}</li>
                <li>{lang === 'en' ? 'Bi-directional middleware syncing legacy DBs & modern APIs' : '雙向中間件打通舊版資料庫與現代雲端 API'}</li>
                <li>{lang === 'en' ? 'Milestone acceptance test reports with verifiable audit trails' : '階梯式驗收測試報告與透明代碼交付'}</li>
                <li>{lang === 'en' ? 'Enterprise SLA maintenance, ongoing monitoring & staff training' : '原廠企業級 SLA 維護支援與操作移交培訓'}</li>
              </ul>
            </div>
          </div>

          <a
            href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E5%92%A8%E8%A9%A2%E4%BC%81%E6%A5%AD%E5%85%A8%E6%B5%81%E7%A8%8B%E8%87%AA%E5%8B%95%E5%8C%96%E6%96%B9%E6%A1%88"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 20px',
              fontSize: '0.92rem',
              fontWeight: 700,
              borderRadius: '8px',
              border: '1px solid #CBD5E1',
              backgroundColor: '#FFFFFF',
              color: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            {lang === 'en' ? 'Inquire About Enterprise Solution' : '諮詢企業客製方案'}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Enterprise Data Trust Banner */}
      <div
        className="bento-card"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '18px',
          padding: '32px 36px',
          border: '1px solid #D8DCE6',
          boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'rgba(5, 150, 105, 0.12)',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShieldCheck size={22} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A' }}>
            {st.roadmap.trust.title}
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {st.roadmap.trust.items.map((item, idx) => (
            <div key={idx}>
              <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', marginBottom: '4px' }}>
                ✓ {item.label}
              </div>
              <div style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.55 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

