"use client"

import React, { useRef, useCallback } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

interface IconProps { 
  className?: string
  style?: React.CSSProperties 
}

function HeartIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function ShieldIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function SparklesIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
    </svg>
  )
}

function AwardIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={style}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  )
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)"
  }, [])

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export function ValuesSection() {
  const values = [
    {
      icon: HeartIcon,
      title: "Gentle Care",
      description: "Every pup deserves patience and love during their grooming experience.",
    },
    {
      icon: ShieldIcon,
      title: "Safety First",
      description: "Your pet's wellbeing is our top priority in everything we do.",
    },
    {
      icon: SparklesIcon,
      title: "Premium Quality",
      description: "We use only the finest products and techniques for exceptional results.",
    },
    {
      icon: AwardIcon,
      title: "Expert Team",
      description: "15+ years of professional grooming experience you can trust.",
    },
  ]

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#FFB74D]/10 text-[#FFB74D] rounded-full text-sm font-semibold tracking-widest mb-4">
            OUR VALUES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 flex items-center justify-center flex-wrap gap-x-3">
            Why Choose
            <Image
              src="/images/puppyarazzi-logo.png"
              alt="Puppyarazzi"
              width={180}
              height={45}
              className="inline-block"
            />
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to elevating dog grooming through compassionate care, expert technique, and a joyful
            experience—one happy pup at a time.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 120} duration={600}>
                <TiltCard>
                  <div 
                    className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFB74D]/10 mb-5">
                      {value.icon({ className: "h-7 w-7", style: { color: "#FFB74D" } })}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#1a1a1a]">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
