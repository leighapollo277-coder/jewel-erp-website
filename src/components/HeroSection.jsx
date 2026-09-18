import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Clock, Target, TrendingDown, Zap, Activity, Gem } from 'lucide-react';

export default function HeroSection({ onOpenDemoModal }) {
  const [barsVisible, setBarsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBarsVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      position: 'relative',
      paddingTop: '160px',
      paddingBottom: '110px',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 20%, rgba(var(--gold-primary-rgb), 0.08) 0%, var(--bg-dark) 70%)'
    }}>
      {/* Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(var(--gold-primary-rgb), 0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Hero Left Content */}
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <span className="badge-gold">
                <Sparkles size={14} color="var(--gold-primary)" />
                專為珠寶生產生態與品牌鏈訂製 ‧ 珠寶源 JES
              </span>
            </div>

            <h1 className="font-serif" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: 'var(--text-heading)',
              letterSpacing: '0.2px',
              marginBottom: '24px'
            }}>
              自動化珠寶業務，<br />
              <span className="title-gold">從原料到銷售的極致效能</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              color: 'var(--text-muted)',
              maxWidth: '780px',
              margin: '0 auto 40px auto',
              lineHeight: 1.75,
              fontWeight: 400
            }}>
              專為珠寶業設計的 <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>珠寶源 JES</strong>，協助您在 <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>30 天內</strong> 實現數據驅動的管理，消除流程混亂與金屬損耗。
            </p>

            {/* CTA Group */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '50px'
            }}>
              <button 
                onClick={onOpenDemoModal} 
                className="btn-primary" 
                style={{ padding: '18px 42px', fontSize: '1.15rem' }}
              >
                <span>預約專屬演示</span>
                <ArrowRight size={20} />
              </button>
              
              <a 
                href="#features" 
                className="btn-secondary"
                style={{ padding: '18px 36px', fontSize: '1.05rem' }}
              >
                探索解決方案
              </a>
            </div>

            {/* Trust Micro Badges */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '32px',
              padding: '12px 28px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <ShieldCheck size={18} color="var(--gold-primary)" />
                <span>20+ 年權威經驗</span>
              </div>
              <div style={{ width: '1px', height: '16px', background: 'var(--border-subtle)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <TrendingUp size={18} color="var(--gold-primary)" />
                <span>平均優化 15% 損耗</span>
              </div>
              <div style={{ width: '1px', height: '16px', background: 'var(--border-subtle)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Clock size={18} color="var(--gold-primary)" />
                <span>30 天無痛藍圖</span>
              </div>
            </div>
          </div>

          {/* Hero Stats & Feature Grid */}
          <div style={{ position: 'relative', marginTop: '20px' }}>

            {/* Row 1: KPI Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '14px' }}>
              {[
                { value: '99.98%', label: '即時盤點準確率', icon: <Target size={20} />, color: 'var(--gold-primary)', bg: 'rgba(var(--gold-primary-rgb), 0.15)', border: 'rgba(var(--gold-primary-rgb), 0.35)' },
                { value: '-15%',   label: '金屬損耗降低',   icon: <TrendingDown size={20} />, color: '#10B981', bg: '#10B9811A', border: '#10B98144' },
                { value: '30天',   label: '快速上線週期',   icon: <Zap size={20} />, color: '#818CF8', bg: '#818CF81A', border: '#818CF844' }
              ].map((stat, i) => (
                <div key={i} className="glass-card" style={{
                  padding: '24px 20px',
                  borderTop: `2px solid ${stat.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: stat.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: stat.color
                  }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-serif" style={{ fontSize: '1.9rem', color: 'var(--text-heading)', lineHeight: 1.1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Metal Utilization + Activity Feed */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '14px' }}>

              {/* Metal Utilization Panel */}
              <div className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Gem size={15} color="var(--gold-primary)" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>貴金屬使用率分析</span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem', padding: '3px 10px',
                    borderRadius: '99px',
                    background: 'rgba(16,185,129,0.12)',
                    color: '#10B981', fontWeight: 600
                  }}>● 即時</span>
                </div>
                {[
                  { label: '黃金 Au',     pct: 87, color: 'var(--gold-primary)', weight: '124.8g' },
                  { label: '白銀 Ag',     pct: 73, color: '#C0C0C0', weight: '438.2g' },
                  { label: '鉑金 Pt',     pct: 61, color: '#818CF8', weight: '52.1g'  },
                  { label: '玫瑰金 Au/Cu', pct: 91, color: '#E8836A', weight: '96.4g'  },
                ].map((m, i) => (
                  <div key={i} style={{ marginBottom: i < 3 ? '14px' : 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.label}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 600 }}>{m.pct}% · {m.weight}</span>
                    </div>
                    <div style={{ height: '6px', background: 'var(--bg-surface)', borderRadius: '99px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: barsVisible ? `${m.pct}%` : '0%',
                        background: `linear-gradient(90deg, ${m.color}55, ${m.color})`,
                        borderRadius: '99px',
                        transition: `width ${0.8 + i * 0.15}s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Activity Feed */}
              <div className="glass-card" style={{ padding: '24px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                  <Activity size={15} color="var(--gold-primary)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>即時系統動態</span>
                </div>
                {[
                  { action: '訂單 #JES-8821 已出貨',     time: '剛剛',    status: 'success' },
                  { action: '黃金入庫 124.8g 已驗收',    time: '2分鐘前', status: 'success' },
                  { action: '生產工序 W-032 進行中',      time: '5分鐘前', status: 'active'  },
                  { action: '損耗預警：車間 B 超標',      time: '12分鐘前', status: 'warn'   },
                  { action: '月結報告已自動生成',         time: '1小時前', status: 'success' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    paddingBottom: i < 4 ? '12px' : 0,
                    marginBottom: i < 4 ? '12px' : 0,
                    borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none'
                  }}>
                    <div style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      marginTop: '5px', flexShrink: 0,
                      background: item.status === 'success' ? '#10B981' : item.status === 'warn' ? '#F59E0B' : '#818CF8'
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-main)', lineHeight: 1.4 }}>{item.action}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-dark)', marginTop: '2px' }}>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
