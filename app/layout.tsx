import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { OrganizationSchema } from "@/components/structured-data"
import { HashScrollHandler } from "@/components/hash-scroll-handler"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MetaPixel } from "@/lib/MetaPixel"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Puppyarazzi - Professional Dog Grooming Wellington FL | Premium Pet Spa Services",
  description:
    "Professional dog grooming in Wellington, Florida serving Palm Beach County. Expert certified groomers, gentle handling, organic products. 10+ years experience. Same-day appointments available. Call (561) 429-5589",
  keywords:
    "dog grooming Wellington FL, pet grooming Palm Beach County, professional dog groomer Wellington, dog spa Wellington Florida, pet care Wellington, dog bathing Wellington, dog styling Wellington FL, dog grooming near me, pet grooming 33414",
  authors: [{ name: "Puppyarazzi Dog Grooming" }],
  creator: "Puppyarazzi Dog Grooming Wellington FL",
  publisher: "Puppyarazzi Dog Grooming",
  robots: "index, follow",
  verification: {
    google: "your-google-verification-code",
  },
  category: "Pet Services",
  classification: "Local Business",
  openGraph: {
    title: "Puppyarazzi - Professional Dog Grooming Wellington FL",
    description:
      "Professional dog grooming services in Wellington, Florida. Expert groomers, gentle handling, organic products. Serving Palm Beach County since 2014.",
    type: "website",
    locale: "en_US",
    siteName: "Puppyarazzi Dog Grooming",
    url: "https://puppyarazzi.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Puppyarazzi Dog Grooming Wellington FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puppyarazzi - Professional Dog Grooming Wellington FL",
    description:
      "Professional dog grooming services in Wellington, Florida. Expert groomers serving Palm Beach County.",
    creator: "@puppyarazzi",
    images: ["/images/twitter-image.jpg"],
  },
  generator: "Next.js",
  applicationName: "Puppyarazzi Dog Grooming",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Wellington",
    "geo.position": "26.6617;-80.2411",
    ICBM: "26.6617, -80.2411",
  },
  icons: {
    icon: "/images/logo-stacked.png",
    apple: "/images/logo-stacked.png",
  },
}

function AdditionalHeadElements() {
  return (
    <>
      <OrganizationSchema />
      <link rel="canonical" href="https://puppyarazzi.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans overflow-x-hidden">
        <AdditionalHeadElements />
        <HashScrollHandler />
        <Header />
        <MetaPixel/>

        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}
