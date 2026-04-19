const IMG = {
  yanwo: [
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=900&q=80',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80',
    'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=900&q=80',
    'https://images.unsplash.com/photo-1556228720-da4e85b5f9b9?w=900&q=80',
  ],
  collagen: [
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=900&q=80',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80',
    'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=900&q=80',
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=900&q=80',
  ],
  ginseng: [
    'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=900&q=80',
    'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=900&q=80',
    'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=900&q=80',
    'https://images.unsplash.com/photo-1571115332105-fd6c4b9c4b8b?w=900&q=80',
  ],
  lingzhi: [
    'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=900&q=80',
    'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=900&q=80',
    'https://images.unsplash.com/photo-1604908554049-29a0b6c4a8b4?w=900&q=80',
    'https://images.unsplash.com/photo-1546548970-71785318a17b?w=900&q=80',
  ],
  vitamins: [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80',
    'https://images.unsplash.com/photo-1559757175-08b3b6c6f6d9?w=900&q=80',
    'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=900&q=80',
    'https://images.unsplash.com/photo-1550572017-edd951b55104?w=900&q=80',
  ],
  giftsets: [
    'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=900&q=80',
    'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=900&q=80',
    'https://images.unsplash.com/photo-1481555716071-8830d3e36a4d?w=900&q=80',
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80',
  ],
}

export type MockCategory = { id: string; slug: string; nameZh: string; nameEn: string; order: number }
export type MockBenefitTag = { id: string; slug: string; nameZh: string }
export type MockVariant = { id: string; label: string; priceCents: number; stock: number; sku: string }
export type MockReview = { id: string; userName: string; rating: number; title: string; body: string; photoUrl: string | null; createdAt: Date }
export type MockProduct = {
  id: string
  slug: string
  nameZh: string
  nameEn: string
  tagline: string
  description: string
  longDescription: string
  categorySlug: string
  benefits: string[]
  images: string[]
  ingredients: string[]
  howToUse: string
  malNumber: string
  halalStatus: 'CERTIFIED' | 'PENDING'
  featured: boolean
  active: boolean
  variants: MockVariant[]
  reviews: MockReview[]
  createdAt: Date
}

export const CATEGORIES: MockCategory[] = [
  { id: 'cat-1', slug: 'yanwo', nameZh: '燕窝', nameEn: "Bird's Nest", order: 1 },
  { id: 'cat-2', slug: 'collagen', nameZh: '胶原蛋白', nameEn: 'Collagen', order: 2 },
  { id: 'cat-3', slug: 'ginseng', nameZh: '人参参茶', nameEn: 'Ginseng', order: 3 },
  { id: 'cat-4', slug: 'lingzhi', nameZh: '灵芝菇菌', nameEn: 'Lingzhi', order: 4 },
  { id: 'cat-5', slug: 'vitamins', nameZh: '维生素补充', nameEn: 'Vitamins', order: 5 },
  { id: 'cat-6', slug: 'giftsets', nameZh: '养生礼盒', nameEn: 'Gift Sets', order: 6 },
]

export const BENEFIT_TAGS: MockBenefitTag[] = [
  { id: 'ben-1', slug: 'qi-blood', nameZh: '补气血' },
  { id: 'ben-2', slug: 'beauty', nameZh: '养颜美容' },
  { id: 'ben-3', slug: 'sleep', nameZh: '助眠安神' },
  { id: 'ben-4', slug: 'energy', nameZh: '提神抗疲劳' },
  { id: 'ben-5', slug: 'lung', nameZh: '润肺止咳' },
  { id: 'ben-6', slug: 'digestion', nameZh: '健脾养胃' },
  { id: 'ben-7', slug: 'immunity', nameZh: '增强免疫' },
  { id: 'ben-8', slug: 'slimming', nameZh: '纤体瘦身' },
]

const d = (daysAgo: number) => new Date(Date.now() - daysAgo * 86400000)

export const PRODUCTS: MockProduct[] = [
  {
    id: 'p-1', slug: 'rock-cliff-birds-nest-mini', nameZh: '崖燕鲜炖燕窝', nameEn: "Rock Cliff Stewed Bird's Nest",
    tagline: '马来西亚天然崖燕,28道工序古法慢炖',
    description: '甄选马来西亚怡保天然崖洞燕窝,以传统古法慢炖8小时,无添加,口感清润如玉。每瓶45ml,密封锁鲜,日饮一瓶,润养有道。',
    longDescription: '南洋本草崖燕系列,源自马来西亚怡保石灰岩崖洞之天然金丝燕巢。每一盏燕窝皆经28道精细挑毛工序,以山泉慢炖8小时,不添加任何防腐剂或人工香精。冷链直送,密封锁鲜,日饮一瓶,养颜润肺,温润不上火。\n\n崖燕生长环境天然纯净,蛋白质与活性物含量比一般屋燕高出约15%,口感更显清润。适合长期养护肌肤、改善气色、提升免疫力的现代女性日常饮用。',
    categorySlug: 'yanwo', benefits: ['beauty', 'lung', 'immunity'], images: IMG.yanwo,
    ingredients: ['马来西亚崖洞燕窝', '冰糖', '矿泉水'],
    howToUse: '每日1瓶,空腹饮用效果最佳。可常温饮用,亦可隔水温热至45°C。开瓶后请于12小时内饮用完毕。',
    malNumber: 'MAL19992341N', halalStatus: 'CERTIFIED', featured: true, active: true, createdAt: d(90),
    variants: [
      { id: 'v-1-1', label: '7瓶装', priceCents: 16800, stock: 50, sku: 'NYH-YW01-7' },
      { id: 'v-1-2', label: '14瓶装', priceCents: 32800, stock: 30, sku: 'NYH-YW01-14' },
      { id: 'v-1-3', label: '28瓶装', priceCents: 62800, stock: 12, sku: 'NYH-YW01-28' },
    ],
    reviews: [
      { id: 'r-1-1', userName: '陈美玲', rating: 5, title: '坚持喝了三个月,皮肤真的有变化', body: '从妈妈推荐开始喝,本来只是想试试,没想到一个月后朋友都说我皮肤变好了。每天早上空腹一瓶,口感清甜,不会太腻。已经回购第三次。', photoUrl: null, createdAt: d(30) },
      { id: 'r-1-2', userName: 'Vivian Tan', rating: 5, title: '送给妈妈她很喜欢', body: '过年送给妈妈,她说比之前在药材店买的好喝,而且包装很精致。下次还会买。', photoUrl: null, createdAt: d(45) },
      { id: 'r-1-3', userName: '林淑芬', rating: 4, title: '不错就是有点贵', body: '味道很好,真的有燕窝丝丝。价格略高但好东西就是好东西。', photoUrl: null, createdAt: d(60) },
      { id: 'r-1-4', userName: '黄慧雯', rating: 5, title: '老公也开始喝了', body: '本来买给自己,后来老公说嗓子不舒服我让他喝,他说润肺效果不错。一家人现在都在喝。', photoUrl: null, createdAt: d(20) },
      { id: 'r-1-5', userName: 'Jasmine Lim', rating: 5, title: '冷链很到位', body: '吉隆坡隔天就到,冰袋还很冷。瓶子也很有质感,送人完全拿得出手。', photoUrl: null, createdAt: d(15) },
    ],
  },
  {
    id: 'p-2', slug: 'instant-birds-nest-jelly', nameZh: '即食燕窝冻', nameEn: "Ready-to-Eat Bird's Nest Jelly",
    tagline: '冷藏即食,Q弹爽滑,办公室随时享',
    description: '低糖配方的即食燕窝冻,冷藏后口感Q弹爽滑。每盒120g,办公室、旅行、加班随时取用,不需加热,养颜便利两不误。',
    longDescription: '为忙碌都市人特别研发的即食燕窝冻,采用马来西亚屋燕,加入低聚糖与少量冰糖,口感Q弹清甜,冷藏后风味更佳。无防腐剂,无人工色素,冷链直送。\n\n相比传统瓶装燕窝,燕窝冻更便于携带,冷藏后开盖即食,办公室、健身后、夜宵都是养颜的好时机。',
    categorySlug: 'yanwo', benefits: ['beauty', 'lung'], images: IMG.yanwo,
    ingredients: ['马来西亚屋燕', '燕窝胶原冻', '低聚糖', '冰糖'],
    howToUse: '冷藏4°C保存,开盖即食。建议每日1盒,饭前空腹效果更佳。',
    malNumber: 'MAL19998812N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(80),
    variants: [
      { id: 'v-2-1', label: '6盒装', priceCents: 8800, stock: 80, sku: 'NYH-YW02-6' },
      { id: 'v-2-2', label: '12盒装', priceCents: 16800, stock: 50, sku: 'NYH-YW02-12' },
    ],
    reviews: [
      { id: 'r-2-1', userName: '王心怡', rating: 5, title: '上班族的救星', body: '放在公司冰箱,加班的时候来一盒,口感真的很好,不会太甜。', photoUrl: null, createdAt: d(25) },
      { id: 'r-2-2', userName: 'Sarah Ng', rating: 4, title: 'Q弹好吃', body: '比较像甜品,小朋友也爱吃。希望以后能出无糖版本。', photoUrl: null, createdAt: d(40) },
      { id: 'r-2-3', userName: '李雪莉', rating: 5, title: '送闺蜜的好选择', body: '包装精致,送人很有面子。闺蜜说比她之前买的某品牌好吃。', photoUrl: null, createdAt: d(55) },
      { id: 'r-2-4', userName: 'Michelle Chua', rating: 5, title: '回购第N次', body: '已经回购五次了,稳定的好品质,赞。', photoUrl: null, createdAt: d(10) },
    ],
  },
  {
    id: 'p-3', slug: 'birds-nest-collagen-drink', nameZh: '燕窝胶原饮', nameEn: "Bird's Nest Collagen Drink",
    tagline: '燕窝 × 鱼胶原蛋白肽,双重养颜',
    description: '将马来西亚燕窝与日本进口鱼胶原蛋白肽结合,小分子易吸收,每瓶含5000mg胶原蛋白肽 + 1500mg燕窝萃取。',
    longDescription: '南洋本草研发团队耗时两年,将传统燕窝与现代胶原科技结合,推出燕窝胶原饮。每瓶50ml含5000mg日本进口鱼胶原蛋白肽(分子量2000Da以下,易吸收)以及1500mg马来西亚燕窝萃取液。\n\n佐以维生素C促进胶原合成,口感清新带有淡淡水蜜桃香。无添加防腐剂、无人工色素,冷链直送。',
    categorySlug: 'yanwo', benefits: ['beauty', 'qi-blood'], images: IMG.collagen,
    ingredients: ['鱼胶原蛋白肽5000mg', '马来西亚燕窝萃取液1500mg', '维生素C', '水蜜桃汁', '玻尿酸'],
    howToUse: '每日1瓶,空腹饮用,建议搭配充足水分。冷藏后口感更佳。',
    malNumber: 'MAL20011234N', halalStatus: 'CERTIFIED', featured: true, active: true, createdAt: d(70),
    variants: [
      { id: 'v-3-1', label: '7瓶装', priceCents: 19800, stock: 40, sku: 'NYH-YW03-7' },
      { id: 'v-3-2', label: '14瓶装', priceCents: 38800, stock: 25, sku: 'NYH-YW03-14' },
    ],
    reviews: [
      { id: 'r-3-1', userName: '张丽华', rating: 5, title: '皮肤变得有光泽', body: '喝完第二盒明显感觉皮肤水润很多,之前的细纹也淡了一点。', photoUrl: null, createdAt: d(20) },
      { id: 'r-3-2', userName: 'Crystal Wong', rating: 5, title: '味道很好不腥', body: '本来担心会有鱼腥味,完全没有,水蜜桃味很清新。', photoUrl: null, createdAt: d(35) },
      { id: 'r-3-3', userName: '吴婉如', rating: 4, title: '不错', body: '坚持一个月有效果,会继续买。', photoUrl: null, createdAt: d(50) },
      { id: 'r-3-4', userName: '刘佳怡', rating: 5, title: '皮肤好朋友都问', body: '同事说我最近气色很好,问我用什么,我说在喝这个。', photoUrl: null, createdAt: d(12) },
    ],
  },
  {
    id: 'p-4', slug: 'birds-nest-soup-traditional', nameZh: '古法燕窝汤', nameEn: 'Traditional Bird\'s Nest Soup',
    tagline: '传统配方,慢炖冰糖燕窝',
    description: '怀旧古法配方,只用燕窝、冰糖、山泉水三样食材,慢炖出最纯粹的燕窝原味。',
    longDescription: '怀念外婆做的燕窝汤吗?南洋本草用怡保崖燕、台湾古法冰糖、马来西亚高山山泉,只用这三样食材,慢炖8小时,呈现最纯粹的燕窝原味。\n\n没有添加任何香精、防腐剂或调味料。瓶身使用日本进口耐热玻璃,可隔水加热饮用。',
    categorySlug: 'yanwo', benefits: ['beauty', 'lung', 'immunity'], images: IMG.yanwo,
    ingredients: ['马来西亚崖燕', '台湾古法冰糖', '高山矿泉水'],
    howToUse: '常温或温热饮用皆可,空腹吸收最佳。建议每日1瓶。',
    malNumber: 'MAL20015678N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(100),
    variants: [
      { id: 'v-4-1', label: '7瓶装', priceCents: 18800, stock: 35, sku: 'NYH-YW04-7' },
      { id: 'v-4-2', label: '14瓶装', priceCents: 35800, stock: 20, sku: 'NYH-YW04-14' },
    ],
    reviews: [
      { id: 'r-4-1', userName: '曾月娥', rating: 5, title: '像外婆做的味道', body: '非常怀旧的味道,一口就让我想起小时候。', photoUrl: null, createdAt: d(30) },
      { id: 'r-4-2', userName: 'Linda Goh', rating: 5, title: '真材实料', body: '可以看到燕窝丝,真的很满足。', photoUrl: null, createdAt: d(45) },
      { id: 'r-4-3', userName: '何美兰', rating: 4, title: '老人家很喜欢', body: '送给婆婆,她说很合口味,会再买。', photoUrl: null, createdAt: d(60) },
    ],
  },
  {
    id: 'p-5', slug: 'marine-collagen-peptide-powder', nameZh: '深海鱼胶原蛋白肽粉', nameEn: 'Marine Collagen Peptide Powder',
    tagline: '日本进口分子量2000Da以下,无味易冲泡',
    description: '日本鹿儿岛深海鱼皮萃取的小分子胶原蛋白肽,无腥味,易溶于水,每包5g含5000mg胶原蛋白肽。',
    longDescription: '采用日本鹿儿岛深海鳕鱼皮,经酶解工艺萃取小分子胶原蛋白肽,分子量平均1500Da,远低于人体吸收上限,真正做到吃进去就能用。\n\n每包独立包装,5g含5000mg胶原蛋白肽 + 维生素C + 透明质酸。无添加蔗糖、防腐剂、人工色素。可直接冲水、加入咖啡、酸奶或汤品。',
    categorySlug: 'collagen', benefits: ['beauty'], images: IMG.collagen,
    ingredients: ['深海鱼胶原蛋白肽', '维生素C', '透明质酸钠', '柠檬酸'],
    howToUse: '每日1包(5g),用150-200ml常温或温水(40°C以下)冲泡饮用。可加入咖啡、果汁或酸奶。',
    malNumber: 'MAL20029988N', halalStatus: 'CERTIFIED', featured: true, active: true, createdAt: d(60),
    variants: [
      { id: 'v-5-1', label: '14包装', priceCents: 9800, stock: 80, sku: 'NYH-CG01-14' },
      { id: 'v-5-2', label: '30包装', priceCents: 19800, stock: 60, sku: 'NYH-CG01-30' },
      { id: 'v-5-3', label: '60包装', priceCents: 36800, stock: 30, sku: 'NYH-CG01-60' },
    ],
    reviews: [
      { id: 'r-5-1', userName: '蔡淑芳', rating: 5, title: '真的没有腥味', body: '试过其他牌子腥到喝不下,这个加在咖啡里完全没味道,坚持喝。', photoUrl: null, createdAt: d(20) },
      { id: 'r-5-2', userName: 'Joey Ng', rating: 5, title: '好吸收', body: '小分子真的是不一样,皮肤感觉变饱满。', photoUrl: null, createdAt: d(35) },
      { id: 'r-5-3', userName: '周慧敏', rating: 4, title: '价格合理', body: '相比某些大牌价格亲民很多,效果也不错。', photoUrl: null, createdAt: d(50) },
      { id: 'r-5-4', userName: 'Felicia Loh', rating: 5, title: '当作日常补品', body: '已经喝了半年,皮肤状态稳定,值得长期喝。', photoUrl: null, createdAt: d(15) },
      { id: 'r-5-5', userName: '叶玉珍', rating: 5, title: '冲泡方便', body: '上班带几包很方便,不会占空间。', photoUrl: null, createdAt: d(8) },
    ],
  },
  {
    id: 'p-6', slug: 'collagen-jelly-strawberry', nameZh: '草莓胶原蛋白果冻', nameEn: 'Strawberry Collagen Jelly',
    tagline: 'Q弹好吃,5000mg胶原蛋白 + 益生元',
    description: '日本工艺草莓味胶原蛋白果冻,每条含5000mg胶原蛋白肽 + 100亿益生元,Q弹清爽,零负担美颜。',
    longDescription: '草莓胶原蛋白果冻,Q弹清爽,采用日本工艺包装,每条15g含5000mg小分子胶原蛋白肽和100亿益生元,搭配维生素C促进吸收。\n\n以新鲜草莓汁调味,清甜不腻,无添加防腐剂。出门带几条,办公室抽屉常备,养颜更自在。',
    categorySlug: 'collagen', benefits: ['beauty', 'digestion'], images: IMG.collagen,
    ingredients: ['鱼胶原蛋白肽', '益生元(低聚果糖)', '草莓汁', '维生素C', '水溶性膳食纤维'],
    howToUse: '每日1-2条,直接食用。开包即食,无需冷藏。',
    malNumber: 'MAL20034567N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(75),
    variants: [
      { id: 'v-6-1', label: '15条装', priceCents: 6800, stock: 100, sku: 'NYH-CG02-15' },
      { id: 'v-6-2', label: '30条装', priceCents: 12800, stock: 60, sku: 'NYH-CG02-30' },
    ],
    reviews: [
      { id: 'r-6-1', userName: '施雅婷', rating: 5, title: '太好吃了根本停不下来', body: '味道真的像草莓糖,小朋友也很爱。', photoUrl: null, createdAt: d(22) },
      { id: 'r-6-2', userName: 'Amy Chen', rating: 5, title: '便携之选', body: '随身带几条很方便,不用准备热水。', photoUrl: null, createdAt: d(38) },
      { id: 'r-6-3', userName: '罗丽君', rating: 4, title: '甜度刚刚好', body: '不会太甜,清爽,会回购。', photoUrl: null, createdAt: d(52) },
      { id: 'r-6-4', userName: 'Penny Tan', rating: 5, title: '皮肤亮了', body: '坚持吃一个月,化妆师说我底子变好了。', photoUrl: null, createdAt: d(18) },
    ],
  },
  {
    id: 'p-7', slug: 'collagen-bone-broth', nameZh: '胶原骨头汤', nameEn: 'Collagen Bone Broth',
    tagline: '24小时慢熬牛骨,天然胶原 + 多种氨基酸',
    description: '澳洲草饲牛骨24小时慢熬,提取天然胶原蛋白与18种氨基酸,温润滋补。',
    longDescription: '澳洲草饲牛骨,经24小时低温慢熬,自然提取胶原蛋白与18种氨基酸,无任何人工添加剂。每包250ml,加热即饮,可作为日常汤底,或直接饮用。\n\n富含天然胶原蛋白、葡萄糖胺、软骨素,适合长期养护肌肤、关节与肠胃。',
    categorySlug: 'collagen', benefits: ['beauty', 'qi-blood', 'digestion'], images: IMG.collagen,
    ingredients: ['澳洲草饲牛骨', '海盐', '苹果醋', '月桂叶'],
    howToUse: '隔水加热或微波1分钟后饮用。可作为汤底煮面、煮粥。',
    malNumber: 'MAL20039876N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(95),
    variants: [
      { id: 'v-7-1', label: '6包装', priceCents: 7800, stock: 60, sku: 'NYH-CG03-6' },
      { id: 'v-7-2', label: '12包装', priceCents: 14800, stock: 40, sku: 'NYH-CG03-12' },
    ],
    reviews: [
      { id: 'r-7-1', userName: '杨美琪', rating: 5, title: '冬天暖胃神器', body: '加热后撒点葱花就很满足,温润不上火。', photoUrl: null, createdAt: d(28) },
      { id: 'r-7-2', userName: 'Mei Lin Foo', rating: 4, title: '味道不错', body: '没有腥味,适合做汤底。', photoUrl: null, createdAt: d(42) },
      { id: 'r-7-3', userName: '苏丽珍', rating: 5, title: '关节没那么疼了', body: '坚持喝了两个月,膝盖感觉好多了。', photoUrl: null, createdAt: d(65) },
    ],
  },
  {
    id: 'p-8', slug: 'collagen-facial-cream', nameZh: '燕窝胶原修护面霜', nameEn: 'Collagen Facial Cream',
    tagline: '燕窝精华 + 胶原蛋白,深层滋润',
    description: '燕窝萃取液 × 海洋胶原蛋白 × 透明质酸,锁水修护,适合熟龄肌。',
    longDescription: '南洋本草首款外用产品,以崖燕萃取液、海洋胶原蛋白、透明质酸为核心成分,质地丰润不黏腻。50ml一罐,日夜双效使用。\n\n通过马来西亚 KKM (NPRA) 注册,温和不刺激,适合各种肤质,熟龄肌使用尤为见效。',
    categorySlug: 'collagen', benefits: ['beauty'], images: IMG.collagen,
    ingredients: ['燕窝萃取液', '海洋胶原蛋白', '透明质酸', '神经酰胺', '泛醇'],
    howToUse: '早晚洁面后,取适量于掌心,均匀涂抹于面部及颈部,轻柔按摩至吸收。',
    malNumber: 'NOT195412345K', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(85),
    variants: [
      { id: 'v-8-1', label: '50ml', priceCents: 16800, stock: 40, sku: 'NYH-CG04-50' },
    ],
    reviews: [
      { id: 'r-8-1', userName: '王雪琴', rating: 5, title: '保湿很到位', body: '冷气房一整天皮肤也不干,不油腻。', photoUrl: null, createdAt: d(18) },
      { id: 'r-8-2', userName: 'Janet Tan', rating: 4, title: '味道好闻', body: '淡淡的燕窝味,不刺鼻,质地很滋润。', photoUrl: null, createdAt: d(33) },
      { id: 'r-8-3', userName: '黄丽雯', rating: 5, title: '细纹淡了', body: '用了一罐眼角细纹真的有变浅,推荐。', photoUrl: null, createdAt: d(48) },
    ],
  },
  {
    id: 'p-9', slug: 'red-ginseng-tea-bags', nameZh: '高丽红参茶包', nameEn: 'Korean Red Ginseng Tea',
    tagline: '韩国进口6年根高丽参,日饮提神补气',
    description: '韩国正官庄6年根高丽红参精制茶包,每包含高丽参萃取物300mg,温和提神,补气血。',
    longDescription: '采用韩国正官庄认证6年根高丽红参,经传统九蒸九晒工艺,封存于独立茶包中。每包含高丽参萃取物300mg,搭配少量蜂蜜与桂圆,口感醇厚甘甜。\n\n适合长期熬夜、气虚体弱、易疲劳人群日常饮用。早晨一杯,精神一整天。',
    categorySlug: 'ginseng', benefits: ['energy', 'qi-blood', 'immunity'], images: IMG.ginseng,
    ingredients: ['韩国6年根高丽红参', '蜂蜜粉', '桂圆萃取', '甘草'],
    howToUse: '每包茶包用200ml热水(85-90°C)冲泡5-8分钟,可回冲2-3次。每日1-2包。',
    malNumber: 'MAL20041122N', halalStatus: 'CERTIFIED', featured: true, active: true, createdAt: d(55),
    variants: [
      { id: 'v-9-1', label: '15包装', priceCents: 6800, stock: 100, sku: 'NYH-GS01-15' },
      { id: 'v-9-2', label: '30包装', priceCents: 12800, stock: 60, sku: 'NYH-GS01-30' },
      { id: 'v-9-3', label: '60包装', priceCents: 23800, stock: 30, sku: 'NYH-GS01-60' },
    ],
    reviews: [
      { id: 'r-9-1', userName: '林志强', rating: 5, title: '加班党的好朋友', body: 'IT行业经常熬夜,这个比咖啡温和,不心悸。', photoUrl: null, createdAt: d(25) },
      { id: 'r-9-2', userName: 'Patrick Ong', rating: 5, title: '味道甘甜', body: '不会很苦,好入口,坚持喝了三个月气色好很多。', photoUrl: null, createdAt: d(40) },
      { id: 'r-9-3', userName: '陈丽珊', rating: 4, title: '性价比不错', body: '相比药材店买的整支高丽参方便很多,适合上班族。', photoUrl: null, createdAt: d(55) },
      { id: 'r-9-4', userName: 'Sandy Lee', rating: 5, title: '送爸爸他很喜欢', body: '爸爸说味道很正宗,以后送礼就送这个。', photoUrl: null, createdAt: d(12) },
    ],
  },
  {
    id: 'p-10', slug: 'american-ginseng-slices', nameZh: '加拿大花旗参片', nameEn: 'American Ginseng Slices',
    tagline: '加拿大原装花旗参薄片,清热补气',
    description: '加拿大安大略省5年根花旗参,去须切片真空包装,适合泡水、炖汤、含片。',
    longDescription: '严选加拿大安大略省安格斯花旗参种植基地的5年根花旗参,人工去须、清洗、切片、真空封装。皂苷含量稳定,清热不上火,适合马来西亚湿热气候日常调理。\n\n泡水、炖汤、含化均可。每盒60g。',
    categorySlug: 'ginseng', benefits: ['energy', 'qi-blood', 'lung'], images: IMG.ginseng,
    ingredients: ['加拿大花旗参'],
    howToUse: '泡水:取3-5片,以90°C热水冲泡,可回冲。炖汤:每份用5-10g,与瘦肉、鸡肉同炖。含化:取1-2片含于舌下。',
    malNumber: 'MAL20043344N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(110),
    variants: [
      { id: 'v-10-1', label: '60g盒装', priceCents: 12800, stock: 50, sku: 'NYH-GS02-60' },
      { id: 'v-10-2', label: '120g盒装', priceCents: 23800, stock: 30, sku: 'NYH-GS02-120' },
    ],
    reviews: [
      { id: 'r-10-1', userName: '黄淑珍', rating: 5, title: '正宗加拿大花旗参', body: '味道纯正,不像市面上有些掺假的,会一直回购。', photoUrl: null, createdAt: d(30) },
      { id: 'r-10-2', userName: 'Amelia Tan', rating: 4, title: '炖汤很好', body: '炖鸡汤用很提味,家人都喜欢。', photoUrl: null, createdAt: d(45) },
      { id: 'r-10-3', userName: '李文豪', rating: 5, title: '上火克星', body: '吉隆坡天气热,泡水喝清凉降火。', photoUrl: null, createdAt: d(60) },
    ],
  },
  {
    id: 'p-11', slug: 'ginseng-honey-drink', nameZh: '人参蜂蜜饮', nameEn: 'Ginseng Honey Drink',
    tagline: '高丽参 + 麦卢卡蜂蜜,即开即饮',
    description: '高丽参萃取液与新西兰麦卢卡蜂蜜调配,即开即饮的现代养生饮品。',
    longDescription: '将传统高丽参与新西兰麦卢卡蜂蜜结合,推出即开即饮的人参蜂蜜饮。每瓶80ml含高丽参萃取物500mg + 麦卢卡蜂蜜10g。\n\n口感甘甜温润,无苦涩,适合各年龄段日常饮用。冷藏后口感更佳,夏天饮用清凉解暑,冬天温热饮用滋补。',
    categorySlug: 'ginseng', benefits: ['energy', 'qi-blood', 'immunity'], images: IMG.ginseng,
    ingredients: ['高丽参萃取液', '新西兰麦卢卡蜂蜜UMF10+', '柠檬汁', '矿泉水'],
    howToUse: '每日1瓶,常温或冷藏后饮用。',
    malNumber: 'MAL20045566N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(68),
    variants: [
      { id: 'v-11-1', label: '7瓶装', priceCents: 9800, stock: 70, sku: 'NYH-GS03-7' },
      { id: 'v-11-2', label: '14瓶装', priceCents: 18800, stock: 40, sku: 'NYH-GS03-14' },
    ],
    reviews: [
      { id: 'r-11-1', userName: '邓丽芳', rating: 5, title: '小朋友也爱喝', body: '不苦,儿子早上上学前都要喝一瓶,精神很好。', photoUrl: null, createdAt: d(22) },
      { id: 'r-11-2', userName: 'Steven Chong', rating: 4, title: '味道清爽', body: '不会很腻,适合天天喝。', photoUrl: null, createdAt: d(38) },
      { id: 'r-11-3', userName: '杨佩珊', rating: 5, title: '送礼有面子', body: '盒子很精致,送朋友拿得出手。', photoUrl: null, createdAt: d(55) },
    ],
  },
  {
    id: 'p-12', slug: 'ginseng-black-rice-tea', nameZh: '人参黑米茶', nameEn: 'Ginseng Black Rice Tea',
    tagline: '人参 × 韩国黑米,养颜补气',
    description: '韩国黑米与高丽参研磨调配,温润养颜,适合女性日常补气血。',
    longDescription: '韩国济州岛黑米搭配高丽参,加入红枣、枸杞研磨,推出适合女性日常的养颜参茶。每包独立包装,冲泡方便。\n\n黑米富含花青素与铁,搭配人参补气血,长期饮用气色明显改善。',
    categorySlug: 'ginseng', benefits: ['qi-blood', 'beauty'], images: IMG.ginseng,
    ingredients: ['韩国黑米', '高丽参', '红枣', '枸杞', '桂圆'],
    howToUse: '每包用200ml热水冲泡5分钟,可回冲。建议每日1-2包。',
    malNumber: 'MAL20047788N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(82),
    variants: [
      { id: 'v-12-1', label: '15包装', priceCents: 5800, stock: 80, sku: 'NYH-GS04-15' },
      { id: 'v-12-2', label: '30包装', priceCents: 10800, stock: 50, sku: 'NYH-GS04-30' },
    ],
    reviews: [
      { id: 'r-12-1', userName: '许丽霞', rating: 5, title: '生理期最爱', body: '生理期前喝几天,经痛真的减轻很多。', photoUrl: null, createdAt: d(28) },
      { id: 'r-12-2', userName: 'Mandy Foo', rating: 4, title: '味道香', body: '黑米的香气很浓,温润好喝。', photoUrl: null, createdAt: d(42) },
    ],
  },
  {
    id: 'p-13', slug: 'lingzhi-spore-powder', nameZh: '破壁灵芝孢子粉', nameEn: 'Lingzhi Spore Powder',
    tagline: '破壁工艺,有效成分释放率99%',
    description: '采用低温物理破壁技术,灵芝三萜含量高达2%以上,提升免疫,助眠安神。',
    longDescription: '南洋本草严选福建武夷山赤芝孢子,采用低温物理破壁技术,破壁率达99%以上,有效保留灵芝三萜、灵芝多糖等核心活性成分。每瓶60g,内附独立小包装,方便日常服用。\n\n经第三方SGS检测,灵芝三萜含量≥2%,远高于行业平均标准。适合长期养护免疫力、改善睡眠、调节亚健康状态人群。',
    categorySlug: 'lingzhi', benefits: ['immunity', 'sleep', 'qi-blood'], images: IMG.lingzhi,
    ingredients: ['破壁灵芝孢子粉(赤芝)'],
    howToUse: '每日2次,每次1包(2g),温水送服。建议早晨空腹与睡前各一包。',
    malNumber: 'MAL20051122N', halalStatus: 'CERTIFIED', featured: true, active: true, createdAt: d(72),
    variants: [
      { id: 'v-13-1', label: '30包装', priceCents: 19800, stock: 50, sku: 'NYH-LZ01-30' },
      { id: 'v-13-2', label: '60包装', priceCents: 36800, stock: 30, sku: 'NYH-LZ01-60' },
    ],
    reviews: [
      { id: 'r-13-1', userName: '许文德', rating: 5, title: '睡眠改善很多', body: '失眠多年,坚持喝了一个月,睡眠质量真的有改善。', photoUrl: null, createdAt: d(20) },
      { id: 'r-13-2', userName: 'Robert Lau', rating: 5, title: '感冒少了', body: '冬天容易感冒,今年坚持喝,一次都没生病。', photoUrl: null, createdAt: d(35) },
      { id: 'r-13-3', userName: '梁佩玲', rating: 4, title: '效果不错就是味道苦', body: '苦是苦了点,但效果是真的有,会继续吃。', photoUrl: null, createdAt: d(50) },
      { id: 'r-13-4', userName: 'Wendy Chia', rating: 5, title: '送给爸妈', body: '父母年纪大了,买给他们补充免疫力,他们说精神好多了。', photoUrl: null, createdAt: d(15) },
      { id: 'r-13-5', userName: '林佳玲', rating: 5, title: '化疗后调理', body: '化疗后医生建议吃一些扶正的东西,选了这个,气色恢复很快。', photoUrl: null, createdAt: d(8) },
    ],
  },
  {
    id: 'p-14', slug: 'lingzhi-coffee-blend', nameZh: '灵芝咖啡', nameEn: 'Lingzhi Coffee Blend',
    tagline: '云南阿拉比卡 + 灵芝萃取,提神不刺激',
    description: '云南阿拉比卡咖啡豆与灵芝萃取物完美融合,既有咖啡的醇香,又有灵芝的养生功效。',
    longDescription: '将云南高山阿拉比卡咖啡豆与灵芝萃取物完美融合,推出灵芝咖啡。每包15g,含咖啡萃取物 + 灵芝萃取物500mg。无添加蔗糖、无奶精,可加入燕麦奶、椰奶或牛奶饮用。\n\n咖啡因含量较普通咖啡低30%,适合对咖啡因敏感人群,既能提神又不刺激。',
    categorySlug: 'lingzhi', benefits: ['energy', 'immunity'], images: IMG.lingzhi,
    ingredients: ['云南阿拉比卡咖啡', '灵芝萃取物', '麦芽糊精'],
    howToUse: '每包用150ml热水冲泡,可加入燕麦奶或牛奶。每日1-2包。',
    malNumber: 'MAL20053344N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(88),
    variants: [
      { id: 'v-14-1', label: '15包装', priceCents: 5800, stock: 100, sku: 'NYH-LZ02-15' },
      { id: 'v-14-2', label: '30包装', priceCents: 10800, stock: 60, sku: 'NYH-LZ02-30' },
    ],
    reviews: [
      { id: 'r-14-1', userName: 'Bryan Tan', rating: 5, title: '不会心悸', body: '喝普通咖啡会心悸,这个完全没事,味道也好。', photoUrl: null, createdAt: d(24) },
      { id: 'r-14-2', userName: '张俊杰', rating: 4, title: '上班必备', body: '早晨一包,精神一上午。', photoUrl: null, createdAt: d(40) },
      { id: 'r-14-3', userName: 'Vincent Chan', rating: 5, title: '比想象中好喝', body: '本来担心灵芝味道苦,完全没有,咖啡香味很正。', photoUrl: null, createdAt: d(55) },
    ],
  },
  {
    id: 'p-15', slug: 'maitake-mushroom-extract', nameZh: '舞茸菇萃取胶囊', nameEn: 'Maitake Mushroom Extract',
    tagline: '日本舞茸D-Fraction,免疫调节',
    description: '日本进口舞茸D-Fraction提取物,每粒含舞茸萃取300mg,免疫调节首选。',
    longDescription: '采用日本静冈县栽培的舞茸,提取核心活性成分D-Fraction。每粒胶囊含舞茸萃取物300mg。植物素胶囊外壳,素食者可用。\n\n舞茸是日本传统养生菇菌,被誉为"森林菇王",含丰富β-葡聚糖,有助调节免疫与代谢。',
    categorySlug: 'lingzhi', benefits: ['immunity', 'slimming'], images: IMG.lingzhi,
    ingredients: ['舞茸萃取物', '植物素胶囊外壳'],
    howToUse: '每日2粒,饭后温水送服。',
    malNumber: 'MAL20055566N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(92),
    variants: [
      { id: 'v-15-1', label: '60粒装', priceCents: 9800, stock: 60, sku: 'NYH-LZ03-60' },
      { id: 'v-15-2', label: '120粒装', priceCents: 18800, stock: 35, sku: 'NYH-LZ03-120' },
    ],
    reviews: [
      { id: 'r-15-1', userName: '李美琪', rating: 4, title: '体重有控制', body: '搭配运动,效果还可以。', photoUrl: null, createdAt: d(30) },
      { id: 'r-15-2', userName: 'Jenny Tan', rating: 5, title: '冬天少感冒', body: '坚持吃了半年,免疫力感觉真的提升。', photoUrl: null, createdAt: d(48) },
    ],
  },
  {
    id: 'p-16', slug: 'cordyceps-extract-capsule', nameZh: '虫草萃取胶囊', nameEn: 'Cordyceps Extract Capsule',
    tagline: '人工虫草菌丝体,补肺益肾',
    description: '采用人工培育的虫草菌丝体萃取,虫草素含量高,补肺益肾,提升精力。',
    longDescription: '采用台湾人工培育的冬虫夏草菌丝体(Cordyceps Sinensis),通过现代发酵工艺萃取核心活性成分。每粒含虫草萃取物500mg,虫草素含量稳定。\n\n相比野生冬虫夏草,人工培育更可持续、更安全、更经济,核心成分含量稳定可控。',
    categorySlug: 'lingzhi', benefits: ['energy', 'lung', 'immunity'], images: IMG.lingzhi,
    ingredients: ['冬虫夏草菌丝体萃取物', '植物素胶囊外壳'],
    howToUse: '每日2粒,饭前温水送服。',
    malNumber: 'MAL20057788N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(105),
    variants: [
      { id: 'v-16-1', label: '60粒装', priceCents: 14800, stock: 50, sku: 'NYH-LZ04-60' },
      { id: 'v-16-2', label: '120粒装', priceCents: 28800, stock: 25, sku: 'NYH-LZ04-120' },
    ],
    reviews: [
      { id: 'r-16-1', userName: '黄建华', rating: 5, title: '精力充沛', body: '工作压力大,吃了之后体力明显改善。', photoUrl: null, createdAt: d(25) },
      { id: 'r-16-2', userName: 'Karen Liew', rating: 5, title: '咳嗽减轻', body: '老烟枪,经常咳嗽,吃了一段时间真的有改善。', photoUrl: null, createdAt: d(40) },
      { id: 'r-16-3', userName: '彭家伟', rating: 4, title: '不错', body: '价格相比真虫草便宜很多,效果也不错。', photoUrl: null, createdAt: d(58) },
    ],
  },
  {
    id: 'p-17', slug: 'multivitamin-women', nameZh: '女士每日综合维生素', nameEn: "Women's Daily Multivitamin",
    tagline: '23种维生素与矿物质,女性专属配方',
    description: '为亚洲女性特别配方,含23种维生素与矿物质,补充铁、叶酸、维生素D等关键营养。',
    longDescription: '为亚洲女性体质特别配方的每日综合维生素,含23种核心维生素与矿物质,包括女性容易缺乏的铁、叶酸、维生素D、维生素B群、钙、镁等。\n\n每瓶60粒,日服1粒,即可满足成年女性每日基础营养需求。配方简洁,无人工色素与防腐剂。',
    categorySlug: 'vitamins', benefits: ['qi-blood', 'energy', 'beauty'], images: IMG.vitamins,
    ingredients: ['维生素A', '维生素B群(B1/B2/B6/B12)', '维生素C', '维生素D3', '维生素E', '维生素K', '叶酸', '铁', '锌', '镁', '钙', '碘'],
    howToUse: '每日1粒,饭后温水送服。',
    malNumber: 'MAL20061122N', halalStatus: 'CERTIFIED', featured: true, active: true, createdAt: d(65),
    variants: [
      { id: 'v-17-1', label: '60粒装', priceCents: 7800, stock: 80, sku: 'NYH-VT01-60' },
      { id: 'v-17-2', label: '120粒装', priceCents: 14800, stock: 50, sku: 'NYH-VT01-120' },
    ],
    reviews: [
      { id: 'r-17-1', userName: '刘丽君', rating: 5, title: '气色好了', body: '本来一直贫血头晕,吃了一个月真的有改善。', photoUrl: null, createdAt: d(18) },
      { id: 'r-17-2', userName: 'Cindy Loh', rating: 4, title: '价格亲民', body: '相比某些进口品牌便宜很多,效果也不差。', photoUrl: null, createdAt: d(32) },
      { id: 'r-17-3', userName: '陈淑贞', rating: 5, title: '一天一粒方便', body: '不像某些要一天好几粒,这个简单坚持。', photoUrl: null, createdAt: d(48) },
      { id: 'r-17-4', userName: 'Eunice Tan', rating: 5, title: '推荐', body: '会回购,价格合理效果稳定。', photoUrl: null, createdAt: d(62) },
    ],
  },
  {
    id: 'p-18', slug: 'vitamin-d3-k2', nameZh: '维生素D3 + K2', nameEn: 'Vitamin D3 + K2',
    tagline: '5000IU维生素D3 + 100mcg K2,骨骼健康',
    description: '高单位维生素D3搭配K2,有助钙吸收,强健骨骼,适合长期室内工作者。',
    longDescription: '马来西亚虽然阳光充足,但室内工作者维生素D缺乏问题普遍。本品含5000IU维生素D3 + 100mcg维生素K2,K2能引导钙沉积于骨骼,避免血管钙化。\n\n每瓶60粒,日服1粒。素食胶囊,小颗粒易吞服。',
    categorySlug: 'vitamins', benefits: ['immunity'], images: IMG.vitamins,
    ingredients: ['维生素D3 5000IU', '维生素K2 (MK-7) 100mcg', '橄榄油', '素食胶囊'],
    howToUse: '每日1粒,随餐服用(脂溶性维生素与脂肪同食吸收佳)。',
    malNumber: 'MAL20063344N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(78),
    variants: [
      { id: 'v-18-1', label: '60粒装', priceCents: 8800, stock: 70, sku: 'NYH-VT02-60' },
    ],
    reviews: [
      { id: 'r-18-1', userName: '蔡家豪', rating: 5, title: '冬天必备', body: '马来西亚虽然热,但冷气房一整天还是缺D。', photoUrl: null, createdAt: d(22) },
      { id: 'r-18-2', userName: 'Joy Tan', rating: 4, title: '小颗粒好吞', body: '不像有些维生素那么大颗,容易吞服。', photoUrl: null, createdAt: d(37) },
      { id: 'r-18-3', userName: '罗振华', rating: 5, title: '骨密度提升', body: '体检骨密度比去年好,医生说继续吃。', photoUrl: null, createdAt: d(52) },
    ],
  },
  {
    id: 'p-19', slug: 'omega-3-fish-oil', nameZh: '深海鱼油 Omega-3', nameEn: 'Omega-3 Fish Oil',
    tagline: '挪威野生深海鱼油,EPA + DHA',
    description: '挪威野生深海鱼油,每粒含EPA 360mg + DHA 240mg,无腥味软胶囊。',
    longDescription: '严选挪威野生小型深海鱼,如鲱鱼、沙丁鱼,经分子蒸馏工艺去除重金属与污染物,纯净安全。每粒1000mg鱼油,含EPA 360mg、DHA 240mg。\n\n采用肠溶胶囊技术,避免腥味,饭后服用不嗳气。',
    categorySlug: 'vitamins', benefits: ['immunity', 'energy'], images: IMG.vitamins,
    ingredients: ['挪威野生深海鱼油', '维生素E (天然抗氧化)', '肠溶胶囊'],
    howToUse: '每日1-2粒,饭后温水送服。',
    malNumber: 'MAL20065566N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(98),
    variants: [
      { id: 'v-19-1', label: '60粒装', priceCents: 8800, stock: 70, sku: 'NYH-VT03-60' },
      { id: 'v-19-2', label: '180粒装', priceCents: 22800, stock: 30, sku: 'NYH-VT03-180' },
    ],
    reviews: [
      { id: 'r-19-1', userName: '吴俊宏', rating: 5, title: '完全不腥', body: '吃过其他牌子腥到不行,这个肠溶胶囊真的好。', photoUrl: null, createdAt: d(26) },
      { id: 'r-19-2', userName: 'Daniel Wong', rating: 4, title: '价格合理', body: '挪威产的相比某些品牌便宜,会一直回购。', photoUrl: null, createdAt: d(42) },
      { id: 'r-19-3', userName: '柯佩芬', rating: 5, title: '专注力提升', body: '连小朋友吃了之后注意力都比较集中。', photoUrl: null, createdAt: d(58) },
    ],
  },
  {
    id: 'p-20', slug: 'probiotics-30-billion', nameZh: '300亿益生菌', nameEn: '30 Billion Probiotics',
    tagline: '12种菌株,300亿活菌,肠道养护',
    description: '12种益生菌菌株,每包300亿活菌,搭配益生元,改善肠胃健康。',
    longDescription: '采用美国DuPont丹尼斯克菌株,12种益生菌包括嗜酸乳杆菌、双歧杆菌、乳双歧杆菌等。每包独立包装,常温保存,无需冷藏。每包300亿活菌 + 益生元(低聚果糖)。\n\n胃酸耐受性强,可直达肠道。适合长期便秘、腹胀、肠胃敏感、抗生素后菌群失调人群。',
    categorySlug: 'vitamins', benefits: ['digestion', 'immunity', 'beauty'], images: IMG.vitamins,
    ingredients: ['12种益生菌(嗜酸乳杆菌/双歧杆菌等)', '低聚果糖', '麦芽糊精'],
    howToUse: '每日1包,空腹温水(40°C以下)冲服。',
    malNumber: 'MAL20067788N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(88),
    variants: [
      { id: 'v-20-1', label: '15包装', priceCents: 6800, stock: 80, sku: 'NYH-VT04-15' },
      { id: 'v-20-2', label: '30包装', priceCents: 12800, stock: 50, sku: 'NYH-VT04-30' },
    ],
    reviews: [
      { id: 'r-20-1', userName: '林淑慧', rating: 5, title: '便秘改善', body: '困扰我多年的便秘问题真的有改善,不到一个月就规律了。', photoUrl: null, createdAt: d(20) },
      { id: 'r-20-2', userName: 'Stephanie Goh', rating: 4, title: '味道淡', body: '没什么味道,加在水里很好喝。', photoUrl: null, createdAt: d(35) },
      { id: 'r-20-3', userName: '吴佳颖', rating: 5, title: '小朋友也能吃', body: '5岁儿子也吃,肠胃好多了。', photoUrl: null, createdAt: d(50) },
      { id: 'r-20-4', userName: 'Ivy Lim', rating: 5, title: '抗生素后救星', body: '吃完抗生素肠胃乱,这个调理回来了。', photoUrl: null, createdAt: d(65) },
    ],
  },
  {
    id: 'p-21', slug: 'gift-set-prosperity', nameZh: '富足如意礼盒', nameEn: 'Prosperity Gift Set',
    tagline: '燕窝 + 高丽参 + 灵芝孢子粉,送礼首选',
    description: '集三大养生珍品于一盒:崖燕鲜炖燕窝7瓶 + 高丽红参茶15包 + 破壁灵芝孢子粉30包。',
    longDescription: '南洋本草最受欢迎的送礼选择,集三大养生珍品于一盒。崖燕鲜炖燕窝(7瓶)适合女性养颜;高丽红参茶(15包)温补气血;破壁灵芝孢子粉(30包)调节免疫。\n\n外盒采用马来西亚 Peranakan 花砖纹饰,内衬丝绒,搭配手写贺卡空白页。送父母、长辈、客户、伴侣皆相宜。',
    categorySlug: 'giftsets', benefits: ['beauty', 'qi-blood', 'immunity'], images: IMG.giftsets,
    ingredients: ['崖燕鲜炖燕窝×7', '高丽红参茶×15', '破壁灵芝孢子粉×30'],
    howToUse: '依各产品标签使用方法服用。',
    malNumber: 'MAL20071122N', halalStatus: 'CERTIFIED', featured: true, active: true, createdAt: d(58),
    variants: [
      { id: 'v-21-1', label: '标准礼盒', priceCents: 38800, stock: 25, sku: 'NYH-GF01-STD' },
    ],
    reviews: [
      { id: 'r-21-1', userName: '陈宇轩', rating: 5, title: '送父母最佳', body: '过年送给爸妈,他们非常喜欢,包装很有面子。', photoUrl: null, createdAt: d(22) },
      { id: 'r-21-2', userName: 'Patricia Tan', rating: 5, title: '客户也满意', body: '送给重要客户,得到很多好评,有面子有诚意。', photoUrl: null, createdAt: d(38) },
      { id: 'r-21-3', userName: '黄丽媛', rating: 5, title: '盒子很美', body: 'Peranakan 花纹真的很有马来西亚味道,送外国朋友也很合适。', photoUrl: null, createdAt: d(55) },
    ],
  },
  {
    id: 'p-22', slug: 'gift-set-radiance', nameZh: '美颜养颜礼盒', nameEn: 'Radiance Gift Set',
    tagline: '燕窝 + 胶原蛋白肽 + 修护面霜,女性最爱',
    description: '即食燕窝冻12盒 + 鱼胶原蛋白肽粉30包 + 燕窝胶原修护面霜50ml。',
    longDescription: '专为现代女性设计的美颜养颜礼盒。即食燕窝冻(12盒)办公室方便食用;深海鱼胶原蛋白肽粉(30包)内服补充;燕窝胶原修护面霜(50ml)外用滋润。内外兼修。\n\n外盒采用奶白色调,印玫瑰金细节,搭配手写贺卡。送闺蜜、太太、女儿生日皆适合。',
    categorySlug: 'giftsets', benefits: ['beauty'], images: IMG.giftsets,
    ingredients: ['即食燕窝冻×12', '鱼胶原蛋白肽粉×30', '燕窝胶原修护面霜50ml×1'],
    howToUse: '依各产品标签使用方法。',
    malNumber: 'MAL20073344N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(72),
    variants: [
      { id: 'v-22-1', label: '标准礼盒', priceCents: 35800, stock: 30, sku: 'NYH-GF02-STD' },
    ],
    reviews: [
      { id: 'r-22-1', userName: '林雪儿', rating: 5, title: '生日礼物首选', body: '送闺蜜30岁生日,她爱不释手,说包装比内容更心动。', photoUrl: null, createdAt: d(18) },
      { id: 'r-22-2', userName: 'Felicia Tan', rating: 5, title: '内外兼修', body: '吃的擦的都有,真的很贴心。', photoUrl: null, createdAt: d(32) },
      { id: 'r-22-3', userName: '张佩瑶', rating: 4, title: '价格合适', body: '相比单买便宜不少,推荐。', photoUrl: null, createdAt: d(48) },
    ],
  },
  {
    id: 'p-23', slug: 'gift-set-scholar', nameZh: '文人雅士礼盒', nameEn: 'Scholar Gift Set',
    tagline: '人参茶 + 灵芝咖啡 + 黑米茶,适合长辈',
    description: '高丽红参茶30包 + 灵芝咖啡15包 + 人参黑米茶15包,适合长辈与文人。',
    longDescription: '送给爱品茶、爱阅读、注重日常养生的长辈与文人雅士。三种茶饮陪伴每日不同时段:晨起一杯灵芝咖啡提神;午后一杯黑米茶养颜;晚上一杯红参茶安神。\n\n外盒采用墨色调,印宋体字与水墨山水插画,有书卷气息。',
    categorySlug: 'giftsets', benefits: ['energy', 'qi-blood', 'immunity'], images: IMG.giftsets,
    ingredients: ['高丽红参茶×30', '灵芝咖啡×15', '人参黑米茶×15'],
    howToUse: '依各产品标签使用方法冲泡。',
    malNumber: 'MAL20075566N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(85),
    variants: [
      { id: 'v-23-1', label: '标准礼盒', priceCents: 22800, stock: 40, sku: 'NYH-GF03-STD' },
    ],
    reviews: [
      { id: 'r-23-1', userName: '邓子豪', rating: 5, title: '送爸爸他很喜欢', body: '爸爸是老茶客,这个礼盒他说很有品味。', photoUrl: null, createdAt: d(25) },
      { id: 'r-23-2', userName: 'Henry Lim', rating: 5, title: '盒子很有禅意', body: '墨色配水墨画,真的很雅致。', photoUrl: null, createdAt: d(40) },
      { id: 'r-23-3', userName: '苏婉晴', rating: 4, title: '送给老板', body: '送给老板很合适,商务又有文化感。', photoUrl: null, createdAt: d(58) },
    ],
  },
  {
    id: 'p-24', slug: 'gift-set-vitality', nameZh: '日常活力礼盒', nameEn: 'Vitality Gift Set',
    tagline: '维生素 + 鱼油 + 益生菌,日常营养一站补齐',
    description: '女士综合维生素 + 深海鱼油 + 300亿益生菌,日常基础营养礼盒。',
    longDescription: '三大日常基础营养品打包入一盒,送给注重健康的家人朋友。女士每日综合维生素60粒、深海鱼油60粒、300亿益生菌30包,够吃一个月。\n\n外盒以南洋绿与象牙白为主调,印简洁线描植物图案,清新现代。',
    categorySlug: 'giftsets', benefits: ['immunity', 'energy', 'digestion'], images: IMG.giftsets,
    ingredients: ['女士综合维生素60粒', '深海鱼油60粒', '300亿益生菌30包'],
    howToUse: '依各产品标签使用方法服用。',
    malNumber: 'MAL20077788N', halalStatus: 'CERTIFIED', featured: false, active: true, createdAt: d(98),
    variants: [
      { id: 'v-24-1', label: '标准礼盒', priceCents: 21800, stock: 35, sku: 'NYH-GF04-STD' },
    ],
    reviews: [
      { id: 'r-24-1', userName: '何嘉欣', rating: 5, title: '送给妈妈', body: '妈妈本来就要买这些,直接打包送她省事。', photoUrl: null, createdAt: d(22) },
      { id: 'r-24-2', userName: 'Andrew Tan', rating: 4, title: '基础齐全', body: '三样都是必备的,组合在一起省钱。', photoUrl: null, createdAt: d(38) },
      { id: 'r-24-3', userName: '刘文豪', rating: 5, title: '送同事很好', body: '送同事这个比送零食有意义。', photoUrl: null, createdAt: d(55) },
    ],
  },
]

export function getProductBySlug(slug: string): MockProduct | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): MockProduct[] {
  return PRODUCTS.filter(p => p.categorySlug === categorySlug && p.active)
}

export function getFeaturedProducts(): MockProduct[] {
  return PRODUCTS.filter(p => p.featured && p.active)
}

export function searchProducts(query: string): MockProduct[] {
  const q = query.toLowerCase()
  return PRODUCTS.filter(p =>
    p.active && (
      p.nameZh.includes(query) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.description.includes(query) ||
      p.tagline.includes(query)
    )
  )
}

export function getBenefitNameZh(slug: string): string {
  return BENEFIT_TAGS.find(b => b.slug === slug)?.nameZh ?? slug
}

export function productToCardData(p: MockProduct) {
  const reviewCount = p.reviews.length
  const rating = reviewCount > 0
    ? p.reviews.reduce((s, r) => s + r.rating, 0) / reviewCount
    : null
  return {
    slug: p.slug,
    nameZh: p.nameZh,
    nameEn: p.nameEn,
    tagline: p.tagline,
    imageUrl: p.images[0] ?? '',
    priceMinCents: Math.min(...p.variants.map(v => v.priceCents)),
    benefits: p.benefits.map(slug => getBenefitNameZh(slug)),
    soldOut: p.variants.every(v => v.stock <= 0),
    rating,
    reviewCount,
    isBestSeller: p.featured,
    isNew: Date.now() - p.createdAt.getTime() < 30 * 24 * 60 * 60 * 1000,
  }
}
