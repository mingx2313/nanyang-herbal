const ICONS: Record<string, string> = {
  补气血: '🩸',
  养颜美容: '🌸',
  助眠安神: '🌙',
  提神抗疲劳: '⚡',
  润肺止咳: '🌿',
  健脾养胃: '🍵',
  增强免疫: '🛡️',
  纤体瘦身: '🧘',
}

export function BenefitIcons({ benefits }: { benefits: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {benefits.map((b) => (
        <div key={b} className="border border-sage/30 p-5 text-center">
          <div className="text-3xl mb-2">{ICONS[b] ?? '✦'}</div>
          <div className="text-sm">{b}</div>
        </div>
      ))}
    </div>
  )
}
