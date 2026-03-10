"use client"

import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "0px 0px -20px 0px" })

  return (
    <footer className="text-primary-foreground bg-muted">
      <div
        ref={ref}
        className="container mx-auto px-4 py-16 transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+15614295589" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  (561) 429-5589
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=13873+Wellington+Trace+Wellington+FL+33414" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 shrink-0" />
                  13873 Wellington Trace, Wellington, FL 33414
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">About</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#about" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/dog-bath" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Luxury Spa Bath
                </Link>
              </li>
              <li>
                <Link href="/services/full-groom" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Full Groom Package
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">Serving</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/areas/wellington" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Wellington
                </Link>
              </li>
              <li>
                <Link href="/areas/royal-palm-beach" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Royal Palm Beach
                </Link>
              </li>
              <li>
                <Link href="/areas/west-palm-beach" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  West Palm Beach
                </Link>
              </li>
              <li>
                <Link href="/areas/palm-beach-gardens" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
                  Palm Beach Gardens
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col items-center gap-4">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            
          </Link>
          <p className="text-primary-foreground/40 text-xs">
            {"© 2026 Puppyarazzi Dog Grooming Wellington FL. All rights reserved. Licensed & Insured."}
          </p>
        </div>
      </div>
    </footer>
  )
}
