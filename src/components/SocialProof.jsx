import React from 'react';
import { Award, TrendingDown, Globe, Building2, Quote, ArrowRight } from 'lucide-react';

export default function SocialProof({ onOpenDemoModal }) {
  const metrics = [
    {
      icon: <Award size={32} color="var(--gold-primary)" />,
      value: "20+ 年",
      label: "行業經驗深耕",
      desc: "專注服務珠寶製造與貿易，系統穩定性經受全球市場考驗。"
    },
    {
      icon: <TrendingDown size={32} color="var(--gold-primary)" />,
      value: "15%",
      label: "貴金屬損耗優化",
      desc: "協助客戶透過動態流轉與廢料追蹤，平均減少 15% 的黃金與貴金屬損耗。"
    },
    {
      icon: <Globe size={32} color="var(--gold-primary)" />,
      value: "歐洲 Top 3",
      label: "國際成功案例",
      desc: "協助 River Mounts 等客戶從 5 人團隊擴張至歐洲前 3 大珠寶批發商，系統無縫陪同成長。"
    }
  ];

  return (
    <section id="proof" className="section-padding" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="badge-gold">
              數據證實的實力
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '20px', lineHeight: 1.25 }}>
            超過 20 年的行業深耕，<span className="title-gold">帶來珠寶業的最佳實踐</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            我們不僅提供軟體，更將幾十年頂級珠寶供應鏈與品牌管理的底層邏輯，融入珠寶源 JES 中。
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {metrics.map((m, idx) => (
            <div key={idx} className="glass-card" style={{
              padding: '36px',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(var(--gold-primary-rgb), 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                {m.icon}
              </div>

              <div className="font-serif title-gold" style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1, marginBottom: '12px' }}>
                {m.value}
              </div>

              <h3 style={{ color: 'var(--text-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                {m.label}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Enterprise Case Study Banner: River Mounts */}
        <div className="glass-panel" style={{
          padding: '40px 48px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-gold)',
          background: 'var(--bg-card)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Building2 size={24} color="var(--gold-primary)" />
              <span className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-heading)', letterSpacing: '1px' }}>
                RIVER MOUNTS <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>歐洲指標性珠寶批發商</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.7 }}>
              <Quote size={20} color="var(--gold-primary)" style={{ display: 'inline', marginRight: '8px' }} />
              「珠寶源 JES 陪同我們從最初僅 5 人的工作坊，無縫成長為躍居歐洲前 3 大珠寶批發龍頭。金屬損耗控制與實時多店庫存系統，是我們高速擴張過程中最堅實的基石。」
            </p>

            <div style={{ fontSize: '0.9rem', color: 'var(--gold-light)', fontWeight: 600 }}>
              — River Mounts 營運總監 & 供應鏈負責人
            </div>
          </div>

          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
            <div style={{
              background: 'rgba(var(--gold-primary-rgb), 0.08)',
              padding: '24px 32px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '20px',
              width: '100%',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>企業成長軌跡</div>
              <div className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-heading)', fontWeight: 900, margin: '4px 0' }}>
                5 人團隊 ➔ 歐洲前 3 大批發商
              </div>
              <div style={{ fontSize: '0.85rem', color: '#10B981' }}>零系統更換摩擦，架構伴隨企業規模擴張</div>
            </div>

            <button onClick={onOpenDemoModal} className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
              <span>了解 River Mounts 的升級路徑</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
