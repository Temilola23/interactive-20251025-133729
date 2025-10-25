"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function MouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])

  useEffect(() => {
    let id = 0
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: id++ }
      setTrail((prev) => [...prev.slice(-15), newPoint])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-accent/40 blur-sm"
          style={{
            left: point.x,
            top: point.y,
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trail.length,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}
    </div>
  )
}
