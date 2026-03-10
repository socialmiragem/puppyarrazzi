import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { DogShowcaseSection } from "@/components/dog-showcase-section"
import { GoogleReviews } from "@/components/google-reviews"
import { TeethCleaningSection } from "@/components/teeth-cleaning-section"
import { ContactLocation } from "@/components/contact-location"
import { MeetTheOwner } from "@/components/meet-the-owner"
import { LocalBusinessSchema, FAQSchema, ServiceAreaSchema } from "@/components/structured-data"

export const metadata = {
  title: "Puppyarazzi - Professional Dog Grooming Wellington FL | Premium Pet Spa",
  description:
    "Professional dog grooming in Wellington, Florida. Expert certified groomers, gentle handling, organic products. Same-day appointments available. Serving Palm Beach County since 2014. Call (561) 429-5589",
  keywords:
    "dog grooming Wellington FL, pet grooming Palm Beach County, professional dog groomer, dog spa Wellington, same day dog grooming, organic pet products Wellington",
  openGraph: {
    title: "Puppyarazzi - Professional Dog Grooming Wellington FL",
    description:
      "Professional dog grooming services in Wellington, Florida. Expert groomers, gentle handling, organic products.",
    images: ["/images/hero-spa-dog.jpg"],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LocalBusinessSchema />
      <ServiceAreaSchema />
      <FAQSchema />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <MeetTheOwner />
      <TeethCleaningSection />
      <DogShowcaseSection />
      <GoogleReviews />
      <ContactLocation />
    </main>
  )
}
