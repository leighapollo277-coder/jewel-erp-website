# 珠寶源 JES — 視覺圖象與軟硬體生態升級規格書 (Visual Graphics Elevation Spec)

## 1. 概述與背景 (Overview & Background)

用戶指出目前首頁雖然結構完整，但視覺呈現過於依賴文字與純框線（"not attractive enough, maybe too few graphic"），缺乏實體硬體與珠寶工藝的視覺衝擊力。

依據用戶於 Clarification Check 的明確指示：
1. **複合呈現方式 (DEC-018: Option A)**：結合真實珠寶工藝攝影（`src/assets/manufacturing.png` 倒模澆鑄實景與 `src/assets/retail.png` 門市 RFID 盤點實景）與科技向量硬體圖解（TiaraNxt IRYS WARD 超高頻掃描槍與耐高溫標籤向量）。
2. **Hero 首屏右側視覺 (DEC-019: Option 3)**：實裝**珠寶源軟硬一體生態拓撲圖 (Ecosystem Topology Map)**，動態展示「JES ERP 雲端中樞 ⟷ RWLINK 中間件 ⟷ 製造車間 / 門市 POS / TiaraNxt RFID 盤點」即時數據閉環。
3. **色彩氛圍 (DEC-020)**：維持沉穩冷鋼灰底色 (`#E8EBF0` ~ `#ECEEF2`) 與純白卡片 (`#FFFFFF`)，搭配活力純色亮橙 (`#FF6B22`) highlight；堅拒灰暗陰沉色調，嚴禁深橙色漸變。

---

## 2. 核心規範與不變原則 (Invariants & Ground Truth)

- **GT-001 / GT-002**: 前端技術棧為 React 18 + Vite 5 + Cloudflare Pages SPA；嚴格使用 Vanilla CSS 及 `src/index.css` 設計變數，禁止引入外部 CSS 庫。
- **GT-003**: 現代科技便當格 (Modern Bento Grid Pro)，明亮冷灰底色，純白方形卡片，純色科技橙標記。
- **GT-004**: 100% 雙語（繁體中文 zh-TW 與英文 en）即時切換。
- **GT-006**: 依賴白名單僅限 `react`, `react-dom`, `lucide-react`。
- **GT-012**: 零虛構原則（Zero Fabrication），所有模組名稱、硬體規格與通訊資訊必須 100% 忠實對齊官方報價單真實資料。

---

## 3. 功能需求清單 (Functional Requirements)

### FR-01: Hero 首屏動態生態拓撲圖 (Hero Interactive Ecosystem Map)
- **位置**：`LandingHero.jsx` 右側展示面板。
- **組件構成**：
  1. **頂部狀態欄**：模擬系統終端控制列，顯示即時在線狀態與 RWLINK 數據流同步心跳（「JES Ecosystem Live Network」）。
  2. **核心拓撲中樞 (Central Hub)**：
     - 「JES 雲端大腦 / ERP Backoffice」中樞節點（款式庫、批發訂單、金料核算）。
  3. **三大分佈節點 (Connected Distributed Nodes)**：
     - **節點 1：珠寶智能製造車間 (Workshop & Factory)**：標註工藝流轉（起版、倒模、鑲石、耗損精算）。
     - **節點 2：連鎖門市 POS 網絡 (Retail Stores & Boutiques)**：標註銷售收銀、金會供款追蹤、客製訂單 CMO。
     - **節點 3：TiaraNxt RFID 移動盤點 (Field UHF Auditing)**：標註手持掃描器、表面盤點、毫秒級萬件資產校驗。
  4. **動態數據同步流向**：雙向流動的微動畫脈衝與 RWLINK 中間件雙向傳輸指示，呈現零延遲實體感。

### FR-02: Bento Grid 視覺真實攝影與工藝流程整合 (Bento Grid Visual & Photography Integration)
- **位置**：`ProcessBentoGrid.jsx`。
- **組件構成**：
  1. **製造工藝主卡 (Manufacturing Workshop Card)**：
     - 嵌入真實照片 `src/assets/manufacturing.png`（大師傅高溫熔金倒模澆鑄樹實景），附帶精緻工藝標籤與 1px 細灰邊框。
     - 下方連動 7 大珠寶製造工藝流程節點（起版 → 倒模 → 執模 → 鑲石 → 打磨 → 質檢 → 總裝出庫），支援點擊或高亮互動。
  2. **TiaraNxt RFID 實境卡 (RFID Hardware & Boutique Card)**：
     - 嵌入真實照片 `src/assets/retail.png`（珠寶精品專櫃高級陳列盤手持 RFID 盤點實景）。
     - 浮層數據卡標註：IRYS WARD 超高頻便攜機、耐高溫 120°C PVC 標籤規格、毫秒級盤點速度。
  3. **POS 雲端門市特色卡**：
     - 配合金會供款條狀動態進度與珠石日結毛利卡片，強化零售業務視覺。

### FR-03: Feature Pillars 三大業務柱視覺精緻化 (Feature Pillars Visual Polish)
- **位置**：`FeaturePillars.jsx`。
- 為三大卡片增設微型視覺徽章與硬體/功能向量簡圖，去除單純文字條列的乾癟感。

### FR-04: 雙語字典擴充 (I18n Localization)
- **位置**：`src/i18n/translations.js`。
- 為生態拓撲圖所有節點、製造車間工藝標籤、照片圖說及硬體參數補齊正體中文與英文雙語對應鍵值。

---

## 4. 驗收與成功指標 (Success Criteria)

1. **視覺吸引力 (Aesthetic Appeal)**：首屏與 Bento Grid 具備豐富的真實攝影與動態拓撲圖，文字與圖象比例均衡，徹底告別純文字線框感。
2. **零虛構合規 (Zero Fabrication)**：所有數據與規格均出自官方報價單（Proposal 1-3），無虛擬虛構統計數據。
3. **無損性能與相容性 (Performance & Responsive)**：在桌機 (1440px/1280px)、平板 (768px) 及手機 (375px+) 均維持流暢排版與圖片自適應縮放，無水平滾動破版。
4. **100% 雙語無破綻**：中英切換時，所有新增拓撲圖與圖片註釋同步流暢變更。
