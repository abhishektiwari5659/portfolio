import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Load dark mode preference
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Apply dark mode class to <html>
  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)

  return (
    <nav className="w-10/12 mx-auto">
      <div
        className={`flex justify-between items-center p-2 rounded-lg transition-colors duration-300 
        ${darkMode ? 'bg-[#1b1b1b] text-[#9c9c9c]' : 'bg-white text-gray-700 shadow-md'}
        `}
      >
        {/* Logo */}
        <div
          className="mx-2 p-4 hover:text-gray-300 dark:hover:text-black cursor-pointer font-semibold"
          onClick={() => scrollToSection('about')}
        >
          Abhishek Tiwari
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex p-4 items-center">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="mx-2 hover:text-gray-300 dark:hover:text-black cursor-pointer capitalize"
            >
              {item}
            </li>
          ))}

          {/* 🌗 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform duration-200"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden mx-4 text-gray-800 dark:text-gray-200 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden flex flex-col items-center mt-2 p-4 space-y-2 rounded-lg transition-colors duration-300 
          ${darkMode ? 'bg-[#1b1b1b] text-[#9c9c9c]' : 'bg-white text-gray-700 shadow-md'}
          `}
        >
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="mx-2 hover:text-gray-300 dark:hover:text-black cursor-pointer capitalize"
            >
              {item}
            </li>
          ))}

          {/* 🌗 Theme Toggle in Mobile Menu */}
          <button
            onClick={toggleTheme}
            className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform duration-200"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
