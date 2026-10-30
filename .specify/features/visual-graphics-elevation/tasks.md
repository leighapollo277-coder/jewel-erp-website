# 珠寶源 JES — 視覺圖象與軟硬體生態升級任務清單 (Tasks)

- [x] **Task 1: 擴充雙語字典 (`src/i18n/translations.js`)**
  - 新增 `hero.ecosystem` 與 `process` 雙語鍵值（包含 `networkStatus`, `hubTitle`, `hubDesc`, `rwlinkBridge`, `workshopTitle`, `workshopDesc`, `posTitle`, `posDesc`, `rfidTitle`, `rfidDesc`, `manufacturingTag`, `manufacturingCaption`, `retailTag`, `retailCaption`, `rfidSpeedBadge`）。
  - 確保在 `zh` 與 `en` 兩側 100% 對稱。

- [x] **Task 2: 新增純 CSS 動態樣式 (`src/index.css`)**
  - 新增輕量純 CSS 拓撲光點脈衝 `@keyframes node-pulse` 與數據流線條動畫 `@keyframes data-stream`。
  - 確保完全遵循 GT-002 純 Vanilla CSS 規範。

- [x] **Task 3: 重構首屏右側軟硬體生態拓撲圖 (`src/components/landing/LandingHero.jsx`)**
  - 實作「JES 生態動態聯網中樞 (`data-testid="ecosystem-map"`)」。
  - 頂部：終端運行狀態列與在線心跳指示。
  - 中央中樞：JES ERP 雲端中樞 (`data-testid="node-hub"`)。
  - 中間連線：RWLINK 雙向通訊指示條（含數據流動微動態）。
  - 3 大分佈終端卡片：
    - 車間生產流轉 (`data-testid="node-workshop"`)
    - 門市 POS 終端 (`data-testid="node-pos"`)
    - TiaraNxt RFID 手持盤點機 (`data-testid="node-rfid"`)
  - 響應式佈局：在 `@media (max-width: 960px)` 與 `640px` 下平滑重排為縱向自適應數據鏈流。

- [x] **Task 4: 整合實物攝影與升級 Bento Grid (`src/components/landing/ProcessBentoGrid.jsx`)**
  - 左側工藝主卡：透過 `../../assets/manufacturing.png` 引入真實熔金澆鑄樹照片（16:9，rounded-12px，浮層標籤），下方串接 6 步珠寶製造工藝流程。
  - 右側雙層結構：
    - 上卡：保留 7 大核心 ERP 功能模組矩陣及導航錨點 `id="modules"`。
    - 下卡：透過 `../../assets/retail.png` 引入真實專櫃 RFID 盤點實景，保留 IRYS WARD 超高頻規格與 `id="rfid"` 導航錨點。
  - 設定圖片 `loading="lazy"` 與 `object-fit: cover`，確保自適應不變形。

- [x] **Task 5: 專案建置與全功能驗證**
  - 執行 `npm run build` 驗證 Vite 打包是否 100% 成功。
  - 驗證 `data-testid` 標記、雙語切換無破綻、響應式佈局無水平溢出破版。
