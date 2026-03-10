"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface BeforeAfterImage {
  before: string
  after: string
  title: string
  description: string
  breed?: string
}

interface BeforeAfterSliderProps {
  images: BeforeAfterImage[]
}

export function BeforeAfterSlider({ images }: BeforeAfterSliderProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((item, index) => (
        <BeforeAfterCard key={index} {...item} />
      ))}
    </div>
  )
}

function BeforeAfterCard({ before, after, title, description, breed }: BeforeAfterImage) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div
        className="relative aspect-square overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image (Bottom Layer) */}
        <div className="absolute inset-0">
          <img src={before || "/placeholder.svg"} alt="Before grooming" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            BEFORE
          </div>
        </div>

        {/* After Image (Top Layer with Clip) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img src={after || "/placeholder.svg"} alt="After grooming" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
            AFTER
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-primary rounded-full" />
              <div className="w-1 h-4 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        {breed && <p className="text-sm text-primary font-semibold mb-2">{breed}</p>}
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Card>
  )
}
