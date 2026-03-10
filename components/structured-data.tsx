export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PetGrooming"],
    "@id": "https://puppyarazzi.com",
    name: "Puppyarazzi Dog Grooming",
    alternateName: "Puppyarazzi Pet Grooming Wellington",
    description:
      "Premium dog grooming services in Wellington, Florida with Hollywood glamour. Professional pet grooming and spa treatments for your beloved companion since 2014. Serving Palm Beach County.",
    url: "https://puppyarazzi.com",
    telephone: "+1-561-429-5589",
    email: "hello@puppyarazzi.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13873 Wellington Trce",
      addressLocality: "Wellington",
      addressRegion: "FL",
      postalCode: "33414",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.6617",
      longitude: "-80.2417",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-17:00", "Su 10:00-16:00"],
    priceRange: "$$",
    image: "https://puppyarazzi.com/images/storefront.jpg",
    logo: "https://puppyarazzi.com/images/puppyarazzi-logo.png",
    sameAs: [
      "https://www.facebook.com/puppyarazzi",
      "https://www.instagram.com/puppyarazzi",
      "https://www.yelp.com/biz/puppyarazzi",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dog Grooming Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Grooming Service",
            description: "Complete grooming package including bath, cut, ear cleaning, and professional styling",
            serviceType: "Pet Grooming",
            areaServed: ["Wellington, FL", "Palm Beach County, FL", "Royal Palm Beach, FL", "Loxahatchee, FL"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Dog Bath Service",
            description: "Luxury bath with organic shampoos, conditioning treatment, and aromatherapy",
            serviceType: "Pet Bathing",
            areaServed: ["Wellington, FL", "Palm Beach County, FL", "Royal Palm Beach, FL", "Loxahatchee, FL"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Breed-Specific Grooming",
            description: "Specialized grooming techniques for poodles, doodles, and other specific breeds",
            serviceType: "Specialized Pet Grooming",
            areaServed: ["Wellington, FL", "Palm Beach County, FL", "Royal Palm Beach, FL", "Loxahatchee, FL"],
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "5",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah M.",
        },
        reviewBody:
          "Puppyarazzi transformed my Golden Retriever Max from a shaggy mess into a show-stopping beauty! The groomers are so gentle and patient. Max actually gets excited when we pull up to their location.",
        datePublished: "2024-11-15",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Michael R.",
        },
        reviewBody:
          "I've been bringing my anxious rescue dog Luna here for 6 months now. The staff is amazing with nervous dogs - they take their time and never rush. Luna used to hate grooming, but now she's calm and relaxed.",
        datePublished: "2024-10-20",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Jennifer L.",
        },
        reviewBody:
          "Best dog grooming in Wellington! My Poodle Charlie gets the most amazing cuts here. They really know breed-specific styling - his teddy bear cut is always perfect.",
        datePublished: "2024-12-01",
      },
    ],
    foundingDate: "2014",
    slogan: "Picture-Perfect Grooming for Your Puppy",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
    currenciesAccepted: "USD",
    areaServed: [
      {
        "@type": "City",
        name: "Wellington",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "Royal Palm Beach",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "Loxahatchee",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "West Palm Beach",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "AdministrativeArea",
        name: "Palm Beach County",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
    ],
    knowsAbout: [
      "Dog Grooming",
      "Pet Bathing",
      "Breed-Specific Styling",
      "Poodle Grooming",
      "Doodle Grooming",
      "Organic Pet Products",
      "Anxious Dog Care",
      "Professional Pet Styling",
    ],
    hasCredential: "Certified Professional Groomers",
    memberOf: "Professional Pet Groomers Association",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "26.6617",
        longitude: "-80.2417",
      },
      geoRadius: "25000",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceSchema({ service }: { service: string }) {
  const serviceSchemas = {
    "dog-bath": {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Premium Dog Bath Service",
      description:
        "Luxury dog bathing service with organic shampoos, conditioning treatments, aromatherapy options, and professional blow-drying in Wellington, Florida.",
      provider: {
        "@type": "LocalBusiness",
        name: "Puppyarazzi Dog Grooming",
        url: "https://puppyarazzi.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "13873 Wellington Trce",
          addressLocality: "Wellington",
          addressRegion: "FL",
          postalCode: "33414",
          addressCountry: "US",
        },
      },
      areaServed: [
        {
          "@type": "City",
          name: "Wellington",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
      ],
      serviceType: "Pet Bathing Service",
      category: "Pet Care",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceRange: "$$",
      },
    },
    "full-groom": {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Full Dog Grooming Service",
      description:
        "Complete grooming package including bath, haircut, ear cleaning, and professional styling with breed-specific techniques in Wellington, Florida.",
      provider: {
        "@type": "LocalBusiness",
        name: "Puppyarazzi Dog Grooming",
        url: "https://puppyarazzi.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "13873 Wellington Trce",
          addressLocality: "Wellington",
          addressRegion: "FL",
          postalCode: "33414",
          addressCountry: "US",
        },
      },
      areaServed: [
        {
          "@type": "City",
          name: "Wellington",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
      ],
      serviceType: "Complete Pet Grooming Service",
      category: "Pet Care",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceRange: "$$",
      },
      additionalType: "https://schema.org/PetGrooming",
    },
  }

  const schema = serviceSchemas[service as keyof typeof serviceSchemas]

  if (!schema) return null

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dog Grooming Services Wellington FL",
    description:
      "Professional dog grooming services serving Wellington, Royal Palm Beach, Loxahatchee, and surrounding Palm Beach County areas in Florida.",
    provider: {
      "@type": "LocalBusiness",
      name: "Puppyarazzi Dog Grooming",
      address: {
        "@type": "PostalAddress",
        streetAddress: "13873 Wellington Trce",
        addressLocality: "Wellington",
        addressRegion: "FL",
        postalCode: "33414",
        addressCountry: "US",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Wellington",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "Royal Palm Beach",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "Loxahatchee",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "West Palm Beach",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "PostalCodeRange",
        postalCodeBegin: "33414",
        postalCodeEnd: "33418",
        addressCountry: "US",
        addressRegion: "FL",
      },
    ],
    serviceType: "Pet Grooming Services",
    category: "Pet Care",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Puppyarazzi offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppyarazzi offers full dog grooming services including premium baths, complete grooming packages, breed-specific styling, and specialty treatments. We serve Wellington, Florida and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I groom my dog?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most dogs benefit from professional grooming every 4-6 weeks. However, this varies by breed, coat type, and lifestyle. Dogs with longer coats may need grooming every 3-4 weeks, while short-haired breeds may only need grooming every 6-8 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Puppyarazzi different from other groomers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puppyarazzi combines professional expertise with Hollywood glamour styling. Our certified groomers specialize in breed-specific techniques, use only premium organic products, and provide gentle, stress-free experiences. We've been serving Wellington, FL since 2014 with 5-star rated service.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day dog grooming appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Puppyarazzi offers same-day appointments based on availability. Call (561) 429-5589 to check our current schedule and book your dog's grooming session today.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does Puppyarazzi serve in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Wellington, Royal Palm Beach, Loxahatchee, West Palm Beach, Palm Beach Gardens, Jupiter, and surrounding Palm Beach County areas. Located at 13873 Wellington Trce, Wellington, FL 33414.",
        },
      },
      {
        "@type": "Question",
        name: "Are your dog grooming products safe and organic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We use only premium organic, pet-safe products that are gentle on your dog's skin and coat. All our shampoos and conditioners are hypoallergenic and specially formulated for dogs.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ContactSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Puppyarazzi Dog Grooming",
    description:
      "Contact Puppyarazzi for professional dog grooming appointments in Wellington, Florida. Call (561) 429-5589 or visit us at 13873 Wellington Trce.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Puppyarazzi Dog Grooming",
      telephone: "+1-561-429-5589",
      email: "hello@puppyarazzi.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "13873 Wellington Trce",
        addressLocality: "Wellington",
        addressRegion: "FL",
        postalCode: "33414",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.6617",
        longitude: "-80.2417",
      },
      openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-17:00", "Su 10:00-16:00"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-561-429-5589",
          contactType: "customer service",
          areaServed: ["Wellington", "Royal Palm Beach", "Loxahatchee", "Palm Beach County"],
          availableLanguage: "English",
          contactOption: "TollFree",
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-561-429-5589",
          contactType: "reservations",
          areaServed: ["Wellington", "Royal Palm Beach", "Loxahatchee", "Palm Beach County"],
          availableLanguage: "English",
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Puppyarazzi Dog Grooming",
    alternateName: "Puppyarazzi Pet Grooming Wellington",
    url: "https://puppyarazzi.com",
    logo: "https://puppyarazzi.com/images/puppyarazzi-logo.png",
    image: "https://puppyarazzi.com/images/storefront.jpg",
    description:
      "Professional dog grooming services in Wellington, Florida with Hollywood glamour. Expert certified groomers, gentle handling, organic products serving Palm Beach County since 2014.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13873 Wellington Trce",
      addressLocality: "Wellington",
      addressRegion: "FL",
      postalCode: "33414",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.6617",
      longitude: "-80.2417",
    },
    telephone: "+1-561-429-5589",
    email: "hello@puppyarazzi.com",
    foundingDate: "2014",
    founder: {
      "@type": "Person",
      name: "Puppyarazzi Founder",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "5-10",
    },
    slogan: "Picture-Perfect Grooming for Your Puppy",
    knowsAbout: [
      "Dog Grooming",
      "Pet Bathing",
      "Breed-Specific Styling",
      "Poodle Grooming",
      "Doodle Grooming",
      "Organic Pet Products",
      "Anxious Dog Care",
      "Professional Pet Styling",
      "Wellington FL Pet Services",
      "Palm Beach County Dog Grooming",
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "26.6617",
        longitude: "-80.2417",
      },
      geoRadius: "25000",
    },
    sameAs: [
      "https://www.facebook.com/puppyarazzi",
      "https://www.instagram.com/puppyarazzi",
      "https://www.yelp.com/biz/puppyarazzi",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
