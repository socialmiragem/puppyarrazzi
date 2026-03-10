"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

function StarIcon({ className, filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

const recentReviews = [
  {
    name: "Sarah M.",
    date: "2 weeks ago",
    text: "Absolutely love Puppyarazzi! My golden retriever always comes out looking amazing. The staff is so gentle and patient with her.",
    rating: 5,
  },
  {
    name: "Michael T.",
    date: "1 month ago",
    text: "Best grooming experience in Wellington. They really care about the dogs and it shows. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    date: "1 month ago",
    text: "Finally found a groomer my anxious pup loves. The cat-free environment makes such a difference. Thank you!",
    rating: 5,
  },
  {
    name: "David R.",
    date: "3 weeks ago",
    text: "The teeth cleaning service is incredible. My dog's breath was terrible and now he smells so much better. The before and after photos blew me away!",
    rating: 5,
  },
  {
    name: "Emma W.",
    date: "2 months ago",
    text: "We've tried several groomers in the area and Puppyarazzi is by far the best. Our poodle actually gets excited when we pull into the parking lot!",
    rating: 5,
  },
  {
    name: "Carlos P.",
    date: "3 weeks ago",
    text: "Professional, kind, and so skilled. They did a wonderful job with our rescue dog who is very nervous. Will be coming back every month.",
    rating: 5,
  },
]

export function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const reviewsPerPage = 3
  const totalPages = Math.ceil(recentReviews.length / reviewsPerPage)

  const [paused, setPaused] = useState(false)

  const goToPage = useCallback((pageIndex: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(pageIndex)
      setIsTransitioning(false)
    }, 300)
  }, [])

  // Auto-rotate every 5 seconds, pause on hover
  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % totalPages)
        setIsTransitioning(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [paused, totalPages])

  const visibleReviews = recentReviews.slice(
    activeIndex * reviewsPerPage,
    activeIndex * reviewsPerPage + reviewsPerPage
  )

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Rating Summary */}
            <ScrollReveal direction="left" duration={800}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <GoogleIcon className="w-10 h-10" />
                  <span className="text-2xl font-bold text-foreground">Google Reviews</span>
                </div>

                <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-4">
                  <span className="text-7xl font-bold text-foreground">5.0</span>
                  <div className="flex flex-col items-start">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-6 h-6 text-accent" />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm mt-1">Based on 100+ reviews</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
                  Wellington dog owners trust us with their furry family members. See what they have to say about their experience.
                </p>

                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8 rounded-full"
                  onClick={() => window.open("https://share.google/r9tXDmFoZy8VacWgA", "_blank")}
                >
                  Read All Reviews on Google
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: Recent Reviews */}
            <ScrollReveal direction="right" delay={200} duration={800}>
              <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  className="space-y-4 transition-opacity duration-300 ease-in-out"
                  style={{ opacity: isTransitioning ? 0 : 1 }}
                >
                  {visibleReviews.map((review, index) => (
                    <div
                      key={`${activeIndex}-${index}`}
                      className="bg-secondary border border-border rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{review.name}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 text-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 h-2.5 bg-accent"
                          : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                      }`}
                      aria-label={`Go to review page ${i + 1}`}
                    />
                  ))}
                </div>

                <a
                  href="https://share.google/r9tXDmFoZy8VacWgA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-accent hover:text-accent/80 font-semibold py-3 mt-2 transition-colors"
                >
                  {"See all reviews on Google \u2192"}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
