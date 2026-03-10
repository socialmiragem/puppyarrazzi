import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"

export const metadata: Metadata = {
  title: "Dog Grooming Loxahatchee FL - Professional Pet Care | Puppyarazzi",
  description:
    "Professional dog grooming serving Loxahatchee and Loxahatchee Groves, Florida. Expert groomers, organic products, calm cat-free salon. Call (561) 429-5589",
  keywords:
    "dog grooming Loxahatchee FL, pet grooming Loxahatchee, Loxahatchee dog groomer, dog grooming near me Loxahatchee, pet grooming Loxahatchee Groves, large dog grooming Loxahatchee",
  alternates: {
    canonical: "https://puppyarazzi.com/areas/loxahatchee",
  },
}

const neighborhoods = [
  "Loxahatchee Groves",
  "The Acreage",
  "Fox Trail",
  "Deer Run",
  "Palomino Farms",
  "Loxahatchee Reserve",
  "Indian Trail",
  "Hamlin",
]

export default function LoxahatcheePage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Service Areas", url: "https://puppyarazzi.com/#service-areas" },
          { name: "Loxahatchee", url: "https://puppyarazzi.com/areas/loxahatchee" },
        ]}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dog Grooming for Loxahatchee Residents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {"Loxahatchee and Loxahatchee Groves families love Puppyarazzi. We understand country dogs, large breeds, and the unique grooming needs of acreage living in South Florida."}
            </p>
          </div>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">10-15 min</div>
                  <p className="text-muted-foreground">Drive from Loxahatchee</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">All Breeds</div>
                  <p className="text-muted-foreground">Small to XL Dogs Welcome</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">Cat-Free</div>
                  <p className="text-muted-foreground">Dog-Only Calm Environment</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Grooming Built for Loxahatchee Dogs
                </h2>
                <p className="text-muted-foreground mb-4">
                  {"Loxahatchee dogs live an active outdoor lifestyle on acreage properties. That means more dirt, more tangles, and more grooming needs. At Puppyarazzi, we specialize in deep cleaning, de-matting, and de-shedding treatments that get your pup back to their best."}
                </p>
                <p className="text-muted-foreground mb-6">
                  {"Whether you have a German Shepherd, a Labrador, a Golden Retriever, or a small breed, we handle every dog with the same gentle, patient one-on-one care. No cages, no rush — just quality grooming."}
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
                <h3 className="text-2xl font-bold text-foreground mb-6">Loxahatchee Areas We Serve</h3>
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
              Loxahatchee Dog Owners — Book Your Groom
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {"A short drive from The Acreage or Loxahatchee Groves to Wellington's best grooming salon. Your dog will thank you."}
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
