import { RubiksCube } from "@/components/rubiks-cube"
import { MagneticButton } from "@/components/magnetic-button"
import { ParallaxSection } from "@/components/parallax-section"
import { InteractiveCard } from "@/components/interactive-card"
import { FloatingElements } from "@/components/floating-elements"
import { MouseTrail } from "@/components/mouse-trail"
import { Sparkles, Zap, Layers, MousePointer2 } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MouseTrail />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center mb-12 space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
              Interactive
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the future of web interactions with ultra-responsive components
          </p>
        </div>

        {/* Rubik's Cube - Main Interactive Element */}
        <div className="relative z-10 mb-16">
          <RubiksCube />
        </div>

        {/* Magnetic Buttons */}
        <div className="relative z-10 flex flex-wrap gap-6 justify-center">
          <MagneticButton>
            <Sparkles className="w-5 h-5 mr-2" />
            Explore More
          </MagneticButton>
          <MagneticButton variant="outline">
            <Zap className="w-5 h-5 mr-2" />
            Get Started
          </MagneticButton>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection />

      {/* Interactive Cards Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Interactive Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hover, click, and drag to experience responsive interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InteractiveCard
              icon={<MousePointer2 className="w-8 h-8" />}
              title="Mouse Tracking"
              description="Cards that follow your cursor with smooth animations"
            />
            <InteractiveCard
              icon={<Layers className="w-8 h-8" />}
              title="3D Transforms"
              description="Depth and perspective that responds to your movements"
            />
            <InteractiveCard
              icon={<Zap className="w-8 h-8" />}
              title="Instant Feedback"
              description="Every interaction provides immediate visual response"
            />
            <InteractiveCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Smooth Animations"
              description="Buttery smooth 60fps animations throughout"
            />
            <InteractiveCard
              icon={<MousePointer2 className="w-8 h-8" />}
              title="Magnetic Effects"
              description="Elements that attract and respond to your cursor"
            />
            <InteractiveCard
              icon={<Layers className="w-8 h-8" />}
              title="Parallax Scrolling"
              description="Multi-layered depth as you scroll through content"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
