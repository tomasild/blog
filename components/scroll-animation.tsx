"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  animation: "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in"
  delay?: number
  threshold?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
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
  }, [delay, threshold])

  return (
    <div ref={ref} className={`${animation} ${className}`}>
      {children}
    </div>
  )
}

