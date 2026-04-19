export function TrustBadges({
  malNumber,
  halalStatus,
}: {
  malNumber: string | null
  halalStatus: string
}) {
  const badges = [
    {
      icon: '🌙',
      title: 'HALAL',
      subtitle: halalStatus === 'CERTIFIED' ? 'JAKIM 认证' : '申请中',
      highlight: halalStatus === 'CERTIFIED',
    },
    {
      icon: '🏥',
      title: 'KKM 注册',
      subtitle: malNumber ?? 'MAL 注册中',
      highlight: !!malNumber,
    },
    {
      icon: '🏭',
      title: 'GMP 认证',
      subtitle: '良好生产规范',
      highlight: true,
    },
    {
      icon: '🔬',
      title: 'SGS 检测',
      subtitle: '第三方实验室',
      highlight: true,
    },
    {
      icon: '↩️',
      title: '7天退货',
      subtitle: '未开封可退',
      highlight: true,
    },
    {
      icon: '🔒',
      title: '安全结账',
      subtitle: 'SSL 加密',
      highlight: true,
    },
  ]

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
      {badges.map((b) => (
        <div
          key={b.title}
          className={`flex flex-col items-center text-center p-3 rounded-sm border ${
            b.highlight ? 'border-nanyang/30 bg-nanyang/5' : 'border-sage/20 bg-coconut/40'
          }`}
        >
          <span className="text-2xl mb-1">{b.icon}</span>
          <div className="font-display text-xs text-cacao font-semibold leading-tight">{b.title}</div>
          <div className="text-[10px] text-sage mt-0.5 leading-tight">{b.subtitle}</div>
        </div>
      ))}
    </div>
  )
}
