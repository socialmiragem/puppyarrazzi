"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

function BubbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="6" />
      <circle cx="19" cy="6" r="3" />
      <circle cx="6" cy="19" r="2" />
    </svg>
  )
}

const fullGroomFeatures = [
  "Breed-specific haircut & styling",
  "Luxurious organic shampoo bath",
  "Blow dry & professional brushing",
  "Ear cleaning & nail trim",
  "Sanitary & paw pad trimming",
  "Cologne, bandana, or bow finish",
]

const bathFeatures = [
  "Deep cleansing organic bath",
  "Blow dry & thorough brushing",
  "Ear cleaning & nail trim",
  "De-shedding treatment",
  "Bandana or bow",
  "Fresh cologne spritz",
]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-x-hidden">
      {/* Organic blob transition - pink to gold */}
      <div className="relative bg-muted" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px] lg:h-[120px] block relative -mb-[1px]">
          <rect width="1440" height="120" className="fill-muted" />
          <path d="M0,20 C120,80 240,5 400,45 C560,85 640,15 800,50 C960,85 1080,10 1220,40 C1340,65 1420,25 1440,35 L1440,120 L0,120 Z" className="fill-accent" />
        </svg>
      </div>

      {/* Full Groom - accent (golden) background */}
      <div className="relative bg-accent pt-8 md:pt-12">
        {/* Section header - inside the accent block */}
        <div className="container mx-auto px-4 text-center mb-12 md:mb-16 relative z-10">
          <ScrollReveal direction="up" duration={600}>
            <p className="font-semibold tracking-widest uppercase text-sm mb-3 text-background">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-white">
              Pamper Your Pup Like a Star
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-card">
              Every dog deserves to look and feel amazing. Choose from our signature services tailored to every breed, coat, and personality.
            </p>
          </ScrollReveal>
        </div>

        {/* Floating decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-8 left-[8%] w-16 h-16 rounded-full bg-white/15" style={{ animation: "float 6s ease-in-out infinite" }} />
          <div className="absolute bottom-12 right-[12%] w-10 h-10 rounded-full bg-white/10" style={{ animation: "float 5s ease-in-out 1s infinite" }} />
          <div className="absolute top-1/2 right-[8%] w-16 h-16 rounded-full bg-white/10" style={{ animation: "float 7s ease-in-out 0.5s infinite" }} />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-20">
            {/* Image */}
            <ScrollReveal direction="left" duration={700}>
              <div className="relative max-w-lg mx-auto">
                <div className="absolute -inset-3 rounded-3xl bg-white/20 -rotate-2" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src="/service-full-groom.jpg"
                    alt="Professional full dog grooming at Puppyarazzi"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Copy */}
            <ScrollReveal direction="right" duration={700} delay={150}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/25 flex items-center justify-center">
                  <ScissorsIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/80 font-semibold text-sm uppercase tracking-widest">Signature Service</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
                The Full Groom
              </h3>
              <p className="text-lg mb-8 leading-relaxed text-white/80">
                A head-to-tail transformation your pup will love. Breed-specific styling by expert groomers who treat every dog like their own.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {fullGroomFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-white shrink-0" />
                    <span className="text-sm font-medium text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:5614295589"
                className="inline-flex items-center gap-2.5 bg-foreground text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-foreground/90 transition-colors shadow-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                Call to Book a Groom
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bath & Brush - muted (pink) background */}
      <div className="relative bg-muted">
        {/* Organic blob transition from accent to muted */}
        <div className="absolute top-0 left-0 right-0 -translate-y-[98%] overflow-hidden">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] lg:h-[100px] block">
            <path d="M0,100 L0,60 C160,100 280,25 440,30 C600,35 680,85 860,75 C1040,65 1100,20 1260,35 C1380,45 1420,70 1440,50 L1440,100 Z" fill="rgb(238, 77, 151)" />
          </svg>
        </div>

        {/* Floating decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-12 right-[10%] w-14 h-14 rounded-full bg-white/15" style={{ animation: "float 5.5s ease-in-out infinite" }} />
          <div className="absolute bottom-16 left-[8%] w-16 h-16 rounded-full bg-white/10" style={{ animation: "float 6.5s ease-in-out 0.8s infinite" }} />
          <div className="absolute top-1/3 left-[5%] w-10 h-10 rounded-full bg-white/10" style={{ animation: "float 7s ease-in-out 1.5s infinite" }} />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy - reversed order on desktop */}
            <ScrollReveal direction="left" duration={700} delay={150} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/25 flex items-center justify-center">
                  <BubbleIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/80 font-semibold text-sm uppercase tracking-widest">Feel-Good Fresh</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Bath & Brush
              </h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                A refreshing spa day that leaves your dog squeaky clean, silky soft, and smelling like a dream. Perfect between grooms or as a regular treat.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {bathFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-white shrink-0" />
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:5614295589"
                className="inline-flex items-center gap-2.5 bg-white text-muted font-bold px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                <PhoneIcon className="w-5 h-5" />
                Call to Book a Bath
              </a>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right" duration={700} className="order-1 lg:order-2">
              <div className="relative max-w-lg mx-auto">
                <div className="absolute -inset-3 rounded-3xl bg-white/20 rotate-2" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src="/service-spa-bath.jpg"
                    alt="Professional dog bath service at Puppyarazzi"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Organic blob bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[98%] z-10 overflow-hidden">
          <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] lg:h-[100px] block">
            <path d="M0,0 C120,0 200,65 380,60 C560,55 600,10 780,15 C960,20 1020,72 1180,65 C1340,58 1400,25 1440,0 L1440,0 Z" fill="rgb(238, 77, 151)" />
          </svg>
        </div>
      </div>

      {/* Spacer for bottom wave */}
      <div className="h-12 md:h-16 bg-white" />
    </section>
  )
}
