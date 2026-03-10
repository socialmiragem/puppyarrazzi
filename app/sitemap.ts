import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://puppyarazzi.com"

  const blogSlugs = [
    "dog-grooming-tips-beginners",
    "choosing-right-groomer-wellington",
    "understanding-dog-coat-types",
    "seasonal-grooming-care",
    "puppy-first-grooming",
    "senior-dog-grooming",
    "what-to-expect-dog-grooming-wellington",
    "anxious-dog-grooming-tips",
    "golden-retriever-grooming-guide",
    "non-anesthetic-teeth-cleaning-dogs",
    "luxury-dog-spa-day-wellington",
    "best-dog-groomer-palm-beach-county",
  ]

  const areaSlugs = [
    "wellington",
    "royal-palm-beach",
    "west-palm-beach",
    "loxahatchee",
    "lake-worth",
    "greenacres",
    "palm-beach-gardens",
    "jupiter",
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/dog-bath`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/full-groom`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...areaSlugs.map((slug) => ({
      url: `${baseUrl}/areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
