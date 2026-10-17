import React from 'react';
import { 
  Gem, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Printer, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LandingFooter() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      data-testid="footer"
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
              {t.footer.badge}
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
              {t.footer.ctaTitle}
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 2.4vw, 0.98rem)', color: '#94A3B8', lineHeight: 1.65 }}>
              {t.footer.ctaSubtitle}
            </p>
          </div>

          <div className="cta-actions" style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '240px' }}>
            <a
              href="mailto:info@alphaone.technology"
              className="btn-primary"
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <Mail size={18} />
              {t.footer.emailBtn}
            </a>
            <a
              href="tel:+85227224360"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '13px 22px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)')}
            >
              <Phone size={18} color="#FF6B22" />
              {t.footer.callBtn}
            </a>
          </div>
        </div>
      </div>

      {/* Official Company Registry & Locations */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '36px 24px 48px 24px',
          borderTop: '1px solid #F1F5F9',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            gap: '40px',
            marginBottom: '40px',
          }}
          className="footer-info-grid"
        >
          {/* Col 1: Brand Info */}
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
                <Gem size={20} />
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0F172A' }}>
                {t.footer.companyName}
              </span>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginBottom: '16px' }}>
              {t.footer.companyEn}
            </div>
            <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, maxWidth: '340px' }}>
              {t.footer.companyDesc}
            </p>
          </div>

          {/* Col 2: Hong Kong Headquarters */}
          <div
            style={{
              padding: '20px',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#FF6B22',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
              }}
            >
              {t.footer.hkTitle}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
              <MapPin size={16} color="#64748B" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span style={{ fontSize: '0.84rem', color: '#1E293B', lineHeight: 1.5 }}>
                {t.footer.hkAddress}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#64748B" />
                <a href="tel:+85227224360" style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>
                  +852 2722 4360
                </a>
                <span style={{ color: '#CBD5E1' }}>|</span>
                <a href="tel:+85290884833" style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>
                  (852) 9088 4833
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Printer size={14} color="#64748B" />
                <span>{t.footer.hkFax}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} color="#64748B" />
                <a href="mailto:info@alphaone.technology" style={{ color: '#FF6B22', fontWeight: 600, textDecoration: 'none' }}>
                  info@alphaone.technology
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Shenzhen Technology Center */}
          <div
            style={{
              padding: '20px',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#FF6B22',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
              }}
            >
              {t.footer.szTitle}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
              <MapPin size={16} color="#64748B" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span style={{ fontSize: '0.84rem', color: '#1E293B', lineHeight: 1.5 }}>
                {t.footer.szAddress}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#64748B" />
                <a href="tel:+86075525503714" style={{ color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}>
                  (86) 0755-25503714
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={14} color="#64748B" />
                <a
                  href="https://www.alphaone.technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#FF6B22', fontWeight: 600, textDecoration: 'none' }}
                >
                  www.alphaone.technology
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div
          className="footer-legal-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '24px',
            borderTop: '1px solid #E2E8F0',
            fontSize: '0.82rem',
            color: '#94A3B8',
          }}
        >
          <div>
            {t.footer.copyright}
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {t.footer.productTags.map((tag, idx) => (
              <React.Fragment key={idx}>
                <span>{tag}</span>
                {idx < t.footer.productTags.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .footer-info-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .cta-banner {
            padding: 28px 20px !important;
            border-radius: 16px !important;
            gap: 24px !important;
          }
          .cta-actions {
            width: 100% !important;
            min-width: 0 !important;
          }
          .cta-actions a {
            width: 100% !important;
            box-sizing: border-box !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .footer-legal-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </footer>
  );
}
