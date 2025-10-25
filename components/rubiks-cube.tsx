"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"

export function RubiksCube() {
  const cubeRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: -20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isDragging) {
      // Auto-rotate when not dragging
      const interval = setInterval(() => {
        setRotation((prev) => ({
          x: prev.x,
          y: prev.y + 0.5,
        }))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStart.x
    const deltaY = e.clientY - dragStart.y

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }))

    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const deltaX = e.touches[0].clientX - dragStart.x
    const deltaY = e.touches[0].clientY - dragStart.y

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }))

    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="perspective-1000 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={cubeRef}
          className="relative w-48 h-48 md:w-64 md:h-64 transition-transform duration-100"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 bg-card border-2 border-primary/20 rounded-lg shadow-2xl"
            style={{ transform: "translateZ(6rem)" }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`front-${i}`} className="bg-red-500 rounded-sm shadow-inner" />
            ))}
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 bg-card border-2 border-primary/20 rounded-lg shadow-2xl"
            style={{ transform: "translateZ(-6rem) rotateY(180deg)" }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`back-${i}`} className="bg-orange-500 rounded-sm shadow-inner" />
            ))}
          </div>

          {/* Right Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 bg-card border-2 border-primary/20 rounded-lg shadow-2xl"
            style={{ transform: "rotateY(90deg) translateZ(6rem)" }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`right-${i}`} className="bg-blue-500 rounded-sm shadow-inner" />
            ))}
          </div>

          {/* Left Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 bg-card border-2 border-primary/20 rounded-lg shadow-2xl"
            style={{ transform: "rotateY(-90deg) translateZ(6rem)" }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`left-${i}`} className="bg-green-500 rounded-sm shadow-inner" />
            ))}
          </div>

          {/* Top Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 bg-card border-2 border-primary/20 rounded-lg shadow-2xl"
            style={{ transform: "rotateX(90deg) translateZ(6rem)" }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`top-${i}`} className="bg-white rounded-sm shadow-inner" />
            ))}
          </div>

          {/* Bottom Face */}
          <div
            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 bg-card border-2 border-primary/20 rounded-lg shadow-2xl"
            style={{ transform: "rotateX(-90deg) translateZ(6rem)" }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={`bottom-${i}`} className="bg-yellow-400 rounded-sm shadow-inner" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        {isDragging ? "Drag to rotate" : "Click and drag to interact"}
      </p>
    </div>
  )
}
