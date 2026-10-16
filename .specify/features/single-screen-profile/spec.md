# 珠寶源 JES & 思琳科技 (AlphaOne Technology) 單屏極簡卡片簡介 — 規格說明 (Spec)

## 1. 概述 (Overview)

依據用戶明確指示及確認（`[SRC-008]`），本功能將原本包含未經證實行銷宣傳詞與捏造案例的長版行銷頁面，全面重構為**「超極簡單屏簡介卡片」（Option B: Single-Screen Profile）**。
全站所有文字、產品規格、模組清單、硬體型號與通訊地址，**100% 嚴格源自官方報價單（`[SRC-005]` ~ `[SRC-007]`）**，徹底貫徹「零虛構、零吹噓（冇一啲係你呃出嚟嘅）」之原則。

- **目標客群**：珠寶金飾製造商、批發商與連鎖零售品牌
- **設計風格**：Style 3 明亮極簡珍珠灰 (Pearl Light Minimalist，底色 `#F0F2F6`、純白高雅懸浮卡片 `#FFFFFF`、高雅香檳金棕與曜石深灰高對比 highlight，全面杜絕深橙色漸變)，呈現現代專業 Landing Page 質感
- **頁面佈局**：單屏高聚合自適應極簡版面，無多餘冗長捲動
- **核心行動 (CTA)**：官方電話直撥 (`tel:`)、官方電郵直接聯繫 (`mailto:info@alphaone.technology`)、官方網址跳轉

---

## 2. 規格與功能需求 (Functional Requirements)

### FR-01：企業身分與品牌識別標頭 (Header & Brand Identity)
- 呈現官方註冊公司全名：**思琳科技有限公司 (AlphaOne Technology Limited / AO)**
- 呈現官方產品系列商標與名稱：**珠寶源® JES (Jewelry ERP System)**
- 依用戶指令移除負責人個人名義（不公開提及 Mr. Chris Lam / 林少華），移除頂部 tiaranxt 膠囊標籤。

### FR-02：三大核心產品真實模組卡片 (Core Products Grid)
依據報價單真實項目，以簡潔、條理分明的純白懸浮卡片（`.glass-card`）呈現三大產品線：
1. **珠寶源® JES Jewelry ERP 系統**（支援 JES Cloud 雲端訂閱版 及 伺服器本地授權版）：
   - 基礎資料設定 (Master files setup)
   - 批發訂單管理系統 (Order management system)
   - 生產管制系統 (Production control system)
   - 原料 / 半成品 / 成品庫存管理系統 (Inventory control system)
   - 條碼物流管理系統 (Logistics management system)
   - 會計應收應付財務模組 (Accounting AR & AP module)
2. **POS 雲端零售收銀系統 (Point Of Sales)**：
   - 門市銷售與收銀模組 (支援 Alipay、現金、信用卡、禮券結算)
   - 金會會員登記與定期供款管理 (Gold Club Membership & Payment)
   - 客製化訂購單管理 (CMO - Custom Made Order)
   - 增值維修服務單管理 (VAS - Value Added Service)
   - 門市每日日結 (Day End) 與現金流報表 (Cash Flow Report)
   - 門市毛利分析報表 (Gross Profit) 與金料/珠石/黃金庫存盤點清單 (Stock Count)
3. **TiaraNxt 珠寶專用可攜式 RFID 盤點系統**（品牌標準大小寫為 TiaraNxt）：
   - **IRYS WARD 手持掃描器**：便攜式超高頻 UHF RFID 掃描設備，具備藍牙連線與獨立電池
   - **TiaraNxt 跨平台平板 App**：電子目錄 (E-Catalogue)、智能盤點 (Stock Audit)、快速物料搜尋 (Item Search)、智能視圖 (Smart View)、Trinity 數據分析
   - **RWLINK 跨設備中間件**：與 JES ERP 系統無縫介接，支援 Excel、遠端 FTP、資料庫或 Web Services 雙向資料同步
   - **RFID PVC 耐高溫標籤**：白底 PVC 塑膠（32×18×0.86mm，3mm 孔徑），耐溫達 120°C，尾部中段無膠設計避免飾品殘膠
   - **擴充選配**：SURFACE 珠寶盤、LED 尋物標籤、標籤編碼列印軟體（支援中文插件）

### FR-03：雙城聯絡資訊 (Dual-City Contacts)
- 依用戶指令移除伺服器硬體規格與機房設施展示橫條。
- **官方通訊與服務管道**：
  - **香港總部**：香港九龍紅磡民樂街21號富高工業中心B座9樓19B室
  - **深圳中心**：深圳市羅湖區文錦路文錦廣場文錦中心702
  - **電話**：香港 `+852 2722 4360` / `(852) 9089 4833`；深圳 `(86) 0755-25503714`
  - **傳真**：`+852 2722 4363`
  - **電郵**：`info@alphaone.technology`（統一為官方公開諮詢信箱）
  - **官方網址**：`https://www.alphaone.technology`
  - **服務時間**：週一至週五 9:00 a.m. ~ 6:00 p.m.（公眾假期除外）

### FR-04：零虛構合規與現代 Landing Page 風格 (Ground Truth & Style Compliance)
- 移除所有未經驗證的行銷吹噓文字（包括 River Mounts 案例、ISO 27001 標籤、15% 虛擬損耗數據、30天虛構藍圖）。
- 移除 DemoModal 彈窗（依用戶確認，改以真實直撥電話與直接電郵按鈕對接）。
- 嚴禁刺眼深橙色漸變圖標與按鈕，改以曜石深灰與高雅香檳金棕打造俐落現代 Landing Page 質感。
- 依用戶指示，不保留經典黑金主題切換按鈕，全站純淨鎖定 Style 3 明亮極簡珍珠灰高雅風格。

---

## 3. 非功能性需求 (Non-Functional Requirements)

- **簡潔極致**：所有核心資訊與產品卡片在一屏（或極短捲動）內完整呈現，清晰無干擾。
- **正體中文界面**：所有用戶可見之文字均使用正體中文 (zh-TW)，英文保留官方原廠型號與英文名稱。
- **響應式適配**：支援桌面寬屏、筆記型電腦與手機螢幕的彈性排版。
- **代幣與依賴規範**：遵守 `AGENTS.md`，使用純 Vanilla CSS 與 `src/index.css` 既有變數，不增加任何第三方套件。
