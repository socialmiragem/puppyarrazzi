import { ScrollReveal } from "@/components/scroll-reveal"

interface PageHeroProps {
  label?: string
  title: string
  description: string
  children?: React.ReactNode
  variant?: "muted" | "accent"
}

export function PageHero({ label, title, description, children, variant = "muted" }: PageHeroProps) {
  const bg = variant === "accent" ? "bg-accent" : "bg-muted"
  const labelColor = variant === "accent" ? "text-white/70" : "text-primary-foreground/70"
  const titleColor = variant === "accent" ? "text-white" : "text-primary-foreground"
  const descColor = variant === "accent" ? "text-white/80" : "text-primary-foreground/80"

  return (
    <section className={`relative ${bg} overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-8 left-[8%] w-14 h-14 rounded-full bg-white/10" />
        <div className="absolute bottom-12 right-[12%] w-10 h-10 rounded-full bg-white/8" />
        <div className="absolute top-1/2 right-[25%] w-6 h-6 rounded-full bg-white/10" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-36 md:pb-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {label && (
            <ScrollReveal direction="up" duration={500}>
              <p className={`font-semibold tracking-widest uppercase text-sm mb-3 ${labelColor}`}>
                {label}
              </p>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" duration={600} delay={100}>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance ${titleColor}`}>
              {title}
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" duration={600} delay={200}>
            <p className={`text-lg md:text-xl leading-relaxed text-pretty max-w-2xl mx-auto ${descColor}`}>
              {description}
            </p>
          </ScrollReveal>
          {children && (
            <ScrollReveal direction="up" duration={600} delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                {children}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Organic blob bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] translate-y-[1px]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[50px] md:h-[65px] lg:h-[100px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 L0,45 C140,80 240,15 400,25 C560,35 640,80 820,70 C1000,60 1060,15 1220,28 C1350,38 1400,65 1440,40 L1440,100 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
