import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Body = () => {
  return (
    <div className="transition-colors duration-500 bg-white dark:bg-[#0d0d0d] text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Sections */}
      <div id="about" className="pt-24">
        <About />
      </div>

      <div id="skills" className="pt-24">
        <Skills />
      </div>

      <div id="projects" className="pt-24">
        <Projects />
      </div>

      <div id="contact" className="pt-24">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default Body
