"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function ContactLocation() {
  return (
    <section className="py-20 bg-card" id="contact">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" duration={800}>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Salon
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Business Info */}
          <ScrollReveal direction="left" duration={800}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    13873 Wellington Trace
                    <br />
                    Wellington, FL 33414
                  </p>
                  <a
                    href="https://maps.google.com/?q=13873+Wellington+Trce,+Wellington,+FL+33414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline mt-1 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <ClockIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:5614295589" className="text-sm text-accent hover:underline">
                    (561) 429-5589
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Same-day appointments when available</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Map */}
          <ScrollReveal direction="right" delay={200} duration={800}>
            <Card className="border-border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  title="Puppyarazzi Dog Grooming Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d-80.2414!3d26.6587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d924a1c1c1c1c1%3A0x1234567890abcdef!2s13873+Wellington+Trace%2C+Wellington%2C+FL+33414!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
