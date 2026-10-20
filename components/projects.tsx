"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react"
import SectionNext from "@/components/section-next"
import { motion } from "framer-motion"
import { useState } from "react"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  liveLink: string
  liveLabel?: string
  image: string
  category: "ai-ml" | "web" | "iot" | "data" | "game"
  isCollection?: boolean
}

const projects: Project[] = [
  {
    title: "Real-Time Object Detection",
    description:
      "Real-time computer vision system for detecting and tracking objects from images and live video streams.",
    technologies: ["Python", "OpenCV", "YOLOv8", "Machine Learning", "Computer Vision"],
    githubLink: "https://github.com/Nareshrana1999/object-detection-yolov8n",
    liveLink: "",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/874/856/datas/original.png",
    category: "ai-ml",
  },
  {
    title: "Heart Disease Prediction",
    description: "ML model for heart condition prediction with 88% accuracy using Python, scikit-learn, and Pandas.",
    technologies: ["Python", "scikit-learn", "Pandas", "Machine Learning", "Data Science"],
    githubLink: "https://github.com/Nareshrana1999/Heart-Disease-Prediction",
    liveLink: "",
    image: "https://miro.medium.com/v2/resize:fit:722/1*wcVkHBeTP-6wXYTE4dId9w.png",
    category: "ai-ml",
  },
  {
    title: "COVID-19 Detection",
    description: "Predicts COVID-19 cases from patient symptoms using 11 machine learning models.",
    technologies: ["Python", "scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
    githubLink: "https://github.com/Nareshrana1999/covid-analysis",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=85",
    category: "ai-ml",
  },
  {
    title: "Game Zone Platform",
    description: "Browser-based gaming platform featuring 12 interactive games with real-time score tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubLink: "https://github.com/Nareshrana1999/GameZone",
    liveLink: "https://nareshrana1999.github.io/GameZone/",
    liveLabel: "Play GameZone",
    image: "https://play-lh.googleusercontent.com/aPLbcAPz2cMQfD9uaas_3CQYUmAbl0E8xv2mHUPimTtb4iMxsrLYtzuIfNpWVxMOq4fYGimquF-t-JwcuaJdpw%3Dw240-h480",
    category: "game",
  },
  {
    title: "Fishing Boat Safety System",
    description: "Smart fishing boat safety system for real-time location tracking, accident detection, and emergency alerts.",
    technologies: ["Arduino", "GPS", "GSM", "IoT", "Embedded Systems"],
    githubLink: "https://github.com/Nareshrana1999/Fishing-Boat-Safety-System",
    liveLink: "",
    image: "https://worldoceanreview.com/en/files/2013/04/wor2_c3c-s80_3-28_fisheries_monitoring_centre-500x461.jpg",
    category: "iot",
  },
  {
    title: "Student Feedback System",
    description:
      "A comprehensive feedback system for students to rate teachers and courses with role-based access control.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    githubLink: "https://github.com/Nareshrana1999/student-feedback-system",
    liveLink: "https://student-feedback-system-form.vercel.app/",
    liveLabel: "Open feedback app",
    image: "https://static.vecteezy.com/system/resources/previews/025/452/512/non_2x/educational-institutions-obtain-student-feedback-vector.jpg",
    category: "web",
  },
  {
    title: "Now Player",
    description: "Responsive web music player with playlist controls, shuffle, repeat, volume, and track seeking.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    githubLink: "https://github.com/Nareshrana1999/now-player",
    liveLink: "https://nareshrana1999.github.io/now-player/",
    liveLabel: "Live player",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85",
    category: "web",
  },
  {
    title: "Poker Game Collection",
    description: "Play Blackjack, Teen Patti, and Andar-Bahar with card games, betting, and balance tracking.",
    technologies: ["JavaScript", "HTML5", "CSS3", "3 Card Games"],
    githubLink: "https://github.com/Nareshrana1999/poker-game",
    liveLink: "https://nareshrana1999.github.io/poker-game/",
    liveLabel: "Play Poker Games",
    image: "https://raw.githubusercontent.com/Nareshrana1999/poker-game/main/images/blackjack.jpg",
    category: "game",
  },
]

const allProjectsCard: Project = {
  title: "Explore All Projects",
  description: "Browse the complete GitHub portfolio, including more experiments, applications, and open-source work.",
  technologies: ["GitHub", "Open source", "More projects"],
  githubLink: "https://github.com/Nareshrana1999?tab=repositories",
  liveLink: "",
  image: "",
  category: "data",
  isCollection: true,
}

const carouselProjects = [...projects, allProjectsCard]

const ProjectCard = ({
  project,
  index,
  onSwipe,
}: {
  project: Project
  index: number
  onSwipe: (step: number) => void
}) => {
  return (
    <motion.div
      className="group relative project-card-shell project-carousel-card project-card-fade"
      role="group"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 560, bounceDamping: 38 }}
      whileDrag={{ scale: 0.985 }}
      onDragEnd={(_, info) => {
        // Include release velocity so a quick flick advances without needing a long swipe.
        const swipeDistance = info.offset.x + info.velocity.x * 0.12
        if (swipeDistance < -55) onSwipe(1)
        if (swipeDistance > 55) onSwipe(-1)
      }}
      aria-label={`${project.title}, project ${index + 1} of ${carouselProjects.length}. Drag or swipe left or right, or use the previous and next arrows.`}
    >
      <Card className="project-card h-full overflow-hidden bg-gray-800/50 border border-gray-700/50 transition-all duration-300 group">
        <div className="project-card-visual relative h-48 overflow-hidden">
          {project.isCollection ? (
            <div className="project-collection-visual">
              <Github aria-hidden="true" />
              <span>THE COMPLETE REPOSITORY INDEX</span>
              <strong>More work. One place.</strong>
            </div>
          ) : (
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="project-card-image w-full h-full object-cover transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="project-image-meta">
            <span>{project.isCollection ? "ALL PROJECTS" : project.category.replace("-", " / ").toUpperCase()}</span>
            <span>{String(index + 1).padStart(2, "0")} <i>/</i> {String(carouselProjects.length).padStart(2, "0")}</span>
          </div>
          {/* Centered GitHub Icon - Shows on hover */}
          {project.githubLink && !project.isCollection && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto p-4 bg-gray-900/80 rounded-full backdrop-blur-sm transition-all duration-300 transform"
                title="View on GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-8 w-8 text-white" />
              </a>
            </div>
          )}

        </div>

        <CardContent className="project-card-content p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          </div>

          <p className="text-sm text-gray-400 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs font-medium bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="project-card-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-live-link">
                <Play className="h-4 w-4" />
                {project.liveLabel || "Live demo"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-repo-link"
              aria-label={project.isCollection ? "View All Projects on GitHub" : `View ${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" />
              {project.isCollection ? "View All Projects on GitHub" : "View repository"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = carouselProjects[activeIndex]
  const previousIndex = (activeIndex - 1 + carouselProjects.length) % carouselProjects.length
  const nextIndex = (activeIndex + 1) % carouselProjects.length

  const moveProject = (step: number) => {
    setActiveIndex((currentIndex) => (currentIndex + step + carouselProjects.length) % carouselProjects.length)
  }

  return (
    <section id="projects" className="projects-future py-16 bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="project-heading text-center mb-12">
          <p className="project-kicker"><span /> 04 / SELECTED WORK <span /></p>
          <h2 className="text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
        </div>

        <div className="project-carousel" aria-label="Project showcase">
          <div className="project-carousel-stage">
            <div className="project-carousel-stack" aria-hidden="true">
              <div className="project-carousel-peek project-carousel-peek-previous">
                {carouselProjects[previousIndex].image ? <img src={carouselProjects[previousIndex].image} alt="" /> : <Github />}
                <span>{String(previousIndex + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-carousel-peek project-carousel-peek-next">
                {carouselProjects[nextIndex].image ? <img src={carouselProjects[nextIndex].image} alt="" /> : <Github />}
                <span>{String(nextIndex + 1).padStart(2, "0")}</span>
              </div>
            </div>
            <ProjectCard
              key={activeProject.title}
              project={activeProject}
              index={activeIndex}
              onSwipe={moveProject}
            />
          </div>

          <div className="project-carousel-controls">
            <button
              type="button"
              className="project-carousel-arrow"
              onClick={() => moveProject(-1)}
              aria-label="View previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="project-carousel-progress" aria-live="polite" aria-atomic="true">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <div className="project-carousel-progress-track"><span style={{ width: `${((activeIndex + 1) / carouselProjects.length) * 100}%` }} /></div>
              <span>{String(carouselProjects.length).padStart(2, "0")}</span>
            </div>
            <button
              type="button"
              className="project-carousel-arrow"
              onClick={() => moveProject(1)}
              aria-label="View next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
      <div className="projects-ambient" aria-hidden="true"><span /><span /><span /></div>
      <SectionNext targetId="education" targetLabel="Education" />
    </section>
  )
}

export default ProjectsSection
