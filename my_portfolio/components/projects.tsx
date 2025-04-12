"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  category: "fullstack" | "backend" | "frontend"
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management API",
      description:
        "A RESTful API for task management with authentication, authorization, and comprehensive CRUD operations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
      github: "#",
      demo: "#",
      category: "backend",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Socket.io", "Node.js", "Redis", "MongoDB"],
      github: "#",
      demo: "#",
      category: "fullstack",
    },
    {
      id: 4,
      title: "Content Management System",
      description: "A headless CMS with a user-friendly admin panel, content modeling, and API access.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "TypeScript"],
      github: "#",
      demo: "#",
      category: "fullstack",
    },
    {
      id: 5,
      title: "Authentication Microservice",
      description: "A secure authentication microservice with OAuth, MFA, and user management features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "JWT", "Redis", "MongoDB"],
      github: "#",
      demo: "#",
      category: "backend",
    },
    {
      id: 6,
      title: "API Gateway",
      description: "A robust API gateway with rate limiting, caching, and request routing capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
      category: "backend",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in fullstack and backend development.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-800/50 border border-gray-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-300">
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                className="data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-300"
              >
                Fullstack
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-300"
              >
                Backend
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-gray-800/30 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`${
                            project.category === "fullstack"
                              ? "bg-cyan-900/70 text-cyan-300 hover:bg-cyan-800"
                              : "bg-purple-900/70 text-purple-300 hover:bg-purple-800"
                          }`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
          >
            View All Projects
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
