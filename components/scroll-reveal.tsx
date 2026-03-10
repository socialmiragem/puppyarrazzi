"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Direction = "up" | "down" | "left" | "right" | "none"

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

const directionMap: Record<Direction, (distance: number) => string> = {
  up: (d) => `translate3d(0, ${d}px, 0)`,
  down: (d) => `translate3d(0, -${d}px, 0)`,
  left: (d) => `translate3d(${d}px, 0, 0)`,
  right: (d) => `translate3d(-${d}px, 0, 0)`,
  none: () => "translate3d(0, 0, 0)",
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 40,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ once })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : directionMap[direction](distance),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}

interface StaggerChildrenProps {
  children: ReactNode[]
  direction?: Direction
  staggerDelay?: number
  baseDelay?: number
  duration?: number
  distance?: number
  className?: string
  childClassName?: string
}

export function StaggerChildren({
  children,
  direction = "up",
  staggerDelay = 100,
  baseDelay = 0,
  duration = 700,
  distance = 40,
  className = "",
  childClassName = "",
}: StaggerChildrenProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
          distance={distance}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}
