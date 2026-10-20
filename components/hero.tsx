"use client"

import Image from "next/image"
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const resumeUrl = "https://drive.google.com/file/d/1lqwqs_kSa1meQUFlkjB_pDUxVDdX052t/view?usp=drive_link"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="hero-kicker"><span className="availability-dot" /> Software engineer</div>

          <div className="hero-heading-group">
            <h1 className="hero-title">Naresh<br /><span>Rana</span></h1>
            <p className="hero-role">Engineering thoughtful software for the real world.</p>
          </div>
          <p className="hero-description">
            I build practical software, machine learning, and DevOps solutions—from the first line of code to reliable deployment.
          </p>

          <div className="hero-actions">
            <button type="button" className="hero-action hero-action-primary" onClick={() => scrollToSection("projects")}>
              Explore my work <ArrowDownRight className="h-4 w-4" />
            </button>
            <a className="hero-action hero-action-secondary" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              View résumé <ArrowUpRight className="h-4 w-4" />
            </a>
            <button type="button" className="hero-action hero-action-quiet" onClick={() => scrollToSection("contact")}>
              <Mail className="h-4 w-4" /> Get in touch
            </button>
          </div>

          <div className="hero-socials" aria-label="Social profiles">
            <a className="hero-social-github" href="https://github.com/nareshrana1999" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" /></a>
            <span className="hero-social-cluster">
              <a className="hero-social-linkedin" href="https://linkedin.com/in/nareshrana1999" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" /></a>
              <a className="hero-social-location" href="https://maps.google.com/?q=Bengaluru,Karnataka,India" target="_blank" rel="noopener noreferrer"><MapPin className="h-3.5 w-3.5" /> Bengaluru, India <ArrowUpRight className="h-3 w-3" /></a>
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: .97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .75, delay: .12, ease: "easeOut" }}
        >
          <div className="portrait-index"><span>PROFILE / 01</span></div>
          <div className="portrait-frame">
            <div className="portrait-image-motion">
              <Image
                src="/images/Profile-cutout.png"
                alt="Portrait of Naresh Rana"
                fill
                priority
                sizes="(max-width: 760px) 42vw, (max-width: 1200px) 36vw, 410px"
                className="portrait-image"
              />
            </div>
            <div className="portrait-overlay" />
          </div>
          <div className="portrait-coordinate"><span>SOFTWARE · AI/ML · DEVOPS</span></div>
        </motion.div>
      </div>

      <div className="hero-bottomline"><a href="#about">SCROLL TO EXPLORE <ArrowDownRight className="h-3.5 w-3.5" /></a></div>
    </section>
  )
}
