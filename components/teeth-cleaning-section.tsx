"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Phone, Sparkles, Heart, ShieldCheck, SmilePlus, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useEffect, useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const beforeAfterPairs = [
  {
    before: "/teeth/before-1.jpg",
    after: "/teeth/after-1.jpg",
    label: "Plaque & tartar removal",
  },
  {
    before: "/teeth/before-2.jpg",
    after: "/teeth/after-2.jpg",
    label: "Deep cleaning & whitening",
  },
  {
    before: "/teeth/before-2b.jpg",
    after: "/teeth/after-2b.jpg",
    label: "Full mouth restoration",
  },
  {
    before: "/teeth/before-3.jpg",
    after: "/teeth/after-3.jpg",
    label: "Tartar & stain removal",
  },
]

const funFacts = [
  { icon: Heart, stat: "80%", text: "of dogs show dental disease signs by age 3" },
  { icon: ShieldCheck, stat: "100%", text: "anesthesia-free for a stress-free experience" },
  { icon: SmilePlus, stat: "1000+", text: "happy smiles cleaned at Puppyarazzi" },
]

function FlipCard({ before, after, label, shouldPeek = false }: { before: string; after: string; label: string; shouldPeek?: boolean }) {
  const [flipped, setFlipped] = useState(false)
  const [peeking, setPeeking] = useState(false)
  const { ref: peekRef, isVisible: peekVisible } = useScrollAnimation({ threshold: 0.3 })
  const hasPeeked = useRef(false)

  useEffect(() => {
    if (shouldPeek && peekVisible && !hasPeeked.current) {
      hasPeeked.current = true
      const timer = setTimeout(() => {
        setPeeking(true)
        setTimeout(() => setPeeking(false), 800)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [shouldPeek, peekVisible])

  return (
    <button
      ref={peekRef}
      type="button"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="group relative w-full aspect-square cursor-pointer [perspective:1000px] text-left"
      aria-label={`${label} - click to see ${flipped ? "before" : "after"}`}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{
          transform: flipped ? "rotateY(180deg)" : peeking ? "rotateY(18deg)" : "rotateY(0deg)",
        }}
      >
        {/* Before (front) */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <Image src={before} alt={`Before - ${label}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Before
          </span>
          <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium">
            Tap to reveal the magic
          </span>
        </div>
        {/* After (back) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden">
          <Image src={after} alt={`After - ${label}`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            After
          </span>
          <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium">
            {label}
          </span>
        </div>
      </div>
    </button>
  )
}

export function TeethCleaningSection() {
  return (
    <section id="dental" className="relative overflow-x-hidden overflow-y-visible">
      {/* Fun angled hero banner */}
      <div className="relative bg-foreground py-16 md:py-24">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div className="absolute w-6 h-6 rounded-full bg-white top-[10%] left-[5%]" />
          <div className="absolute w-4 h-4 rounded-full bg-white top-[25%] left-[20%]" />
          <div className="absolute w-8 h-8 rounded-full bg-white top-[15%] left-[45%]" />
          <div className="absolute w-5 h-5 rounded-full bg-white top-[60%] left-[75%]" />
          <div className="absolute w-7 h-7 rounded-full bg-white top-[80%] left-[30%]" />
          <div className="absolute w-3 h-3 rounded-full bg-white top-[40%] left-[90%]" />
          <div className="absolute w-6 h-6 rounded-full bg-white top-[70%] left-[55%]" />
          <div className="absolute w-4 h-4 rounded-full bg-white top-[50%] left-[10%]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up" duration={800}>
            <div className="text-center max-w-3xl mx-auto">
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                {"Smile Makeovers Your Pup Will Love"}
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                {"Our gentle, anesthesia-free teeth cleaning keeps your dog's chompers sparkling and their breath fresh enough for all the face kisses."}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Organic blob bottom edge */}
        <div className="absolute -bottom-[1px] left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[50px] md:h-[70px] lg:h-[100px] block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 L1440,100 L1440,40 C1380,75 1280,10 1120,25 C960,40 900,80 740,70 C580,60 500,5 340,20 C180,35 100,75 0,50 Z"
              className="fill-muted"
            />
          </svg>
        </div>
      </div>

      {/* Fun facts strip */}
      <div className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" duration={700}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {funFacts.map((fact, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center">
                    <fact.icon className="h-7 w-7 text-accent" />
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-background">{fact.stat}</span>
                  <span className="text-sm max-w-[200px] text-background">{fact.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Before & After flip cards */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" duration={800}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Proof Is in the Smile
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Hover or tap these cards to see real before-and-after transformations from our dental spa.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {beforeAfterPairs.map((pair, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} duration={700}>
                <FlipCard {...pair} shouldPeek={i === 0} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column: action photos + benefits */}
      <div className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" duration={800}>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                  <Image
                    src="/teeth/dental-action.jpg"
                    alt="Professional dental cleaning on a happy Labrador"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg mt-8">
                  <Image
                    src="/teeth/dental-action-2.jpg"
                    alt="Gentle teeth cleaning on a relaxed Poodle"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} duration={800}>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-background">
                  {"Gentle Care,"}
                  <br />
                  <span className="text-accent">{"Tail-Wagging Results"}</span>
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-background">
                  {"Our trained dental specialists use professional-grade tools and a whole lot of love. Every session is anesthesia-free, keeping your pup comfortable and stress-free from start to sparkling finish."}
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Fresher breath for more cuddles",
                    "Prevention of painful dental disease",
                    "Plaque & tartar buildup removal",
                    "Healthier gums and teeth",
                    "Early detection of dental issues",
                    "Non-anesthetic & stress-free",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <span className="font-medium text-background">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-full px-8 text-base"
                >
                  <Link href="tel:+15614295589">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a Smile Makeover
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Big playful CTA banner */}
      <div className="relative bg-accent py-16 md:py-20 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up" duration={800}>
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
                {"Ready for Fresher Breath & Happier Smiles?"}
              </h3>
              <p className="mb-8 text-lg text-background">
                {"Regular dental cleanings can add years to your dog's life. Let's get those pearly whites shining!"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background font-bold rounded-full px-10 text-base"
                >
                  <Link href="tel:+15614295589">
                    <Phone className="mr-2 h-5 w-5" />
                    Call to Book
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-foreground/30 hover:bg-foreground/10 font-bold rounded-full px-10 text-base text-card bg-card-foreground"
                >
                  <Link href="#services">View All Services</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
