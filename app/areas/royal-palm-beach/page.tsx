import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"

export const metadata: Metadata = {
  title: "Dog Grooming Royal Palm Beach FL - Professional Pet Care | Puppyarazzi",
  description:
    "Professional dog grooming serving Royal Palm Beach, Florida. Just minutes from your neighborhood. Expert groomers, organic products, gentle handling. Call (561) 429-5589",
  keywords:
    "dog grooming Royal Palm Beach FL, pet grooming Royal Palm Beach, Royal Palm Beach dog groomer, dog grooming near me Royal Palm Beach, pet spa Royal Palm Beach Florida",
  alternates: {
    canonical: "https://puppyarazzi.com/areas/royal-palm-beach",
  },
}

const neighborhoods = [
  "Madison Green",
  "Crestwood",
  "Royal Palm Beach Commons",
  "Saratoga Lakes",
  "La Mancha",
  "Willows",
  "Acme Improvement District",
  "Loxahatchee Groves",
]

export default function RoyalPalmBeachPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Service Areas", url: "https://puppyarazzi.com/#service-areas" },
          { name: "Royal Palm Beach", url: "https://puppyarazzi.com/areas/royal-palm-beach" },
        ]}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dog Grooming for Royal Palm Beach Residents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {"Royal Palm Beach families trust Puppyarazzi for professional dog grooming. We're located just minutes away in Wellington, making it easy to give your pup the star treatment."}
            </p>
          </div>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">{"< 10 min"}</div>
                  <p className="text-muted-foreground">Drive from Royal Palm Beach</p>
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
                  <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Convenient Grooming Near Royal Palm Beach
                </h2>
                <p className="text-muted-foreground mb-4">
                  {"Our Wellington salon is a quick drive from all Royal Palm Beach neighborhoods. Located at 13873 Wellington Trace, we're easily accessible via Southern Blvd or Royal Palm Beach Blvd. Many of our happiest clients come from Royal Palm Beach communities."}
                </p>
                <p className="text-muted-foreground mb-6">
                  {"We offer full grooming packages, luxury spa baths, teeth cleaning, de-shedding treatments, and puppy's first groom — all with the gentle, one-on-one care your dog deserves in a calm, cat-free environment."}
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
                <h3 className="text-2xl font-bold text-foreground mb-6">Royal Palm Beach Neighborhoods We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {neighborhoods.map((n, i) => (
                    <Badge key={i} variant="secondary" className="justify-center py-2">{n}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Services for Royal Palm Beach Dogs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Full Groom Package", desc: "Bath, haircut, ear cleaning, nail trim, and breed-specific styling. Starting at $75." },
                { title: "Luxury Spa Bath", desc: "Organic shampoo, conditioning, ear cleaning, nail trim, and aromatherapy finish. Starting at $45." },
                { title: "Teeth Cleaning", desc: "Non-anesthetic professional dental cleaning to remove plaque and tartar. Starting at $150." },
                { title: "De-Shedding Treatment", desc: "Reduce shedding by up to 80% with our deep coat conditioning treatment. Starting at $55." },
                { title: "Puppy First Groom", desc: "Gentle introduction for puppies under 6 months. Extra patience and positive reinforcement. Starting at $40." },
                { title: "Nail Trim & Grinding", desc: "Quick, gentle nail maintenance for comfortable paws. Starting at $15." },
              ].map((s, i) => (
                <Card key={i}>
                  <CardHeader><CardTitle>{s.title}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{s.desc}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Royal Palm Beach Dog Owners — Book Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {"Join Royal Palm Beach families who drive just minutes to give their dogs Wellington's best grooming experience."}
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
