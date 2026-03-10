"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Scissors, Heart, Sparkles, Camera } from "lucide-react"

const showcaseImages = [
  { src: "/images/gallery/yorkie-with-bow.jpg", alt: "Yorkie with a cute bow after grooming", pos: "center 30%" },
  { src: "/images/gallery/black-poodle-groomed.jpg", alt: "Beautifully groomed black poodle", pos: "center 25%" },
  { src: "/images/gallery/white-bichon-portrait.jpg", alt: "White bichon portrait after grooming", pos: "center 20%" },
  { src: "/images/gallery/bulldog-orange-bandana.jpg", alt: "Happy bulldog with orange bandana", pos: "center 35%" },
  { src: "/images/gallery/westie-blue-bandana.jpg", alt: "Westie wearing a blue bandana", pos: "center 40%" },
  { src: "/images/gallery/beagle-tropical-bandana.jpg", alt: "Beagle with tropical bandana", pos: "center 30%" },
]

export function DogShowcaseSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % showcaseImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Full-width split screen */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">

        {/* Left: Single dog photo, hard cut rotation */}
        <div className="relative min-h-[50vh] lg:min-h-0">
          <Image
            key={current}
            src={showcaseImages[current].src}
            alt={showcaseImages[current].alt}
            fill
            className="object-cover"
            style={{ objectPosition: showcaseImages[current].pos }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {showcaseImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                aria-label={`Show dog ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Text block with branding */}
        <div className="relative bg-[#FFF5F0] flex flex-col items-center justify-center px-8 py-16 md:px-16 lg:py-0">
          {/* Decorative paw prints */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-[8%] right-[10%] w-20 h-20 rounded-full bg-accent/10" style={{ animation: "float 7s ease-in-out infinite" }} />
            <div className="absolute bottom-[12%] left-[6%] w-24 h-24 rounded-full bg-accent/15" style={{ animation: "float 5s ease-in-out 1s infinite" }} />
            <div className="absolute top-[55%] right-[25%] w-10 h-10 rounded-full bg-accent/8" style={{ animation: "float 6s ease-in-out 0.5s infinite" }} />
          </div>

          <div className="relative z-10 max-w-md text-center">
            <ScrollReveal direction="up" duration={600}>
              {/* Logo */}
              <div className="mb-8">
                <Image
                  src="/images/puppyarazzi-logo.png"
                  alt="Puppyarazzi"
                  width={280}
                  height={80}
                  className="mx-auto h-16 md:h-20 w-auto"
                />
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                Premium Care for Picture-Perfect Pups
              </h2>

              {/* Accent underline */}
              

              {/* Subtitle */}
              <p className="text-foreground/60 text-lg md:text-xl mb-10 leading-relaxed">
                Beautiful results with comfort and care. Every visit, every time.
              </p>
            </ScrollReveal>

            {/* Feature pills */}
            <ScrollReveal direction="up" delay={200} duration={600}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Scissors, label: "Expert Styling" },
                  { icon: Heart, label: "Gentle Handling" },
                  { icon: Sparkles, label: "Organic Products" },
                  { icon: Camera, label: "Photo-Ready" },
                ].map((item, i) => (
                  null
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom organic wave overlaid across full width (both photo + cream) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[50px] md:h-[65px] lg:h-[100px] block">
          <path d="M0,25 C160,80 300,5 480,40 C660,75 760,10 940,45 C1120,80 1240,15 1360,35 C1420,45 1440,30 1440,30 L1440,100 L0,100 Z" className="fill-background" />
        </svg>
      </div>
    </section>
  )
}
