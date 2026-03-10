"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useCountUp } from "@/hooks/use-scroll-animation"

function CountUpStat({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const { ref, count } = useCountUp(end, 2000)
  return (
    <div ref={ref}>
      <p className="text-2xl font-bold text-foreground">{count.toLocaleString()}{suffix}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" duration={800}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/owner-vizsla-hug.jpg"
                alt="Owner sharing a loving moment with a dog at Puppyarazzi Wellington FL"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} duration={800}>
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Caring Beyond the Cut
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {"At Puppyarazzi, we offer Wellington's premier cat-free grooming space where your dog is treated like the star they are. Serving Palm Beach County since 2014, from first-time puppies to seasoned seniors, we tailor every session with skill, kindness, and attention to detail."}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our certified groomers use only premium, organic products to ensure healthy skin and a beautiful coat. We believe grooming should be a positive, stress-free experience for every dog.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <CountUpStat end={15} suffix="+" label="Years Experience" />
                <CountUpStat end={2000} suffix="+" label="Dogs Groomed" />
                <CountUpStat end={5} suffix=".0" label="Google Rating" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
