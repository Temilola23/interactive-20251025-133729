"use client"

import { useEffect, useRef, useState } from "react"

export function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = 1 - rect.top / window.innerHeight
      setScrollY(scrollProgress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background"
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 100}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
        <div
          style={{
            transform: `translateY(${scrollY * -50}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.5),
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Scroll to Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Watch as elements move at different speeds, creating a sense of depth and immersion
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          style={{
            transform: `translateY(${scrollY * 30}px)`,
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-card border border-border shadow-lg"
              style={{
                transform: `translateY(${scrollY * (i * 10)}px)`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
