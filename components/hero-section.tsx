"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Star, Scissors, Sparkles, Heart } from "lucide-react"
import { useParallax } from "@/hooks/use-scroll-animation"

const mosaicImages = [
  { src: "/images/gallery/yorkie-with-bow.jpg", alt: "Groomed Yorkie with bow" },
  { src: "/images/gallery/black-poodle-groomed.jpg", alt: "Groomed black poodle" },
  { src: "/images/gallery/white-maltese-groomed.jpg", alt: "Groomed white Maltese" },
  { src: "/images/gallery/bulldog-orange-bandana.jpg", alt: "Bulldog with bandana" },
  { src: "/images/gallery/four-dogs-group.jpg", alt: "Group of happy groomed dogs" },
  { src: "/images/gallery/two-yorkies-happy.jpg", alt: "Two happy Yorkies" },
  { src: "/images/gallery/westie-blue-bandana.jpg", alt: "Westie with blue bandana" },
  { src: "/images/gallery/white-bichon-portrait.jpg", alt: "Bichon portrait" },
  { src: "/service-full-groom.jpg", alt: "Full groom service" },
  { src: "/images/gallery/beagle-tropical-bandana.jpg", alt: "Beagle with tropical bandana" },
  { src: "/images/gallery/yorkie-yellow-bow.jpg", alt: "Yorkie with yellow bow" },
  { src: "/images/gallery/poodle-tropical-bandana.jpg", alt: "Poodle with tropical bandana" },
]

const stats = [
  { icon: Sparkles, value: "5-Star", label: "Rated on Google" },
  { icon: Heart, value: "100%", label: "Stress-Free & Gentle" },
  { icon: Scissors, value: "All Breeds", label: "Every Coat Type Welcome" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const scrollY = useParallax()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative">
      {/* Main Hero */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] overflow-hidden bg-white" style={{ touchAction: "pan-y" }}>
        {/* Mosaic Image Grid Background with Parallax */}
        <div
          className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 grid-rows-3 gap-[2px] will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.15}px) scale(1.1)` }}
        >
          {mosaicImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 25vw"
                priority={i < 4}
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-foreground/75" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] md:min-h-[85vh] px-4 text-center pt-12 pb-32 md:pb-40">
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm md:text-base font-medium tracking-[0.25em] uppercase mb-6 text-card">
              Wellington, FL
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance">
              Where Every Pup Gets the{" "}
              <span className="text-white">Star Treatment</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Stress-free, gentle grooming in a calm, cat-free environment.
              Professional care tailored to every breed, coat, and personality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-bold px-10 py-6 text-base rounded-full"
                onClick={() => (window.location.href = "tel:5614295589")}
              >
                Book Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-6 text-base rounded-full bg-transparent"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Floating Google Review Badge */}
          <div
            className={`mt-10 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="https://www.google.com/search?q=puppyarazzi+dog+grooming+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white font-semibold text-xs sm:text-sm">5.0</span>
              <span className="text-white/60 text-xs sm:text-sm">on Google</span>
              <span className="text-white/40 text-xs hidden sm:inline">|</span>
              <span className="text-white/60 text-xs sm:text-sm hidden sm:inline">100+ Reviews</span>
            </a>
          </div>
        </div>

        {/* Curved Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[60px] md:h-[80px] lg:h-[120px] block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C180,100 360,0 540,50 C720,100 900,20 1080,60 C1200,85 1320,30 1440,50 L1440,120 L0,120 Z"
              className="fill-muted"
            />
          </svg>
        </div>
      </section>

      {/* Accent Stats Strip */}
      <section className="relative bg-muted py-10 md:py-14">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-4 left-[10%] w-6 h-6 rounded-full bg-white/10" />
          <div className="absolute bottom-6 right-[15%] w-4 h-4 rounded-full bg-white/10" />
          <div className="absolute top-1/2 left-[60%] w-3 h-3 rounded-full bg-white/15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-white/80 text-sm md:text-base font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}
