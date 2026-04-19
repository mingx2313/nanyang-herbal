import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { PeranakanDivider } from '@/components/ui/PeranakanDivider'

export default function BrandPage() {
  return (
    <article>
      <Section className="pt-10">
        <Container className="max-w-4xl">
          <p className="font-latinDisplay italic text-sage text-lg mb-3">— Our Story —</p>
          <h1 className="font-display text-4xl md:text-5xl text-cacao mb-10 leading-tight">
            一方水土
            <br />
            养一方人
          </h1>

          <div className="aspect-[3/2] bg-coconut mb-12 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-cacao/80 leading-loose space-y-6">
            <p>
              南洋本草成立于2024年,创始人是一位在吉隆坡长大的第三代华人。她从小看着外婆熬燕窝、煲参茶,长大后离家求学,才发现城市生活让人渐渐远离了这些日常的养生智慧。
            </p>
            <p>
              「我想做一个让每一个忙碌的现代华人都用得起、用得上的本草品牌——既保留传统配方的精髓,又用现代工艺让它真正进入每一天的生活。」
            </p>
            <p>
              我们的产品大部分原料来自马来西亚本土与亚洲优质产地:怡保的崖燕、福建的灵芝、加拿大的花旗参、韩国的高丽参。每一批原料都经过SGS第三方检测,每一款产品都通过马来西亚KKM(NPRA)注册。
            </p>
          </div>
        </Container>
      </Section>

      <PeranakanDivider />

      <Section>
        <Container className="max-w-3xl text-center">
          <p
            className="text-2xl md:text-3xl leading-relaxed text-cacao/90"
            style={{ fontFamily: '"LXGW WenKai TC", serif' }}
          >
            「我们相信,最好的养生之道,
            <br />
            应当生长于自己的土地。」
          </p>
          <p className="mt-6 text-sage font-latinDisplay italic">— 创始人 陈美玲</p>
        </Container>
      </Section>

      <Section className="bg-coconut/40">
        <Container className="max-w-4xl">
          <h2 className="font-display text-3xl mb-10 text-center">我们的承诺</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl text-nanyang mb-3">真材实料</h3>
              <p className="text-sm text-cacao/80 leading-relaxed">
                所有原料均来源透明,可追溯产地与批次。
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-nanyang mb-3">独立检测</h3>
              <p className="text-sm text-cacao/80 leading-relaxed">
                每一批产品都经过SGS第三方实验室检测,报告可查。
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-nanyang mb-3">无添加</h3>
              <p className="text-sm text-cacao/80 leading-relaxed">
                绝不添加防腐剂、人工色素与人工香精。
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  )
}
