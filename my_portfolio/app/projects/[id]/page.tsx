"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Code, ExternalLink, Github, Calendar, User, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Footer from "@/components/footer"

// Mock project data - in a real app, this would come from a database or API
const projects = [
  {
    id: "1",
    title: "Academic Connect",
    description:
      "A platform where researchers can collaborate on research projects, institutions can sign up, and organizations can participate.",
    longDescription:
      "Academic Connect is a collaborative platform designed for researchers to work together on various research projects. Institutions can easily sign up to connect with researchers, share resources, and foster innovation. Organizations can also participate by providing funding, mentorship, and other support to enhance research outcomes. The platform aims to streamline communication and collaboration, making it easier for researchers to achieve their goals and drive impactful discoveries.",
    images: [
      "/images/Academic-Connect-Homw.png",
      "/images/Academic-Connect-Post.png",
      "/images/Academic-Connect-Sign-Up.png",
      "/images/Academic-Connect-Login.png",
      "/images/Acadmic-Connect-Feeds-Page.png",
      "/images/Academic-connect-Network.png",
      "/images/Acadeic-Connect-profile.png",
      "/images/Academic-Connect-Messgaing.png",
      "/images/Acadmeic-Conect-Workflow.png",
    ],
    tags: ["NextJS", "React", "Firestore", "Firebase auth", "TailwindCSS", "NodeJS"],
    github: "#",
    demo: "#",
    category: "fullstack",
    type: "client",
    client: "Oasis Premium",
    duration: "7 months",
    year: "2024/2025",
    role: "Lead Developer",
    features: [
      "User authentication and authorization",
      "Collaboration tools for managing research projects",
      "Resource sharing between institutions and researchers",
      "Integrated communication channels for project teams",
      "Document management for research papers and resources",
      "Event scheduling for meetings and deadlines",
    ],
    challenges: []
  },
  {
    id: "2",
    title: "Online Banking Platform",
    description:
      "A secure online banking platform that offers account management, fund transfers, and transaction tracking.",
    longDescription:
      "This online banking platform provides users with a secure and user-friendly interface to manage their finances. Users can create accounts, view transaction histories, and transfer funds between accounts seamlessly. The platform prioritizes security with multi-factor authentication and encryption to protect sensitive data.\n\nAdditionally, users can set up alerts for transactions, manage their budgets, and access financial insights to make informed decisions. The platform is designed to be responsive, ensuring a smooth experience on both desktop and mobile devices.",
    images:[
      "/images/speedy-sign-in.png",
      "/images/speedy-signup.png",
      "/images/speedy-dashboard.png",
      "/images/speedy-contact.png",
      "/images/speedy-transaction.png",
      "/images/speedy-customer.png",
      "/images/speedy-profile.png",
      "/images/speedy-details.png",
      "/images/speedy-statement.png",
    ],
    tags: ["Python", "Flask", "SQLite", "Redis", "HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    category: "fullstack",
    type: "personal",
    client: null,
    duration: "3 months",
    year: "2023",
    role: "Fullstack Developer",
    features: [
      "User account creation and management",
      "Secure fund transfers between accounts",
      "Transaction history and tracking",
      "Multi-factor authentication for enhanced security",
      "Budget management and financial insights",
      "Real-time transaction alerts",
    ],
    challenges: []
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
    longDescription:
      "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. The platform features a responsive design that works seamlessly across all devices, ensuring customers can shop anytime, anywhere.\n\nThe admin dashboard gives store owners complete control over their inventory, allowing them to add, edit, and remove products with ease. The platform also includes robust analytics to track sales, customer behavior, and inventory levels.\n\nCustomers enjoy a smooth shopping experience with intuitive navigation, detailed product pages, and a streamlined checkout process. The cart system automatically updates in real-time, and the payment processing is secure and reliable.",
    images: [
      "/images/bodijah_home.png",
      "/images/bodijah_account.png",
      "/images/bodijah_cart.png",
      "/images/bodijah_contact.png"
    ],
    tags: ["Wordpress", "WooCommerce", "PHP", "CSS"],
    github: "#",
    demo: "#",
    category: "fullstack",
    type: "client",
    client: "BodijahMarket",
    duration: "3 months",
    year: "2023",
    role: "Lead Developer",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Analytics and reporting",
    ],
    challenges: []
  },
  {
    id: "4",
    title: "Task Management API",
    description:
      "A RESTful API for task management with authentication, authorization, and comprehensive CRUD operations.",
    longDescription:
      "This robust task management API serves as the backbone for productivity applications, providing developers with a comprehensive set of endpoints to create, read, update, and delete tasks. The API is built with scalability in mind, capable of handling thousands of concurrent users without performance degradation.\n\nSecurity is a top priority, with JWT-based authentication ensuring that users can only access their own tasks. Role-based authorization further restricts certain operations to admin users, providing an additional layer of security.\n\nThe API is thoroughly documented using OpenAPI specifications, making it easy for developers to integrate with their frontend applications. Comprehensive error handling ensures that clients receive meaningful error messages when something goes wrong.",
    images: [
      "/images/Task-calender.png",
      "/images/Task-Kanban.png",
      "/images/task-tasks.png",
      "/images/Task-dashboard.png",
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker", "Redis", "Swagger"],
    github: "#",
    demo: "#",
    category: "backend",
    type: "personal",
    client: null,
    duration: "2 months",
    year: "2022",
    role: "Backend Developer",
    features: [
      "User authentication with JWT",
      "Role-based authorization",
      "CRUD operations for tasks and task lists",
      "Task assignment and delegation",
      "Deadline tracking and notifications",
      "Data validation and sanitization",
      "Rate limiting and request throttling",
    ],
    challenges: [
        ],
  },
  // {
  //   id: "4",
  //   title: "Real-time Chat Application",
  //   description: "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
  //   longDescription:
  //     "This real-time chat application enables seamless communication between users, whether they're having one-on-one conversations or participating in group discussions. The application leverages WebSockets to provide instant message delivery, with visual indicators showing when messages have been delivered and read.\n\nUsers can create and manage their own chat groups, inviting others to join and assigning different permission levels. The application also supports file sharing, allowing users to exchange documents, images, and other media directly within the chat interface.\n\nPrivacy is a key feature, with end-to-end encryption ensuring that messages can only be read by the intended recipients. Users can also delete messages for themselves or for everyone in the chat, giving them control over their conversation history.",
  //   images: [
  //     "/placeholder.svg?height=600&width=800",
  //     "/placeholder.svg?height=600&width=800",
  //     "/placeholder.svg?height=600&width=800",
  //   ],
  //   tags: ["React", "Socket.io", "Node.js", "Redis", "MongoDB", "Express", "AWS S3"],
  //   github: "#",
  //   demo: "#",
  //   category: "fullstack",
  //   type: "client",
  //   client: "ConnectTech Inc.",
  //   duration: "4 months",
  //   year: "2023",
  //   role: "Fullstack Developer",
  //   features: [
  //     "Real-time messaging with Socket.io",
  //     "Private and group chat functionality",
  //     "File sharing and media preview",
  //     "Message delivery and read receipts",
  //     "User presence indicators",
  //     "Message search and filtering",
  //     "Notification system",
  //   ],
  //   challenges: [
  //     "Ensuring reliable message delivery in poor network conditions",
  //     "Scaling WebSocket connections for thousands of concurrent users",
  //     "Implementing efficient file storage and retrieval",
  //     "Building a responsive UI that works well on mobile devices",
  //   ],
  // },
]

export default function ProjectPage() {
  const router = useRouter()
  const { id } = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // In a real app, you would fetch the project data from an API
    // For this example, we'll use the mock data
    const foundProject = projects.find((p) => p.id === id)
    setProject(foundProject)
    setLoading(false)
  }, [id])

  const nextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === id)
    const nextIndex = (currentIndex + 1) % projects.length
    router.push(`/projects/${projects[nextIndex].id}`)
  }

  const prevProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === id)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    router.push(`/projects/${projects[prevIndex].id}`)
  }

  const nextImage = () => {
    if (!project) return
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    if (!project) return
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-cyan-400">Loading project details...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-gray-100 flex flex-col">

        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">

      <main className="flex-1 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Project Images */}
            <div className="space-y-6">
              <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group">
                <Image
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Next image"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-cyan-400" : "bg-gray-400"}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-video bg-gray-800 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? "ring-2 ring-cyan-400" : ""
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-gray-800/50 text-gray-300 border-gray-600 px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button
                  className="flex-1 gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {project.title}
                </h1>
                <Badge
                  className={`${
                    project.category === "fullstack"
                      ? "bg-cyan-900/70 text-cyan-300 hover:bg-cyan-800"
                      : "bg-purple-900/70 text-purple-300 hover:bg-purple-800"
                  }`}
                >
                  {project.category}
                </Badge>
                <Badge
                  className={`ml-2 ${
                    project.type === "client"
                      ? "bg-green-900/70 text-green-300 hover:bg-green-800"
                      : "bg-blue-900/70 text-blue-300 hover:bg-blue-800"
                  }`}
                >
                  {project.type === "client" ? "Client Project" : "Personal Project"}
                </Badge>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 whitespace-pre-line">{project.longDescription}</p>
              </div>

              <Separator className="border-gray-800" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Project Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-sm">Year</span>
                        <span>{project.year}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-sm">Duration</span>
                        <span>{project.duration}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-sm">Role</span>
                        <span>{project.role}</span>
                      </div>
                    </li>
                    {project.client && (
                      <li className="flex items-start">
                        <Briefcase className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <div>
                          <span className="text-gray-400 block text-sm">Client</span>
                          <span>{project.client}</span>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Challenges & Solutions</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </motion.div>

          <div className="mt-16 flex justify-between">
            <Button
              variant="outline"
              onClick={prevProject}
              className="gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous Project
            </Button>
            <Button
              variant="outline"
              onClick={nextProject}
              className="gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
            >
              Next Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
