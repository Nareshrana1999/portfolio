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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8">
        {/* Profile Image - Circular Frame with Animation */}
        <div
          onMouseEnter={() => setShowWave(true)}
          onMouseLeave={() => setShowWave(false)}
          onTouchStart={() => {
            setShowWave(true)
            setTimeout(() => setShowWave(false), 2000)
          }}
          className="relative w-60 h-60 mx-auto mb-8 rounded-full border-[6px] border-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-xl hover:shadow-pink-500/60 transition-shadow duration-500 ease-in-out overflow-visible"
        >
          <Image
            src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431_640.jpg"
            alt="Naresh Rana Profile"
            fill
            className="object-cover rounded-full"
          />
          {/* Emoji visible outside bottom-left near the frame */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={showWave ? { scale: 1.3, opacity: 1, rotate: [0, 20, -20, 20, 0] } : { scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute -bottom-6 -left-6 z-50"
          >
            <span className="text-5xl drop-shadow-lg animate-bounce">👋</span>
          </motion.div>
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-bold text-white mb-4"
        >
          Naresh Rana
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl lg:text-3xl text-gray-300 mb-8"
        >
          <span className="text-blue-400 font-semibold">Full-Stack Developer</span> &{' '}
          <span className="text-green-400 font-semibold">DevOps Engineer</span> &{' '}
          <span className="text-purple-400 font-semibold">AI Enthusiast</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Computer Science graduate with expertise in Full-Stack Development, Artificial Intelligence, Machine
          Learning, and DevOps. Passionate about building scalable applications and delivering innovative solutions.
        </motion.p>
      </div>

      {/* Call to Actions - Positioned at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mb-10 mt-4 flex flex-col sm:flex-row gap-4 justify-center relative z-10"
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
              "https://drive.google.com/file/d/1n3-4QClWu23pDy4cmSXSZLnOTKsoDi6h/view?usp=drive_link",
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
    </section>
  )
}
