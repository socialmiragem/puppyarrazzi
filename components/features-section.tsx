"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

function CarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  )
}

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

const steps = [
  {
    step: "1",
    title: "Drop Off",
    description: "Bring your pup to our calm, cat-free salon. We'll discuss their needs and preferences.",
    icon: CarIcon,
  },
  {
    step: "2",
    title: "Groom",
    description: "Our certified groomers work their magic with gentle handling and premium organic products.",
    icon: ScissorsIcon,
  },
  {
    step: "3",
    title: "Pick Up",
    description: "Take home a happy, fresh, and fabulous-looking best friend. Tail wags guaranteed.",
    icon: HeartIcon,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" duration={800}>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple as 1-2-3
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150} duration={700}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-card flex items-center justify-center shadow-sm">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
