import React, { useState } from 'react';
import { Factory, Store, CheckCircle2, ShieldAlert, Cpu, Radio, Sparkles, ArrowUpRight } from 'lucide-react';
import mfgImg from '../assets/manufacturing.png';
import retailImg from '../assets/retail.png';

export default function DualColumnToggle({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('manufacturer');

  return (
    <section id="features" className="section-padding" style={{ position: 'relative', background: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="badge-gold">
              全方位的解決方案
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '18px', lineHeight: 1.25 }}>
            為您的業務量身打造：<span className="title-gold">精準解決產業痛點</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
            無論是追求極致工藝的製造車間，還是致力於快速擴展的多門市零售品牌，珠寶源 JES 提供專屬的數據模組。
          </p>
        </div>

        {/* Custom Toggle Switch */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px'
        }}>
          <div style={{
            display: 'inline-flex',
            padding: '6px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            position: 'relative'
          }}>
            <button
              onClick={() => setActiveTab('manufacturer')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 36px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'manufacturer' ? 'var(--gold-gradient)' : 'transparent',
                color: activeTab === 'manufacturer' ? '#0A0B0E' : 'var(--text-muted)',
                fontWeight: activeTab === 'manufacturer' ? 700 : 500,
                fontSize: '1.05rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'manufacturer' ? '0 4px 20px var(--gold-glow)' : 'none'
              }}
            >
              <Factory size={20} />
              <span>💎 珠寶製造商 (Manufacturer)</span>
            </button>

            <button
              onClick={() => setActiveTab('retailer')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 36px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'retailer' ? 'var(--gold-gradient)' : 'transparent',
                color: activeTab === 'retailer' ? '#0A0B0E' : 'var(--text-muted)',
                fontWeight: activeTab === 'retailer' ? 700 : 500,
                fontSize: '1.05rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'retailer' ? '0 4px 20px var(--gold-glow)' : 'none'
              }}
            >
              <Store size={20} />
              <span>💍 珠寶零售商 (Retailer)</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="glass-card" style={{
          padding: '48px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-gold)',
          background: 'var(--bg-card)'
        }}>
          {activeTab === 'manufacturer' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}>
              {/* Left Details */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gold-primary)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  marginBottom: '12px'
                }}>
                  <Cpu size={18} />
                  <span>工藝流程管理與成本控制</span>
                </div>

                <h3 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '20px', lineHeight: 1.25 }}>
                  專注於車間極致控制，消除貴金屬損耗
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.7 }}>
                  在傳統珠寶製造中，成色偏差與成型損耗是最大的利潤殺手。珠寶源 JES 將動態流轉與廢料追蹤帶入生產一線。
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{
                      padding: '10px',
                      background: 'rgba(var(--gold-primary-rgb), 0.15)',
                      borderRadius: '10px',
                      color: 'var(--gold-primary)',
                      marginTop: '2px'
                    }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-heading)', fontSize: '1.15rem', marginBottom: '6px', fontWeight: 700 }}>
                        優化澆鑄樹追蹤與精準成色配比
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        數位化計算每批次澆鑄樹金屬重量、比重與熔煉比率，確保成色零誤差，提升一次成型良率。
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{
                      padding: '10px',
                      background: 'rgba(var(--gold-primary-rgb), 0.15)',
                      borderRadius: '10px',
                      color: 'var(--gold-primary)',
                      marginTop: '2px'
                    }}>
                      <ShieldAlert size={24} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-heading)', fontSize: '1.15rem', marginBottom: '6px', fontWeight: 700 }}>
                        減少金屬損耗，將原材料責任制落實到車間工匠
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        精確記錄從領料、起苔、拋光到執模的每道工序金屬交接重量，責任明確，將平均損耗降至最低。
                      </p>
                    </div>
                  </div>
                </div>

                <button onClick={onOpenDemoModal} className="btn-primary">
                  <span>預約製造版專屬演示</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Right Image */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)'
                }}>
                  <img 
                    src={mfgImg} 
                    alt="珠寶源 JES 製造端澆鑄系統" 
                    style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(10, 11, 14, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Sparkles size={18} color="var(--gold-primary)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-heading)', fontWeight: 600 }}>車間原料責任制運作中</span>
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}>
              {/* Left Details */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gold-primary)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  marginBottom: '12px'
                }}>
                  <Radio size={18} />
                  <span>終端銷售效率與品牌擴展</span>
                </div>

                <h3 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: 'var(--text-heading)', marginBottom: '20px', lineHeight: 1.25 }}>
                  秒級 RFID 盤點，極致拉升多店庫存週轉率
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.7 }}>
                  珠寶門市傳統盤點耗費大量時間與人力。珠寶源 JES 透過感應式 RFID 智慧盤點與多店即時銷存連動，賦能品牌極速規模化。
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{
                      padding: '10px',
                      background: 'rgba(var(--gold-primary-rgb), 0.15)',
                      borderRadius: '10px',
                      color: 'var(--gold-primary)',
                      marginTop: '2px'
                    }}>
                      <Radio size={24} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-heading)', fontSize: '1.15rem', marginBottom: '6px', fontWeight: 700 }}>
                        運用 RFID 技術實現數秒內的精準現貨盤點
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        無需單件掃描，只需將 RFID 托盤過感應器，數百件高級珠寶現貨在 3 秒內精確比對完成。
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{
                      padding: '10px',
                      background: 'rgba(var(--gold-primary-rgb), 0.15)',
                      borderRadius: '10px',
                      color: 'var(--gold-primary)',
                      marginTop: '2px'
                    }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-heading)', fontSize: '1.15rem', marginBottom: '6px', fontWeight: 700 }}>
                        即時分析多店銷售數據，優化庫存週轉率與補貨決策
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        打通各分店與總部數據壁壘，精確掌握各款式暢銷動態，動態跨店調撥，杜絕死庫存積壓。
                      </p>
                    </div>
                  </div>
                </div>

                <button onClick={onOpenDemoModal} className="btn-primary">
                  <span>預約零售版專屬演示</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* Right Image */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)'
                }}>
                  <img 
                    src={retailImg} 
                    alt="珠寶源 JES 零售端 RFID 盤點系統" 
                    style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(10, 11, 14, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Sparkles size={18} color="var(--gold-primary)" />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-heading)', fontWeight: 600 }}>RFID 多店連動盤點中</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
