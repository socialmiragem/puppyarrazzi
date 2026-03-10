"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    // Load Google Analytics
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [measurementId])

  return null
}

export function GoogleSearchConsole({ verificationCode }: { verificationCode: string }) {
  useEffect(() => {
    const meta = document.createElement("meta")
    meta.name = "google-site-verification"
    meta.content = verificationCode
    document.head.appendChild(meta)

    return () => {
      document.head.removeChild(meta)
    }
  }, [verificationCode])

  return null
}
