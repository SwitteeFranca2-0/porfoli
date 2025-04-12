"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, PenToolIcon as Tool, Terminal } from "lucide-react"

interface Skill {
  name: string
  level: number
  color: string
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const frontendSkills: Skill[] = [
    { name: "React", level: 90, color: "cyan" },
    { name: "TypeScript", level: 85, color: "blue" },
    { name: "Next.js", level: 80, color: "purple" },
    { name: "HTML/CSS", level: 95, color: "orange" },
    { name: "Tailwind CSS", level: 90, color: "teal" },
    { name: "Redux", level: 75, color: "indigo" },
  ]

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 85, color: "green" },
    { name: "Express", level: 80, color: "gray" },
    { name: "NestJS", level: 75, color: "red" },
    { name: "GraphQL", level: 70, color: "pink" },
    { name: "REST API", level: 90, color: "blue" },
    { name: "Microservices", level: 65, color: "purple" },
  ]

  const databaseSkills: Skill[] = [
    { name: "MongoDB", level: 85, color: "green" },
    { name: "PostgreSQL", level: 80, color: "blue" },
    { name: "Redis", level: 70, color: "red" },
    { name: "Firebase", level: 75, color: "yellow" },
    { name: "Prisma", level: 65, color: "indigo" },
    { name: "SQL", level: 80, color: "cyan" },
  ]

  const otherSkills: Skill[] = [
    { name: "Git", level: 90, color: "orange" },
    { name: "Docker", level: 75, color: "blue" },
    { name: "AWS", level: 70, color: "yellow" },
    { name: "CI/CD", level: 65, color: "green" },
    { name: "Testing", level: 80, color: "red" },
    { name: "Agile", level: 85, color: "purple" },
  ]

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full rounded-full bg-${skill.color}-500`}
          style={{
            background: `linear-gradient(90deg, var(--tw-gradient-stops))`,
            "--tw-gradient-from": `rgb(6 182 212)`,
            "--tw-gradient-to": `rgb(168 85 247)`,
            "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to)`,
          }}
        ></motion.div>
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Technical Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My technical expertise spans across various technologies and tools, allowing me to build complete solutions
            from front to back.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-800/50 border border-gray-700">
              <TabsTrigger
                value="frontend"
                className="data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-300"
              >
                <Code className="h-4 w-4 mr-2" />
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-300"
              >
                <Server className="h-4 w-4 mr-2" />
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-300"
              >
                <Database className="h-4 w-4 mr-2" />
                Database
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className="data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-300"
              >
                <Tool className="h-4 w-4 mr-2" />
                Other
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div>
                <div className="mb-8 flex items-center">
                  <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  I create responsive, interactive, and user-friendly interfaces using modern frontend technologies. My
                  focus is on building performant applications with clean and maintainable code.
                </p>
                <div className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
                  <code className="text-sm text-cyan-300 font-mono">
                    <span className="text-purple-400">const</span> <span className="text-cyan-300">renderApp</span>{" "}
                    <span className="text-purple-400">=</span> <span className="text-orange-300">()</span>{" "}
                    <span className="text-purple-400">=&gt;</span> <span className="text-orange-300">&#123;</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span>{" "}
                    <span className="text-orange-300">(</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-blue-300">&lt;App</span> <span className="text-green-300">theme</span>
                    <span className="text-purple-400">=</span>
                    <span className="text-yellow-300">&quot;cyber&quot;</span>{" "}
                    <span className="text-blue-300">/&gt;</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-orange-300">)</span>
                    <br />
                    <span className="text-orange-300">&#125;</span>
                  </code>
                </div>
              </div>
              <div>
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div>
                <div className="mb-8 flex items-center">
                  <Server className="h-6 w-6 text-purple-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Backend Development</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  I build robust, scalable, and secure server-side applications and APIs. My backend solutions are
                  designed with performance, security, and maintainability in mind.
                </p>
                <div className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
                  <code className="text-sm text-cyan-300 font-mono">
                    <span className="text-purple-400">const</span> <span className="text-cyan-300">server</span>{" "}
                    <span className="text-purple-400">=</span> <span className="text-cyan-300">express</span>
                    <span className="text-orange-300">()</span>
                    <br />
                    <br />
                    <span className="text-cyan-300">server</span>
                    <span className="text-orange-300">.</span>
                    <span className="text-cyan-300">get</span>
                    <span className="text-orange-300">(</span>
                    <span className="text-yellow-300">&apos;/api/projects&apos;</span>
                    <span className="text-orange-300">,</span> <span className="text-purple-400">async</span>{" "}
                    <span className="text-orange-300">(</span>
                    <span className="text-cyan-300">req</span>
                    <span className="text-orange-300">,</span> <span className="text-cyan-300">res</span>
                    <span className="text-orange-300">)</span> <span className="text-purple-400">=&gt;</span>{" "}
                    <span className="text-orange-300">&#123;</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">projects</span> <span className="text-purple-400">=</span>{" "}
                    <span className="text-purple-400">await</span> <span className="text-cyan-300">Project</span>
                    <span className="text-orange-300">.</span>
                    <span className="text-cyan-300">findAll</span>
                    <span className="text-orange-300">()</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">res</span>
                    <span className="text-orange-300">.</span>
                    <span className="text-cyan-300">json</span>
                    <span className="text-orange-300">(</span>
                    <span className="text-cyan-300">projects</span>
                    <span className="text-orange-300">)</span>
                    <br />
                    <span className="text-orange-300">&#125;)</span>
                  </code>
                </div>
              </div>
              <div>
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="database" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div>
                <div className="mb-8 flex items-center">
                  <Database className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Database Management</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  I design and implement efficient database solutions, from schema design to query optimization. I work
                  with both SQL and NoSQL databases to ensure data integrity and performance.
                </p>
                <div className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
                  <code className="text-sm text-cyan-300 font-mono">
                    <span className="text-purple-400">const</span> <span className="text-cyan-300">ProjectSchema</span>{" "}
                    <span className="text-purple-400">=</span> <span className="text-purple-400">new</span>{" "}
                    <span className="text-cyan-300">Schema</span>
                    <span className="text-orange-300">(</span>
                    <span className="text-orange-300">&#123;</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">title</span>
                    <span className="text-orange-300">:</span> <span className="text-orange-300">&#123;</span>{" "}
                    <span className="text-cyan-300">type</span>
                    <span className="text-orange-300">:</span> <span className="text-cyan-300">String</span>
                    <span className="text-orange-300">,</span> <span className="text-cyan-300">required</span>
                    <span className="text-orange-300">:</span> <span className="text-purple-400">true</span>{" "}
                    <span className="text-orange-300">&#125;</span>
                    <span className="text-orange-300">,</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-300">tech</span>
                    <span className="text-orange-300">:</span> <span className="text-orange-300">[</span>
                    <span className="text-cyan-300">String</span>
                    <span className="text-orange-300">]</span>
                    <br />
                    <span className="text-orange-300">&#125;)</span>
                  </code>
                </div>
              </div>
              <div>
                {databaseSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="other" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div>
                <div className="mb-8 flex items-center">
                  <Tool className="h-6 w-6 text-green-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Tools & DevOps</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  I leverage modern development tools and practices to streamline the development process. From version
                  control to deployment, I ensure smooth and efficient workflows.
                </p>
                <div className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
                  <code className="text-sm text-cyan-300 font-mono">
                    <span className="text-green-300"># Dockerfile</span>
                    <br />
                    <span className="text-purple-400">FROM</span> <span className="text-cyan-300">node:18-alpine</span>
                    <br />
                    <br />
                    <span className="text-purple-400">WORKDIR</span> <span className="text-cyan-300">/app</span>
                    <br />
                    <br />
                    <span className="text-purple-400">COPY</span>{" "}
                    <span className="text-cyan-300">package*.json ./</span>
                    <br />
                    <br />
                    <span className="text-purple-400">RUN</span> <span className="text-cyan-300">npm install</span>
                    <br />
                    <br />
                    <span className="text-purple-400">COPY</span> <span className="text-cyan-300">. .</span>
                    <br />
                    <br />
                    <span className="text-purple-400">CMD</span> <span className="text-orange-300">[</span>
                    <span className="text-yellow-300">&quot;npm&quot;</span>
                    <span className="text-orange-300">,</span>{" "}
                    <span className="text-yellow-300">&quot;start&quot;</span>
                    <span className="text-orange-300">]</span>
                  </code>
                </div>
              </div>
              <div>
                {otherSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
