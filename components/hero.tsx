"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [showWave, setShowWave] = useState(false)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-20 right-10 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-2xl"
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div 
            className="relative mx-auto mb-8 mt-10 group"
            onMouseEnter={() => setShowWave(true)}
            onMouseLeave={() => setShowWave(false)}
            onTouchStart={() => {
              setShowWave(true)
              setTimeout(() => setShowWave(false), 2000)
            }}>
            <motion.div 
              className="relative w-48 h-48 md:w-56 md:h-56 mx-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Modern frame with layered effects */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30 blur-[10px]" />
                
                {/* Main frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  {/* Inner gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500" />
                  
                  {/* Image container */}
                  <div className="absolute inset-1 rounded-full overflow-hidden">
                    <div className="w-full h-full overflow-hidden rounded-full">
                      <Image
                        src="/images/Profile.jpeg"
                        alt="Naresh Rana"
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'top' }}
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Inner shadow and highlight */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.4)]" />
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                </div>
                
                {/* Animated sparkle effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
              </div>

              {/* Waving hand emoji */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={showWave ? { 
                  scale: 1.3, 
                  opacity: 1, 
                  rotate: [0, 20, -20, 20, 0] 
                } : { 
                  scale: 0, 
                  opacity: 0 
                }}
                transition={{ duration: 1 }}
                className="absolute right-0 top-[70%] -translate-y-1/2 -mr-8 z-50"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-[2px]" />
                  <span className="text-5xl drop-shadow-lg animate-bounce">👋</span>
                </div>
              </motion.div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Naresh Rana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            <span className="text-blue-400 font-semibold">Full-Stack Developer</span> · 
            <span className="text-green-400 font-semibold"> DevOps Engineer</span> · 
            <span className="text-purple-400 font-semibold"> AI Enthusiast</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Computer Science and Engineering graduate with expertise in Full-Stack Development, Artificial Intelligence, Machine
            Learning, and DevOps. Passionate about building scalable applications and delivering innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1a6IvkTKtXQ0e-5-HvFXVPif2gFfTn5DN/view?usp=drive_link",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg group"
            >
              <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg group"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
