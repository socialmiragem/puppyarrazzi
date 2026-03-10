import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { JSX } from "react" // Declare JSX variable

const jupiterAreas = [
  "Jupiter Island",
  "Abacoa",
  "Jupiter Inlet Colony",
  "Tequesta",
  "Jupiter Farms",
  "Limestone Creek",
  "Admiral's Cove",
  "Jonathan's Landing",
]

const Icon = ({ name, className = "h-5 w-5" }: { name: string; className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    waves: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.121 14.121L19 19m-7-7l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
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

export default function JupiterPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dog Grooming Near Jupiter, FL
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Serving Jupiter and coastal communities from our Wellington location. Specializing in beach dogs and
              salt-water coat care. Just 20 minutes south on I-95.
            </p>
          </div>

          {/* Beach Dog Specialty */}
          <section className="mb-16">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Icon name="waves" className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-4">Beach Dog Specialists</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We understand Jupiter's beach lifestyle! Our groomers are experts at removing sand, salt, and
                    seaweed while protecting your dog's coat from coastal elements. Perfect for dogs who love Jupiter
                    Beach and Carlin Park.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Distance & Convenience */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="car" className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">20 Minutes South</h3>
                  <p className="text-muted-foreground">Easy drive from Jupiter via I-95 South to Forest Hill Blvd</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="mapPin" className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Wellington Location</h3>
                  <p className="text-muted-foreground">13873 Wellington Trce, Wellington, FL 33414</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="clock" className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Worth the Drive</h3>
                  <p className="text-muted-foreground">Premium services at competitive prices - Jupiter quality</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Serving Jupiter Area Communities</h2>
                <p className="text-muted-foreground mb-6">
                  We welcome pet owners from Jupiter and all surrounding coastal communities:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {jupiterAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Jupiter Dog Owners Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="waves" className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Beach Dog Expertise</h4>
                      <p className="text-sm text-muted-foreground">
                        Specialized care for dogs who love Jupiter's beaches and saltwater activities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="star" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Coastal Coat Care</h4>
                      <p className="text-sm text-muted-foreground">
                        Products and techniques designed for Florida's coastal climate and lifestyle
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="star" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Premium Value</h4>
                      <p className="text-sm text-muted-foreground">
                        High-end grooming services at prices that beat Jupiter's premium market
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
                <CardTitle>Directions from Jupiter to Wellington</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">From Jupiter/Tequesta:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Take I-95 South from Jupiter (about 15 miles)</li>
                      <li>Exit at Forest Hill Blvd (Exit 68)</li>
                      <li>Turn right (west) on Forest Hill Blvd</li>
                      <li>Continue for about 3 miles to Wellington Trace</li>
                      <li>Turn left on Wellington Trace - we're at 13873</li>
                    </ol>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Total drive time:</strong> 20-25 minutes • <strong>Distance:</strong> About 18 miles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Beach Dog Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Perfect for Jupiter Beach Dogs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="waves" className="h-5 w-5 text-blue-500" />
                    Post-Beach Deep Clean
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Specialized treatment to remove sand, salt, and seaweed. Includes thorough rinse, deep conditioning,
                    and protective coat treatment.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="/contact">Book Beach Clean</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Coastal Climate Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Humidity-resistant styling and UV protection treatments perfect for dogs living the Jupiter coastal
                    lifestyle.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="/contact">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Jupiter's Best Grooming is Worth the Short Drive
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Jupiter pet owners who make the trip to Wellington for unmatched grooming quality and beach dog
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Book Your Jupiter Dog's Spa Day</a>
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
