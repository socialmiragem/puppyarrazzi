import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScissorsIcon, SparklesIcon, PhoneIcon } from "@/components/simple-icons"
import { ServiceSchema } from "@/components/structured-data"
import { BreadcrumbSchema } from "@/components/breadcrumbs-schema"
import { PageHero } from "@/components/page-hero"
import { CTABanner } from "@/components/cta-banner"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Full Dog Grooming Services | Complete Pet Styling | Puppyarazzi",
  description:
    "Complete dog grooming packages: bath, haircut, nail trim & styling. Professional breed-specific grooming in Wellington, Florida. Expert certified groomers, gentle care!",
  keywords:
    "full dog grooming, complete pet grooming, dog haircut, breed specific grooming, professional dog styling, pet makeover",
  openGraph: {
    title: "Full Dog Grooming Services | Puppyarazzi",
    description: "Complete grooming transformation with professional styling and breed-specific techniques.",
    type: "website",
  },
  alternates: {
    canonical: "https://puppyarazzi.com/services/full-groom",
  },
}

export default function FullGroomPage() {
  const groomingSteps = [
    {
      step: 1,
      title: "Pre-Groom Assessment",
      description: "Health check, coat evaluation, and discussion of your preferences",
      Icon: SparklesIcon,
    },
    {
      step: 2,
      title: "Luxurious Bath",
      description: "Deep cleansing with premium shampoos and conditioning treatments",
      Icon: SparklesIcon,
    },
    {
      step: 3,
      title: "Professional Styling",
      description: "Breed-specific cuts and custom styling based on your dog's features",
      Icon: ScissorsIcon,
    },
    {
      step: 4,
      title: "Finishing Touches",
      description: "Nail trim, ear cleaning, cologne, and optional accessories",
      Icon: SparklesIcon,
    },
  ]

  const sizeTiers = [
    {
      name: "Small Dogs",
      weight: "Under 25 lbs",
      description: "Complete grooming package including bath, haircut, nail care, and finishing touches customized for small breeds.",
    },
    {
      name: "Medium Dogs",
      weight: "25-60 lbs",
      description: "Full grooming service with breed-specific styling, de-shedding treatment, and comprehensive care for medium-sized dogs.",
      featured: true,
    },
    {
      name: "Large Dogs",
      weight: "60+ lbs",
      description: "Premium grooming package for large breeds with extended de-shedding, professional styling, and premium finishing products.",
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <ServiceSchema service="full-groom" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://puppyarazzi.com" },
          { name: "Services", url: "https://puppyarazzi.com/services" },
          { name: "Full Grooming", url: "https://puppyarazzi.com/services/full-groom" },
        ]}
      />

      <PageHero
        label="Full Groom"
        title="The Complete Makeover"
        description="Transform your dog with our comprehensive grooming service. From bath to beautiful, we provide breed-specific styling and meticulous attention to detail."
        variant="accent"
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
          <a href="/gallery">View Gallery</a>
        </Button>
      </PageHero>

      {/* Grooming Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-semibold tracking-widest uppercase text-sm mb-2 text-accent">Our Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">From Scruffy to Stunning</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every full groom follows our proven 4-step process to ensure your dog gets the best treatment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {groomingSteps.map((item, index) => (
              <ScrollReveal key={index} direction="up" duration={600} delay={index * 100}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 relative">
                    <item.Icon className="w-7 h-7 text-primary-foreground" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" duration={600}>
            <div className="text-center mb-12 md:mb-16">
              <p className="font-semibold tracking-widest uppercase text-sm mb-2 text-muted">Tailored to Size</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Full Grooming Packages</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive grooming tailored to your dog's size, breed, and coat type. Call for personalized pricing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {sizeTiers.map((tier, index) => (
              <ScrollReveal key={index} direction="up" duration={600} delay={index * 100}>
                <Card
                  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full ${
                    tier.featured ? "border-accent border-2 shadow-lg" : "border-border"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center text-sm font-semibold py-1.5">
                      Most Common
                    </div>
                  )}
                  <CardContent className={`p-6 flex flex-col h-full ${tier.featured ? "pt-10" : ""}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{tier.weight}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{tier.description}</p>
                    <Button
                      className={`w-full rounded-full ${tier.featured ? "bg-accent hover:bg-accent/90 text-white" : ""}`}
                      variant={tier.featured ? "default" : "outline"}
                      asChild
                    >
                      <a href="tel:5614295589">Call for Pricing</a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Give Your Dog the Star Treatment"
        description="Our expert groomers are ready to make your pup look and feel amazing. Call today!"
        variant="muted"
      />
    </main>
  )
}
