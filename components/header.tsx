"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "@/components/logo"

interface HeaderProps {
  activeSection?: string
  onSectionClick?: (section: string) => void
}

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function Header({ activeSection = "", onSectionClick }: HeaderProps = {}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 relative pointer-events-auto">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer absolute left-4"
          onClick={() => onSectionClick?.("home")}
        >
          <div className="w-11 h-11 bg-white rounded-xl p-2 shadow-md">
            <Logo />
          </div>
        </div>

        {/* Desktop Navigation Bar */}
        <nav className="hidden md:flex items-center justify-center mx-auto px-3 py-2 rounded-full space-x-1 relative transition-all duration-300 bg-white/5 backdrop-blur-sm shadow-lg">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionClick?.(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium z-10 transition-all duration-300
                  ${isActive ? "text-white bg-cyan-500/30" : "text-white/80 hover:text-white hover:bg-white/10"}`}
                animate={{ scale: isActive ? 1.05 : 1 }}
              >
                {item.label}
              </motion.button>
            )
          })}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden absolute right-4 p-2 rounded-full text-white hover:bg-white/10 transition"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center space-y-6"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X className="h-6 w-6" />
              </button>

              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionClick?.(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-lg font-semibold transition-all duration-300 px-6 py-3 rounded-full
                    ${activeSection === item.id ? "bg-cyan-500/20 text-white" : "text-white/80 hover:text-white hover:bg-white/10"}`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
