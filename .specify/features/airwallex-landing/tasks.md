# 珠寶源 JES — 現代 Airwallex 風格 Landing Page 任務清單 (Tasks)

## 任務清單 (Task Breakdown)

- [x] **T-01: 更新設計代幣樣式 (`src/index.css`)**
  - 配置「淺橙加灰」色彩體系：冷鋼珍珠灰底色 (`#E8EBF0`)、純白方形卡片面 (`#FFFFFF`)、純色活力淺橙 (`#FF6B22` / `#FF7733`)、曜石黑深字 (`#0F172A`)
  - 徹底移除/覆蓋任何漸變（No Gradients），確保按鈕與徽章皆為 Solid Colors
  - 定義平滑滾動 (`html { scroll-behavior: smooth; }`) 與優雅微陰影

- [x] **T-02: 建立吸頂導航組件 (`src/components/landing/LandingNavbar.jsx`)**
  - 實作 FR-01：思琳科技鑽石立體向量 Logo + 珠寶源 JES 品牌字號
  - 實作平滑跳轉導航錨點（JES 系統、雲端門市、RFID 硬體、生產工藝、常見問題）
  - 右側配置純色淺橙 CTA 按鈕「官方展示預約」

- [x] **T-03: 建立 Airwallex 首屏 Hero 組件 (`src/components/landing/LandingHero.jsx`)**
  - 實作 FR-02：淺橙膠囊徽章 + 大氣標題 (H1) + 精煉副標題 + 雙行動 CTA 按鈕
  - 實作 DEC-012 選項 A 複合軟硬體展示板（上方：倒模/執模/鑲石/品檢工藝面板；下方：TiaraNxt RFID 手持掃描槍向量插圖與耐高溫標籤）

- [x] **T-04: 建立三大核心柱組件 (`src/components/landing/FeaturePillars.jsx`)**
  - 實作 FR-03：三欄純白寬敞大氣卡片（JES 珠寶生產 ERP、POS 雲端門市與金會、TiaraNxt RFID 盤點生態）
  - 採用純色淺橙圖標容器與重點微型標籤，大氣留白

- [x] **T-05: 建立工藝流轉與模組 Bento 組件 (`src/components/landing/ProcessBentoGrid.jsx`)**
  - 實作 FR-04：珠寶工藝製造全生命週期向量節點圖
  - 展開 7 大真實 ERP 核心模組（款式庫、批發訂單、損耗工單、金石庫存、物流、會計 AR/AP、生產排程）

- [x] **T-06: 建立常見問題折疊手風琴組件 (`src/components/landing/FaqSection.jsx`)**
  - 實作 FR-05：精選 5 大真實業務解答，支援流暢點擊展開/收合與箭頭旋轉動畫

- [x] **T-07: 建立官方通訊與版權組件 (`src/components/landing/LandingFooter.jsx`)**
  - 實作 FR-06：底部橫幅 CTA + 香港紅磡民樂街總部與深圳文錦中心真實通訊、官方電郵 `info@alphaone.technology`

- [x] **T-08: 整合頂層頁面並更新應用入口 (`src/components/AirwallexLanding.jsx` & `src/App.jsx`)**
  - 組裝所有 Landing 子組件至 `AirwallexLanding.jsx`
  - 更新 `src/App.jsx` 預設渲染 `AirwallexLanding`

- [x] **T-09: 靜態建置與無漸變/可測試性驗證**
  - 執行 `npm run build` 確認 Vite 編譯零錯誤、零警告
  - 驗證代碼中無未授權之漸變色樣式，確認所有 `tel:` 與 `mailto:` 正確有效
