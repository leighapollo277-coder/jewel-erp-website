# EGM Consolidated Review Report: Visual Graphics Elevation

**Document Audited**: `.specify/features/visual-graphics-elevation/plan.md` & `tasks.md`  
**Review Standard**: Elephant-Goldfish Model (EGM) Multi-Persona Swarm  
**Reviewers**:
- `egm-zoom-out` (Skeptical Architect: Simplicity, Minimalism, YAGNI)
- `egm-comprehension` (Naive Reader: Acronyms, Jargon, Clarity)
- `egm-codebase-details` (Pedantic Technical Quality Auditor: Codebase Parity & Module Resolution)
- `egm-implementation-readiness` (Pragmatic Tech Lead: Actionable Implementation Readiness)

---

## 1. 總體裁決 (Executive Verdict)
- **總體狀態**：**CONDITIONALLY APPROVED WITH MANDATORY RECONCILIATIONS** (經微調後即可執行)
- **核心結論**：引入實景攝影與軟硬體生態拓撲圖方向完全契合用戶痛點，但原初計劃存在 4 項阻斷性問題（DOM 結構定義模糊、Bento Grid 右欄可能衝撞 Appendix 1 模組與導航錨點、圖片二級目錄引用路徑問題、以及字典結構未規格化）。採納審查員意見調整後即可立即執行。

---

## 2. 審查問題綜合與調和矩陣 (Traceability & Reconciliation Matrix)

| 編號 | 優先級 | 發現問題 (Finding) | 來源審查員 | 處置方案 (Reconciliation Plan) |
| :--- | :--- | :--- | :--- | :--- |
| `F-01` | 🔴 Blocker | `ProcessBentoGrid.jsx` 右欄若被照片粗暴替換，將衝撞 7 大 Appendix 1 模組及 `#modules`、`#rfid` 錨點 | `codebase-details`, `implementation-readiness` | **結構重定**：右欄明確分為上下兩層 Card：上層完整保留 7 大核心模組 (`id="modules"`)；下層設置 TiaraNxt RFID 展台並嵌入 `retail.png` (`id="rfid"`)，確保所有事實資產與錨點 100% 留存。 |
| `F-02` | 🔴 Blocker | Hero 生態拓撲圖 DOM 與連線幾何未明確定義，留給實作者過多揣摩空間 | `implementation-readiness`, `zoom-out` | **DOM 規範化**：明確規範拓撲架構為「頂部終端狀態列 → 中樞 JES ERP 卡片 (`node-hub`) → RWLINK 雙向通訊指示條 → 底部 3 終端卡片網格 (`node-workshop`, `node-pos`, `node-rfid`)」，採用標準 Flex/Grid + 純 CSS 脈衝。 |
| `F-03` | 🔴 Blocker | 圖片引用路徑層級錯誤（`ProcessBentoGrid` 位於二級目錄 `landing/`） | `codebase-details` | **路徑修正**：強制使用二級相對路徑 `import mfgImg from '../../assets/manufacturing.png';` 與 `import retailImg from '../../assets/retail.png';`。 |
| `F-04` | 🔴 Blocker | `translations.js` 未提供明確 Schema，可能導致屬性命名分歧 | `comprehension`, `implementation-readiness` | **Schema 鎖定**：明訂 `hero.ecosystem` 與 `process` 字典鍵值結構。 |
| `F-05` | 🟡 Major | `FeaturePillars.jsx` 改動屬於不必要的範圍蔓延（Scope Creep） | `zoom-out`, `implementation-readiness` | **手術式收斂**：`FeaturePillars` 已有完整的標籤、圖標、清單與規格徽章，自本次任務中剔除，不修改該檔案。 |
| `F-06` | 🟡 Major | CSS Keyframe 名稱前後矛盾 (`ping-glow` vs `node-pulse` vs `data-stream`) | `comprehension`, `codebase-details` | **名稱統整**：統一使用 `@keyframes node-pulse`（光點脈衝）與 `@keyframes data-stream`（流動線條）。 |
| `F-07` | 🟡 Major | 斷點碎片化（使用非標準 768px） | `codebase-details` | **斷點對齊**：統一使用專案既有之 `@media (max-width: 960px)` 與 `@media (max-width: 640px)`。 |
| `F-08` | 🟡 Major | 缺少 `data-testid` 標識要求 | `implementation-readiness` | **測試補齊**：在 `tasks.md` 中明確加入 `data-testid="ecosystem-map"`, `data-testid="node-hub"`, `data-testid="node-workshop"`, `data-testid="node-pos"`, `data-testid="node-rfid"`。 |
| `F-09` | 🟢 Nit | 圖片大小事實更正（約 710KB-722KB，非 2.8MB）及語系代碼對齊 (`zh` / `en`) | `codebase-details`, `comprehension` | **文字修正**：更正計劃書數值，確認狀態為 `'zh'` 與 `'en'`。 |

---

## 3. 調和後之具體字典規範 (Reconciled Schema Specification)

```javascript
// src/i18n/translations.js
hero: {
  // ... existing keys
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
  // ... existing keys
  manufacturingTag: '車間倒模實景',
  manufacturingCaption: '大師傅高溫熔金澆鑄樹現場',
  retailTag: '專櫃盤點實景',
  retailCaption: '精品專櫃高級陳列盤手持掃描',
  rfidSpeedBadge: '1 秒 50+ 件超高頻盤點',
}
```

---

## 4. 調和後之 Bento Grid 幾何佈局 (Reconciled Bento Grid Layout)

```
+------------------------------------------+------------------------------------------+
| LEFT BENTO (1.25fr): 工藝流程大卡         | RIGHT BENTO (1fr): 雙層堆疊結構           |
|                                          |                                          |
| [1. manufacturing.png 熔金工藝實景]        | [CARD 1: id="modules"]                   |
| (16:9, rounded-12px, 倒模工藝浮層標籤)     | 7 大核心 ERP 功能模組矩陣                  |
|                                          | (完整保留官方報價單 Appendix 1 事實)      |
| [2. 6 步珠寶製造工藝閉環流轉]              +------------------------------------------+
| (起版 -> 倒模 -> 執模 -> 鑲石 -> 打磨 -> 盤點)| [CARD 2: id="rfid"]                      |
|                                          | [3. retail.png 專櫃盤點實景]             |
|                                          | (精品專櫃手持掃描槍 + 1秒50+件盤點指標)   |
|                                          | (保留 IRYS WARD UHF 及耐高溫標籤規格)    |
+------------------------------------------+------------------------------------------+
```
