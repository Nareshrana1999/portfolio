"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
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

export default function MobileMenu({ isOpen, onClose, activeSection, onSectionClick }: MobileMenuProps) {
  const handleSectionClick = (sectionId: string) => {
    onSectionClick?.(sectionId)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Menu</h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="py-6">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.id

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleSectionClick(item.id)}
                    className={`
                      w-full text-left px-6 py-4 text-lg font-medium transition-all duration-200
                      ${
                        isActive
                          ? "text-blue-400 bg-blue-500/10 border-r-2 border-blue-400"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }
                    `}
                  >
                    {item.label}
                  </motion.button>
                )
              })}
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-gray-400 text-sm">© 2025 Naresh Rana</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
