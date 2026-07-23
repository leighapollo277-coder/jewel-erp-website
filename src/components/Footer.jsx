import React from 'react';
import { Gem, ShieldCheck, Lock } from 'lucide-react';

export default function Footer({ onOpenDemoModal }) {
  return (
    <footer style={{
      background: '#07080B',
      borderTop: '1px solid var(--border-subtle)',
      padding: '80px 0 40px 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '60px'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--gold-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Gem size={20} color="#0A0B0E" />
              </div>
              <span className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FFF' }}>
                珠寶源 <span className="title-gold" style={{ fontSize: '1rem', marginLeft: '4px', fontWeight: 800 }}>JES</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
              專為珠寶業設計的極致自動化管理平台。從原料流轉、車間損耗控制到 RFID 多店盤點，數據驅動企業成長。
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} color="var(--gold-primary)" />
                <span>ISO 27001 認證</span>
              </div>
              <div style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={14} color="var(--gold-primary)" />
                <span>軍規級加密</span>
              </div>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>
              產品與方案
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>💎 珠寶製造商方案</a></li>
              <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>💍 珠寶零售商方案</a></li>
              <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>🌐 貴金屬成色與損耗模組</a></li>
              <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>📻 RFID 秒級盤點系統</a></li>
            </ul>
          </div>

          {/* Safe Transition Col */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>
              無痛數位升級
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#process" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>30 天快速導入藍圖</a></li>
              <li><a href="#process" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>工匠專用 UI 介面</a></li>
              <li><a href="#process" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>雲端訂閱極致性價比</a></li>
              <li><a href="#proof" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>River Mounts 成功案例</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>
              專屬演示預約
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
              聯絡專人安排一對一專業簡報，體驗 30 天數位轉型力。
            </p>
            <button onClick={onOpenDemoModal} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', width: '100%' }}>
              預約專屬演示
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} 珠寶源 JES (Jewelry Origin Systems Inc.) All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>隱私權政策</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>服務條款</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>資安守則</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
