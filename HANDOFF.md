# 南洋本草 — 项目交接文档

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 14 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS (自定义设计系统) |
| 数据库 | SQLite (开发) / 可换 PostgreSQL (生产) |
| ORM | Prisma |
| 认证 | NextAuth v4 (Credentials) |
| 状态管理 | Zustand (购物车) |
| 支付 | Stripe Checkout |
| 测试 | Vitest |

---

## 本地启动

```bash
cd nanyang-herbal
cp .env.example .env          # 填写真实密钥
npm install
npm run db:reset               # 建表 + 写入种子数据
npm run dev                    # http://localhost:3000
```

---

## 环境变量说明

| 变量 | 说明 |
|------|------|
| `DATABASE_URL` | SQLite: `file:./dev.db`；PostgreSQL 换成 `postgresql://...` |
| `NEXTAUTH_SECRET` | 随机32位字符串，生产环境必须更换 |
| `NEXTAUTH_URL` | 生产环境改为真实域名 |
| `STRIPE_SECRET_KEY` | Stripe 后台 → Developers → API keys |
| `STRIPE_PUBLISHABLE_KEY` | 同上（目前前端未直接调用，备用） |
| `STRIPE_WEBHOOK_SECRET` | `stripe listen --forward-to localhost:3000/api/webhook/stripe` 获取 |

---

## 路由地图

### 前台 (shop)
| 路径 | 说明 |
|------|------|
| `/` | 首页（精选商品 + 分类） |
| `/products` | 商品列表（支持 `?cat=slug` 筛选） |
| `/products/[slug]` | 商品详情页 |
| `/cart` | 购物车 |
| `/checkout` | 结账（地址 + 优惠码 + Stripe 跳转） |
| `/order/success` | 付款成功页 |
| `/search` | 搜索 |
| `/brand` | 品牌故事 |
| `/faq` | 常见问题 |
| `/login` | 登录 |
| `/register` | 注册 |
| `/account` | 用户账户 + 订单记录 |

### 后台 (admin)
| 路径 | 说明 | 权限 |
|------|------|------|
| `/admin` | 数据概览 | ADMIN |
| `/admin/orders` | 订单列表 + 状态更新 | ADMIN |
| `/admin/products` | 商品上下架 / 精选切换 | ADMIN |
| `/admin/discounts` | 优惠码增删 | ADMIN |

### API
| 路径 | 方法 | 说明 |
|------|------|------|
| `/api/auth/[...nextauth]` | GET/POST | NextAuth |
| `/api/auth/register` | POST | 注册 |
| `/api/discount/validate` | POST | 验证优惠码 |
| `/api/checkout/session` | POST | 创建 Stripe Checkout 会话 |
| `/api/webhook/stripe` | POST | Stripe Webhook（建单 + 扣库存） |
| `/api/admin/orders/[id]/status` | PATCH | 更新订单状态 |
| `/api/admin/products/[id]` | PATCH | 更新商品 active/featured |
| `/api/admin/discounts` | POST | 创建优惠码 |
| `/api/admin/discounts/[id]` | DELETE | 停用优惠码 |

---

## 创建管理员账户

```bash
# 方法一：通过 Prisma Studio
npx prisma studio
# 找到 User 表，将 role 从 "USER" 改为 "ADMIN"

# 方法二：直接 SQL
sqlite3 prisma/dev.db "UPDATE User SET role='ADMIN' WHERE email='your@email.com';"
```

---

## Stripe 本地测试

```bash
# 安装 Stripe CLI
stripe listen --forward-to localhost:3000/api/webhook/stripe
# 复制输出的 webhook secret 到 .env STRIPE_WEBHOOK_SECRET
```

测试卡号：`4242 4242 4242 4242`，任意有效期，任意 CVC。

---

## 生产部署检查清单

- [ ] 更换 `NEXTAUTH_SECRET` 为真实随机值
- [ ] 更新 `NEXTAUTH_URL` 为真实域名
- [ ] 替换 Stripe 测试密钥为生产密钥
- [ ] 在 Stripe Dashboard 注册生产 Webhook endpoint
- [ ] 将 `DATABASE_URL` 换为 PostgreSQL（推荐 Supabase / PlanetScale）
- [ ] 更换产品图片（目前使用 Unsplash 占位图）
- [ ] 配置 WhatsApp 号码（`WhatsAppBubble.tsx`）
- [ ] 运行 `npm run build` 确认无编译错误

---

## 设计系统颜色

| Token | 用途 |
|-------|------|
| `nanyang` | 主色（赤褐） |
| `cacao` | 正文深色 |
| `sage` | 辅助灰绿 |
| `coconut` | 浅米背景 |
| `ivory` | 页面底色 |
| `rouge` | 错误/警告 |
| `turmeric` | 提示黄 |
