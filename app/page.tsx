"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero"
import AboutSection from "@/components/about"
import ExperienceSection from "@/components/experience"
import SkillsSection from "@/components/skills"
import ProjectsSection from "@/components/projects"
import EducationSection from "@/components/education"
import AskSection from "@/components/ask"
import Footer from "@/components/footer"
import { scrollToSection } from "@/lib/scroll-to-section"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  // Handle smooth scrolling to sections
  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "experience", "skills", "projects", "education", "ask"]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onSectionClick={handleSectionClick} />

      <main>
        <HeroSection onSectionClick={handleSectionClick} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AskSection />
      </main>

      <Footer />
    </div>
  )
}
