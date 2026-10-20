"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import SectionNext from "@/components/section-next"
import { motion } from "framer-motion"
import { useState } from "react"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  liveLink: string
  image: string
  category: "ai-ml" | "web" | "iot" | "data" | "game"
  stars?: number
  forks?: number
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
      "https://raw.githubusercontent.com/ultralytics/ultralytics/main/ultralytics/assets/bus.jpg",
    category: "ai-ml",
    stars: 0,
    forks: 0,
  },
  {
    title: "Heart Disease Prediction",
    description: "ML model for heart condition prediction with 88% accuracy using Python, scikit-learn, and Pandas.",
    technologies: ["Python", "scikit-learn", "Pandas", "Machine Learning", "Data Science"],
    githubLink: "https://github.com/Nareshrana1999/Heart-Disease-Prediction",
    liveLink: "",
    image:
      "https://dezyre.gumlet.io/images/blog/heart-disease-prediction-using-machine-learning-project/Heart_Disease_Prediction_using_Machine_Learning.png?w=376&dpr=2.6",
    category: "ai-ml",
    stars: 15,
    forks: 5,
  },
  {
    title: "Game Zone Platform",
    description: "Browser-based gaming platform featuring 12 interactive games with real-time score tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    githubLink: "https://github.com/Nareshrana1999/GameZone",
    liveLink: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JfXtu1DCqnyuEzH-TCjWMB3u9J5pmJZPzg&s",
    category: "web",
    stars: 32,
    forks: 12,
  },
  {
    title: "Fishing Boat Safety System",
    description: "Smart fishing boat safety system for real-time location tracking, accident detection, and emergency alerts.",
    technologies: ["Arduino", "GPS", "GSM", "IoT", "Embedded Systems"],
    githubLink: "https://github.com/Nareshrana1999/Fishing-Boat-Safety-System",
    liveLink: "",
    image: "https://worldoceanreview.com/en/files/2013/04/wor2_c3c-s80_3-28_fisheries_monitoring_centre-500x461.jpg",
    category: "iot",
    stars: 42,
    forks: 19,
  },
  {
    title: "Student Feedback System",
    description:
      "A comprehensive feedback system for students to rate teachers and courses with role-based access control.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    githubLink: "https://github.com/Nareshrana1999/student-feedback-system",
    liveLink: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujjBylpTa6RryknecRA5jR0cVgyw_rr_LkA&s",
    category: "web",
    stars: 35,
    forks: 22,
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
      dragElastic={0.12}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 420, bounceDamping: 34 }}
      whileDrag={{ scale: 0.985 }}
      onDragEnd={(_, info) => {
        if (info.offset.x < -70) onSwipe(1)
        if (info.offset.x > 70) onSwipe(-1)
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
            <div className="flex items-center space-x-2">
              {project.stars !== undefined && (
                <span className="flex items-center text-xs text-gray-400">
                  <Star className="h-3 w-3 mr-1 text-yellow-400" />
                  {project.stars}
                </span>
              )}
              {project.forks !== undefined && (
                <span className="flex items-center text-xs text-gray-400">
                  <GitFork className="h-3 w-3 mr-1 text-blue-400" />
                  {project.forks}
                </span>
              )}
            </div>
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
