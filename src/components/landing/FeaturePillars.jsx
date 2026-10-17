import React from 'react';
import { Layers, ShoppingBag, Radio, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FeaturePillars() {
  const pillars = [
    {
      id: 'erp',
      icon: Layers,
      tag: '生產與供應鏈核心',
      title: '珠寶源® JES 珠寶 ERP',
      subtitle: '全流程覆蓋款式研發、車間生產損耗、進銷存與會計結算',
      features: [
        '款式資料庫管理與金石配模參數',
        '車間工單派工與倒模/鑲石損耗精密核算',
        '黃金、鉑金與各類裸石批發進銷存',
        '應收應付 (AR/AP) 與財務自動憑證',
      ],
      specBadge: '支援 雲端訂閱 / 專用私有伺服器雙軌',
    },
    {
      id: 'pos',
      icon: ShoppingBag,
      tag: '門市零售與會員管理',
      title: 'POS 雲端智慧門市零售',
      subtitle: '專為珠寶金行打造的銷售收銀、金會供款與客製化服務體系',
      features: [
        '專用珠寶收銀、金價連動即時換算與折扣',
        '金會會員登記、供款期數自動追蹤與對帳',
        '客製化專屬訂製單 (CMO) 與跟進排程',
        '門市增值維修翻新 (VAS) 與每日結算毛利',
      ],
      specBadge: '支援 多元電子支付 · 門市跨店即時聯網',
    },
    {
      id: 'rfid',
      icon: Radio,
      tag: '毫秒級硬體感知生態',
      title: 'TiaraNxt 便攜式 RFID 系統',
      subtitle: 'IRYS WARD 超高頻便攜掃描槍搭配耐高溫專用標籤，徹底革新盤點',
      features: [
        'IRYS WARD 超高頻 (UHF 860~960MHz) 手持掃描',
        '耐高溫 120°C PVC 重複使用標籤（尾部無膠）',
        'RWLINK 跨設備中間件雙向同步 ERP / Excel',
        '穿透珠寶盤即刻讀取，萬件盤點數秒完成',
      ],
      specBadge: '全盤盤點效率提升 90% 以上',
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
          全方位珠寶數位架構
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
          以三大數智化支柱，驅動珠寶企業高效增長
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
          打破珠寶工廠、批發展廳與連鎖門市的資訊孤島，實現全數據鏈條無縫互聯。
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
                  諮詢詳情
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
