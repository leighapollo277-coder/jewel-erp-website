import React, { useState, useEffect, useRef } from 'react';
import { Palette, Check, X, Sparkles, Eye, ExternalLink } from 'lucide-react';

export const THEMES = [
  {
    id: 'pearl-minimalist',
    name: '明亮珍珠灰',
    subtitle: 'Pearl Light Minimalist (Mockup 3)',
    badge: '🌟 Mockup 3 首選',
    bgTone: '#F0F2F6',
    cardTone: '#FFFFFF',
    accentTone: '#EA580C',
    accentGradient: 'linear-gradient(135deg, #FB923C 0%, #EA580C 50%, #C2410C 100%)',
    description: '【首選推薦】明亮通透珍珠淺灰底色，純白懸浮卡片與溫潤赤陶亮橙'
  },
  {
    id: 'classic-gold',
    name: '尊爵香檳金',
    subtitle: 'Classic Champagne Gold',
    badge: '奢華黑金',
    bgTone: '#0A0B0E',
    cardTone: '#12141C',
    accentTone: '#D4AF37',
    accentGradient: 'linear-gradient(135deg, #F5E8B9 0%, #D4AF37 50%, #997400 100%)',
    description: '經典奢華頂級黑金，深黑沉穩背景搭配典雅香檳金'
  },
  {
    id: 'titanium-sunset',
    name: '鈦銀冷岩',
    subtitle: 'Titanium Slate & Orange',
    badge: '顯著冷灰底',
    bgTone: '#1A1E26',
    cardTone: '#232834',
    accentTone: '#FF6B00',
    accentGradient: 'linear-gradient(135deg, #FFA14D 0%, #FF6B00 50%, #CC5500 100%)',
    description: '明晰冷鋼岩灰底色（顯著灰階），搭配電氣烈日熾橙'
  },
  {
    id: 'amber-graphite',
    name: '赤陶暖炭',
    subtitle: 'Terracotta & Warm Charcoal',
    badge: '溫潤暖炭底',
    bgTone: '#161514',
    cardTone: '#22201D',
    accentTone: '#E05624',
    accentGradient: 'linear-gradient(135deg, #FDBFA8 0%, #E05624 50%, #B23A12 100%)',
    description: '暖調深炭工坊氛圍，點綴復古赤陶銅橙與熔煉琥珀'
  },
  {
    id: 'basalt-slate',
    name: '曜黑碳纖',
    subtitle: 'Carbon Fiber & Neon',
    badge: '純黑霓虹底',
    bgTone: '#050608',
    cardTone: '#0E1015',
    accentTone: '#FF3D00',
    accentGradient: 'linear-gradient(135deg, #FF9E7D 0%, #FF3D00 50%, #B82200 100%)',
    description: '極致超暗碳纖純黑，對比高能量霓虹極速螢光橙'
  }
];

export const MOCKUPS = [
  {
    id: 1,
    title: 'Style 1: Linear 現代極簡深灰 SaaS',
    badge: '現代深灰',
    src: '/mockups/mockup1_linear_saas.jpg',
    desc: '冷石板灰背景 (#1E222A) 搭配微光活力橙按鈕 (#FF6827) 與即時監測圖表，現代 Stripe/Linear 工具感'
  },
  {
    id: 2,
    title: 'Style 2: 瑞士精密工程工業灰',
    badge: '工業中灰',
    src: '/mockups/mockup2_swiss_industrial.jpg',
    desc: '明顯的霧面中性灰 (#32363E) 與金屬規格面板，搭配標誌性純橙色 (#FF5500) 儀錶，硬體與技術感強烈'
  },
  {
    id: 3,
    title: 'Style 3: 亮色明亮極簡珍珠灰',
    badge: '明亮淺灰',
    src: '/mockups/mockup3_light_minimalist.jpg',
    desc: '打破全黑框架，採用明亮淺珍珠冷灰 (#ECEEF2) 與純白卡片，點綴溫潤赤陶橙 (#EA580C)，通透開闊'
  },
  {
    id: 4,
    title: 'Style 4: FinTech 金融終端高密度深灰',
    badge: '金融終端',
    src: '/mockups/mockup4_fintech_terminal.jpg',
    desc: '冷墨玄武岩深灰 (#14171F) 搭配半透明磨砂面板與日落琥珀橙 (#F59E0B)，高密度原料行情走勢'
  },
  {
    id: 5,
    title: 'Style 5: 包浩斯幾何現代主義',
    badge: '包浩斯幾何',
    src: '/mockups/mockup5_bauhaus_grid.jpg',
    desc: '水泥深灰 (#262A30) 與實體石膏灰搭配純粹鉻橙 (#FF6F00)，非對稱幾何網格與強烈結構'
  },
  {
    id: 6,
    title: 'Style 6: 北歐極簡木質與赭橙',
    badge: '北歐天然',
    src: '/mockups/mockup6_nordic_ochre.jpg',
    desc: '煙燻暖炭灰 (#21201E) 搭配低飽和暖棕灰與北歐天然赭橙 (#D96B27)，呈現工坊手作匠心'
  },
  {
    id: 7,
    title: 'Style 7: 愛馬仕經典鞍皮橙',
    badge: '法式高訂',
    src: '/mockups/mockup7_hermes_leather.jpg',
    desc: '法式暖石墨 (#1F1E1C) 與深咖炭灰，點綴經典愛馬仕皮革鞍皮橙 (#DF5A26)，巴黎頂級訂製沙龍'
  },
  {
    id: 8,
    title: 'Style 8: 未來科技賽博深炭',
    badge: '賽博雷達',
    src: '/mockups/mockup8_cyber_slate.jpg',
    desc: '碳晶黑灰 (#0E1013) 搭配超導深灰面板與純霓虹烈焰橙 (#FF4500)，RFID 毫秒級物聯網防盜雷達'
  },
  {
    id: 9,
    title: 'Style 9: 高溫熔煉紅銅工坊',
    badge: '金屬冶煉',
    src: '/mockups/mockup9_molten_copper.jpg',
    desc: '生鐵鑄造灰 (#181615) 與暖鍛炭板，結合高溫熔融紅銅橙 (#C8521A)，硬核澆鑄樹配比與高頻熔爐'
  },
  {
    id: 10,
    title: 'Style 10: 瑞士高級製表緞面灰',
    badge: '鐘錶精密',
    src: '/mockups/mockup10_swiss_titanium.jpg',
    desc: '緞面鈦金屬灰 (#252932) 與精密精鋼面板，點綴瑞士儀錶耀橘 (#FF7700)，微米級鑲嵌與日內瓦印記'
  }
];

export function applyTheme(themeId, doc = document, storage = window.localStorage) {
  try {
    if (themeId && themeId !== 'pearl-minimalist') {
      doc.documentElement.setAttribute('data-theme', themeId);
    } else {
      doc.documentElement.removeAttribute('data-theme');
    }
    if (storage) {
      storage.setItem('jes-theme', themeId);
    }
  } catch (err) {
    console.error('Failed to apply theme:', err);
  }
}

export function getInitialTheme(doc = document, storage = window.localStorage) {
  try {
    const fromDoc = doc.documentElement.getAttribute('data-theme');
    if (fromDoc) return fromDoc;
    if (storage) {
      const fromStorage = storage.getItem('jes-theme');
      if (fromStorage) return fromStorage;
    }
  } catch (err) {
    console.warn('Unable to access storage for initial theme:', err);
  }
  return 'pearl-minimalist';
}

export default function ThemeChooser() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => getInitialTheme());
  const [showMockupModal, setShowMockupModal] = useState(false);
  const [activeMockupTab, setActiveMockupTab] = useState(0);
  const panelRef = useRef(null);

  useEffect(() => {
    // Sync theme on mount
    applyTheme(activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    // Dismiss when clicking outside
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Dismiss on Escape key
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
  };

  const currentThemeObj = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div ref={panelRef} style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99 }}>
      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="切換網站配色主題"
        aria-expanded={isOpen}
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 18px',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          color: 'var(--text-main)',
          border: '1px solid var(--border-gold)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.45), 0 0 16px var(--gold-glow)',
          transition: 'all var(--transition-fast)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          e.currentTarget.style.borderColor = 'var(--gold-light)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.borderColor = 'var(--border-gold)';
        }}
      >
        <div
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: currentThemeObj.accentGradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px var(--gold-glow)'
          }}
        >
          <Palette size={14} color="#0A0B0E" />
        </div>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '0.5px' }}>
            {currentThemeObj.name}
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--gold-light)', opacity: 0.9 }}>
            配色切換
          </span>
        </div>
      </button>

      {/* Expandable Theme Selection Panel */}
      {isOpen && (
        <div
          className="glass-card"
          style={{
            position: 'absolute',
            bottom: '56px',
            right: 0,
            width: '330px',
            maxWidth: 'calc(100vw - 40px)',
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-gold)',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.7), 0 0 24px var(--gold-glow)',
            animation: 'fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'rgba(var(--gold-primary-rgb), 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)'
                }}
              >
                <Sparkles size={16} />
              </div>
              <div>
                <h4 className="font-serif" style={{ fontSize: '1rem', color: 'var(--text-heading)', margin: 0, fontWeight: 700 }}>
                  專屬色彩主題
                </h4>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  THEME COLOR PALETTE
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="關閉主題面板"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--text-heading)';
                e.currentTarget.style.background = 'var(--bg-surface)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Theme Option List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {THEMES.map((theme) => {
              const isSelected = activeTheme === theme.id;
              return (
                <div
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectTheme(theme.id);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected ? 'rgba(var(--gold-primary-rgb), 0.12)' : 'var(--bg-surface)',
                    border: isSelected ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    position: 'relative'
                  }}
                  onMouseOver={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'var(--bg-card-hover)';
                      e.currentTarget.style.borderColor = 'var(--gold-primary)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'var(--bg-surface)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }
                  }}
                >
                  {/* Swatch Preview Pill */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg, ${theme.bgTone} 0%, ${theme.bgTone} 50%, ${theme.cardTone} 50%, ${theme.cardTone} 100%)`,
                      border: `2px solid ${isSelected ? theme.accentTone : 'var(--border-subtle)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      boxShadow: isSelected ? `0 0 12px ${theme.accentTone}88` : '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: theme.accentGradient,
                        boxShadow: `0 0 10px ${theme.accentTone}`,
                        border: '1.5px solid rgba(255, 255, 255, 0.6)'
                      }}
                    />
                  </div>

                  {/* Theme Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        className="font-serif"
                        style={{
                          fontSize: '0.94rem',
                          fontWeight: 700,
                          color: isSelected ? 'var(--gold-primary)' : 'var(--text-heading)',
                          letterSpacing: '0.3px'
                        }}
                      >
                        {theme.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.66rem',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          background: isSelected ? 'rgba(var(--gold-primary-rgb), 0.22)' : 'var(--bg-card)',
                          color: isSelected ? 'var(--gold-primary)' : 'var(--text-muted)',
                          fontWeight: 600,
                          border: isSelected ? '1px solid rgba(var(--gold-primary-rgb), 0.35)' : '1px solid var(--border-subtle)'
                        }}
                      >
                        {theme.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '3px', lineHeight: 1.35 }}>
                      {theme.description}
                    </div>
                  </div>

                  {/* Checkmark when active */}
                  {isSelected && (
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'var(--gold-gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Check size={14} color="#0A0B0E" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Button to Open Mockup Lightbox Modal */}
          <button
            onClick={() => setShowMockupModal(true)}
            style={{
              width: '100%',
              marginTop: '12px',
              padding: '10px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, rgba(var(--gold-primary-rgb), 0.18) 0%, rgba(var(--gold-primary-rgb), 0.05) 100%)',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold-primary)',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = 'brightness(1.1)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Eye size={16} />
            <span>查看 10 款視覺 Mockup 效果圖</span>
          </button>

          {/* Footer Note */}
          <div
            style={{
              marginTop: '12px',
              paddingTop: '10px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              textAlign: 'center'
            }}
          >
            點選即時預覽全站效果，偏好將自動儲存於瀏覽器
          </div>
        </div>
      )}

      {/* Lightbox Mockup Modal for High-Res Visual Inspection */}
      {showMockupModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(5, 7, 10, 0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.2s ease'
          }}
          onClick={() => setShowMockupModal(false)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '960px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: '24px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-gold)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.8), 0 0 30px var(--gold-glow)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Eye size={20} color="var(--gold-primary)" />
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#FFF', margin: 0, fontWeight: 900 }}>
                    10 款橙灰網頁設計 Mockup 視覺效果展間
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '4px' }}>
                  10 款截然不同的高保真橙灰網頁介面效果圖，點擊分頁切換檢視
                </p>
              </div>
              <button
                onClick={() => setShowMockupModal(false)}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {MOCKUPS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMockupTab(idx)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    background: activeMockupTab === idx ? 'var(--gold-primary)' : 'rgba(255,255,255,0.05)',
                    color: activeMockupTab === idx ? '#0A0B0E' : 'var(--text-main)',
                    border: '1px solid ' + (activeMockupTab === idx ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Image Preview Container */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                background: '#0B0D11',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                marginBottom: '14px'
              }}
            >
              <img
                src={MOCKUPS[activeMockupTab].src}
                alt={MOCKUPS[activeMockupTab].title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Description & Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {MOCKUPS[activeMockupTab].desc}
              </div>
              <a
                href={MOCKUPS[activeMockupTab].src}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-light)',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600
                }}
              >
                <span>在新分頁開啟大圖</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
