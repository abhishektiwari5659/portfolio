import './App.css'
import Body from './components/Body'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

function App() {
  // Track current theme from localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  // Listen for changes (when Navbar updates it)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const current = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'
      setTheme(current)
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="min-h-screen bg-white dark:bg-[#080808] text-gray-900 dark:text-gray-100 transition-colors duration-500"
      >
        <Body />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
