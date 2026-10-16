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

- [x] **T-04: 用戶反饋調整與現代 Landing Page 質感精化 ([SRC-009])**
  - 依 Photo 1 移除專用伺服器與機房規格橫條 (`infrastructure-spec`)
  - 依 Photo 2 移除頂部品牌欄之 `tiaranxt` 膠囊標籤
  - 全站品牌大小寫標準化為 `TiaraNxt`
  - 官方聯絡電郵全面改為 `info@alphaone.technology`
  - 標頭文案徹底移除「負責人：Mr. Chris Lam (林少華)」公開個人資訊
  - 依語音指令全面杜絕深橙色漸變圖標與按鈕，重塑曜石黑按鈕、高雅香檳金棕與高對比現代 Landing Page 視覺焦點質感

- [x] **T-05: 實裝 Modern Bento Grid Pro 架構與橙灰視覺體系 ([SRC-010])**
  - 建立非對稱方形科技便當格佈局 (`.bento-card`，圓角 18px，細膩 1px 鋼灰邊框與懸浮微陰影)
  - 全面側重 JES ERP 旗艦大主卡 (佔比 65%)，實裝 Native SVG 車間生產工藝流程節點圖
  - 完整展開 7 大真實核心 ERP 模組膠囊矩陣，真實呈現款式庫、批發訂單、損耗工單、庫存與會計核算
  - 實裝 POS 雲端門市零售便當卡，包含多元結算標章 (Alipay/卡/現金) 與金會/客製/日結管理
  - 實裝 TiaraNxt RFID 橫幅便當卡，繪製 Native SVG IRYS WARD 手持便攜掃描槍與耐高溫標籤插圖
  - 套用紮實沉穩冷鋼灰底色 (`#E4E7EE`) 與鮮明活力科技亮橙 (`#FF5500`) highlight，徹底告別慘白感與虛構 Dashboard


