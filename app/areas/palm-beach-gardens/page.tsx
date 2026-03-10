import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { JSX } from "react" // Import JSX to resolve undeclared variable error
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"

const Icon = ({ name, className = "h-5 w-5" }: { name: string; className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    car: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    mapPin: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    star: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  }
  return icons[name] || null
}

export const metadata: Metadata = {
  title: "Dog Grooming Near Palm Beach Gardens, FL - Puppyarazzi Wellington",
  description:
    "Professional dog grooming services near Palm Beach Gardens, FL. Just 15 minutes from PBG. Expert groomers, organic products, convenient Wellington location. Call (561) 429-5589",
  keywords:
    "dog grooming Palm Beach Gardens, pet grooming near PBG, Palm Beach Gardens dog groomer, Wellington to Palm Beach Gardens",
  alternates: {
    canonical: "https://puppyarazzi.com/areas/palm-beach-gardens",
  },
}

const pbgNeighborhoods = [
  "Downtown Palm Beach Gardens",
  "PGA National",
  "Mirasol",
  "Frenchmans Creek",
  "Old Palm Golf Club",
  "BallenIsles",
  "Evergrene",
  "Sandhill Crane",
]

export default function PalmBeachGardensPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Service Areas", url: "https://puppyarazzi.com/#service-areas" },
          { name: "Palm Beach Gardens", url: "https://puppyarazzi.com/areas/palm-beach-gardens" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dog Grooming Near Palm Beach Gardens, FL
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Just 15 minutes from Palm Beach Gardens, Puppyarazzi in Wellington offers premium dog grooming services
              for PBG residents. Convenient location, expert care, unbeatable results.
            </p>
          </div>

          {/* Distance & Convenience */}
          <section className="mb-16">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="car" className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">15 Minutes Away</h3>
                    <p className="text-muted-foreground">Quick drive from Palm Beach Gardens via Forest Hill Blvd</p>
                  </div>
                  <div>
                    <Icon name="mapPin" className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Easy to Find</h3>
                    <p className="text-muted-foreground">Located at 13873 Wellington Trce, Wellington, FL 33414</p>
                  </div>
                  <div>
                    <Icon name="clock" className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Flexible Hours</h3>
                    <p className="text-muted-foreground">Early & late appointments to fit your PBG schedule</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Service Areas */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Serving Palm Beach Gardens Areas</h2>
                <p className="text-muted-foreground mb-6">
                  We welcome pet owners from all Palm Beach Gardens neighborhoods and communities:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {pbgNeighborhoods.map((neighborhood, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {neighborhood}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Why PBG Residents Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="star" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Premium Service Quality</h4>
                      <p className="text-sm text-muted-foreground">
                        Same high-end quality you expect in Palm Beach Gardens, at Wellington prices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="star" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Convenient Scheduling</h4>
                      <p className="text-sm text-muted-foreground">
                        Easy online booking and flexible appointment times for busy PBG professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="star" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Luxury Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Hollywood-style grooming that matches the upscale lifestyle of Palm Beach Gardens
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Directions */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Easy Directions from Palm Beach Gardens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">From Downtown Palm Beach Gardens:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Head west on PGA Blvd toward I-95</li>
                      <li>Turn left (south) on Forest Hill Blvd</li>
                      <li>Continue for about 8 miles to Wellington</li>
                      <li>Turn right on Wellington Trace</li>
                      <li>We're located at 13873 Wellington Trce</li>
                    </ol>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Estimated drive time:</strong> 15-20 minutes depending on traffic
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Services for PBG */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Perfect Services for Palm Beach Gardens Dogs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Full Grooming Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete Hollywood transformation perfect for PBG's upscale dog parks and social events.
                  </p>
                  <div className="text-2xl font-bold text-primary mb-4">$65-120</div>
                  <Button className="w-full" asChild>
                    <a href="tel:5614295589">Call to Schedule</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Luxury Dog Bath</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Premium spa experience ideal for maintaining your dog's coat in Florida's humidity.
                  </p>
                  <div className="text-2xl font-bold text-primary mb-4">$35-55</div>
                  <Button className="w-full" asChild>
                    <a href="tel:5614295589">Call to Schedule</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Drive from Palm Beach Gardens for the Best?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Palm Beach Gardens pet owners who make the short drive to Wellington for premium grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Book Your PBG Dog's Appointment</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:(561)4295589">Call (561) 429-5589</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
