"use client"

import { motion } from "framer-motion"
import { Code2, Server, Database, Braces } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-lg transform rotate-3 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-cyan-900/20 rounded-lg z-10"></div>
              <Image
                src="/images/Photo.jpg"
                alt="Developer Portrait"
                fill
                className="object-cover rounded-lg z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <div className="flex gap-3">
                  <span className="inline-block px-3 py-1 bg-cyan-900/70 text-cyan-300 rounded-full text-sm">
                    Python(Django/Flask/Odoo)
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-900/70 text-blue-300 rounded-full text-sm">
                    React JS
                  </span>
                  <span className="inline-block px-3 py-1 bg-green-900/70 text-green-300 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Software Engineer & Problem Solver</h3>
            <p className="text-gray-300 mb-6">
              I&apos;m a passionate software engineer with expertise in both frontend and backend development. With over
              3 years of experience, I specialize in building scalable, efficient, and user-friendly applications.
            </p>
            <p className="text-gray-300 mb-8">
              My journey in tech began with a fascination for solving complex problems and has evolved into creating
              elegant solutions that make a difference. I believe in clean code, continuous learning, and pushing the
              boundaries of what&apos;s possible with technology.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <Code2 className="h-8 w-8 text-cyan-400 mb-2" />
                <h4 className="font-bold text-white">Frontend</h4>
                <p className="text-gray-400 text-sm">Creating responsive and intuitive user interfaces</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <Server className="h-8 w-8 text-purple-400 mb-2" />
                <h4 className="font-bold text-white">Backend</h4>
                <p className="text-gray-400 text-sm">Building robust APIs and server-side applications</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <Database className="h-8 w-8 text-blue-400 mb-2" />
                <h4 className="font-bold text-white">Databases</h4>
                <p className="text-gray-400 text-sm">Designing efficient data storage solutions</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <Braces className="h-8 w-8 text-green-400 mb-2" />
                <h4 className="font-bold text-white">Architecture</h4>
                <p className="text-gray-400 text-sm">Creating scalable system architectures</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
