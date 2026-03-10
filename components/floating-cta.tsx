"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
// import { Phone, X } from 'lucide-react'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [hasWaitedEnough, setHasWaitedEnough] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasWaitedEnough(true)
    }, 120000) // 120000ms = 2 minutes

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition > windowHeight * 0.8 && !isDismissed && hasWaitedEnough) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed, hasWaitedEnough])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#1a1a1a] text-white rounded-2xl shadow-2xl p-4 max-w-sm mx-auto sm:mx-0">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-white text-[#1a1a1a] rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          <span className="text-sm font-bold px-1">×</span>
        </button>

        <div className="text-center mb-4">
          <h3 className="font-bold text-lg mb-1">Ready to Schedule?</h3>
          <p className="text-sm text-gray-300">Same-day appointments available!</p>
        </div>

        <div className="space-y-2">
          <Button
            size="lg"
            className="w-full bg-[#FFB74D] text-black hover:bg-[#FFA726] transition-all duration-200 hover:shadow-lg font-semibold"
            onClick={() => (window.location.href = "tel:5614295589")}
          >
            Call to Schedule
          </Button>

          <p className="text-xs text-center text-gray-400">
            Call (561) 429-5589 for immediate scheduling!
          </p>
        </div>
      </div>
    </div>
  )
}
