'use client'
import { useEffect, useState } from 'react'

const MESSAGES = [
  '全马免运 · 订单满 RM150',
  '半岛 RM10 · 东马 RM15',
  '工作日 24 小时内发货',
  '7天无忧退货保障',
  '官方正品 · HALAL 认证',
]

export function ShippingTicker() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length)
        setVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-nanyang text-ivory text-xs md:text-sm text-center py-2 font-body tracking-wide overflow-hidden">
      <span
        className="inline-block transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {MESSAGES[idx]}
      </span>
    </div>
  )
}
