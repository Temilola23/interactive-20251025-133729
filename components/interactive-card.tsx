"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface InteractiveCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function InteractiveCard({ icon, title, description }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateX = ((e.clientY - centerY) / rect.height) * -20
    const rotateY = ((e.clientX - centerX) / rect.width) * 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <Card
      ref={cardRef}
      className="relative overflow-hidden transition-all duration-300 cursor-pointer group"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
          isHovered ? "scale(1.05)" : "scale(1)"
        }`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transform: "translateZ(20px)" }}
      />
      <CardContent className="relative p-6 space-y-4" style={{ transform: "translateZ(40px)" }}>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
