"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, ArrowUpRight } from "lucide-react"
import SectionNext from "@/components/section-next"
import { motion, useReducedMotion } from "framer-motion"

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
      "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/104576/images/f26858c-44de-c5d7-bd7a-dd1b47d2e82_yolo-feature-img.png",
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="h-full group relative project-card-shell"
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="project-card h-full overflow-hidden bg-gray-800/50 border border-gray-700/50 transition-all duration-300 group">
        <div className="project-card-visual relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="project-image-meta">
            <span>{project.category.replace("-", " / ").toUpperCase()}</span>
            <span>{String(index + 1).padStart(2, "0")} <i>/</i> {String(projects.length).padStart(2, "0")}</span>
          </div>
          <span className="project-scanline" aria-hidden="true" />

          {/* Centered GitHub Icon - Shows on hover */}
          {project.githubLink && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-900/80 rounded-full backdrop-blur-sm transition-all duration-300 transform"
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

          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>

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
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
            View repository
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ProjectsSection = () => {
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

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Nareshrana1999?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
      <div className="projects-ambient" aria-hidden="true"><span /><span /><span /></div>
      <SectionNext targetId="education" targetLabel="Education" />
    </section>
  )
}

export default ProjectsSection
