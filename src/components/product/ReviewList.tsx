type R = {
  id: string
  userName: string
  rating: number
  title: string
  body: string
  photoUrl: string | null
  createdAt: Date
}

function Stars({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const cls = size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-xs' : 'text-sm'
  return (
    <span className={`text-turmeric ${cls}`}>
      {'★'.repeat(Math.round(rating))}
      {'☆'.repeat(5 - Math.round(rating))}
    </span>
  )
}

export function ReviewList({ reviews }: { reviews: R[] }) {
  if (reviews.length === 0) return <p className="text-sage py-6">暂无评价 — 成为第一个留评的顾客</p>

  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  const dist = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }))

  return (
    <div>
      {/* Aggregate summary */}
      <div className="flex flex-col sm:flex-row gap-6 p-5 bg-coconut/40 rounded-sm mb-8">
        <div className="text-center shrink-0">
          <div className="font-display text-5xl text-cacao">{avg.toFixed(1)}</div>
          <Stars rating={avg} size="lg" />
          <div className="text-xs text-sage mt-1">共 {reviews.length} 条评价</div>
        </div>
        <div className="flex-1 space-y-1.5">
          {dist.map((d) => (
            <div key={d.star} className="flex items-center gap-2 text-xs">
              <span className="text-sage w-4">{d.star}★</span>
              <div className="flex-1 bg-sage/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-turmeric h-2 rounded-full"
                  style={{ width: `${reviews.length ? (d.count / reviews.length) * 100 : 0}%` }}
                />
              </div>
              <span className="text-sage w-4 text-right">{d.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="space-y-6">
        {reviews.map((r) => (
          <div key={r.id} className="border-b border-sage/20 pb-6">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-medium text-sm">{r.userName}</span>
              <span className="text-[10px] bg-sage/10 text-sage px-1.5 py-0.5 rounded-sm">已验证购买</span>
              <Stars rating={r.rating} size="sm" />
              <span className="text-xs text-sage ml-auto">
                {new Date(r.createdAt).toLocaleDateString('en-MY', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
            <h4 className="font-display text-base mb-1">{r.title}</h4>
            <p className="text-cacao/80 text-sm leading-relaxed">{r.body}</p>
            {r.photoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={r.photoUrl} alt="" className="mt-3 h-24 w-24 object-cover rounded-sm" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
