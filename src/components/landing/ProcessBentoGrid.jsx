import React from 'react';
import { 
  GitBranch, 
  Database, 
  FileSpreadsheet, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  Boxes, 
  Truck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ProcessBentoGrid() {
  const erpModules = [
    { title: '款式基礎資料管理', code: 'Master files setup' },
    { title: '訂單管理系統', code: 'Order management system' },
    { title: '生產控制系統', code: 'Production control system' },
    { title: '庫存控制系統', code: 'Inventory control system' },
    { title: '物流管理系統', code: 'Logistics management system' },
    { title: '會計應收應付模組', code: 'Accounting AR & AP module' },
    { title: '數據分析與報表', code: 'Data analytics & Reports' },
  ];

  return (
    <section
      id="process"
      data-testid="bento-grid"
      style={{
        padding: 'clamp(44px, 6vw, 72px) clamp(16px, 4vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '5px 14px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 107, 34, 0.10)',
            border: '1px solid rgba(255, 107, 34, 0.28)',
            color: '#E65100',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '12px',
          }}
        >
          全鏈路工業級工藝流程
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.55rem, 5.2vw, 2.5rem)',
            fontWeight: 900,
            color: '#0F172A',
            letterSpacing: '-0.5px',
            marginBottom: '14px',
            lineHeight: 1.25,
          }}
        >
          珠寶製造閉環工藝流轉與核心模組
        </h2>
        <p
          style={{
            fontSize: 'clamp(0.92rem, 2.4vw, 1.02rem)',
            color: '#64748B',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          專為珠寶工廠研發之嚴謹工作流，從款式資料建立到 RFID 標籤綁定入庫，步步受控、毫釐不差。
        </p>
      </div>

      {/* Bento Layout Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 1fr',
          gap: '24px',
        }}
        className="bento-container"
      >
        {/* Left Bento: Detailed Workshop Process Flow */}
        <div
          className="bento-card bento-detail-card"
          style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                  <GitBranch size={20} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                  車間工藝流程節點流轉圖
                </h3>
              </div>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#FF6B22',
                  backgroundColor: 'rgba(255, 107, 34, 0.10)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                }}
              >
                工單工序流轉核銷
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              每道工序交收記錄實物重量與損耗。工單跨組流轉時，系統即時核銷金料領發與回收，確保貴金屬零流失。
            </p>

            {/* Step-by-Step Flow Nodes */}
            <div
              className="bento-stage-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                marginBottom: '28px',
              }}
            >
              {[
                { step: '01', title: '款式規格', note: 'Master Setup' },
                { step: '02', title: '倒模鑄造', note: 'Casting' },
                { step: '03', title: '執模工藝', note: 'Filing & Assembly' },
                { step: '04', title: '精密鑲石', note: 'Stone Setting' },
                { step: '05', title: '拋光電金', note: 'Polishing & Plating' },
                { step: '06', title: 'RFID 入庫', note: 'Tagging & Inventory' },
              ].map((node, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                    padding: '12px',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#FF6B22',
                      marginBottom: '4px',
                    }}
                  >
                    STAGE {node.step}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '2px',
                    }}
                  >
                    {node.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {node.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Highlight */}
          <div
            className="bento-highlight-bar"
            style={{
              padding: '16px',
              backgroundColor: '#F1F5F9',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#FF6B22" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>
                生產工序過數與工單流轉即時核對 · 支援雲端與獨立伺服器雙軌
              </span>
            </div>
            <a
              href="#contact"
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#FF6B22',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              諮詢系統展示 →
            </a>
          </div>
        </div>

        {/* Right Bento: 7 Core ERP Modules Matrix (Option A: 100% Official Appendix 1) */}
        <div
          id="modules"
          className="bento-card bento-detail-card"
          style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Database size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                  JES 旗艦 7 大功能模組矩陣
                </h3>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                  對齊官方報價單 Appendix 1 標準模組架構
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '24px',
              }}
            >
              {erpModules.map((mod, idx) => (
                <div
                  key={idx}
                  className="module-item"
                  style={{
                    padding: '13px 16px',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: '#FF6B22',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0F172A' }}>
                      {mod.title}
                    </div>
                  </div>
                  <span
                    className="module-code"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#64748B',
                      backgroundColor: '#FFFFFF',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    {mod.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            id="rfid"
            className="bento-rwlink-card"
            style={{
              padding: '16px',
              borderRadius: '10px',
              border: '1px solid #D8DCE6',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A' }}>
                RWLINK 跨設備中間件雙向同步
              </div>
              <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                支援 Excel / FTP / SQL 資料庫 / Web-Services 即時對接
              </div>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: '8px 14px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
            >
              技術諮詢
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bento-container {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .bento-detail-card {
            padding: 20px 16px !important;
          }
          .bento-stage-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .bento-highlight-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .bento-highlight-bar a {
            align-self: flex-start !important;
          }
          .module-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
            padding: 10px 12px !important;
          }
          .module-code {
            align-self: flex-start !important;
          }
          .bento-rwlink-card {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .bento-rwlink-card a {
            text-align: center !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 380px) {
          .bento-stage-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
