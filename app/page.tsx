"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero"
import AboutSection from "@/components/about"
import ExperienceSection from "@/components/experience"
import SkillsSection from "@/components/skills"
import ProjectsSection from "@/components/projects"
import EducationSection from "@/components/education"
import ContactSection from "@/components/contact"
import Footer from "@/components/footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  // Handle smooth scrolling to sections
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 100 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["home", "about", "experience", "skills", "projects", "education", "contact"]

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
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
