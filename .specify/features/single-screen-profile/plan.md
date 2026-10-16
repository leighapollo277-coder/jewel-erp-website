# 珠寶源 JES & 思琳科技 單屏極簡卡片簡介 — 技術實施計畫 (Plan)

## 1. 架構概述 (Architecture Overview)

本計畫將重構首頁進入點，建立精煉、零虛構、高質感之單屏自適應企業名片頁面：
- **主要組件**：`src/components/SingleScreenProfile.jsx`
- **入口集成**：`src/App.jsx` 移除已廢棄之行銷區塊與 `DemoModal`，直接掛載 `SingleScreenProfile`（依用戶指示不保留主題切換按鈕）。
- **樣式整合**：沿用 `src/index.css` 之 Style 3 Pearl Light Minimalist 設計代幣變數（底色 `#F0F2F6`、純白卡片 `#FFFFFF`、赤陶橙 `#EA580C`），完全不引入外部 CSS 框架或新套件。

```
App.jsx
└── SingleScreenProfile.jsx
    ├── Header (Logo, 思琳科技 AlphaOne, 珠寶源 JES, tiaranxt, 負責人 Chris Lam)
    ├── ProductsGrid (3 大純白懸浮卡片: JES ERP, POS Cloud, tiaranxt RFID)
    ├── InfrastructureBar (專用伺服器硬體規格與機房設施)
    └── ContactFooter (香港紅磡、深圳辦公室、電話、傳真、電郵、官網直連)
```

---

## 2. 獨立審計人審查 (Independent Auditor Challenge)

### Summary of Friction
審計人指出兩大關鍵風險：
1. **單屏高度溢出與響應式挑戰**：報價單包含大量精準之系統模組與硬體規格（如 Xeon 伺服器、RFID 標籤尺寸等）。若在單一螢幕強行壓縮所有文字，可能導致在筆電或平板上版面過擠，或排版損毀。
2. **舊組件與殘留依賴清理**：重構時若直接刪除舊檔案，可能遺漏其他參照；若不刪除，則容易殘留未引用的冗餘代碼。

### Agent Proposal
建立 `SingleScreenProfile.jsx`，將頂部資訊、3 大卡片與底部聯絡方式以 CSS Grid 及 Flexbox 組織，並設置自適應高度（`min-height: 100vh`），在寬螢幕實現優雅的單屏名片感，在小螢幕自然流式換行。`App.jsx` 只引入 `SingleScreenProfile`，依指示移除主題切換按鈕。

### Auditor's Challenge
1. **資訊密度與視覺層次**：3 大卡片如果塞入大量項目清單，文字易顯雜亂。必須採用清爽的 Badge / Tag 與條列設計，突出重點（如：6大 ERP 模組、金會/客製單、120°C 耐高溫標籤）。
2. **操作直覺性**：移除 `DemoModal` 後，使用者點擊電話或電郵時，必須原生調用系統預設軟體（`tel:+85227224360`、`mailto:chris.lam@alphaone.technology`），並於官網連結加上 `target="_blank" rel="noopener noreferrer"`。
3. **可維護性與可測試性**：所有卡片與區塊需具備語意化 `data-testid` 或明確 `id`，便於後續自動化或端對端校驗。

### Reconciled Plan
- 採納審計人建議：在 `SingleScreenProfile.jsx` 中，採用現代精緻的珠寶 SaaS 排版，三大產品卡片以精緻的視覺徽章、圖標（`lucide-react`）與結構化清單呈現，兼顧「完全真實」與「極致精美」。
- 聯絡方式提供點擊直撥、複製或電郵開啟，並於按鈕加入 hover 微互動。
- 舊組件（`HeroSection.jsx`, `DualColumnToggle.jsx` 等）保留在檔案庫中不破壞 Git 歷史，或以乾淨註解隔離，`App.jsx` 僅掛載新架構。

---

## 3. 可測試性優先分析 (Testability-First Analysis)

依據 `speckit.fabric` 與 `ensure_testability` 規範：
1. **DOM 契約與可識別標識**：
   - 頂部品牌區：`data-testid="profile-brand-header"`
   - 產品卡片區：`data-testid="products-grid"`
     - ERP 卡片：`data-testid="card-jes-erp"`
     - POS 卡片：`data-testid="card-pos-cloud"`
     - RFID 卡片：`data-testid="card-tiaranxt-rfid"`
   - 伺服器規格區：`data-testid="infrastructure-spec"`
   - 聯絡資訊區：`data-testid="contact-footer"`
2. **純粹無副作用**：
   - `SingleScreenProfile` 為純呈現組件，不依賴遠端未確認之 API，零網路副作用。
   - 所有外部連結使用正確協議（`tel:`, `mailto:`, `https:`）。
3. **驗證方式**：
   - 本地執行 `npm run build` 確認打包零報錯。
   - 啟動開發伺服器進行瀏覽器端視覺檢查，確認 Style 3 珍珠灰與經典黑金切換均正常運作。

---

## 4. 實施任務步驟 (Implementation Steps)

1. **Task 1**：編寫 `src/components/SingleScreenProfile.jsx`，以 Style 3 珍珠灰極簡高雅卡片實裝思琳科技公司資訊、三大真實產品模組、伺服器設施與真實通訊方式。
2. **Task 2**：更新 `src/App.jsx`，將原本舊有長版區塊切換為 `SingleScreenProfile` 與 `ThemeChooser`。
3. **Task 3**：驗證 `npm run build` 與外觀樣式，確保零虛構、零排版破綻。
