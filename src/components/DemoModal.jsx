import React, { useState } from 'react';
import { X, CheckCircle, Gem, ArrowRight, Shield } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '珠寶製造商',
    scale: '10-50人',
    phone: '',
    email: '',
    note: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      background: 'rgba(5, 6, 8, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '560px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-gold)',
        borderRadius: 'var(--radius-lg)',
        padding: '40px',
        position: 'relative',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5), 0 0 30px var(--gold-glow)'
      }}>
        {/* Close Button */}
        <button 
          onClick={handleResetAndClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'var(--bg-surface)',
            border: 'none',
            color: 'var(--text-muted)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => e.target.style.color = 'var(--text-heading)'}
          onMouseOut={e => e.target.style.color = 'var(--text-muted)'}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Gem size={22} color="var(--gold-primary)" />
              <span className="badge-gold" style={{ fontSize: '0.8rem' }}>B2B 專屬預約</span>
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-heading)', marginBottom: '8px' }}>
              預約「珠寶源 JES」專屬展示
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '28px' }}>
              請填寫您的企業基本資訊，我們的資深珠寶顧問將在 24 小時內與您聯繫並安排一對一線上展示。
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    您的姓名 *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="例如：陳總經理"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    公司名稱 *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="珠寶企業 / 品牌"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    主要業務類型
                  </label>
                  <select 
                    value={formData.role}
                    onChange={e => setFormData({...formData, role: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="珠寶製造商">💎 珠寶製造商 (車間/工廠)</option>
                    <option value="珠寶零售商">💍 珠寶零售商 (門市/品牌)</option>
                    <option value="珠寶批發商">🌐 珠寶批發商 (貿易/進出口)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    團隊 / 門市規模
                  </label>
                  <select 
                    value={formData.scale}
                    onChange={e => setFormData({...formData, scale: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="10人以下">10 人以下</option>
                    <option value="10-50人">10 - 50 人 (中小規模)</option>
                    <option value="50-200人">50 - 200 人 (中型批發)</option>
                    <option value="200人以上">200 人以上 (大型集團)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  聯絡電話 *
                </label>
                <input 
                  type="tel"
                  required
                  placeholder="+886 或 +852 聯絡電話"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-heading)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '12px', padding: '14px', width: '100%' }}>
                <span>免費預約專屬演示</span>
                <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Shield size={14} color="var(--gold-primary)" />
                <span>資訊嚴格保密，資深顧問 24 小時內快速聯繫</span>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(var(--gold-primary-rgb), 0.15)',
              border: '1px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              color: 'var(--gold-primary)'
            }}>
              <CheckCircle size={40} />
            </div>

            <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '12px' }}>
              預約成功！
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>
              感謝您預約「珠寶源 JES」專屬展示。<br />
              我們的資深珠寶顧問很快將主動與您聯繫，提供專屬業務診斷與流程示範。
            </p>

            <button onClick={handleResetAndClose} className="btn-primary" style={{ padding: '12px 32px' }}>
              完成並返回網站
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
