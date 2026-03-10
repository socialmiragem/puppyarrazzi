import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"

export const metadata: Metadata = {
  title: "Dog Grooming Lake Worth FL - Professional Pet Care | Puppyarazzi",
  description:
    "Professional dog grooming serving Lake Worth Beach, Florida. Expert groomers, organic products, gentle one-on-one care in a calm dog-only salon. Call (561) 429-5589",
  keywords:
    "dog grooming Lake Worth FL, pet grooming Lake Worth Beach, Lake Worth dog groomer, dog grooming near me Lake Worth, pet spa Lake Worth Florida",
  alternates: {
    canonical: "https://puppyarazzi.com/areas/lake-worth",
  },
}

const neighborhoods = [
  "Lake Worth Beach",
  "Lake Worth Corridor",
  "Palm Springs",
  "Atlantis",
  "Lantana",
  "Hypoluxo",
  "Manalapan",
  "Lake Clarke Shores",
]

export default function LakeWorthPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Service Areas", url: "https://puppyarazzi.com/#service-areas" },
          { name: "Lake Worth", url: "https://puppyarazzi.com/areas/lake-worth" },
        ]}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dog Grooming for Lake Worth Residents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {"Lake Worth Beach and surrounding communities trust Puppyarazzi for premium dog grooming. Professional care, organic products, and a calm salon environment — just a short drive away in Wellington."}
            </p>
          </div>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">20 min</div>
                  <p className="text-muted-foreground">Drive from Lake Worth</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">5.0</div>
                  <p className="text-muted-foreground">Google Rating</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                  <p className="text-muted-foreground">Dog-Only Salon</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Premium Grooming Near Lake Worth Beach
                </h2>
                <p className="text-muted-foreground mb-4">
                  {"Lake Worth dog owners are discovering what Wellington residents already know — Puppyarazzi delivers the best grooming experience in Palm Beach County. Our certified groomer provides one-on-one attention, breed-specific styling, and uses only premium organic products."}
                </p>
                <p className="text-muted-foreground mb-6">
                  {"From Lake Worth Beach to Lantana, Palm Springs to Atlantis, dog owners across the southern Palm Beach County corridor are making the easy drive to our Wellington salon for grooming that goes above and beyond."}
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
                <h3 className="text-2xl font-bold text-foreground mb-6">Lake Worth Areas We Serve</h3>
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
              Lake Worth Dog Owners — Experience the Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {"Your dog deserves more than a quick grooming assembly line. Book with Puppyarazzi and see why Lake Worth families keep coming back."}
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
