# Project Ground Truth

> **SSOT Policy**: This document contains verified project facts and non-negotiables. No ungrounded AI assumptions allowed.
> All modifications MUST be audited with `ground-truth-auditor`.

- **Project Name**: 珠寶源 JES (Jewel ERP System)
- **Last Audited**: 2026-10-16 22:10:47
- **Audit Status**: PASS
- **Auditor Version**: 1.0.0

---

## 1. Ground Truth Registry

| ID | Category | Claim (事實描述) | Source Ref | Status | Updated At |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GT-001` | Architecture | 前端架構採用 React 18 + Vite 5 + Cloudflare Pages 單頁應用 (SPA)，嚴禁引入 Next.js 或 Create React App | `[SRC-001]`, `[SRC-002]` | `CONFIRMED` | 2026-10-16 |
| `GT-002` | Design System | 樣式系統必須使用純 Vanilla CSS 與 `src/index.css` 設計代幣變數，嚴禁使用 TailwindCSS、CSS Modules 或 styled-components | `[SRC-001]`, `[SRC-002]` | `CONFIRMED` | 2026-10-16 |
| `GT-003` | Visual Identity | 預設視覺風格採用 Style 3 明亮極簡珍珠灰 (Pearl Light Minimalist，底色 `#F0F2F6`、純白懸浮卡片 `#FFFFFF`、赤陶橙 `#EA580C`)，卡片容器使用 `.glass-card` 或 `.glass-panel` | `[SRC-001]`, `[SRC-004]` | `CONFIRMED` | 2026-10-16 |
| `GT-004` | Localization | 所有用戶可見之界面文案必須為正體中文 (zh-TW)；代碼、註解與變數名稱必須為英文 | `[SRC-001]`, `[SRC-002]` | `CONFIRMED` | 2026-10-16 |
| `GT-005` | Conversion Focus | 網站唯一核心商業目標為獲取預約展示 (Demo Booking) 銷售線索（原配置 DemoModal 彈窗已依用戶確認 [SRC-008] 由 GT-013 升級取代為直接官方聯繫管道） | `[SRC-001]`, `[SRC-008]` | `SUPERSEDED` | 2026-10-16 |
| `GT-006` | Dependencies | 專案依賴嚴格白名單為 `react`, `react-dom` (v18), `lucide-react` (圖標)，未經用戶明確批准嚴禁新增任何 npm 依賴套件 | `[SRC-001]`, `[SRC-002]` | `CONFIRMED` | 2026-10-16 |
| `GT-007` | Business Logic | 全站表單及聯絡操作以官方電話 `tel:`、電郵 `mailto:` 及官方網址直接對接，不依賴虛擬提交或未實裝 API | `[SRC-008]` | `CONFIRMED` | 2026-10-16 |
| `GT-008` | Build & Deploy | 靜態建置產出物目錄契約為 `./dist`，部署配置依循 `wrangler.json` 交付 Cloudflare Pages | `[SRC-002]`, `[SRC-003]` | `CONFIRMED` | 2026-10-16 |
| `GT-009` | Company Identity | 公司主體為「思琳科技有限公司」(AlphaOne Technology Limited / AO)，負責人 Mr. Chris Lam (林少華)；香港總部座落紅磡民樂街21號富高工業中心B座9樓19B室，深圳辦公室座落羅湖區文錦廣場文錦中心702；電話 +852 2722 4360 / (852) 9089 4833，深圳 (86) 0755-25503714，傳真 +852 2722 4363，電郵 chris.lam@alphaone.technology，官網 https://www.alphaone.technology | `[SRC-005]`, `[SRC-006]`, `[SRC-007]`, `[SRC-008]` | `CONFIRMED` | 2026-10-16 |
| `GT-010` | Product Line - JES ERP & POS | 核心產品包含「珠寶源® JES - Jewelry ERP System」（基礎資料、批發訂單、生產管理、原物料/成品庫存、物流管理、會計 AR/AP；提供雲端訂閱版與獨立伺服器版）與「POS 雲端零售系統」（門市銷售收銀、金會會員登記與供款、客製化訂購 CMO、增值維修服務 VAS、日結、毛利分析與金料珠石盤點清單） | `[SRC-005]`, `[SRC-006]`, `[SRC-008]` | `CONFIRMED` | 2026-10-16 |
| `GT-011` | Product Line - tiaranxt RFID | 核心產品包含「tiaranxt 珠寶專用可攜式 RFID 盤點系統」（IRYS WARD 超高頻 UHF 便攜掃描器、TIARA Nxt 跨平台平板 App、RWLINK 跨設備中間件支援 Excel/FTP/DB/Web-Services 雙向同步、耐高溫 120°C PVC 重複使用標籤 32x18x0.86mm 尾部無膠設計、標籤列印軟體，可選配 SURFACE 珠寶盤與 LED 尋物標籤） | `[SRC-005]`, `[SRC-007]`, `[SRC-008]` | `CONFIRMED` | 2026-10-16 |
| `GT-012` | Zero Fabrication Policy | 網站全數內容必須 100% 忠實對齊官方報價單真實資料，徹底移除任何捏造數據、未核實之認證或虛構客戶案例（如 River Mounts 等），確保零虛構、零吹噓 | `[SRC-008]` | `CONFIRMED` | 2026-10-16 |
| `GT-013` | Architecture - Single Screen Profile | 網站架構採 Option B 超極簡單屏簡介卡片 (Single-Screen Profile)，以 Style 3 明亮極簡珍珠灰高雅卡片風格，集中呈現思琳科技官方身分、三大真實產品核心規格、官方通訊管道與直接聯繫方式 | `[SRC-008]` | `CONFIRMED` | 2026-10-16 |

> **Status Options**:
> - `CONFIRMED`: Verified fact backed by an approved source.
> - `DISPUTED`: Questioned or contested fact awaiting re-verification.
> - `SUPERSEDED`: Obsolete fact superseded by a newer `GT-###`.
> - `UNSUPPORTED`: Missing source (will cause audit to FAIL).

---

## 2. Sources Registry

### [SRC-001]
- **Type**: `OFFICIAL_DOC`
- **Reference**: `.specify/memory/constitution.md#L1-L90`
- **Exact Quote / URL**: "珠寶源 JES — Project Constitution (v1.1.0, Principles 1-5)"
- **Verified By**: Kenneth (User ratified on 2026-07-24, amended 2026-10-16)
- **Timestamp**: 2026-10-16 21:40:00

### [SRC-002]
- **Type**: `OFFICIAL_DOC`
- **Reference**: `.agents/AGENTS.md#L1-L45`
- **Exact Quote / URL**: "Stack Constraints & Design System Non-Negotiables in AGENTS.md"
- **Verified By**: Kenneth (Project Agent Policy)
- **Timestamp**: 2026-10-16 18:00:00

### [SRC-003]
- **Type**: `USER_CONFIRMATION`
- **Reference**: Conversation Clarification Check DEC-001~DEC-004 on 2026-10-16
- **Exact Quote / URL**: "all ok" to jewel-erp-website target, GT-001~GT-008 invariants, and build integration
- **Verified By**: Kenneth (User)
- **Timestamp**: 2026-10-16 19:37:55

### [SRC-004]
- **Type**: `USER_CONFIRMATION`
- **Reference**: Conversation on 2026-10-16 confirming preference for Style 3 Mockup
- **Exact Quote / URL**: "i like this style actually" (alphaone.technology/mockups/mockup3_light_minimalist.jpg) & "yes" to default override
- **Verified By**: Kenneth (User)
- **Timestamp**: 2026-10-16 20:02:14

### [SRC-005]
- **Type**: `OFFICIAL_DOC`
- **Reference**: `source/company quotations/Proposal_1_JES_POS_Cloud_and_RFID.pdf` (Doc Number: SC261002-01)
- **Exact Quote / URL**: "AlphaOne Technology Limited / 思琳科技有限公司, JES Cloud - Jewelry ERP system, POS Cloud, Portable RFID - Inventory System for Jewelry"
- **Verified By**: Official Company Quotation issued Oct 13, 2026
- **Timestamp**: 2026-10-16 21:50:00

### [SRC-006]
- **Type**: `OFFICIAL_DOC`
- **Reference**: `source/company quotations/Proposal_2_JES_POS_License_Servers_and_RFID.pdf` (Doc Number: SC260930-03, 04, 05, 06)
- **Exact Quote / URL**: "AlphaOne Technology Limited / 思琳科技有限公司, JES - Jewelry ERP System backoffice license, POS - Point Of Sales for SHOP, Dedicated TERA Windows Server"
- **Verified By**: Official Company Quotation issued Oct 13, 2026
- **Timestamp**: 2026-10-16 21:50:00

### [SRC-007]
- **Type**: `OFFICIAL_DOC`
- **Reference**: `source/company quotations/Proposal_3_Standalone_RFID.pdf` (Doc Number: SC260930-02)
- **Exact Quote / URL**: "AlphaOne Technology Limited / 思琳科技有限公司, Portable RFID - Inventory System for Jewelry, IRYS WARD Portable UHF RFID Scanner, Tiara Nxt, RWLINK"
- **Verified By**: Official Company Quotation issued Oct 13, 2026
- **Timestamp**: 2026-10-16 21:50:00

### [SRC-008]
- **Type**: `USER_CONFIRMATION`
- **Reference**: Conversation on 2026-10-16 confirming 1. yes (facts verified & written to Ground Truth), 2. Option B (Single-screen profile), 3. no need (omit DemoModal)
- **Exact Quote / URL**: "1. yes\n2. Option B\n3. no need"
- **Verified By**: Kenneth (User)
- **Timestamp**: 2026-10-16 21:56:41

---

## 3. Audit & Change Log
- **2026-10-16 19:40:00**: Initialized Project Ground Truth SSOT with GT-001 ~ GT-008, fully attributed to verified project constitution, agent constraints, and user confirmation. [Audit: PASS]
- **2026-10-16 21:40:00**: Revised GT-003 in-place to ratify Style 3 Pearl Light Minimalist as confirmed visual invariant, aligned with constitution v1.1.0 and user confirmation [SRC-004]. [Audit: PASS]
- **2026-10-16 22:00:00**: Incorporated official facts from 3 PDF quotations [SRC-005 ~ SRC-007] and user ratification [SRC-008]. Registered GT-009 (AlphaOne/思琳科技公司資訊與香港/深圳通訊), GT-010 (JES ERP & POS 模組), GT-011 (tiaranxt RFID 規格), GT-012 (零虛構政策), GT-013 (Option B 超極簡單屏名片簡介架構，取代 GT-005 DemoModal)。[Audit: PASS]
