# Coding Interview / 编程面试项目

本项目包含编程面试的多个题目解答及一个前端商品详情页应用。

## 📁 项目结构 / Project Structure

```
coding_interview/
├── A/                          # 题目 A 解答 (Python)
│   └── solution.py
├── B/                          # 题目 B 解答 (Python)
│   └── solution.py
├── C/                          # 题目 C 解答 (API 相关问答题)
│   └── answers.md
├── frontend/                   # 前端商品详情页应用
│   └── frontend/
│       ├── src/
│       │   ├── api/            # API 服务层 (Mock 数据)
│       │   ├── components/     # React 组件
│       │   ├── images/         # 静态图片资源
│       │   ├── types/          # TypeScript 类型定义
│       │   ├── App.css         # 淘宝风格样式
│       │   ├── App.tsx         # 根组件
│       │   ├── index.css       # 全局样式
│       │   └── main.tsx        # 入口文件
│       ├── package.json
│       └── vite.config.ts
└── README.md
```

---

## 🅰️ 题目 A / Problem A

**语言 / Language:** Python

**运行方式 / How to run:**

```bash
cd A
python solution.py
```

输入格式：第一行测试用例数 t，之后每行两个整数 x 和 n。若 n 为偶数输出 0，否则输出 x。

---

## 🅱️ 题目 B / Problem B

**语言 / Language:** Python

**运行方式 / How to run:**

```bash
cd B
python solution.py
```

输入格式：第一行测试用例数 t，之后每行一个整数 n。计算飞船数量最小值和最大值，无法满足时输出 -1。

---

## 🅲 题目 C / Problem C

**类型 / Type:** API 相关问答题 (Xero API)

**内容 / Content:** 参见 [C/answers.md](C/answers.md)，包含 OAuth2 认证、API 调用、错误处理等问题的解答。

---

## 🖥️ 前端商品详情页 / Frontend Product Detail Page

一个仿淘宝风格的前端商品详情页应用，支持 SKU 选择、库存检查、加入购物车等功能。页面文字采用中英双语展示。

### 技术栈 / Tech Stack

| 技术 | 版本 | 说明 |
|------|------|------|
| React | ^19.2.6 | UI 框架 |
| TypeScript | ~6.0.2 | 类型安全 |
| Vite | ^8.0.12 | 构建工具 |
| Babel + React Compiler | ^1.0.0 | 编译优化 |

### 功能特性 / Features

- 🛍️ 商品详情展示（图片、名称、描述、价格）
- 🎨 多规格 SKU 选择（颜色、规格）
- 📦 实时库存检查与缺货提示
- 🔢 数量选择器（带库存上限限制）
- 🛒 加入购物车 / 立即购买按钮
- 🌐 中英双语界面 (Bilingual UI)
- 📱 响应式布局适配
- ⏳ Loading 加载动画
- 🎯 淘宝风格 UI（橙红价格区、SKU 角标选中、圆角渐变按钮）

### 快速启动 / Quick Start

#### 1. 安装依赖 / Install Dependencies

```bash
cd frontend/frontend
npm install
```

#### 2. 启动开发服务器 / Start Dev Server

```bash
npm run dev
```

启动后访问终端中显示的本地地址（默认 http://localhost:5173）。

#### 3. 构建生产版本 / Build for Production

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

#### 4. 预览生产构建 / Preview Production Build

```bash
npm run preview
```

#### 5. 代码检查 / Lint

```bash
npm run lint
```

### 项目架构 / Architecture

```
src/
├── api/
│   ├── mock.ts              # Mock 数据 & API 模拟
│   └── productService.ts    # API 服务封装
├── components/
│   ├── ProductDetail.tsx    # 商品详情主组件
│   └── VariantSelector.tsx  # SKU 选择器组件
├── types/
│   └── product.ts           # TypeScript 类型定义
├── images/
│   └── ppmt.jpg             # 商品占位图
├── App.tsx                  # 根组件
├── App.css                  # 淘宝风格样式
├── index.css                # 全局基础样式
├── main.tsx                 # 应用入口
└── vite-env.d.ts            # Vite 类型声明
```

### 数据模型 / Data Model

```typescript
interface Product {
  productId: string;
  name: string;
  description: string;
  images: string[];
  variants: Variant[];
}

interface Variant {
  skuId: string;
  color: string;
  size: string;
  price: number;
  stock: number;
}

interface CartPayload {
  productId: string;
  skuId: string;
  quantity: number;
}

interface CartResponse {
  success: boolean;
  cartCount?: number;
  message?: string;
}
```

### API 接口 / API Endpoints

当前使用 Mock 数据模拟，接口定义如下：

| 接口 | 方法 | 说明 |
|------|------|------|
| `getProductDetail()` | GET | 获取商品详情 |
| `postAddToCart(payload)` | POST | 加入购物车 |

> 💡 如需对接真实后端 API，修改 `src/api/productService.ts` 中的导入即可，无需改动组件代码。

---

## 📋 环境要求 / Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Python** >= 3.8 (用于题目 A/B)

---

## 📄 License

MIT

