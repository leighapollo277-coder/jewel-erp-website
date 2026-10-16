import React from 'react';
import { 
  Gem, 
  Layers, 
  ShoppingBag, 
  Radio, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ArrowRight,
  Database,
  ClipboardList,
  Wrench,
  Boxes,
  Truck,
  FileSpreadsheet,
  Cpu,
  Wifi,
  Sparkles
} from 'lucide-react';

export default function SingleScreenProfile() {
  return (
    <div 
      data-testid="profile-page" 
      style={{
        minHeight: '100vh',
        background: 'var(--bg-dark)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        boxSizing: 'border-box',
        gap: '20px'
      }}
    >
      {/* 1. Header & Brand Identity Bento Bar */}
      <header 
        data-testid="profile-brand-header"
        className="bento-card" 
        style={{
          padding: '16px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: '#0F172A',
            border: '1px solid rgba(255, 85, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)'
          }}>
            <Gem size={22} color="#FF5500" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <h1 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 900, margin: 0, color: 'var(--text-heading)' }}>
                珠寶源 <span style={{ color: 'var(--gold-primary)', fontSize: '1.3rem', fontWeight: 900 }}>JES</span>
              </h1>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>|</span>
              <span style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                思琳科技有限公司
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                AlphaOne Technology Limited (AO)
              </span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              珠寶首飾製造、批發、零售連鎖與 RFID 秒級盤點專用管理系統
            </p>
          </div>
        </div>

        {/* Top Direct Action Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a 
            href="tel:+85227224360" 
            className="btn-secondary" 
            style={{ 
              padding: '8px 16px', 
              fontSize: '0.82rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              textDecoration: 'none'
            }}
          >
            <Phone size={14} color="var(--gold-primary)" />
            <span>+852 2722 4360</span>
          </a>
          <a 
            href="mailto:info@alphaone.technology" 
            className="btn-primary" 
            style={{ 
              padding: '8px 18px', 
              fontSize: '0.82rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              textDecoration: 'none'
            }}
          >
            <Mail size={14} />
            <span>官方諮詢</span>
          </a>
        </div>
      </header>

      {/* 2. Core Bento Grid: Row 1 (Asymmetric 65% ERP Flagship / 35% POS Cloud) */}
      <section 
        data-testid="bento-row-main"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.85fr) minmax(0, 1fr)',
          gap: '20px'
        }}
      >
        {/* Bento Main Card 1: 珠寶源® JES Jewelry ERP (Flagship Centerpiece) */}
        <div 
          data-testid="card-jes-erp"
          className="bento-card" 
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div>
            {/* Header of ERP Card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 85, 0, 0.08)',
                  border: '1px solid rgba(255, 85, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Layers size={22} color="var(--gold-primary)" />
                </div>
                <div>
                  <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: 'var(--text-heading)' }}>
                    珠寶源® JES 珠寶製造與批發 ERP 系統
                  </h2>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    專為珠寶工廠、貴金屬加工、批發洋行深度訂製之全流程管理核心
                  </div>
                </div>
              </div>
              <span className="badge-gold">
                JES Cloud 雲端版 ｜ 本地專案授權版
              </span>
            </div>

            {/* Artwork 1: Native SVG 珠寶製造與工藝流轉節點圖 (Vector Process Flow) */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '16px 20px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#475569', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={13} color="var(--gold-primary)" /> 車間生產與工藝工單流轉架構 (Manufacturing Workflow)
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--gold-primary)', fontWeight: 600 }}>全環節損耗精確稽核</span>
              </div>

              {/* Vector Workflow Steps */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', overflowX: 'auto', gap: '8px', paddingBottom: '4px' }}>
                {[
                  { step: '01', title: '款式規格庫', sub: '成色/石料編碼' },
                  { step: '02', title: '批發訂單排程', sub: '報價與交期管制' },
                  { step: '03', title: '車間工藝工單', sub: '起版/鑲嵌/拋光' },
                  { step: '04', title: '金石物料庫存', sub: '原料/成品實體帳' },
                  { step: '05', title: '條碼物流檢校', sub: '出入庫防差錯' },
                  { step: '06', title: '會計財務核算', sub: '應收應付對帳' }
                ].map((item, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '10px',
                      padding: '10px 12px',
                      minWidth: '105px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                      textAlign: 'center',
                      flex: 1
                    }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--gold-primary)' }}>
                        {item.step}
                      </div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginTop: '2px' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {item.sub}
                      </div>
                    </div>
                    {idx < arr.length - 1 && (
                      <ArrowRight size={14} color="var(--gold-primary)" style={{ flexShrink: 0, opacity: 0.8 }} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 7 Core Modules Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px'
            }}>
              {[
                { icon: Database, title: '基礎資料設定 (Master Files Setup)', desc: '款式庫、石料成色規格與編碼對應' },
                { icon: ClipboardList, title: '批發訂單管理系統 (Order Management)', desc: '客戶批發訂單、報價與交期排程' },
                { icon: Wrench, title: '車間生產管制系統 (Production Control)', desc: '起版、鑲嵌、拋光進度工單與流程追蹤' },
                { icon: Boxes, title: '原物料與成品庫存 (Inventory Control)', desc: '金料、裸石、配件質量控制與實體庫存' },
                { icon: Truck, title: '條碼物流出入庫 (Logistics System)', desc: '工廠出貨、分發流通與精準條碼檢校' },
                { icon: FileSpreadsheet, title: '會計應收應付模組 (Accounting AR & AP)', desc: '訂單收款、供貨商對帳與財務核算' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '10px 14px'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <item.icon size={15} color="var(--gold-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Card Spec Strip */}
          <div style={{
            paddingTop: '14px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}>
            <span>架構：J-lite 雲端訂閱版 ｜ 獨立 TERA Windows Server 本地授權版</span>
            <span style={{ fontWeight: 600, color: 'var(--gold-primary)' }}>支援中英雙語 (Bilingual) ｜ 支援多倉多廠聯動</span>
          </div>
        </div>

        {/* Bento Sub Card 2: POS 雲端門市零售系統 */}
        <div 
          data-testid="card-pos-cloud"
          className="bento-card" 
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 85, 0, 0.08)',
                  border: '1px solid rgba(255, 85, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShoppingBag size={22} color="var(--gold-primary)" />
                </div>
                <div>
                  <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: 'var(--text-heading)' }}>
                    POS 雲端門市零售
                  </h2>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    連鎖專櫃收銀、金會供款與客製訂單
                  </div>
                </div>
              </div>
              <span className="badge-gold">門市專櫃版</span>
            </div>

            {/* Payment Method Artwork Badges */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '12px 14px',
              marginBottom: '16px'
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                支援多元結算管道：
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Alipay 支付寶', '信用卡 Visa/Master', '現金/禮券混合支付'].map((pay, i) => (
                  <span key={i} style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    background: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    color: '#334155'
                  }}>
                    {pay}
                  </span>
                ))}
              </div>
            </div>

            {/* POS Core Features List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { title: '金會會員登記與供款 (Gold Club Plan)', desc: '供期追蹤、會簿號碼管理與到期結會支會' },
                { title: '客製化訂購單管理 (CMO)', desc: '訂金登記、戒圍規格、石料描述與交件日追蹤' },
                { title: '增值維修服務管理 (VAS)', desc: '維修工藝記錄、件品收件與收取服務餘額' },
                { title: '每日門市日結 (Day End Report)', desc: '收銀機現金核對、各支付管道匯總與現金流' },
                { title: '門市毛利與金料盤點 (Gross Profit)', desc: '黃金類 (AY/FG)、珠石類結餘數量與成本分析' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={15} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>{item.title}</strong>
                    <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            paddingTop: '14px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}>
            <span>連鎖門市專案配置</span>
            <span style={{ fontWeight: 600, color: 'var(--gold-primary)' }}>員工銷售報表即時查閱</span>
          </div>
        </div>
      </section>

      {/* 3. Core Bento Grid: Row 2 (Full-Width Hardware & RFID Banner Bento Card) */}
      <section 
        data-testid="card-tiaranxt-rfid"
        className="bento-card" 
        style={{
          padding: '28px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.85fr)',
          gap: '28px',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Native Vector Artwork of IRYS WARD Scanner Gun & 120°C Tag */}
        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Native SVG Artwork of IRYS WARD Scanner Gun */}
          <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wireless RFID Waves */}
            <path d="M170 35 C185 50 185 70 170 85" stroke="#FF5500" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"/>
            <path d="M182 25 C202 45 202 80 182 100" stroke="#FF5500" strokeWidth="2" strokeLinecap="round"/>
            <path d="M194 15 C220 40 220 90 194 115" stroke="rgba(255, 85, 0, 0.4)" strokeWidth="1.5" strokeLinecap="round"/>

            {/* Scanner Body */}
            <path d="M60 45 L150 45 C155 45 158 50 156 55 L145 90 C143 94 139 96 135 96 L75 96 C70 96 66 92 65 87 L56 52 C55 48 58 45 60 45 Z" fill="#0F172A" stroke="#334155" strokeWidth="2"/>
            
            {/* Scanner Bezel / Display Window */}
            <rect x="75" y="52" width="55" height="32" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1.5"/>
            <rect x="80" y="57" width="45" height="22" rx="2" fill="#0B0F19"/>
            <text x="102" y="71" fill="#FF5500" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">UHF READY</text>
            <circle cx="86" cy="71" r="2" fill="#10B981"/>

            {/* Scanner Handle */}
            <path d="M92 96 L82 140 C81 144 84 148 89 148 L112 148 C116 148 119 144 118 140 L112 96 Z" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
            
            {/* Trigger Button */}
            <path d="M86 106 C80 106 78 112 84 116 L88 116" stroke="#FF5500" strokeWidth="3" strokeLinecap="round"/>

            {/* RFID Jewelry Tag on Left */}
            <g transform="translate(15, 25)">
              <rect x="0" y="0" width="44" height="28" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="2.5" fill="#94A3B8"/>
              {/* Antenna coil */}
              <rect x="16" y="6" width="22" height="16" rx="2" fill="none" stroke="#FF5500" strokeWidth="1"/>
              <rect x="20" y="10" width="14" height="8" rx="1" fill="none" stroke="rgba(255, 85, 0, 0.5)" strokeWidth="1"/>
              {/* Non-adhesive tail */}
              <path d="M22 28 L22 55 C22 58 26 58 26 55 L26 28 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"/>
              <text x="22" y="70" fill="#64748B" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">無膠尾部</text>
            </g>
          </svg>

          <div style={{ marginTop: '8px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              IRYS WARD 超高頻便攜掃描槍
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              配搭 32×18×0.86mm 耐 120°C PVC 尾部無膠標籤
            </div>
          </div>
        </div>

        {/* Right Column: TiaraNxt RFID Specifications */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 85, 0, 0.08)',
                  border: '1px solid rgba(255, 85, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Radio size={20} color="var(--gold-primary)" />
                </div>
                <h2 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: 'var(--text-heading)' }}>
                  TiaraNxt 珠寶專用可攜式 RFID 盤點方案
                </h2>
              </div>
              <span className="badge-gold">秒級批量盤點 ｜ 精準尋物</span>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: '0 0 16px 0', lineHeight: 1.5 }}>
              專為貴重金飾與鑽石專櫃打造，大幅縮短每日盤點時間，實現精準尋物與無縫對接。
            </p>

            {/* 4 RFID Core Feature Blocks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {[
                { title: 'IRYS WARD 手持便攜掃描器', desc: '手持高敏度 UHF 讀寫器，配備藍牙連線與獨立長效充電鋰電池' },
                { title: 'TIARA Nxt 跨平台平板 App', desc: '電子目錄、智能盤點、物料搜尋、智能視圖、Trinity 數據分析' },
                { title: 'RWLINK 跨設備中間件', desc: '與 JES ERP 雙向無縫同步，支援 Excel / 遠端 FTP / DB / Web Services' },
                { title: 'RFID PVC 耐高溫標籤', desc: '耐溫達 120°C，專利尾部中段無膠設計，保護高價飾品不留殘膠' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '10px 12px'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={13} color="var(--gold-primary)" />
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.4 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}>
            <span>可選配擴充硬體：SURFACE 智能珠寶盤 ｜ LED 尋物標籤 ｜ 專用標籤編碼列印軟體</span>
            <span style={{ fontWeight: 600, color: 'var(--gold-primary)' }}>1 年原廠保固與在地技術支援</span>
          </div>
        </div>
      </section>

      {/* 4. Bottom Bento Card: Official Contacts & Verified Direct Channels */}
      <footer 
        data-testid="contact-footer"
        className="bento-card" 
        style={{
          padding: '20px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '0.82rem'
        }}
      >
        {/* Dual City Headquarters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-heading)' }}>
            <MapPin size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
            <strong>香港總部：</strong>
            <span style={{ color: 'var(--text-body)' }}>香港九龍紅磡民樂街21號富高工業中心B座9樓19B室</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-heading)' }}>
            <MapPin size={15} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
            <strong>深圳中心：</strong>
            <span style={{ color: 'var(--text-body)' }}>深圳市羅湖區文錦路文錦廣場文錦中心702</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '2px' }}>
            <Clock size={13} />
            <span>服務時間：週一至週五 9:00 a.m. ~ 6:00 p.m.（公眾假期除外）</span>
          </div>
        </div>

        {/* Direct Contacts & Web Channels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="tel:+85227224360" 
              style={{ color: 'var(--text-heading)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Phone size={14} color="var(--gold-primary)" />
              <span>香港：+852 2722 4360</span>
            </a>
            <span style={{ color: 'var(--text-muted)' }}>｜</span>
            <span style={{ color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Phone size={14} color="var(--gold-primary)" />
              <span>深圳：(86) 0755-25503714</span>
            </span>
            <span style={{ color: 'var(--text-muted)' }}>｜</span>
            <span style={{ color: 'var(--text-heading)' }}>
              傳真：+852 2722 4363
            </span>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a 
              href="mailto:info@alphaone.technology" 
              style={{ color: 'var(--gold-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700 }}
            >
              <Mail size={14} />
              <span>info@alphaone.technology</span>
            </a>
            <span style={{ color: 'var(--text-muted)' }}>｜</span>
            <a 
              href="https://www.alphaone.technology" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-heading)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Globe size={14} color="var(--gold-primary)" />
              <span>www.alphaone.technology</span>
              <ExternalLink size={12} color="var(--text-muted)" />
            </a>
          </div>
        </div>
      </footer>

      {/* Copyright Line */}
      <div style={{ textAlign: 'center', padding: '4px 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} 思琳科技有限公司 AlphaOne Technology Limited. 珠寶源® JES & TiaraNxt 版權所有.
      </div>
    </div>
  );
}
