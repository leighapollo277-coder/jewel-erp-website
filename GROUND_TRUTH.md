# Project Ground Truth

> **SSOT Policy**: This document contains verified project facts and non-negotiables. No ungrounded AI assumptions allowed.
> All modifications MUST be audited with `ground-truth-auditor`.

- **Project Name**: 珠寶源 JES (Jewel ERP System)
- **Last Audited**: 2026-10-16 21:42:22
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
| `GT-005` | Conversion Focus | 網站唯一核心商業目標為獲取預約展示 (Demo Booking) 銷售線索，全站各區塊必須提供通往 `DemoModal` 之路徑且主行動按鈕使用 `.btn-primary` | `[SRC-001]` | `CONFIRMED` | 2026-10-16 |
| `GT-006` | Dependencies | 專案依賴嚴格白名單為 `react`, `react-dom` (v18), `lucide-react` (圖標)，未經用戶明確批准嚴禁新增任何 npm 依賴套件 | `[SRC-001]`, `[SRC-002]` | `CONFIRMED` | 2026-10-16 |
| `GT-007` | Business Logic | `DemoModal` 目前採取前端表單防禦性校驗與模擬提交流程，待後端 API 或 Webhook 接收端點正式核定後再行對接 | `[SRC-003]` | `CONFIRMED` | 2026-10-16 |
| `GT-008` | Build & Deploy | 靜態建置產出物目錄契約為 `./dist`，部署配置依循 `wrangler.json` 交付 Cloudflare Pages | `[SRC-002]`, `[SRC-003]` | `CONFIRMED` | 2026-10-16 |

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

---

## 3. Audit & Change Log
- **2026-10-16 19:40:00**: Initialized Project Ground Truth SSOT with GT-001 ~ GT-008, fully attributed to verified project constitution, agent constraints, and user confirmation. [Audit: PASS]
- **2026-10-16 21:40:00**: Revised GT-003 in-place to ratify Style 3 Pearl Light Minimalist as confirmed visual invariant, aligned with constitution v1.1.0 and user confirmation [SRC-004]. [Audit: PASS]
