import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { JSX } from "react"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"

export const metadata: Metadata = {
  title: "Dog Grooming in Wellington, FL - Professional Pet Care | Puppyarazzi",
  description:
    "Premier dog grooming services in Wellington, Florida. Serving Wellington Trace, Olympia, and surrounding areas. Expert groomers, organic products, 10+ years experience. Call (561) 429-5589",
  keywords:
    "dog grooming Wellington FL, pet grooming Wellington Florida, Wellington dog groomer, Wellington Trace pet care, Olympia dog grooming",
  alternates: {
    canonical: "https://puppyarazzi.com/areas/wellington",
  },
}

const wellingtonNeighborhoods = [
  "Wellington Trace",
  "Olympia",
  "Palm Beach Point",
  "Versailles",
  "Wellington Green",
  "Saddle Trail Park",
  "Sugar Pond Manor",
  "Binks Forest",
]

const localStats = [
  { icon: "users", label: "Happy Wellington Customers", value: "500+" },
  { icon: "award", label: "Years Serving Wellington", value: "10+" },
  { icon: "star", label: "Average Rating", value: "4.9/5" },
]

const Icon = ({ name, className = "h-5 w-5" }: { name: string; className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    users: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    award: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    star: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
    phone: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
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
  }
  return icons[name] || null
}

export default function WellingtonPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Service Areas", url: "https://puppyarazzi.com/#service-areas" },
          { name: "Wellington", url: "https://puppyarazzi.com/areas/wellington" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Professional Dog Grooming in Wellington, FL
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Proudly serving Wellington and surrounding communities with premium dog grooming services. Located in the
              heart of Wellington Trace, we're your neighborhood's trusted pet care experts.
            </p>
          </div>

          {/* Local Stats */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {localStats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <Icon name={stat.icon} className="h-12 w-12 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Location & Service Area */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Conveniently Located in Wellington</h2>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="mapPin" className="h-5 w-5 text-primary" />
                      Our Wellington Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-foreground mb-4">
                      13873 Wellington Trce
                      <br />
                      Wellington, FL 33414
                    </address>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="phone" className="h-4 w-4 text-primary" />
                        <span>(561) 429-5589</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="clock" className="h-4 w-4 text-primary" />
                        <span>Mon-Fri: 8AM-6PM, Sat: 8AM-4PM</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Button size="lg" className="w-full" asChild>
                        <a href="/contact">Book Appointment</a>
                      </Button>
                      <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                        <a href="tel:(561)429-5589">Call Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Areas We Serve</h3>
                <p className="text-muted-foreground mb-6">
                  We proudly serve Wellington and the surrounding communities in Palm Beach County:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {wellingtonNeighborhoods.map((neighborhood, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {neighborhood}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Don't see your area?</strong> We serve many more neighborhoods throughout Wellington and
                    Palm Beach County. Call us to confirm service to your location!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Wellington */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Wellington Pet Owners Choose Puppyarazzi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Local Wellington Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 10 years serving Wellington families. We understand the unique needs of dogs in South Florida's
                    climate and lifestyle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Convenient Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Easily accessible from all Wellington neighborhoods. Just minutes from Wellington Green Mall and
                    major Wellington communities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Trusted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hundreds of satisfied Wellington families trust us with their beloved pets. Check out our local
                    reviews and referrals!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Climate-Conscious Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand Florida's humidity and heat. Our grooming techniques help keep your dog comfortable
                    year-round.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Early morning and evening appointments available to fit Wellington families' busy schedules.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Same-day appointments available for urgent grooming needs. We're here when Wellington pet owners
                    need us most.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Local Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Wellington Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="h-4 w-4 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Living in Wellington Trace, it's so convenient to have such a professional grooming service right
                    in our neighborhood. My Golden Retriever Max always comes home looking and smelling amazing!"
                  </p>
                  <div className="font-semibold">Sarah M. - Wellington Trace</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="h-4 w-4 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "After moving to Olympia, I was worried about finding a good groomer for my Poodle. Puppyarazzi
                    exceeded all expectations. They really understand breed-specific cuts!"
                  </p>
                  <div className="font-semibold">Michael R. - Olympia</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Give Your Wellington Dog the Best?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied Wellington pet owners who trust Puppyarazzi with their beloved companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Book Your Wellington Appointment</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:(561)429-5589">Call (561) 429-5589</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
