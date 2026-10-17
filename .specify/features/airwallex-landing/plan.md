# 珠寶源 JES — 現代 Airwallex 風格 Landing Page 實施計畫 (Plan)

## 1. 架構設計與技術方案 (Technical Architecture)

### 1.1 組件階層拆解 (Component Hierarchy)
```
src/
├── App.jsx                       <-- 入口切換至 AirwallexLanding
├── index.css                     <-- 定義淺橙加灰 (Light Orange + Cool Grey) 純色代幣
└── components/
    ├── AirwallexLanding.jsx      <-- 頂層長滾動容器，協調整合各區塊
    ├── landing/                  <-- 模組化子區塊 (保持單檔高內聚)
    │   ├── LandingNavbar.jsx     <-- 吸頂導航欄與快速跳轉錨點
    │   ├── LandingHero.jsx       <-- 首屏大氣標題、雙 CTA、軟硬體複合向量展示板 (DEC-012 A)
    │   ├── FeaturePillars.jsx    <-- 三大核心業務卡片 (JES ERP / POS 雲端 / TiaraNxt RFID)
    │   ├── ProcessBentoGrid.jsx  <-- 車間生產 7 大工藝流轉與模組展開 Bento
    │   ├── FaqSection.jsx        <-- 互動式折疊常見問題面板 (5 大真實業務解答)
    │   └── LandingFooter.jsx     <-- 雙城通訊、官方聯絡管道與版權
    └── SingleScreenProfile.jsx   <-- 保留作為備用組件
```

### 1.2 設計代幣（淺橙加灰 — 100% 純色無漸變）
在 `src/index.css` 擴充與校準變數：
- `--bg-dark`: `#E8EBF0` (冷鋼珍珠灰底色，扎實沉穩，避免刺目慘白)
- `--bg-card`: `#FFFFFF` (純白方形卡片底色)
- `--gold-primary`: `#FF6B22` (純色科技活力淺橙，無漸變)
- `--gold-light`: `#FF7733` (淡橙高亮)
- `--gold-dark`: `#E65100` (深橙點擊態)
- `--gold-glow`: `rgba(255, 107, 34, 0.15)`
- `--text-heading`: `#0F172A` (曜石深黑標題)
- `--text-main`: `#1E293B` (深灰主要正文)
- `--text-muted`: `#64748B` (冷鋼灰次要文字)
- `--border-subtle`: `#DCE0E7` (純粹 1px 清爽邊框)
- `--border-orange`: `rgba(255, 107, 34, 0.35)`

---

## 2. 獨立審查員挑戰 (Independent Auditor Challenge)

### 2.1 摩擦點摘要 (Summary of Friction)
- **摩擦點 1 (長度與認知負荷)**：長滾動 Landing Page 若文字過於密集，容易失去 Airwallex 頁面的現代呼吸感與高級 SaaS 感，違背用戶「唔好咁多字，似 landing page 多啲」的核心指令。
- **摩擦點 2 (色彩與漸變防範)**：許多 B2B 網站會不經意引入按鈕或背景漸變，用戶已三度明確要求「最憎深橙色漸變」與「100% 純色」。
- **摩擦點 3 (軟硬體複合展示複雜度)**：DEC-012 選擇選項 A（軟體 ERP 工藝流 + 硬體 RFID 手持機向量複合），若排版過於雜亂會失去焦點。

### 2.2 代理人提議 (Agent Proposal)
- 代理人提議建立 6 個子區塊長滾動頁面，全面重塑文字為簡潔大標題 + 微型標籤 + 現代純色卡片。
- 首屏右側以雙層浮動卡片展示：上層為車間生產 SVG 工藝流，下層為 RFID 掃描槍與耐溫標籤。

### 2.3 審查員挑戰 (Auditor's Challenge)
- **審查員質疑 1**：長滾動頁面各區塊如果缺乏視覺錨點或微互動（如 FAQ 折疊手風琴），容易淪為死板的靜態圖文。必須確保 FAQ 具備流暢的點擊展開/收合體驗，且頂部導航能平滑滾動（Smooth Scroll）至對應區塊。
- **審查員質疑 2**：色碼務必嚴格鎖定「淺橙加灰」，嚴禁使用任何 CSS `linear-gradient`。按鈕 hover 態僅使用色階微調（例如 `#FF6B22` -> `#E65100`），杜絕任何漸變殘留。
- **審查員質疑 3**：首屏複合面板切忌塞滿全部 7 大模組，首屏應聚焦於「核心車間 4 步流轉 + RFID 連動計數」，深度的 7 大模組應移至中段的 Bento Grid 區塊展開，保持首屏大氣清爽。

### 2.4 調和後之實施方案 (Reconciled Plan)
1. **FAQ 互動化**：在 `FaqSection.jsx` 實作標準 React `useState` 折疊機制，點擊任意問題流暢切換展開/收起狀態，並附帶 `ChevronDown` 旋轉指示。
2. **純色 CSS 鎖定**：全面審查並移除所有漸變樣式代碼，所有按鈕、徽章與卡片邊框統一採用 Solid Color。
3. **首屏視覺精煉分流**：首屏右側僅展示高階「珠寶生產與 RFID 閉環流轉卡片（倒模 → 執模 → 鑲石 → RFID 毫秒盤點）」，7 大模組清單完整配置在專屬的 `ProcessBentoGrid` 區塊中。

---

## 3. 可測試性優先分析與驗證計畫 (Testability-First Analysis & Test Plan)

### 3.1 可測試性分析 (Fabric Ensure Testability)
- **DOM 屬性標記**：為所有關鍵互動元素與區塊賦予專屬 `data-testid`（例如 `navbar`, `hero-section`, `feature-pillars`, `bento-grid`, `faq-accordion`, `faq-item-1`, `footer`）。
- **無狀態與單向資料流**：各區塊維持純粹展示或局部的清晰 state（如 FAQ 當前展開項目），無外部 side-effects。
- **建置完整性**：透過 `npm run build` 進行 Vite 編譯驗證，確保無任何語法或導入錯誤。

### 3.2 驗證矩陣 (Verification Matrix)
| 項目 | 驗證方式 | 預期結果 |
| :--- | :--- | :--- |
| **色彩與無漸變** | 代碼靜態檢查 + 樣式變數檢查 | 全站無任何 `linear-gradient`，底色為冷鋼灰，主強調色為純淺橙 |
| **導航錨點跳轉** | 點擊頂部導航按鈕 | 頁面平滑滾動至對應 Section |
| **FAQ 互動手風琴** | 點擊各個常見問題 | 對應答案平滑展開，其餘收合，箭頭正確旋轉 |
| **真實通訊與點擊** | 檢查電話與電郵超連結 | 正確輸出 `tel:+85227224360` 與 `mailto:info@alphaone.technology` |
| **建置與打包** | 執行 `npm run build` | 0 errors, 0 warnings，產出物至 `./dist` |
