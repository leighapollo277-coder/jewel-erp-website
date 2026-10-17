# 珠寶源 JES — 現代 Airwallex 風格長滾動 Landing Page 規格書 (Spec)

## 1. 概述與願景 (Overview & Vision)
依據用戶確認（DEC-011: yes, DEC-012: A，色彩體系：淺橙加灰），本專案將由原先的單屏名片式結構全面升級為參照 [Airwallex Spend AI 官方 Landing Page](https://www.airwallex.com/zh-hk/spend-management/spend-ai) 之頂級 B2B SaaS 現代長滾動展示站。
在傳遞專業珠寶產業科技感與真實商業信賴度的同時，完整呈現思琳科技（AlphaOne Technology）旗艦珠寶源® JES ERP、POS 雲端門市與 TiaraNxt RFID 硬體體系。

---

## 2. 核心規範與設計體系 (Invariants & Design System)

### 2.1 視覺色彩體系（淺橙加灰 — 100% 純色無漸變）
- **底色 (Background)**：冷鋼灰/珍珠淡灰 (`--bg-dark: #E8EBF0` ~ `#ECEEF3`)，告別慘白感與刺眼反光。
- **卡片容器 (Surfaces)**：純白方形科技便當格 (`--bg-card: #FFFFFF`)，18px 圓角，1px 細緻冷灰邊框 (`#D8DCE6` / `rgba(15, 23, 42, 0.08)`)，懸浮微陰影。
- **品牌焦點 (Brand Accent)**：**活力淺橙 (Crisp Light Tech Orange: `#FF6B22` / `#FF7733`)**，應用於徽章、激活態標籤、重點流程線與 CTA 按鈕。
- **絕對禁忌 (Strict Non-Negotiable)**：**100% 純色（Solid Color）**，全站徹底杜絕任何深橙色漸變或彩虹漸變（No Gradients）。
- **深色文字與按鈕**：曜石黑灰 (`#0F172A` / `#1E293B`) 提供極致可讀性。

### 2.2 真實資訊規範 (Ground Truth Alignment)
全站 100% 對齊 `GROUND_TRUTH.md`，杜絕虛構數據與造假客戶（Zero Fabrication）：
- **公司主體**：思琳科技有限公司（AlphaOne Technology Limited）
- **官方通訊**：
  - 電郵：`info@alphaone.technology`
  - 香港總部：紅磡民樂街 21 號富高工業中心 B 座 9 樓 19B 室（電話：+852 2722 4360 / 9089 4833，傳真：+852 2722 4363）
  - 深圳中心：羅湖區文錦廣場文錦中心 702（電話：(86) 0755-25503714）
- **三大產品線**：
  1. **珠寶源® JES (Jewelry ERP System)**：款式庫、批發訂單、損耗工單、金石原物料/成品庫存、車間工藝流轉、會計 AR/AP。
  2. **POS 雲端零售系統**：門市銷售收銀、金會會員/供款、客製化訂購 CMO、增值維修 VAS、日結與毛利分析。
  3. **TiaraNxt 珠寶專用可攜式 RFID 盤點系統**：IRYS WARD 超高頻便攜掃描器、RWLINK 跨設備中間件、耐高溫 120°C PVC 標籤（尾部無膠）。

---

## 3. 功能需求清單 (Functional Requirements)

- [ ] **FR-01: 頂部導航欄 (Sticky Header / Navigation Bar)**
  - 品牌 Logo（思琳科技 AlphaOne 鑽石立方向量標誌 + 珠寶源 JES 字號）
  - 快速跳轉錨點：JES 珠寶 ERP、POS 雲端門市、TiaraNxt RFID、技術架構、常見問題
  - 頂部右側 CTA 按鈕：「官方諮詢預約」直接呼叫聯絡或錨點

- [ ] **FR-02: 現代科技 Hero 首屏（DEC-012 選項 A 複合軟硬體展示）**
  - **左側文案**：
    - 淺橙膠囊徽章：「珠寶全產業鏈數智化革新」
    - 大氣標題 (H1)：「以一體化 ERP 與 RFID 技術，重塑珠寶製造與零售生態」
    - 精煉副標題：「專為香港與大灣區珠寶製造商、批發商及連鎖金行打造。打通款式研發、車間生產損耗、門市銷售與毫秒級盤點。」
    - 雙 CTA 行動鈕：「預約官方現場展示」（淺橙純色實心）+「電話諮詢 (+852 2722 4360)」（純白冷灰邊框次按鈕）
  - **右側複合展示板 (Hero Visual Mockup)**：
    - 上方：JES ERP 雲端生產工藝流程節點面板（鑄造/倒模、執模、鑲石、拋光/電金、品檢）
    - 下方：TiaraNxt RFID 硬體連動卡（手持 IRYS WARD 掃描器向量插畫、耐高溫 120°C 標籤與即時盤點動態指標）

- [ ] **FR-03: 三大核心業務柱（Airwallex 核心卡片矩陣架構）**
  - **卡片 1：JES 珠寶生產製造與供應鏈 ERP**
    - 款式庫管理、批發與訂單流轉、損耗工單精密核算、金石庫存進銷存、會計 AR/AP
  - **卡片 2：POS 雲端門市零售與會員金會**
    - 快速收銀、金會會員供款期數自動追蹤、CMO 客製訂單、VAS 維修翻新、多幣種/電子支付支援
  - **卡片 3：TiaraNxt 可攜式 RFID 盤點硬體生態**
    - IRYS WARD 超高頻掃描、RWLINK 雙向資料庫同步、耐高溫 120°C PVC 重複使用標籤、秒級萬件盤點

- [ ] **FR-04: 車間生產流轉與 ERP 核心模組 Bento Grid**
  - 以大氣 Bento Grid 展示珠寶生產核心 7 大模組，並透過清晰 SVG 向量流程圖呈現車間全鏈路閉環。

- [ ] **FR-05: 常見問題折疊面板 (Interactive FAQ Accordion)**
  - 精選珠寶企業導入時最關心的 5 個核心問題（支援雲端版與本地專用伺服器版嗎？如何對接既有條碼與 Excel？RFID 標籤在電金清洗時會損壞嗎？深圳與香港能否多門市跨城聯網？金會供款如何自動對帳？）。

- [ ] **FR-06: 雙城聯絡與官方資訊 Footer**
  - 底部大橫幅 CTA：「立即展開珠寶數智化轉型」
  - 完整刊載香港紅磡民樂街總部與深圳文錦中心真實通訊、官方電郵 `info@alphaone.technology`，點擊即時發起通話與郵件。

---

## 4. 非功能需求 (Non-Functional Requirements)
- **響應式佈局 (Responsive)**：完美支援 Desktop (1440px/1280px)、Tablet (768px) 及 Mobile (375px+)。
- **效能指標 (Performance)**：零外部重型圖片依賴，全數圖標採用 `lucide-react` 與原生純 SVG 渲染，秒開即現。
- **無依賴添加 (Zero-Dep)**：恪守 React 18 + Vite 5 + Vanilla CSS，不額外安裝第三方庫。
