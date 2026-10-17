import React from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  Activity,
  Boxes
} from 'lucide-react';

export default function LandingHero() {
  return (
    <section
      data-testid="hero-section"
      style={{
        padding: '64px 24px 80px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left Column: Headlines & Call to Actions */}
        <div>
          {/* Eyebrow Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255, 107, 34, 0.10)',
              border: '1px solid rgba(255, 107, 34, 0.30)',
              color: '#E65100',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.3px',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} color="#FF6B22" />
            珠寶全產業鏈數智化革新
          </div>

          {/* 大大隻字 Bold Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0F172A',
              letterSpacing: '-1px',
              marginBottom: '22px',
            }}
          >
            以一體化 ERP 與 RFID 技術，
            <span style={{ color: '#FF6B22', display: 'block' }}>
              重塑珠寶製造與零售生態
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.68,
              color: '#475569',
              marginBottom: '36px',
              maxWidth: '560px',
            }}
          >
            專為香港與大灣區珠寶製造商、批發商及連鎖門市打造。徹底打通款式研發、車間生產損耗、門市銷售收銀、金會供款與毫秒級全盤點。
          </p>

          {/* Dual CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                fontSize: '1rem',
                padding: '14px 28px',
              }}
            >
              預約官方現場展示
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+85227224360"
              className="btn-secondary"
              style={{
                fontSize: '1rem',
                padding: '14px 24px',
              }}
            >
              <PhoneCall size={18} color="#FF6B22" />
              專家諮詢 (+852) 2722 4360
            </a>
          </div>

          {/* Trust Value Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid #D8DCE6',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#FF6B22" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                深耕珠寶產業數十年
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#FF6B22" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                100% 自主研發無縫對接
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={16} color="#FF6B22" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                香港總部 · 深圳技術支援
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Composite Software & Hardware Visual Panel (DEC-012 Option A) */}
        <div style={{ position: 'relative' }}>
          {/* Main Software Panel: JES Workshop Process Monitor */}
          <div
            className="bento-card"
            style={{
              padding: '24px',
              border: '1px solid #D8DCE6',
              boxShadow: '0 10px 30px -4px rgba(15, 23, 42, 0.08)',
            }}
          >
            {/* Window Topbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginLeft: '8px',
                  }}
                >
                  JES 珠寶工單全流程監控中心
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#FF6B22',
                  backgroundColor: 'rgba(255, 107, 34, 0.10)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#FF6B22',
                  }}
                />
                即時工藝在線
              </div>
            </div>

            {/* Production Process Flow Nodes */}
            <div style={{ marginBottom: '22px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#64748B',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '10px',
                }}
              >
                車間生產鏈路節點 · 損耗即時監控
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '6px',
                  textAlign: 'center',
                }}
              >
                {[
                  { step: '01', name: '倒模鑄造', status: '完成', active: false },
                  { step: '02', name: '執模修正', status: '進行中', active: true },
                  { step: '03', name: '精密鑲石', status: '待派工', active: false },
                  { step: '04', name: '拋光電金', status: '排程中', active: false },
                  { step: '05', name: '質檢入庫', status: '待檢', active: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '8px',
                      backgroundColor: item.active ? 'rgba(255, 107, 34, 0.12)' : '#F8FAFC',
                      border: `1px solid ${item.active ? '#FF6B22' : '#E2E8F0'}`,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: item.active ? '#FF6B22' : '#94A3B8',
                      }}
                    >
                      {item.step}
                    </div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: item.active ? '#0F172A' : '#475569',
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: item.active ? '#FF6B22' : '#94A3B8',
                        marginTop: '2px',
                      }}
                    >
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick KPI Strip - Grounded Architecture Facts */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                  系統部署架構
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0F172A' }}>
                  雙軌彈性支援 <span style={{ fontSize: '0.72rem', color: '#FF6B22', fontWeight: 700 }}>雲端 / 私有伺服器</span>
                </div>
              </div>
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                  硬體感知生態
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0F172A' }}>
                  IRYS WARD <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>超高頻 UHF</span>
                </div>
              </div>
            </div>

            {/* Secondary Hardware Floating Card: TiaraNxt RFID Ecosystem */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(255, 107, 34, 0.35)',
                padding: '14px 16px',
                boxShadow: '0 6px 16px -2px rgba(255, 107, 34, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#FF6B22',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <Radio size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>
                    TiaraNxt 便攜式 RFID 盤點連動
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    IRYS WARD 超高頻掃描槍 · 支援 120°C 耐高溫無膠標籤
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#FF6B22',
                  backgroundColor: 'rgba(255, 107, 34, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  whiteSpace: 'nowrap',
                }}
              >
                秒級萬件盤點
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
