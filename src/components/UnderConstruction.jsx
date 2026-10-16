import React from 'react';
import { Sparkles, ShieldCheck, Cpu, Gem, Mail, ArrowRight } from 'lucide-react';

export default function UnderConstruction() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.08) 0%, var(--bg-dark) 70%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'var(--text-light)',
      fontFamily: 'var(--font-sans)',
      padding: '40px 24px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Top Header / Brand Logo */}
      <header style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold-primary)'
          }}>
            <Gem size={22} />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '1px',
              background: 'linear-gradient(90deg, #FFFFFF, var(--gold-primary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              AlphaOne Technology
            </div>
            <div style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.8px',
              textTransform: 'uppercase'
            }}>
              Enterprise Digital Architecture
            </div>
          </div>
        </div>

        {/* Discrete Internal Preview Link */}
        <a
          href="/preview"
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '13px',
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.03)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
            e.currentTarget.style.color = 'var(--gold-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = 'var(--text-muted)';
          }}
        >
          <span>內部預覽通道</span>
          <ArrowRight size={14} />
        </a>
      </header>

      {/* Hero Maintenance Core */}
      <main style={{
        maxWidth: '860px',
        margin: '60px auto',
        textAlign: 'center',
        zIndex: 1
      }}>
        {/* Status Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          borderRadius: '999px',
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          color: 'var(--gold-primary)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '1px',
          marginBottom: '28px'
        }}>
          <Sparkles size={16} />
          <span>全新系統構建中 · UNDER CONSTRUCTION</span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          lineHeight: 1.2,
          margin: '0 0 24px 0',
          letterSpacing: '-0.5px'
        }}>
          重塑數碼格局 <br />
          <span style={{
            background: 'linear-gradient(135deg, #F5D77F 0%, #D4AF37 50%, #AA8010 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            旗艦級企業技術 即將隆重啟航
          </span>
        </h1>

        {/* Descriptive Body */}
        <p style={{
          fontSize: '17px',
          lineHeight: 1.8,
          color: 'var(--text-muted)',
          maxWidth: '680px',
          margin: '0 auto 40px auto'
        }}>
          AlphaOne Technology 正在為高端珠寶製造、品牌零售鏈及高精密製造業佈署全方位數碼化生態系統。官方首頁現正進行尊尚架構升級，敬請期待。
        </p>

        {/* Three Value Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          margin: '0 0 48px 0',
          textAlign: 'left'
        }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ color: 'var(--gold-primary)', marginBottom: '14px' }}>
              <Gem size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', margin: '0 0 8px 0', color: '#FFF' }}>
              珠寶源 JES 生態
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              金損控制、全流程條碼追蹤、零售生產一體化之珠寶專業 ERP。
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ color: 'var(--gold-primary)', marginBottom: '14px' }}>
              <Cpu size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', margin: '0 0 8px 0', color: '#FFF' }}>
              先進架構與集成
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              雲端微服務與即時業務洞察，賦能企業高彈性擴展與自動化營運。
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ color: 'var(--gold-primary)', marginBottom: '14px' }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', margin: '0 0 8px 0', color: '#FFF' }}>
              企業級金融安全
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              多層加密防護、權限精確控管與高可用災難復原架構。
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="mailto:info@alphaone.technology"
            className="btn-primary"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              fontSize: '15px',
              fontWeight: 600,
              borderRadius: '8px'
            }}
          >
            <Mail size={18} />
            <span>商務諮詢與專屬預約</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        paddingTop: '24px',
        color: 'var(--text-muted)',
        fontSize: '13px',
        zIndex: 1
      }}>
        © 2026 AlphaOne Technology. 專屬數碼生態系統 · 版權所有
      </footer>
    </div>
  );
}
