import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { PhoneIcon } from "@/components/simple-icons"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { PageHero } from "@/components/page-hero"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Dog Grooming Gallery - Happy Customers | Puppyarazzi Wellington FL",
  description:
    "See our happy groomed dogs at Puppyarazzi in Wellington, FL. Professional grooming results and satisfied customers. Before and after photos of dogs groomed by our expert team in Palm Beach County.",
  keywords:
    "dog grooming gallery Wellington FL, pet grooming results, happy dogs Wellington, professional grooming photos, dog grooming before after Wellington, Palm Beach County pet grooming",
  openGraph: {
    title: "Dog Grooming Gallery - Puppyarazzi Wellington FL",
    description: "See our happy groomed dogs and professional grooming results in Wellington, Florida.",
    images: ["/images/gallery/gallery-hero.jpg"],
  },
}

const galleryImages = [
  {
    id: 1,
    image: "/images/gallery/yorkie-with-bow.jpg",
    alt: "Yorkshire Terrier with floral bow",
    breed: "Yorkshire Terrier",
    service: "Full Grooming Package",
  },
  {
    id: 2,
    image: "/images/gallery/black-poodle-groomed.jpg",
    alt: "Black poodle after grooming",
    breed: "Standard Poodle",
    service: "Teddy Bear Cut",
  },
  {
    id: 3,
    image: "/images/gallery/two-yorkies-happy.jpg",
    alt: "Two happy Yorkshire Terriers",
    breed: "Yorkshire Terrier",
    service: "Playtime Cut",
  },
  {
    id: 4,
    image: "/images/gallery/yorkie-yellow-bow.jpg",
    alt: "Yorkshire Terrier with yellow bow",
    breed: "Yorkshire Terrier",
    service: "Bow Accessories",
  },
  {
    id: 5,
    image: "/images/gallery/bulldog-orange-bandana.jpg",
    alt: "English Bulldog with orange bandana",
    breed: "English Bulldog",
    service: "Bandana Style",
  },
  {
    id: 6,
    image: "/images/gallery/beagle-tropical-bandana.jpg",
    alt: "Beagle with tropical bandana",
    breed: "Beagle",
    service: "Tropical Bandana",
  },
  {
    id: 7,
    image: "/images/gallery/poodle-tropical-bandana.jpg",
    alt: "Poodle with tropical bandana",
    breed: "Standard Poodle",
    service: "Luxury Spa Day",
  },
  {
    id: 8,
    image: "/images/gallery/white-maltese-groomed.jpg",
    alt: "White Maltese after grooming",
    breed: "Maltese",
    service: "Complete Grooming",
  },
  {
    id: 9,
    image: "/images/gallery/white-bichon-portrait.jpg",
    alt: "White Bichon Frise portrait",
    breed: "Bichon Frise",
    service: "Portrait Session",
  },
  {
    id: 10,
    image: "/images/gallery/westie-blue-bandana.jpg",
    alt: "West Highland Terrier with blue bandana",
    breed: "West Highland Terrier",
    service: "Blue Bandana Style",
  },
  {
    id: 11,
    image: "/images/gallery/black-white-dog-happy.jpg",
    alt: "Happy black and white dog",
    breed: "Mixed Breeds",
    service: "Happy Transformation",
  },
  {
    id: 12,
    image: "/images/gallery/four-dogs-group.jpg",
    alt: "Group of four dogs",
    breed: "Mixed Breeds",
    service: "Group Grooming Session",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        label="Gallery"
        title="Happy Pups, Happy Parents"
        description="See some of our furry friends who love their grooming experience at Puppyarazzi. Every dog leaves looking like a star."
        variant="accent"
      />

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      <CTABanner
        title="Want Your Pup Featured Here?"
        description="Book a grooming session and your dog could be our next star! Every dog gets the star treatment."
      />
    </main>
  )
}
