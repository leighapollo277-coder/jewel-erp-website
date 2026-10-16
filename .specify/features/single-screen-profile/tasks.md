# 珠寶源 JES & 思琳科技 單屏極簡卡片簡介 — 任務清單 (Tasks)

## 任務清單 (Task Breakdown)

- [x] **T-01: 建立單屏名片組件 (`src/components/SingleScreenProfile.jsx`)**
  - 實作 FR-01：頂部公司與負責人資訊（思琳科技有限公司 AlphaOne Technology、珠寶源 JES、tiaranxt、Mr. Chris Lam）
  - 實作 FR-02：三大核心產品卡片（JES ERP 模組、POS 零售/金會/客製、tiaranxt RFID 便攜系統/中間件/耐溫標籤）
  - 實作 FR-03：官方伺服器架構規格與雙城聯絡資訊（香港紅磡總部、深圳中心、電話、傳真、電郵、官網）
  - 遵從 Style 3 Pearl Light Minimalist 設計代幣，卡片具備 `.glass-card` 高雅懸浮效果與自適應排版。

- [x] **T-02: 更新 `src/App.jsx` 入口**
  - 引入並掛載 `SingleScreenProfile` 組件
  - 依指示移除 `ThemeChooser` 主題切換器，純淨鎖定 Style 3 明亮極簡珍珠灰風格
  - 移除舊版包含虛構行銷詞之區塊與 `DemoModal`

- [x] **T-03: 靜態建置驗證與前端校驗**
  - 執行 `npm run build` 確認 Vite 編譯零錯誤、零警告
  - 驗證各點擊連結（`tel:`, `mailto:`, 外部官網連結）合規性
  - 啟動預覽確認珍珠灰預設風格顯示正常，無浮動切換鈕
