export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ProductGrid } from '@/components/product/ProductGrid'
import { PeranakanDivider } from '@/components/ui/PeranakanDivider'
import { db } from '@/lib/db'
import { toCardData } from '@/lib/productMappers'

export default async function HomePage() {
  const [featured, categories, reviewStats, orderStats] = await Promise.all([
    db.product.findMany({
      where: { featured: true, active: true },
      take: 8,
      include: {
        variants: true,
        benefits: { include: { benefitTag: true } },
        reviews: { select: { rating: true } },
      },
    }),
    db.category.findMany({ orderBy: { order: 'asc' } }),
    db.review.aggregate({ _avg: { rating: true }, _count: { id: true } }),
    db.orderItem.aggregate({ _sum: { qty: true } }),
  ])

  const avgRating = reviewStats._avg.rating?.toFixed(1) ?? '4.9'
  const totalReviews = reviewStats._count.id
  const totalSold = orderStats._sum.qty ?? 2400

  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20 pb-12">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-latinDisplay italic text-sage text-lg mb-2">— Rooted in Nanyang —</p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-cacao mb-6">
              东方本草
              <br />
              南洋风土
            </h1>
            <p className="text-cacao/70 text-base md:text-lg leading-relaxed mb-6 max-w-md">
              承袭华人千年养生智慧,以现代工艺与热带风土之力,为都市生活带来日常可亲的健康之道。
            </p>

            {/* Social proof stats */}
            <div className="flex gap-6 mb-8 text-sm">
              <div>
                <span className="font-display text-2xl text-nanyang">{avgRating}</span>
                <span className="text-turmeric ml-1">★</span>
                <p className="text-xs text-sage mt-0.5">{totalReviews > 0 ? `${totalReviews} 条评价` : '顾客好评'}</p>
              </div>
              <div className="w-px bg-sage/20" />
              <div>
                <span className="font-display text-2xl text-nanyang">{totalSold.toLocaleString()}+</span>
                <p className="text-xs text-sage mt-0.5">已售订单</p>
              </div>
              <div className="w-px bg-sage/20" />
              <div>
                <span className="font-display text-2xl text-nanyang">HALAL</span>
                <p className="text-xs text-sage mt-0.5">认证产品</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/products">
                <Button size="lg">立即选购</Button>
              </Link>
              <Link href="/products?cat=giftsets">
                <Button size="lg" variant="outline">
                  🎁 养生礼盒
                </Button>
              </Link>
            </div>
          </div>
          <div className="aspect-[4/5] bg-coconut">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80"
              alt="南洋本草产品"
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </Section>

      <PeranakanDivider />

      {/* Festival gift banner */}
      <Section className="py-10 bg-gradient-to-r from-rouge/10 to-turmeric/10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-rouge uppercase tracking-widest mb-1">节日精选</p>
              <h2 className="font-display text-2xl md:text-3xl text-cacao mb-2">
                🎁 养生礼盒 · 送礼首选
              </h2>
              <p className="text-cacao/70 text-sm max-w-md">
                母亲节 · 农历新年 · 公司礼品 — 精选礼盒定制服务，起订 50 盒，可印制贺卡。
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/products?cat=giftsets">
                <Button>选购礼盒</Button>
              </Link>
              <a
                href="https://wa.me/60123456789?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E5%92%A8%E8%AF%A2%E4%BC%81%E4%B8%9A%E5%AE%9A%E5%88%B6%E7%A4%BC%E7%9B%92%E6%9C%8D%E5%8A%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-12 px-5 bg-[#25D366] text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
              >
                💬 企业询价
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured products */}
      <Section className="py-12">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-latinDisplay italic text-sage mb-1">Featured</p>
              <h2 className="font-display text-3xl md:text-4xl">精选本草</h2>
            </div>
            <Link href="/products" className="text-sm text-nanyang underline underline-offset-4">
              查看全部 →
            </Link>
          </div>
          <ProductGrid products={featured.map(toCardData)} />
        </Container>
      </Section>

      {/* Categories */}
      <Section className="bg-coconut/40 py-20">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">本草分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products?cat=${c.slug}`}
                className="bg-ivory p-6 text-center hover:shadow-sm transition-shadow group"
              >
                <div className="font-display text-xl text-nanyang group-hover:text-nanyang-dark">
                  {c.nameZh}
                </div>
                <div className="text-xs font-latinBody uppercase tracking-wider text-sage mt-1">
                  {c.nameEn}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social proof strip */}
      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '10,000+', label: '忠实顾客', icon: '👥' },
              { num: avgRating + ' ★', label: '平均评分', icon: '⭐' },
              { num: 'HALAL', label: 'JAKIM 认证', icon: '🌙' },
              { num: 'KKM', label: '卫生部注册', icon: '🏥' },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-3xl">{s.icon}</div>
                <div className="font-display text-2xl text-nanyang">{s.num}</div>
                <div className="text-xs text-sage">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brand story teaser */}
      <Section className="bg-coconut/30">
        <Container className="max-w-3xl text-center">
          <p
            className="text-2xl md:text-3xl leading-relaxed text-cacao/90"
            style={{ fontFamily: '"LXGW WenKai TC", serif' }}
          >
            「一方水土,养一方人。我们相信,最好的养生之道,应当生长于自己的土地。」
          </p>
          <p className="mt-4 text-sage font-latinDisplay italic">— 创始人 陈美玲</p>
          <Link
            href="/brand"
            className="inline-block mt-6 text-nanyang underline underline-offset-4"
          >
            阅读南洋本草的故事 →
          </Link>
        </Container>
      </Section>
    </>
  )
}
