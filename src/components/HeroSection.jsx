import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Clock } from 'lucide-react';
import heroBgImg from '../assets/hero_bg.png';

export default function HeroSection({ onOpenDemoModal }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '160px',
      paddingBottom: '110px',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 11, 14, 1) 70%)'
    }}>
      {/* Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
              color: '#FFFFFF',
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
              專為珠寶業設計的 <strong style={{ color: '#FFF', fontWeight: 600 }}>珠寶源 JES</strong>，協助您在 <strong style={{ color: '#FFF', fontWeight: 600 }}>30 天內</strong> 實現數據驅動的管理，消除流程混亂與金屬損耗。
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
              background: 'rgba(255, 255, 255, 0.03)',
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

          {/* Hero Hero Image Showcase */}
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <div className="glass-card" style={{
              padding: '12px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(212, 175, 55, 0.15)'
            }}>
              <img 
                src={heroBgImg} 
                alt="珠寶源 JES 系統介面" 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-md)',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Live Indicator Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '30px',
              background: 'linear-gradient(135deg, rgba(21, 24, 33, 0.95), rgba(15, 17, 24, 0.98))',
              border: '1px solid var(--gold-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 24px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }} className="hero-floating-badge">
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-primary)'
              }}>
                <TrendingUp size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>即時貴金屬盤點率</div>
                <div className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF' }}>
                  99.98% <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 500 }}>+15% 效率提升</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
