import React from 'react';
import { Mail, Wrench } from 'lucide-react';

export default function UnderConstruction() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0B0D13',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      color: '#FFFFFF',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '560px',
        width: '100%',
        backgroundColor: '#141824',
        border: '1px solid #2A3142',
        borderRadius: '16px',
        padding: '48px 32px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Simple Icon Badge */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'rgba(212, 175, 55, 0.15)',
          border: '1px solid #D4AF37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto',
          color: '#F5D77F'
        }}>
          <Wrench size={26} />
        </div>

        {/* Brand Name */}
        <div style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#D4AF37',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '12px'
        }}>
          AlphaOne Technology
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#FFFFFF',
          margin: '0 0 16px 0',
          lineHeight: 1.3
        }}>
          網站系統升級維修中
        </h1>

        {/* English Sub-heading */}
        <div style={{
          fontSize: '15px',
          fontWeight: 600,
          color: '#E2E8F0',
          marginBottom: '20px'
        }}>
          Website Under Construction
        </div>

        {/* Clear readable description */}
        <p style={{
          fontSize: '15px',
          lineHeight: 1.7,
          color: '#CBD5E1',
          margin: '0 0 32px 0'
        }}>
          官方網站現正進行升級維護，即將呈現全新服務架構。如需商務諮詢，歡迎隨時透過電子郵件與我們聯絡。
        </p>

        {/* Contact Email Link */}
        <a
          href="mailto:info@alphaone.technology"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#D4AF37',
            color: '#0B0D13',
            padding: '12px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 700,
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E5C158'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#D4AF37'; }}
        >
          <Mail size={18} />
          <span>聯絡我們：info@alphaone.technology</span>
        </a>
      </div>

      {/* Simple Footer */}
      <div style={{
        marginTop: '32px',
        color: '#64748B',
        fontSize: '13px'
      }}>
        © 2026 AlphaOne Technology. All rights reserved.
      </div>
    </div>
  );
}
