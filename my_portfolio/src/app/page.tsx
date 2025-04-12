import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="section-container text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Raphael Gbenga
          </h1>
          <h2 className="text-2xl text-gray-600 mb-8">
            Software Engineer & Full Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
            I am a professional software engineer and full-stack developer, specializing in backend web
            development and software architecture design and implementation. I have extensive experience
            with technologies such as Flask, Python, MySQL, and WordPress, and excel at creating efficient
            web applications.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Experience</h2>
        <Experience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-gray-100">
        <h2 className="section-title">Technical Skills</h2>
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="section-title">Projects</h2>
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education" className="section-container bg-gray-100">
        <h2 className="section-title">Education</h2>
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
