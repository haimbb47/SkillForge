# SkillForge - 技能锻造平台 ⚡

基于FHEVM的去中心化技能培养与成就认证平台，支持本地Mock模式和Sepolia测试网的Relayer SDK模式。

## 🔥 项目特色

- ✅ **FHEVM加密存储**: 使用全同态加密存储技能数据
- ✅ **深色工业风格UI**: 金属质感的现代化界面设计
- ✅ **双模式支持**: 本地Mock模式 + Sepolia测试网Relayer SDK模式
- ✅ **完整工作流**: 锻造课程 → 提交证明 → 验证 → 领取徽章

## 📁 项目结构

```
action/
├── contracts/          # 智能合约
│   ├── contracts/
│   │   └── SkillForge.sol
│   ├── deploy/
│   │   └── deploy.ts
│   └── hardhat.config.ts
└── frontend/          # 前端应用
    ├── app/           # Next.js 页面
    ├── components/    # UI组件
    ├── fhevm/         # FHEVM集成
    ├── hooks/         # React Hooks
    └── package.json
```

## 🎯 核心功能

### 1. 锻造课程 (Forge Course)
- 输入课程CID（IPFS）
- 输入挑战总数（使用FHE加密存储）
- 调用合约锻造课程

### 2. 提交证明 (Submit Proof)
- 选择课程ID和挑战ID
- 输入证明CID（IPFS）
- 输入分数（使用FHE加密存储）
- 提交到链上

### 3. 验证证明 (Validate Proof)
- 选择证明ID
- 输入新分数（使用FHE加密存储）
- 在加密状态下更新分数

### 4. 领取徽章 (Claim Badge)
- 输入课程ID
- 输入徽章CID（IPFS）
- 输入总分数（使用FHE加密存储）
- 铸造成就徽章

### 5. 解密数据
- 输入加密句柄（Handle）
- 使用EIP-712签名授权
- 解密并显示明文值

## 🚀 快速开始

### 前置要求

- Node.js >= 20
- npm >= 7.0.0
- MetaMask浏览器扩展

### 1. 安装依赖

#### 合约部分
```bash
cd contracts
npm install
```

#### 前端部分
```bash
cd frontend
npm install
```

### 2. 本地开发（Mock模式）

#### 启动Hardhat节点（需要FHEVM插件）
```bash
cd contracts
npx hardhat node
```

> 注意：终端保持运行状态

#### 部署合约（新终端）
```bash
cd contracts
npx hardhat deploy --network localhost
```

#### 授权验证者（可选）
```bash
npx hardhat run scripts/grantValidator.ts --network localhost
```

#### 启动前端
```bash
cd frontend
npm run dev:mock
```

前端会自动检测到本地Hardhat节点（chainId: 31337），使用Mock模式与FHEVM合约交互。

访问：http://localhost:3000

### 3. Sepolia测试网（Relayer SDK模式）

#### 配置环境变量
在`contracts`目录创建`.env`文件：
```env
MNEMONIC=your_mnemonic_here
INFURA_API_KEY=your_infura_key
ETHERSCAN_API_KEY=your_etherscan_key
```

#### 部署到Sepolia
```bash
cd contracts
npx hardhat deploy --network sepolia
```

#### 配置前端合约地址
在`frontend`目录创建`.env.local`文件：
```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
```

#### 启动前端
```bash
cd frontend
npm run dev
```

前端会自动检测到Sepolia网络（chainId: 11155111），使用Relayer SDK模式与FHEVM合约交互。

## 🎨 UI设计特色

### 深色工业风格主题
- **背景色**: `#0A0E1A` (forge-bg)
- **面板色**: `#151B2D` (forge-panel)
- **卡片色**: `#1A2236` (forge-card)
- **边框色**: `#2A3547` (forge-border)
- **主色调**: `#FF6B35` (primary) 到 `#FFB800` (warning) 的渐变

### 字体
- **标题**: Orbitron - 科技感强的几何字体
- **正文**: Rajdhani - 清晰易读的工业风格字体
- **代码**: JetBrains Mono - 专业的等宽字体

### 特效
- 发光效果 (glow)
- 金属质感边框
- 渐变背景
- 悬停动画

## 🛠 技术栈

### 合约
- Solidity 0.8.27
- FHEVM Solidity Library
- Hardhat
- @fhevm/hardhat-plugin

### 前端
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS（深色工业风格配置）
- ethers.js v6
- @zama-fhe/relayer-sdk
- @fhevm/mock-utils

## 🔐 安全特性

1. **完全加密**: 所有敏感数据（分数、挑战数）使用FHEVM同态加密
2. **权限控制**: 只有授权的验证者才能审核证明
3. **链上存证**: 所有操作记录在区块链上，不可篡改
4. **隐私保护**: 数据在加密状态下计算，保护用户隐私

## 📝 合约方法映射

| 原方法 (LangJourney) | 新方法 (SkillForge) |
|---------------------|-------------------|
| createPath | forgeCourse |
| submitTask | submitProof |
| verifySubmission | validateProof |
| mintCertificate | claimBadge |
| setTeacherAuthorization | grantValidatorRole |
| LearningPath | Course |
| Submission | Proof |
| Certificate | Badge |

## 🐛 故障排除

### 1. FHEVM初始化失败
```
确保Hardhat节点已安装 @fhevm/hardhat-plugin 插件
检查 fhevmTemp 目录是否存在配置文件
```

### 2. 合约调用失败
```
检查MetaMask是否连接到正确的网络
确保账户有足够的ETH支付gas
检查是否已授权验证者角色
```

### 3. 前端无法连接
```
确认合约地址配置正确
检查chainId是否匹配
清除浏览器缓存重新加载
```

## 📄 许可证

MIT

## 🙏 致谢

基于 ZAMA FHEVM 技术构建

---

**⚡ 开始锻造您的技能之路！**


