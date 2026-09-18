import React from 'react';
import { CalendarCheck, Layout, CircleDollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SafeTransition({ onOpenDemoModal }) {
  const steps = [
    {
      num: "01",
      icon: <CalendarCheck size={28} color="var(--gold-primary)" />,
      title: "30 天快速導入藍圖",
      subtitle: "標準化部署流程，雲端架構縮短上線時間",
      desc: "專利的珠寶模組化設定與資料轉移機制，確保升級期間工廠生產與店面銷售零中斷。"
    },
    {
      num: "02",
      icon: <Layout size={28} color="var(--gold-primary)" />,
      title: "專為工匠設計的 UI",
      subtitle: "簡化 UI 介面，針對職位定制專屬功能",
      desc: "車間工匠無需繁複鍵盤操作，直覺的大圖示與觸控式卡片，員工幾小時內即可輕鬆上手。"
    },
    {
      num: "03",
      icon: <CircleDollarSign size={28} color="var(--gold-primary)" />,
      title: "極致雲端性價比",
      subtitle: "訂閱模式免除昂貴硬體與維護成本",
      desc: "零地端伺服器建置費用，彈性按模組與規模訂閱，讓企業每一分預算都發揮最大 ROI。"
    }
  ];

  return (
    <section id="process" className="section-padding" style={{ position: 'relative', background: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 64px auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="badge-gold">
              無痛數位升級 (Safe Transition)
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '20px', lineHeight: 1.25 }}>
            消除轉型恐懼：<span className="title-gold">高效、易用與零負擔升級</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            傳統系統導入昂貴、耗時且員工排斥。珠寶源 JES 打破常規，專為珠寶人的作業習慣打造無縫轉型路徑。
          </p>
        </div>

        {/* Process Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '60px'
        }}>
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card" style={{
              padding: '40px 32px',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '28px'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(var(--gold-primary-rgb), 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {step.icon}
                  </div>

                  <span className="font-serif" style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'rgba(var(--gold-primary-rgb), 0.3)',
                    letterSpacing: '1px'
                  }}>
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '8px' }}>
                  {step.title}
                </h3>

                <div style={{ fontSize: '0.9rem', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '16px' }}>
                  {step.subtitle}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>

              <div style={{
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--gold-primary)',
                fontSize: '0.88rem',
                fontWeight: 600
              }}>
                <ShieldCheck size={16} />
                <span>保證業務營運不中斷</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div style={{
          textAlign: 'center',
          background: 'radial-gradient(circle at 50% 50%, rgba(var(--gold-primary-rgb), 0.12) 0%, var(--bg-card) 100%)',
          padding: '48px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-gold)'
        }}>
          <h3 className="font-serif" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '16px' }}>
            準備好在 30 天內消除流程混亂與金屬損耗了嗎？
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px auto' }}>
            聯繫我們的資深珠寶顧問，為您規劃專屬的專屬演示與系統架構藍圖。
          </p>
          <button onClick={onOpenDemoModal} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            <span>預約專屬演示</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
