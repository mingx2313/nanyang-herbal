'use client'
import { useState } from 'react'

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0)
  return (
    <div className="space-y-3">
      <div className="aspect-square bg-coconut overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[idx]} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`aspect-square bg-coconut overflow-hidden border-2 ${
              i === idx ? 'border-nanyang' : 'border-transparent'
            }`}
            aria-label={`图片 ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
