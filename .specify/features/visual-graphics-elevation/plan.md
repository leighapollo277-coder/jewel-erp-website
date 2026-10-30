# 珠寶源 JES — 視覺圖象與軟硬體生態升級技術實作計劃 (Implementation Plan)

## 1. 架構概述 (Architecture Overview)

本計劃實作用戶於 Clarification Check 中確認之視覺升級方向，並已全數吸納 EGM 審查群（`egm-zoom-out`, `egm-comprehension`, `egm-codebase-details`, `egm-implementation-readiness`）之調和決議：
1. **複合呈現方式 (DEC-018: Option A)**：整合實物攝影照片（`src/assets/manufacturing.png` 與 `src/assets/retail.png`）與精細科技向量插畫。
2. **Hero 首屏右側 (DEC-019: Option 3)**：打造**軟硬體一體即時生態拓撲圖 (Ecosystem Topology Map)**，直觀呈現「JES ERP 雲端中樞 ⟷ RWLINK 中間件 ⟷ 車間、門市、RFID 手持機」之雙向聯網閉環。
3. **色彩規範 (DEC-020)**：延續淺色冷鋼灰底色 (`#E8EBF0` ~ `#ECEEF2`) 與純白便當卡片 (`#FFFFFF`)，純色亮橙 (`#FF6B22`) 點綴，絕不使用深暗主題或漸變色。
4. **手術式編碼 (Surgical Scope)**：聚焦於 `LandingHero.jsx` 與 `ProcessBentoGrid.jsx`，將已成熟完整的 `FeaturePillars.jsx` 排除在修改範圍之外。

---

## 2. 獨立審查與調和方案 (Reconciled Independent Auditor Section)

### 2.1 審查員核心質疑與調和結論 (Summary of Reconciliations)
- **摩擦點 1 (Bento Grid 結構衝突與 GT-013 核心模組保全)**：
  - *質疑*：若右欄直接被 `retail.png` 替換，會摧毀 Appendix 1 核定的 7 大核心 ERP 模組矩陣及頂部導航 `#modules`、`#rfid` 錨點。
  - *調和*：右欄重構為垂直雙層卡片（上卡：7 大核心模組矩陣 `id="modules"`；下卡：TiaraNxt RFID 展台與 `retail.png` 實景 `id="rfid"`）。左卡為製造工藝主卡，上方嵌入 `manufacturing.png`，下方連動 6 步製造工藝閉環。
- **摩擦點 2 (Hero 生態拓撲圖 DOM 與連線未規格化)**：
  - *質疑*：若未定義 DOM 樹與排版方式，實作者容易產生歧異。
  - *調和*：確立清晰 DOM 樹：頂部終端在線狀態列 → 中樞 JES ERP 雲端中樞 (`node-hub`) → RWLINK 雙向通訊協議橋樑條 → 底部三終端橫向網格 (`node-workshop`, `node-pos`, `node-rfid`)，手機與平板寬度下平滑轉為縱向單欄排列。
- **摩擦點 3 (圖片二級路徑與檔案體積)**：
  - *質疑*：`ProcessBentoGrid.jsx` 位於 `src/components/landing/`，直接引用 `../assets` 會導致 Vite 打包失敗；圖片實際體積各約 710KB-722KB。
  - *調和*：強制使用正確相對路徑 `../../assets/manufacturing.png` 與 `../../assets/retail.png`，並搭配 `loading="lazy"` 與自適應容器。
- **摩擦點 4 (動畫與樣式統整)**：
  - *質疑*：文件內動畫名稱不一 (`ping-glow` vs `node-pulse` vs `data-stream`)。
  - *調和*：統一定名為 `@keyframes node-pulse` 與 `@keyframes data-stream`，並嚴格遵循既有斷點 `@media (max-width: 960px)` 與 `@media (max-width: 640px)`。

---

## 3. 可測試性分析 (Testability-First Analysis, Fabric `ensure_testability`)

### 3.1 輸入與輸出埠 (Input & Output Ports)
- **Input Ports**:
  - `LanguageContext`: 當前語系代碼 (`'zh'` 或 `'en'`) 及 `t` 字典物件。
  - 視窗寬度變化 (Window resize / Media queries: 960px, 640px)。
- **Output Ports**:
  - DOM 節點渲染：帶有 `data-testid` 之拓撲容器與節點。
  - 錨點導航跳轉：保留 `#process`, `#modules`, `#rfid`, `#contact`。

### 3.2 結構解耦設計與字典規範 (Modular Schema)
`src/i18n/translations.js` 規格化結構：
```javascript
hero: {
  ecosystem: {
    networkStatus: 'JES ECOSYSTEM LIVE NETWORK',
    hubTitle: 'JES ERP 雲端中樞',
    hubDesc: '款式庫 · 批發訂單 · 金料損耗精算',
    rwlinkBridge: 'RWLINK 雙向通訊協議 · 毫秒級心跳同步',
    workshopTitle: '智能製造車間',
    workshopDesc: '倒模 / 執模 / 鑲石工藝流轉',
    posTitle: '連鎖門市 POS',
    posDesc: '門市收銀 · 金會供款 · CMO 客製',
    rfidTitle: 'TiaraNxt RFID',
    rfidDesc: 'IRYS WARD 掃描槍 · 萬件秒級全盤',
  }
},
process: {
  manufacturingTag: '車間倒模實景',
  manufacturingCaption: '大師傅高溫熔金澆鑄樹現場',
  retailTag: '專櫃盤點實景',
  retailCaption: '精品專櫃高級陳列盤手持掃描',
  rfidSpeedBadge: '1 秒 50+ 件超高頻盤點',
}
```

### 3.3 測試場景清單 (Executable Test Plan)

| 測試編號 | 測試情境 (Test Scenario) | 輸入/條件 | 預期輸出 (Expected Output) | 驗證方式 |
| :--- | :--- | :--- | :--- | :--- |
| `TC-VIS-01` | 生態拓撲圖完整渲染 | 訪問首頁首屏 | 渲染 `data-testid="ecosystem-map"`, `data-testid="node-hub"`, `data-testid="node-workshop"`, `data-testid="node-pos"`, `data-testid="node-rfid"` | DOM 節點檢查 |
| `TC-VIS-02` | 車間倒模圖片正常載入 | 檢視 Bento Grid 製造卡 | `manufacturing.png` 存在且非 broken image，寬度自適應 100% | 資源加載與屬性檢查 |
| `TC-VIS-03` | 門市 RFID 圖片正常載入 | 檢視 Bento Grid 門市/RFID 卡 | `retail.png` 存在且非 broken image，具備圖說標註 | 資源加載與屬性檢查 |
| `TC-VIS-04` | 雙語即時切換同步 | 切換語言 zh ⟷ en | 拓撲圖標題、節點文字、圖片標註全部即時雙語更新，無缺失 key | 文本對比驗證 |
| `TC-VIS-05` | 行動端響應式無水平破版 | 視窗寬度調整為 375px/390px/960px | 拓撲圖與圖片均在螢幕寬度內垂直自適應排列，無 horizontal overflow | 視窗捲軸檢查 |
| `TC-VIS-06` | 建置與靜態資源輸出 | 執行 `npm run build` | Vite 建置成功，`./dist` 產出無報錯，圖片正確打包 | CLI Exit Code 0 |

---

## 4. 實作檔案與變更清單 (Files to Modify)

1. `src/i18n/translations.js`: 依據 Section 3.2 補齊 `hero.ecosystem` 與 `process` 雙語字串。
2. `src/index.css`: 新增輕量 `@keyframes node-pulse` 與 `@keyframes data-stream`。
3. `src/components/landing/LandingHero.jsx`: 將右欄重構為「JES 軟硬一體動態生態拓撲圖」。
4. `src/components/landing/ProcessBentoGrid.jsx`: 引入 `../../assets/manufacturing.png` 與 `../../assets/retail.png`，重構左側工藝卡與右側雙層卡片（保留 7 大核心模組及 `#modules`、`#rfid`）。
