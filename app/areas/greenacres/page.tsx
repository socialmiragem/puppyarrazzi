import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"

export const metadata: Metadata = {
  title: "Dog Grooming Greenacres FL - Professional Pet Care | Puppyarazzi",
  description:
    "Professional dog grooming serving Greenacres, Florida. Expert certified groomer, organic products, calm dog-only salon just minutes from Greenacres. Call (561) 429-5589",
  keywords:
    "dog grooming Greenacres FL, pet grooming Greenacres, Greenacres dog groomer, dog grooming near me Greenacres, pet spa Greenacres Florida, affordable dog grooming Greenacres",
  alternates: {
    canonical: "https://puppyarazzi.com/areas/greenacres",
  },
}

const neighborhoods = [
  "Greenacres City",
  "Palm Greens",
  "Floral Lakes",
  "Briar Bay",
  "Valencia Shores",
  "Meadow Wood",
  "Pine Ridge",
  "Jog Estates",
]

export default function GreenacresPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Service Areas", url: "https://puppyarazzi.com/#service-areas" },
          { name: "Greenacres", url: "https://puppyarazzi.com/areas/greenacres" },
        ]}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dog Grooming for Greenacres Residents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {"Greenacres dog owners are just minutes from Palm Beach County's top-rated grooming salon. Puppyarazzi in Wellington offers premium, gentle grooming with organic products and one-on-one care."}
            </p>
          </div>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">10-15 min</div>
                  <p className="text-muted-foreground">Drive from Greenacres</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">Organic</div>
                  <p className="text-muted-foreground">Premium Products Only</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Quality Grooming Close to Greenacres
                </h2>
                <p className="text-muted-foreground mb-4">
                  {"Living in Greenacres means you're just a quick drive via Jog Road or Forest Hill Boulevard from Puppyarazzi's Wellington salon. We provide the kind of personalized, gentle grooming that big-box pet stores simply can't match."}
                </p>
                <p className="text-muted-foreground mb-6">
                  {"Every dog gets one-on-one attention from start to finish. No rotating between multiple dogs, no cages, no waiting around. Just focused, professional care with hospital-grade sanitization and premium organic products your dog's skin and coat will love."}
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+15614295589">Call (561) 429-5589</a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full bg-transparent" asChild>
                    <a href="/contact">Get Directions</a>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Greenacres Neighborhoods We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {neighborhoods.map((n, i) => (
                    <Badge key={i} variant="secondary" className="justify-center py-2">{n}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Greenacres Dog Owners — Try Puppyarazzi Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {"See why Greenacres families are choosing Puppyarazzi over chain pet stores. Real grooming, real care, real results."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+15614295589">Call (561) 429-5589</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <a href="/services">View All Services</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
