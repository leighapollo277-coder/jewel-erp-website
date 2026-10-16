import React from 'react';
import { 
  Gem, 
  Layers, 
  ShoppingBag, 
  Radio, 
  Server, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function SingleScreenProfile() {
  return (
    <div 
      data-testid="profile-page" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 20px',
        maxWidth: '1360px',
        margin: '0 auto',
        boxSizing: 'border-box'
      }}
    >
      {/* 1. Header & Brand Identity */}
      <header 
        data-testid="profile-brand-header"
        className="glass-card" 
        style={{
          padding: '16px 28px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Gem size={24} color="#0A0B0E" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <h1 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 900, margin: 0, color: 'var(--text-heading)' }}>
                珠寶源 <span className="title-gold" style={{ fontSize: '1.25rem', fontWeight: 800 }}>JES</span>
              </h1>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>|</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                思琳科技有限公司
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                AlphaOne Technology Limited (AO)
              </span>
              <span className="badge-gold" style={{ padding: '2px 10px', fontSize: '0.75rem' }}>
                tiaranxt
              </span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              珠寶首飾製造、批發、零售連鎖與 RFID 秒級盤點專用管理系統 ｜ 負責人：Mr. Chris Lam (林少華)
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
            href="mailto:chris.lam@alphaone.technology" 
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

      {/* 2. Core Products Grid (3 Pillars - 100% Verified from Quotations) */}
      <main 
        data-testid="products-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '20px',
          marginBottom: '20px'
        }}
      >
        {/* Card 1: JES Jewelry ERP */}
        <div 
          data-testid="card-jes-erp"
          className="glass-card" 
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform var(--transition-fast)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-subtle)'
              }}>
                <Layers size={20} color="var(--gold-primary)" />
              </div>
              <span className="badge-gold" style={{ fontSize: '0.72rem' }}>
                JES Cloud / 本地授權版
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text-heading)' }}>
              珠寶源® JES ERP 系統
            </h2>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
              專為珠寶製造廠及批發企業設計，深度整合生產車間、損耗管制與會計帳務。
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { title: '基礎資料設定 (Master Files Setup)', desc: '款式庫、石料成色規格與編碼對應' },
                { title: '批發訂單管理系統 (Order Management)', desc: '客戶批發訂單、報價與交期排程' },
                { title: '車間生產管制系統 (Production Control)', desc: '起版、鑲嵌、拋光進度工單與流程追蹤' },
                { title: '原物料與成品庫存 (Inventory Control)', desc: '金料、裸石、配件質量控制與實體庫存' },
                { title: '條碼物流出入庫 (Logistics System)', desc: '工廠出貨、分發流通與精準條碼檢校' },
                { title: '會計應收應付模組 (Accounting AR & AP)', desc: '訂單收款、供貨商對帳與財務核算' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={14} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>{item.title}</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>J-lite 訂閱 / 獨立伺服器架構</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-primary)' }}>支援多語系 (中/英)</span>
          </div>
        </div>

        {/* Card 2: POS Cloud */}
        <div 
          data-testid="card-pos-cloud"
          className="glass-card" 
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform var(--transition-fast)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-subtle)'
              }}>
                <ShoppingBag size={20} color="var(--gold-primary)" />
              </div>
              <span className="badge-gold" style={{ fontSize: '0.72rem' }}>
                門市專用零售收銀
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text-heading)' }}>
              POS 雲端門市零售系統
            </h2>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
              滿足珠寶連鎖專櫃多元支付、金會會員管理、客製訂單與精確毛利日結需求。
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { title: '門市收銀與多元結算', desc: '支援 Alipay、現金、信用卡、禮券及混合支付' },
                { title: '金會會員登記與供款管理 (Gold Plan)', desc: '供期追蹤、會簿號碼管理與到期結會支會' },
                { title: '客製化訂購單管理 (CMO)', desc: '訂金登記、戒圍規格、石料描述與交件日追蹤' },
                { title: '增值維修服務管理 (VAS)', desc: '維修工藝記錄、件品收件與收取服務餘額' },
                { title: '每日門市日結 (Day End Report)', desc: '收銀機現金核對、各支付管道匯總與現金流' },
                { title: '門市毛利與金料盤點 (Gross Profit & Stock)', desc: '黃金類 (AY/FG)、珠石類結餘數量與成本分析' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={14} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>{item.title}</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>連鎖門市專案配置</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-primary)' }}>員工銷售報表即時查閱</span>
          </div>
        </div>

        {/* Card 3: tiaranxt RFID */}
        <div 
          data-testid="card-tiaranxt-rfid"
          className="glass-card" 
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform var(--transition-fast)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-subtle)'
              }}>
                <Radio size={20} color="var(--gold-primary)" />
              </div>
              <span className="badge-gold" style={{ fontSize: '0.72rem' }}>
                tiaranxt 超高頻 UHF
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px 0', color: 'var(--text-heading)' }}>
              tiaranxt RFID 珠寶盤點方案
            </h2>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
              可攜式超高頻 RFID 技術，大幅縮短每日盤點時間，實現精準尋物與無縫對接。
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { title: 'IRYS WARD 便攜式 UHF 掃描器', desc: '手持高敏度讀寫器，配備藍牙連線與獨立電池' },
                { title: 'TIARA Nxt 跨平台平板 App', desc: '電子目錄、智能盤點、物料搜尋、智能視圖、Trinity 數據分析' },
                { title: 'RWLINK 跨設備中間件', desc: '支援 Excel、遠端 FTP、資料庫或 Web Services 雙向同步' },
                { title: 'RFID PVC 耐高溫標籤 (32×18×0.86mm)', desc: '耐溫達 120°C，尾部無膠設計保護飾品不留殘膠' },
                { title: '專用標籤編碼與列印軟體', desc: '支援標籤排版設計與中文列印插件 (Chinese plugin)' },
                { title: '可選配擴充硬體', desc: 'SURFACE 智能珠寶盤、LED 尋物標籤' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={14} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-heading)' }}>{item.title}</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>專案實施與人員培訓</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-primary)' }}>1 年原廠保固與技術支援</span>
          </div>
        </div>
      </main>

      {/* 3. Official Server & Infrastructure Specs Bar */}
      <section 
        data-testid="infrastructure-spec"
        className="glass-panel" 
        style={{
          padding: '14px 20px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Server size={16} color="var(--gold-primary)" />
          <strong style={{ color: 'var(--text-heading)' }}>專用伺服器與機房規格：</strong>
          <span>Intel Xeon E5-2680+ 處理器 ｜ 64GB ECC 記憶體 ｜ RAID-10 / RAID-6 SAS 陣列備援</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <ShieldCheck size={14} color="var(--gold-primary)" /> FM200 氣體滅火 & UPS 柴油發電
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Cpu size={14} color="var(--gold-primary)" /> 24x7 恆溫恆濕 (CRAC) & 防火牆監控
          </span>
        </div>
      </section>

      {/* 4. Contact Footer (Dual City Offices & Direct Verified Channels) */}
      <footer 
        data-testid="contact-footer"
        className="glass-card" 
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
        {/* Addresses */}
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

        {/* Contacts & Web */}
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
              href="mailto:chris.lam@alphaone.technology" 
              style={{ color: 'var(--gold-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}
            >
              <Mail size={14} />
              <span>chris.lam@alphaone.technology</span>
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

      {/* Copyright Bar */}
      <div style={{ textAlign: 'center', padding: '12px 0 4px 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} 思琳科技有限公司 AlphaOne Technology Limited. 珠寶源® JES & tiaranxt 版權所有.
      </div>
    </div>
  );
}
