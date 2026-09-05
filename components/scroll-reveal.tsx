"use client"

import React, { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale"
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
  className?: string
}

export default function ScrollReveal({
  children,
  variant = "slide-up",
  duration = 800,
  delay = 0,
  threshold = 0.05,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Return early if IntersectionObserver is not supported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const getVariantStyles = () => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: "translate(0, 0) scale(1)",
      }
    }

    switch (variant) {
      case "fade":
        return { opacity: 0, transform: "none" }
      case "slide-up":
        return { opacity: 0, transform: "translateY(40px)" }
      case "slide-down":
        return { opacity: 0, transform: "translateY(-40px)" }
      case "slide-left":
        return { opacity: 0, transform: "translateX(40px)" }
      case "slide-right":
        return { opacity: 0, transform: "translateX(-40px)" }
      case "scale":
        return { opacity: 0, transform: "scale(0.95)" }
      default:
        return { opacity: 0, transform: "translateY(40px)" }
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getVariantStyles(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
