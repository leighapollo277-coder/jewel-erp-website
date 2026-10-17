import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '珠寶源® JES 支援雲端部署還是本地專用伺服器？',
      a: '系統提供雙軌彈性部署架構：企業可選擇免維護的「JES 雲端訂閱版」，隨開即用，由原廠提供自動資安更新與多點備份；亦可選用「獨立伺服器授權版（Dedicated TERA Windows Server）」，適合對數據主權與內部私有網絡有特定合規要求之大型製造廠與老字號金行。',
    },
    {
      q: '現有工廠已使用傳統條碼，升級至 TiaraNxt RFID 會否影響日常出貨？',
      a: '升級過程保證零停工。TiaraNxt 配備專屬 RWLINK 跨系統中間件，能雙向對接 Excel、既有 SQL 資料庫與 Web-Services。標籤列印時可同時打印可讀文字、條碼與內置 RFID 晶片，新舊盤點模式可並行過渡，不干擾工廠日常流轉。',
    },
    {
      q: 'TiaraNxt 珠寶專用 RFID 標籤在超聲波清洗或電金時會損壞嗎？',
      a: '不會。標籤採用特種複合 PVC 材質，耐高溫達 120°C，通過嚴格的耐化學溶劑與超聲波清洗測試。此外，標籤尾部採用專利「無膠設計」，穿戴於戒指、項鍊或手鐲時絕不留任何殘膠，徹底保護珠寶首飾光澤。',
    },
    {
      q: 'POS 系統如何管理傳統金行的「金會」供款與到期標會？',
      a: '系統專設「金會會員模組」，自動追蹤各會員每期供款狀態、開會標金紀錄與逾期提醒。會員標會或滿期提貨時，POS 系統直接連動即時金價與會籍折扣換算抵扣金額，徹底淘汰混亂的人手卡片簿記。',
    },
    {
      q: '香港總部、深圳製造車間與多個零售門市如何跨城聯網？',
      a: 'JES 支援多組織多門市跨城集中管理架構。香港下達批發訂單，深圳車間即刻收到工單並派工；深圳完成鑄造鑲石並過機綁定 RFID 後，香港展廳與門市庫存毫秒級同步呈現，數據權限分級隔離，通訊全鏈路加密。',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      data-testid="faq-accordion"
      style={{
        padding: 'clamp(44px, 6vw, 72px) clamp(16px, 4vw, 24px)',
        maxWidth: '960px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
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
          <HelpCircle size={14} color="#FF6B22" />
          常見問題解答
        </div>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)',
            fontWeight: 900,
            color: '#0F172A',
            letterSpacing: '-0.5px',
            marginBottom: '12px',
          }}
        >
          珠寶企業導入常見問題與解答
        </h2>
        <p style={{ fontSize: 'clamp(0.92rem, 2.4vw, 1rem)', color: '#64748B', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          從軟體架構、資料遷移到硬體標籤相容性，為您解碼數智化落地細節。
        </p>
      </div>

      {/* Accordion List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              data-testid={`faq-item-${idx}`}
              className="bento-card"
              style={{
                border: `1px solid ${isOpen ? 'rgba(255, 107, 34, 0.45)' : '#D8DCE6'}`,
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                transition: 'all 0.25s ease',
                overflow: 'hidden',
              }}
            >
              <button
                className="faq-button"
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                aria-expanded={isOpen}
              >
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: isOpen ? '#FF6B22' : '#0F172A',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: isOpen ? 'rgba(255, 107, 34, 0.12)' : '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <ChevronDown size={18} color={isOpen ? '#FF6B22' : '#64748B'} />
                </div>
              </button>

              {isOpen && (
                <div
                  className="faq-answer"
                  style={{
                    padding: '0 24px 22px 24px',
                    fontSize: '0.94rem',
                    lineHeight: 1.7,
                    color: '#475569',
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '16px',
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .faq-button {
            padding: 16px 18px !important;
          }
          .faq-button span {
            font-size: 0.98rem !important;
            line-height: 1.5 !important;
          }
          .faq-answer {
            padding: 0 18px 18px 18px !important;
            padding-top: 14px !important;
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </section>
  );
}
