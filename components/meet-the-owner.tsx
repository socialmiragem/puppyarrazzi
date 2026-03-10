"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function MeetTheOwner() {
  const { data } = useSWR<{ video: { url: string; filename: string } | null }>("/api/video", fetcher)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const videoUrl = data?.video?.url || process.env.NEXT_PUBLIC_PROMO_VIDEO_URL || ""

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onEnd = () => setIsPlaying(false)
    video.addEventListener("ended", onEnd)
    return () => video.removeEventListener("ended", onEnd)
  }, [videoUrl])

  // Intersection Observer for autoplay on scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && !hasInteracted) {
          videoRef.current.play()
          setIsPlaying(true)
          setIsMuted(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(container)
    return () => observer.unobserve(container)
  }, [hasInteracted])

  if (!videoUrl) return null

  function togglePlay() {
    if (!videoRef.current) return
    setHasInteracted(true)
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  function toggleMute() {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" duration={900}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                See Us In Action
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Watch the Puppyarazzi Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From the moment your dog walks in to their picture-perfect finish, we treat them like our own. See for yourself why Wellington pet parents trust us with their beloved pups.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* Video */}
              <div className="lg:col-span-3 flex justify-center">
                {/* Hidden SVG defining the paw clipPath */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <clipPath id="paw-clip" clipPathUnits="objectBoundingBox">
                      {/* Main pad — large rounded bottom shape */}
                      <ellipse cx="0.5" cy="0.72" rx="0.36" ry="0.27" />
                      {/* Top-left toe */}
                      <ellipse cx="0.22" cy="0.38" rx="0.13" ry="0.16" />
                      {/* Top-center-left toe */}
                      <ellipse cx="0.38" cy="0.27" rx="0.13" ry="0.16" />
                      {/* Top-center-right toe */}
                      <ellipse cx="0.62" cy="0.27" rx="0.13" ry="0.16" />
                      {/* Top-right toe */}
                      <ellipse cx="0.78" cy="0.38" rx="0.13" ry="0.16" />
                    </clipPath>
                  </defs>
                </svg>

                <div
                  ref={containerRef}
                  className="relative mx-auto"
                  style={{
                    width: "360px",
                    height: "420px",
                    clipPath: "url(#paw-clip)",
                    background: "#c8a97e",
                  }}
                >
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    muted={isMuted}
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Bottom Controls */}
                  {hasInteracted && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={togglePlay}
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-[#1a1a1a]" />
                          ) : (
                            <Play className="w-5 h-5 text-[#1a1a1a] ml-0.5" />
                          )}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5 text-[#1a1a1a]" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-[#1a1a1a]" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Large Play Button (shown when not yet interacted or paused) */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                      aria-label="Play video"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-[#1a1a1a] ml-1" />
                      </div>
                    </button>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  A Family Business Built on Love for Dogs
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 15 years of hands-on experience, every grooming session at Puppyarazzi is a personalized, stress-free experience using only premium organic products.
                  </p>
                  <p>
                    No cages, no waiting, no stress. Your dog is the only one being groomed at a time in our calm, dog-only environment.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Your Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
