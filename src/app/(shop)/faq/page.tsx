import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const FAQS = [
  {
    q: '订单一般多久能送达?',
    a: '工作日下单后24小时内发货,马来西亚半岛通常2-3个工作日送达,东马(沙巴/砂拉越)需要4-5个工作日。',
  },
  {
    q: '运费怎么算?',
    a: '全马平邮统一RM10,订单满RM150即享免运费。',
  },
  {
    q: '产品有HALAL认证吗?',
    a: '我们大部分产品已获得 JAKIM HALAL 认证,产品详情页会标注。新品上架时认证可能仍在申请中,会标明「申请中」。',
  },
  {
    q: '产品有马来西亚KKM注册吗?',
    a: '是的,所有可食用产品都有 KKM (NPRA) 注册号,每个产品页面均会显示MAL号码。',
  },
  {
    q: '如何辨别正品?',
    a: '请只通过我们的官方网站、官方Shopee店与授权零售点购买。每件产品都有独立批次号,可联系客服查询真伪。',
  },
  {
    q: '产品如何保存?',
    a: '燕窝、燕窝冻、骨头汤需要冷藏4°C保存。胶原蛋白粉、维生素胶囊、茶包请置于阴凉干燥处。具体储存方式请见产品包装。',
  },
  {
    q: '可以退货吗?',
    a: '未开封的产品自收货之日起7天内可申请退货退款。已开封的食品类产品因卫生原因恕不接受退货。',
  },
  {
    q: '怀孕/哺乳期可以食用吗?',
    a: '部分产品(如人参类)不建议怀孕期食用。建议咨询专业医师后再使用。产品页面会标注禁忌人群。',
  },
  {
    q: '可以批量订购作为公司礼品吗?',
    a: '可以,我们提供企业定制礼盒服务,起订量50盒,可定制贺卡与外盒贴标。请通过 WhatsApp 联系我们。',
  },
  {
    q: '如何联系客服?',
    a: '点击页面右下角WhatsApp图标即可与客服直接联系,工作时间为周一至周六 9:00-18:00。',
  },
]

export default function FAQPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="font-latinDisplay italic text-sage mb-2">FAQ</p>
        <h1 className="font-display text-4xl text-cacao mb-12">常见问题</h1>
        <div className="space-y-2">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="border-b border-sage/20 py-5 group"
            >
              <summary className="cursor-pointer font-display text-lg text-cacao flex items-center justify-between list-none">
                <span>{f.q}</span>
                <span className="text-nanyang text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-cacao/80 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
