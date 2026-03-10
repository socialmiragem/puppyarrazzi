"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

const testimonials = [
  {
    text: "Puppyarazzi transformed my Golden Retriever Max from a shaggy mess into a show-stopping beauty! The groomers are so gentle and patient. Max actually gets excited when we pull up.",
    author: "Sarah M.",
    dogName: "Max",
    rating: 5,
  },
  {
    text: "I've been bringing my anxious rescue dog Luna here for 6 months now. The staff is amazing with nervous dogs - they take their time and never rush. Luna used to hate grooming, but now she's calm.",
    author: "Michael R.",
    dogName: "Luna",
    rating: 5,
  },
  {
    text: "Best dog grooming in Wellington! My Poodle Charlie gets the most amazing cuts here. They really know breed-specific styling - his teddy bear cut is always perfect.",
    author: "Jennifer L.",
    dogName: "Charlie",
    rating: 5,
  },
  {
    text: "I drive 20 minutes to bring my two dogs here because the quality is unmatched. Both my Labrador and Yorkie get amazing care. The groomers remember their preferences every time!",
    author: "Amanda T.",
    dogName: "Bella & Milo",
    rating: 5,
  },
  {
    text: "Puppyarazzi saved the day when my Goldendoodle got into something sticky! They fit us in same-day. Excellent customer service and my dog looked absolutely gorgeous after.",
    author: "Lisa H.",
    dogName: "Cooper",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section className="py-20 bg-secondary" id="reviews">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" duration={800}>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Pet Parents Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 on Google (100+ reviews)</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 120} duration={600}>
              <Card className="h-full border-border/50 bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {'"'}{testimonial.text}{'"'}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-xs font-semibold text-foreground">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{"Owner of "}{testimonial.dogName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
