import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { CTABanner } from "@/components/cta-banner"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PhoneIcon } from "@/components/simple-icons"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dog Grooming Services | Puppyarazzi Wellington FL",
  description:
    "Professional mobile dog grooming services in Palm Beach County. Luxury spa baths and full grooming packages for all breeds.",
  alternates: {
    canonical: "https://puppyarazzi.com/services",
  },
}

const services = [
  {
    title: "Bath & Brush",
    subtitle: "Feel-Good Fresh",
    description:
      "A refreshing spa day that leaves your dog squeaky clean, silky soft, and smelling like a dream. Perfect between grooms or as a regular treat.",
    image: "/service-spa-bath.jpg",
    link: "/services/dog-bath",
    features: ["Deep cleansing organic bath", "Blow dry & thorough brushing", "Ear cleaning & nail trim", "Bandana or bow"],
  },
  {
    title: "Full Groom",
    subtitle: "The Complete Makeover",
    description:
      "Our signature head-to-tail transformation. A complete grooming experience including bath, breed-specific haircut, styling, and all the finishing touches.",
    image: "/service-full-groom.jpg",
    link: "/services/full-groom",
    features: ["Everything in Bath & Brush", "Breed-specific haircut", "Face, feet & sanitary trim", "Professional styling"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        label="Our Services"
        title="Pamper Your Pup Like a Star"
        description="Every dog deserves to look and feel amazing. Choose from our signature grooming services, tailored to your dog's breed, coat, and personality."
      >
        <Button
          size="lg"
          className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 rounded-full"
          asChild
        >
          <a href="tel:5614295589">
            <PhoneIcon className="h-5 w-5 mr-2" />
            Book Appointment
          </a>
        </Button>
      </PageHero>

      {/* Services Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} duration={700}>
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div className="relative max-w-lg mx-auto">
                      <div className={`absolute -inset-3 rounded-3xl bg-muted/30 ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`} />
                      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-[center_30%]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <p className="font-semibold tracking-widest uppercase text-sm mb-2 text-muted">{service.subtitle}</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <Button size="lg" className="rounded-full px-8 font-semibold">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
