# 思琳科技 AlphaOne — 中小企智能自動化與 IT 方案規格書 (Spec v2.0 - EGM Verified)

## 1. 概述與願景 (Overview & Vision)

香港與大灣區中小企業（SME）普遍面臨「招聘困難、人手成本高企、跨部門資訊斷層」之營運瓶頸。大量核心員工每日耗費 30%~50% 寶貴工時於機械式、重覆性的紙本與資料搬運工作（例如：人手將 PDF 發票與採購單逐行敲入系統、員工私人 WhatsApp 接單導致漏單、跨平台拼湊 Excel 報表導致管理層決策滯後）。

本專案旨在於現有網站新增獨立專用服務頁（路由 `/solutions` 與 `/en/solutions`），**在 100% 隔離、零干擾現有「珠寶源® JES」首頁的前提下**，為思琳科技（AlphaOne Technology Limited）建立針對跨行業中小企（貿易、批發、零售、物流與專業服務）的**高轉化 B2B 智能自動化服務展示頁**。

本方案全面基於團隊已驗證的真實研發資產（包括 PO 智能審計提取、銀行對賬引擎、Meta 官方 WhatsApp Cloud API 中間件、跨系統自動化管線與 RFID 硬件生態），以「**直擊剛需、透明定價、雙軌交付、2 週見效**」為核心，直接協助中小企降低營運損耗、釋放核心團隊產能。

---

## 2. 系統架構與設計約束 (Invariants & Design Constraints)

### 2.1 零干擾架構與路徑隔離 (Zero-Regression & Path-Preserving Routing)
- **現有首頁隔離**：`src/components/AirwallexLanding.jsx` 保持預設根路由 `/`（及 `/en`），所有現有代碼、組件與樣式維持 100% 不變。
- **獨立路由**：
  - 繁體中文：`/solutions`
  - 英文版本：`/en/solutions`
  - 由獨立容器組件 `src/components/solutions/SolutionsLanding.jsx` 完整承載。
- **雙產品線頂部導航切換 (Product Line Switcher)**：
  - 消除「珠寶公司接雜單」的品牌認知衝突。在頂部導航列提供明確的母子品牌與產品線劃分：
    - `[ 💎 珠寶行業專屬方案 (JES) ]` ⇄ `[ ⚡ 通用中小企智能自動化 (AlphaFlow) ]`
  - 切換時透過標準 `navigateTo()` 與自定義 `PopStateEvent` 即時更新網址與 React 渲染狀態。
- **語言切換路徑保護 (Path-Preserving Localization)**：
  - 修復 `LanguageContext.jsx`，確保在 `/solutions` 點擊切換語言時精確前往 `/en/solutions`，在 `/en/solutions` 切換時回到 `/solutions`，杜絕強制跳轉回首頁的 Bug。
  - 動態同步 `document.title`：中文為 `中小企智能自動化與 IT 方案 ｜ 思琳科技 AlphaOne Technology`，英文為 `SME Automation & IT Solutions | AlphaOne Technology`。

### 2.2 視覺與品牌體系 (Design System Invariants)
- **嚴格沿用 Vanilla CSS 設計代幣**（`src/index.css`）：
  - 背景：`--bg-dark` (`#E8EBF0` ~ `#ECEEF3`)，高級沉穩冷鋼灰。
  - 卡片容器：`--bg-card` (`#FFFFFF`)，純白方正便當格（Bento Grid），1px 冷灰細邊框 (`#D8DCE6`)。
  - 品牌主焦點：**活力純色科技橙 (`#FF6B22` / `#EA580C`)**，絕對杜絕漸變色（No Gradients）。
  - 深色文字：曜石深灰 (`#0F172A` / `#334155`)，確保高對比度可讀性。
- **圖標庫限制**：全站 100% 僅使用 `lucide-react`，嚴禁引入任何額外 npm 依賴套件。
- **語言規範**：介面文案採用標準**商務繁體書面語（zh-TW / 香港慣用語）**，杜絕粵語口語黑話與內地互聯網黑話；代碼與註解採用純英文。

### 2.3 真實性與合規契約 (Ground Truth & Data Security Invariants)
- **公司主體**：思琳科技有限公司（AlphaOne Technology Limited），香港紅磡民樂街 21 號富高工業中心 B 座 9 樓 19B 室；深圳羅湖文錦中心 702。
- **官方聯絡**：電話 `+852 2722 4360` / `(852) 9088 4833`，電郵 `info@alphaone.technology`。
- **金融級數據隱私承諾 (Enterprise Data Trust)**：
  - 嚴格遵守香港《個人資料（私隱）條例》(PDPO)。
  - 採用企業專用零資料保留 (Zero-Data-Retention) 加密通道，絕不用於任何公有 AI 模型訓練。
  - 數據傳輸採用 TLS 1.3 金融級加密，支援本地化/私有雲部屬。

---

## 3. 兩大核心尖刀方案 + 兩大進階企業選配 (Product Matrix)

為避免「雜貨店式推銷」導致客戶信任稀釋，本頁面採用**「尖刀切入 (Sharp Wedge)」**策略：首屏與主要版面聚焦痛點最深、付費意願最高的兩大剛需，進階定制與硬件作為企業生態選配。

### 🔪 尖刀方案 1: AI 單據與發票自動識別處理 (Document & PO Automation)
*每月為企業節省 40–80 小時人手核對，杜絕開錯單、入錯價之直接損失*
- **客戶痛點**：採購單 (PO)、供應商發票 (Invoice)、裝箱單格式多樣，文員每日人手將資料鍵入系統，耗時且容易錯漏料號或金額。
- **落地能力**：
  - **3–5 秒高精度解析**：支援多頁 PDF、手機拍照單據與掃描檔，自動抽取訂單號、行項目、SKU、數量、單價、幣種與交期。
  - **自動三方核對 (3-Way Matching)**：自動將發票數據與採購單、入庫記錄進行比對，金額或數量偏差即時高亮警示。
  - **相容既有系統**：直接輸出標準格式或對接現有 ERP、Xero、QuickBooks 或 Excel，無須更換舊系統。
- **技術背書**：基於已實裝的 `vtech_po_extraction` / `Client PO Auditor` 專有解析管道。

### 🔪 尖刀方案 2: Meta 官方 WhatsApp Business 營運自動化 (WhatsApp Business Operations)
*集中管理公司客戶資產，防止業務離職帶走客戶，實現全天候自動跟進*
- **客戶痛點**：客戶習慣在 WhatsApp 詢價落單，員工用私人號碼回覆易漏單、客戶通訊隨員工離職流失、收據報銷零散難整理。
- **落地能力**：
  - **公司官方資產**：Meta 官方 Cloud API 企業認證，杜絕封號風險，對話與客情資料 100% 留存公司中央庫存。
  - **24/7 自動回覆與分流**：秒速處理常規報價、訂單進度與庫存查詢，高價值商機即時無縫轉交專屬業務。
  - **發票拍照隨手入帳**：員工拍下收據發送至內部專用 WhatsApp，系統自動辨識商戶、日期與金額並歸檔至會計初審。
- **技術背書**：基於 Meta 官方 Cloud API 企業中間件、`whatsapp-assistant` 與高管自動化辦公流程實裝架構。

### ⚙️ 進階企業選配 1: 跨平台工作流整合與管理層日報 (System Integration & Ops Briefs)
- **落地能力**：打通 Google Workspace、Lark、網店（Shopify/SHOPLINE）與門市 POS，營業結束後自動彙整「實收營業額、低庫存預警、毛利率」，自動推播精簡日報至管理層手機。
- **技術背書**：基於 `lark_gas_mail_merge`、`EquityX HSBC Statements` 自動對賬與 RWLINK 數據中繼技術。

### ⚙️ 進階企業選配 2: 輕量專用內部工具與 RFID 智能盤點 (Custom Internal Tools & IoT)
- **落地能力**：按企業實際流程量身打造輕量專用 Web App；手持 UHF RFID 軟硬一體方案，大幅縮短批量貨品盤點時間至數分鐘內；向量級報價單與法定單據自動套印。
- **技術背書**：珠寶源 JES ERP/POS 系統架構、TiaraNxt RFID 軟硬一體集成、`precision-pdf-form-filler` 向量級渲染引擎。

---

## 4. 雙軌商業模式與透明定價參考 (Commercial & Pricing Model)

徹底解決「TVP 審批需 6-9 個月」與「2 週極速上線」之制度衝突，確立透明雙軌制：

### 軌道 A: 自費敏捷快艇 (Quick-Win POC - 2 週保證上線)
- **適用場景**：急需解決單一關鍵痛點（例如：單一格式 PO 解析、或 WhatsApp 收據自動歸檔）。
- **決策優勢**：專案費用在中小企老闆直接批核權限內，無須經歷漫長政府審批，2 週內交付可運行原型，首月即驗證工時節省效益。
- **透明參考定價**：
  - **Starter POC（單據 AI 自動解析）**：HK$ 8,800 起（單一格式發票/PO 提取 + Excel 自動輸出，2 週驗收）。
  - **Business Flow（WhatsApp 官方自動化管線）**：HK$ 28,000 起（Meta 官方對接 + 跨系統數據流 + 管理層日報）。

### 軌道 B: 特區政府 TVP 科技券資助全面升級
- **適用場景**：企業全流程數位化、跨部門系統重構或大型軟硬一體項目（預算 HK$ 200,000 – HK$ 500,000）。
- **合規支援**：提供特區政府創新科技署 (ITC) 科技券 (TVP) / BUD 專項基金合規規格書、標準招標報價單與驗收交付標準。

---

## 5. 頁面模組與使用者體驗流程 (Page Structure - Bento Grid)

- **S1: 頂部導航列 (Navbar with Product Switcher)**
  - 頂部專屬產品切換 Pill：`[ 💎 珠寶源 JES ] ⇄ [ ⚡ 中小企自動化 (AlphaFlow) ]`
  - 繁體 / EN 雙語瞬時切換（路徑保護）
  - 直撥電話 `+852 2722 4360` 與【預約免費診斷】主行動按鈕。
- **S2: 現代科技 Hero 首屏**
  - 標籤徽章：「思琳科技 · 企業智能自動化解決方案」
  - 主標題：「停止人手抄寫與漏單。將繁瑣工序交給自動化，最快 2 週釋放團隊產能。」
  - 副標題：「專為香港批發、貿易、零售及專業服務業打造。從 PDF 單據自動入帳、官方 WhatsApp 流程，到跨系統營運報表，無需更換現有軟件，以固定價格敏捷落地。」
  - 雙行動按鈕：
    - 主按鈕：【預約 15 分鐘流程痛點診斷】（橘色純色無漸變，直連 WhatsApp / 諮詢視窗）
    - 次按鈕：【WhatsApp 快速諮詢專員】
- **S3: 痛點與投資回報對比 (Labor & Cost ROI Matrix)**
  - 對比卡片：「傳統人手操作」vs「思琳智能自動化」
  - 關鍵指標量化：每月節省 40–80 小時作業工時、消除人為入錯單虧損、首月實現正向 ROI。
- **S4: 核心方案便當格 (Bento Grid: 2 尖刀 + 2 選配)**
  - 兩大旗艦尖刀卡（佔據 65% 視覺焦點）：PO/單據智能審計提取、Meta 官方 WhatsApp 企業客戶中心。
  - 兩大進階選配卡（35% 視覺焦點）：跨系統數據流與管理層日報、輕量內部工具與 RFID 智能盤點。
- **S5: 落地保障與雙軌交付路徑 (Delivery & Commercial Clarity)**
  - 清楚展示「自費 2 週極速 POC」與「政府 TVP 資助全面升級」之差異，並列出 Starter POC (HK$8,800 起) 與 Business Flow (HK$28,000 起) 定價錨點。
  - 三大合規保障：PDPO 隱私安全承諾、Zero-Data-Retention、固定總價里程碑驗收。
- **S6: 為什麼選擇思琳科技 (Why AlphaOne)**
  - 承襲高級珠寶 ERP 的高精度、零容錯系統架構，服務跨行業中小企。
  - 本地香港團隊技術支援（紅磡民樂街 Demo 中心）與深圳研發雙城保障。
- **S7: 常見問題互動手風琴 (FAQ Accordion - 5 大高轉化解答)**
  - 現有舊系統能否對接？
  - 會否出現預算超支或專案爛尾？
  - 員工電腦水平一般會否難以適應？
  - 商業機密與單據數據如何保障私隱？
  - 能否申請香港政府科技券 (TVP)？
- **S8: 底部轉換與雙城通訊 (Footer)**
  - 終極行動橫幅：「準備好釋放團隊 30% 機械工時？」
  - 刊載香港紅磡總部與深圳文錦中心真實通訊、電郵 `info@alphaone.technology`。
