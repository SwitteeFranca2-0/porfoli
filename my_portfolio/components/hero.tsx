"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Terminal } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { Maximize2 } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
            Math.random() * 200 + 55,
          )}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.random() * 0.5 + 0.2})`,
        })
      }
    }

    createParticles()

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.2
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      connectParticles()
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Terminal className="h-10 w-10 text-cyan-400 mr-2" />
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-white">I&apos;m </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Franca Uvere</span>
        </h1>
        <div className="h-16 md:h-20">
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Backend Engineer",
              1000,
              "System Architect",
              1000,
              "Problem Solver",
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-4xl font-mono text-gray-300"
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg md:text-xl">
          Building robust and scalable applications with modern technologies
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            <Link href="/#projects">
              View Projects
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
          >
             <Link href="/#contact">
             Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
