"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function HashScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Handle hash on initial load and navigation
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # from the hash
        const id = hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          // Small delay to ensure page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 100)
        }
      }
    }

    // Run on mount and pathname change
    handleHashScroll()

    // Also listen for hash changes
    window.addEventListener("hashchange", handleHashScroll)

    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
    }
  }, [pathname])

  return null
}
