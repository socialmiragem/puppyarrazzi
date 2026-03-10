"use client"

import { Button } from "@/components/ui/button"
import { PhoneIcon } from "@/components/simple-icons"
import { ScrollReveal } from "@/components/scroll-reveal"

interface CTABannerProps {
  title?: string
  description?: string
  variant?: "muted" | "accent"
}

export function CTABanner({
  title = "Ready to Pamper Your Pup?",
  description = "Call us today to schedule your dog's appointment. Our friendly team is ready to help.",
  variant = "accent",
}: CTABannerProps) {
  const bg = variant === "accent" ? "bg-accent" : "bg-muted"
  const titleColor = variant === "accent" ? "text-white" : "text-primary-foreground"
  const descColor = variant === "accent" ? "text-white/80" : "text-primary-foreground/80"

  const waveFill = variant === "accent" ? "rgb(248, 183, 25)" : "rgb(238, 77, 151)"

  return (
    <section className={`relative ${bg} overflow-hidden`}>
      {/* Organic blob top transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[98%] overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[50px] md:h-[65px] lg:h-[100px] block">
          <path d="M0,100 L0,70 C180,100 300,30 480,40 C660,50 720,90 920,80 C1120,70 1180,25 1320,35 C1400,40 1430,65 1440,55 L1440,100 Z" fill={waveFill} />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-6 right-[10%] w-12 h-12 rounded-full bg-white/10" />
        <div className="absolute bottom-8 left-[8%] w-16 h-16 rounded-full bg-white/8" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <ScrollReveal direction="up" duration={600}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-balance ${titleColor}`}>
              {title}
            </h2>
            <p className={`text-lg mb-8 text-pretty ${descColor}`}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 rounded-full"
                asChild
              >
                <a href="tel:5614295589">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call (561) 429-5589
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 px-8 rounded-full bg-transparent"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
