import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"

export const metadata: Metadata = {
  title: "Dog Grooming West Palm Beach FL - Professional Pet Care | Puppyarazzi",
  description:
    "Professional dog grooming serving West Palm Beach, Florida. Expert groomers, organic products, gentle one-on-one care. Serving all West Palm Beach neighborhoods. Call (561) 429-5589",
  keywords:
    "dog grooming West Palm Beach FL, pet grooming West Palm Beach, West Palm Beach dog groomer, dog grooming near me West Palm Beach, pet spa West Palm Beach Florida, best dog groomer West Palm Beach",
  alternates: {
    canonical: "https://puppyarazzi.com/areas/west-palm-beach",
  },
}

const neighborhoods = [
  "Westgate",
  "Palm Beach Lakes",
  "Northwood",
  "El Cid",
  "Flamingo Park",
  "South End",
  "Grandview Heights",
  "Prospect Park",
]

export default function WestPalmBeachPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Service Areas", url: "https://puppyarazzi.com/#service-areas" },
          { name: "West Palm Beach", url: "https://puppyarazzi.com/areas/west-palm-beach" },
        ]}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dog Grooming for West Palm Beach Residents
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {"West Palm Beach dog owners choose Puppyarazzi for professional grooming that's worth the short drive to Wellington. 5-star rated, gentle, and always one-on-one."}
            </p>
          </div>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-foreground mb-2">15-20 min</div>
                  <p className="text-muted-foreground">Drive from West Palm Beach</p>
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
                  <div className="text-3xl font-bold text-foreground mb-2">2,000+</div>
                  <p className="text-muted-foreground">Dogs Groomed</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why West Palm Beach Dog Owners Drive to Puppyarazzi
                </h2>
                <p className="text-muted-foreground mb-4">
                  {"Many of our most loyal clients make the short drive from West Palm Beach because they know the difference quality grooming makes. Our Wellington salon offers a calm, cat-free environment where every dog gets undivided attention — no assembly-line grooming here."}
                </p>
                <p className="text-muted-foreground mb-6">
                  {"Whether you're in Flamingo Park, Northwood, or the South End, you're just 15-20 minutes from the best grooming experience in Palm Beach County. We specialize in breed-specific cuts, anxious dog handling, organic products, and non-anesthetic teeth cleaning."}
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
                <h3 className="text-2xl font-bold text-foreground mb-6">West Palm Beach Areas We Serve</h3>
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
              Services for West Palm Beach Dogs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Full Groom Package", desc: "Complete bath, breed-specific haircut, ear cleaning, nail trim, and sanitary trim. Starting at $75." },
                { title: "Luxury Spa Bath", desc: "Organic shampoo, deep conditioning, aromatherapy, and professional blow dry. Starting at $45." },
                { title: "Teeth Cleaning", desc: "Non-anesthetic dental cleaning — no sedation, no vet visit required. Starting at $150." },
                { title: "De-Shedding Treatment", desc: "Specialized treatment that reduces shedding up to 80%. Perfect for Florida heat. Starting at $55." },
                { title: "Puppy First Groom", desc: "Gentle, positive first grooming experience for puppies. Building trust from day one. Starting at $40." },
                { title: "Nail Trim & Grinding", desc: "Quick and gentle nail care for comfortable, healthy paws. Starting at $15." },
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
              West Palm Beach — Your Dog Deserves Puppyarazzi
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The short drive from West Palm Beach to Wellington is the best investment you can make in your dog's grooming experience.
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
