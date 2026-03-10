"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/simple-icons"
import { PageHero } from "@/components/page-hero"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ContactClientPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        label="Contact"
        title="Let's Get Your Pup Booked"
        description="Ready to give your dog the star treatment? Call us to schedule an appointment or stop by our Wellington salon."
        variant="accent"
      >
        <Button
          size="lg"
          className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 rounded-full"
          onClick={() => (window.location.href = "tel:5614295589")}
        >
          <PhoneIcon className="h-5 w-5 mr-2" />
          Call (561) 429-5589
        </Button>
      </PageHero>

      {/* Contact Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Phone */}
            <ScrollReveal direction="up" duration={600}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 border-border">
                <CardContent className="p-6 flex flex-col items-center h-full">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                    <PhoneIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">Speak with our grooming experts</p>
                  <div className="text-2xl font-bold text-accent mb-5">(561) 429-5589</div>
                  <Button className="w-full rounded-full mt-auto" onClick={() => (window.location.href = "tel:5614295589")}>
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal direction="up" duration={600} delay={100}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 border-border">
                <CardContent className="p-6 flex flex-col items-center h-full">
                  <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                    <MapPinIcon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Visit Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">Located in the heart of Wellington</p>
                  <address className="not-italic text-foreground font-medium mb-5">
                    13873 Wellington Trce<br />
                    Wellington, FL 33414
                  </address>
                  <Button
                    variant="outline"
                    className="w-full rounded-full mt-auto bg-transparent"
                    onClick={() => window.open("https://maps.google.com/?q=13873+Wellington+Trce+Wellington+FL+33414", "_blank")}
                  >
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal direction="up" duration={600} delay={200}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 border-border">
                <CardContent className="p-6 flex flex-col items-center h-full">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                    <ClockIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Hours</h3>
                  <p className="text-sm text-muted-foreground mb-4">{"We're here when you need us"}</p>
                  <div className="w-full space-y-2 text-sm mb-5">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mon - Fri</span>
                      <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Same-Day CTA */}
          <ScrollReveal direction="up" duration={600} delay={300}>
            <Card className="mt-12 bg-muted/20 border-muted/40">
              <CardContent className="p-8 md:p-10">
                <div className="text-center max-w-lg mx-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Same-Day Appointments Available</h3>
                  <p className="text-muted-foreground mb-6">
                    {"Call us directly to book your appointment. We'll discuss your pup's needs and find the perfect time."}
                  </p>
                  <Button
                    size="lg"
                    className="rounded-full px-8 font-semibold"
                    onClick={() => (window.location.href = "tel:5614295589")}
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Call (561) 429-5589
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
