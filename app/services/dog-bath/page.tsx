import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PhoneIcon } from "@/components/simple-icons"
import { ServiceSchema } from "@/components/structured-data"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"
import { PageHero } from "@/components/page-hero"
import { CTABanner } from "@/components/cta-banner"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Dog Bath Services | Puppyarazzi - Gentle Pet Bathing Near You",
  description:
    "Premium dog bathing with organic shampoos, thorough cleaning & aromatherapy. Serving Wellington, Florida pet owners with gentle, professional dog washing. 5-star rated!",
  keywords:
    "dog bath, pet bathing service, dog washing near me, organic dog shampoo, professional pet cleaning, dog spa bath",
  openGraph: {
    title: "Professional Dog Bath Services | Puppyarazzi",
    description: "Luxurious dog bathing with organic products and gentle care.",
    type: "website",
  },
  alternates: {
    canonical: "https://puppyarazzi.com/services/dog-bath",
  },
}

export default function DogBathPage() {
  const bathPackages = [
    {
      name: "Basic Bath",
      description:
        "Essential bathing service with organic products, perfect for regular maintenance and keeping your dog fresh and clean.",
    },
    {
      name: "Deluxe Spa Bath",
      description:
        "Premium bathing experience with conditioning treatments, aromatherapy, and extra pampering for your furry friend.",
      popular: true,
    },
    {
      name: "Therapeutic Bath",
      description:
        "Specialized bathing service with medicated or therapeutic treatments, ideal for dogs with skin sensitivities or special needs.",
    },
  ]

  const benefits = [
    {
      title: "Healthier Skin & Coat",
      description:
        "Regular baths remove dirt, allergens, and excess oils while promoting healthy skin and a shiny coat.",
    },
    {
      title: "Reduced Shedding",
      description: "Professional bathing and brushing significantly reduces loose fur and dander in your home.",
    },
    {
      title: "Early Health Detection",
      description: "Our groomers check for skin issues, lumps, or other health concerns during every bath service.",
    },
    {
      title: "Stress-Free Experience",
      description: "Gentle handling and calming environment make bath time enjoyable for even anxious dogs.",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <ServiceSchema service="dog-bath" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Services", url: "https://puppyarazzi.com/services" },
          { name: "Dog Bath", url: "https://puppyarazzi.com/services/dog-bath" },
        ]}
      />

      <PageHero
        label="Bath & Brush"
        title="A Spa Day They Deserve"
        description="Give your furry friend the spa treatment they deserve with our gentle, professional dog bathing services. Using only organic, pet-safe products in a calm, stress-free environment."
      >
        <Button
          size="lg"
          className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 rounded-full"
          asChild
        >
          <a href="tel:5614295589">
            <PhoneIcon className="h-5 w-5 mr-2" />
            Call to Schedule
          </a>
        </Button>
        <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 px-8 rounded-full bg-transparent" asChild>
          <a href="/contact">Learn More</a>
        </Button>
      </PageHero>

      {/* Bath Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-semibold tracking-widest uppercase text-sm mb-2 text-muted">Choose Your Package</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Bath Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect bathing service for your dog. Call us to discuss which option is best for your pet.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {bathPackages.map((pkg, index) => (
              <ScrollReveal key={index} direction="up" duration={600} delay={index * 100}>
                <Card
                  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full ${
                    pkg.popular ? "border-accent border-2 shadow-lg" : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center text-sm font-semibold py-1.5">
                      Most Popular
                    </div>
                  )}
                  <CardContent className={`p-6 flex flex-col h-full ${pkg.popular ? "pt-10" : ""}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{pkg.description}</p>
                    <Button
                      className={`w-full rounded-full ${pkg.popular ? "bg-accent hover:bg-accent/90 text-white" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href="tel:5614295589">Call for Details</a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-semibold tracking-widest uppercase text-sm mb-2 text-accent">Why Professional Baths</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits of Our Services</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="up" duration={600} delay={index * 80}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Book Your Dog's Spa Day"
        description="Call us today to schedule your dog's bath service. Same-day appointments available!"
      />
    </main>
  )
}
