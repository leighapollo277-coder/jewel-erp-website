import React from 'react';
import { 
  Cpu, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Printer, 
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SolutionsFooter() {
  const { lang, st } = useLanguage();

  return (
    <footer
      id="contact"
      data-testid="solutions-footer"
      style={{
        marginTop: '60px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #D8DCE6',
      }}
    >
      {/* High-Impact Top CTA Banner */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(36px, 5vw, 64px) clamp(16px, 4vw, 24px) clamp(24px, 4vw, 48px) clamp(16px, 4vw, 24px)',
        }}
      >
        <div
          style={{
            backgroundColor: '#0F172A',
            borderRadius: '20px',
            padding: '48px 40px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
          }}
          className="cta-banner"
        >
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '999px',
                backgroundColor: 'rgba(255, 107, 34, 0.20)',
                color: '#FF8542',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '14px',
              }}
            >
              {st.footer.badge}
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
                marginBottom: '12px',
              }}
            >
              {st.footer.ctaTitle}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#94A3B8',
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              {st.footer.ctaSubtitle}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a
              href="https://wa.me/85290884833?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%8415%E5%88%86%E9%90%98%E4%B8%AD%E5%B0%8F%E4%BC%81%E8%87%AA%E5%8B%95%E5%8C%96%E6%B5%81%E7%A8%8B%E8%A8%BA%E6%96%B7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '14px 26px',
                fontSize: '0.96rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <MessageSquare size={17} />
              <span>{st.footer.ctaWhatsapp}</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+85227224360"
              style={{
                padding: '14px 22px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Phone size={16} />
              <span>{st.footer.ctaCall}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Information Grid (Aligned with GT-009) */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px clamp(16px, 4vw, 24px) 48px clamp(16px, 4vw, 24px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
        }}
      >
        {/* Column 1: Company Profile */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#FF6B22',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <Cpu size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0F172A' }}>
                {st.footer.companyName}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                {st.footer.companyEn}
              </div>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
            {st.footer.companyDesc}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
            <a
              href="mailto:info@alphaone.technology"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}
            >
              <Mail size={15} color="#FF6B22" />
              info@alphaone.technology
            </a>
            <a
              href="https://www.alphaone.technology"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}
            >
              <Globe size={15} color="#FF6B22" />
              https://www.alphaone.technology
            </a>
          </div>
        </div>

        {/* Column 2: Hong Kong Headquarters */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#0F172A', fontWeight: 800 }}>
            <MapPin size={18} color="#FF6B22" />
            <span>{st.footer.hkTitle}</span>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '12px' }}>
            {st.footer.hkAddress}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem', color: '#334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={14} color="#64748B" />
              <span>{st.footer.hkPhone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Printer size={14} color="#64748B" />
              <span>{st.footer.hkFax}</span>
            </div>
          </div>
        </div>

        {/* Column 3: Shenzhen R&D Office */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#0F172A', fontWeight: 800 }}>
            <MapPin size={18} color="#FF6B22" />
            <span>{st.footer.szTitle}</span>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '12px' }}>
            {st.footer.szAddress}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
            <Phone size={14} color="#64748B" />
            <span>{st.footer.szPhone}</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        style={{
          borderTop: '1px solid #E2E8F0',
          padding: '20px clamp(16px, 4vw, 24px)',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#64748B',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>{st.footer.copyright}</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Hong Kong PDPO Compliant</span>
            <span>Zero-Data-Retention</span>
            <span>TLS 1.3 Financial Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

