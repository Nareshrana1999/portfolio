"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Machine Learning Trainee",
    company: "SkillDzire",
    location: "Remote",
    period: "Dec 2024 – Jun 2025",
    color: "from-blue-500 to-purple-600",
    logo: "🤖",
    achievements: [
      "Developed and optimized ML models for YOLOv8 object detection, heart disease prediction, and COVID-19 analysis",
      "Achieved 90%+ accuracy using Python, Pandas, NumPy, scikit-learn, and OpenCV",
      "Conducted data preprocessing, feature engineering, and model evaluation",
      "Collaborated with teams to integrate ML solutions into real-world systems",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "AI - DevOps Engineer",
    company: "Aitch Nu Global Technologies",
    location: "Bengaluru",
    period: "Jan 2024 – Dec 2024",
    color: "from-green-500 to-emerald-600",
    logo: "☁️",
    achievements: [
      "Built CI/CD pipelines, cutting deployment time by 35%",
      "Automated infrastructure with Docker/AWS, saving 15+ hours weekly",
      "Integrated AI models for real-time data processing",
      "Managed AWS/Azure environments for 99.9% uptime",
      "Collaborated to optimize system performance in agile teams",
    ],
    tech: ["Docker", "AWS", "Azure", "CI/CD", "Kubernetes", "Terraform"],
  },
  {
    title: "Intern, Fiber Optic Systems",
    company: "Skill India",
    location: "Bengaluru",
    period: "Jun 2019 – Aug 2019",
    color: "from-orange-500 to-amber-600",
    logo: "🔌",
    achievements: [
      "Designed fiber optic networks, improving signal efficiency by 15%",
      "Conducted diagnostics for reliable network performance",
    ],
    tech: ["Fiber Optics", "Networking", "Diagnostics"],
  },
  {
    title: "IT Support Technician",
    company: "Store-Based Service",
    location: "Bengaluru",
    period: "Jun 2015 – May 2016",
    color: "from-red-500 to-pink-600",
    logo: "💻",
    achievements: [
      "Configured hardware/software, achieving 95% customer satisfaction",
      "Resolved network issues for seamless operations",
    ],
    tech: ["Hardware", "Networking", "Troubleshooting"],
  },
]

interface Experience {
  title: string
  company: string
  location: string
  period: string
  color: string
  logo: string
  achievements: string[]
  tech: string[]
}

interface ExperienceCardProps {
  exp: Experience
  index: number
  isOpen: boolean
  onClick: () => void
}

const ExperienceCard = ({ exp, index, isOpen, onClick }: ExperienceCardProps) => {
  return (
    <div className="relative group">
      {/* Timeline line */}
      <div
        className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b ${exp.color.replace("from-", "from-").replace("to-", "via-")} opacity-70`}
      />

      {/* Animated dot */}
      <div className="absolute left-0 top-6 flex items-center justify-center w-12 h-12">
        <div className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`} />
        <div className="absolute w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-lg">
          {exp.logo}
        </div>
      </div>

      <div className="ml-16 mb-8">
        <div
          className={`p-0.5 rounded-xl bg-gradient-to-r ${exp.color} cursor-pointer transition-all duration-300`}
          onClick={onClick}
        >
          <Card className="bg-gray-900/80 backdrop-blur-sm border-0 rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center space-x-4">
                    <p className="text-blue-300 font-semibold flex items-center">
                      {exp.company}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </p>
                    <div className="hidden sm:flex items-center text-gray-400">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <Badge className="mt-2 sm:mt-0 bg-gradient-to-r bg-opacity-20 backdrop-blur-sm border-0 text-blue-100 px-3 py-1">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  <span className="text-sm">{exp.period}</span>
                </Badge>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-700/50">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                        Key Achievements
                        <span className="ml-2 text-xs bg-gray-700/50 px-2 py-0.5 rounded-full">
                          {exp.achievements.length} highlights
                        </span>
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="flex items-start group">
                            <span
                              className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-bold mr-2`}
                            >
                              ▹
                            </span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {exp.tech && (
                        <div className="mt-4 pt-4 border-t border-gray-700/50">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech: string, i: number) => (
                              <span
                                key={i}
                                className="text-xs px-2.5 py-1 rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-purple-900/30 hover:border-blue-500/30 transition-all"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-700/30">
                <div className="flex items-center text-xs text-gray-400">
                  <MapPin className="h-3.5 w-3.5 mr-1 sm:hidden" />
                  <span className="sm:hidden text-xs">{exp.location}</span>
                </div>
                <button
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center transition-colors group"
                  onClick={(e) => {
                    e.stopPropagation()
                    onClick()
                  }}
                >
                  {isOpen ? (
                    <>
                      <span>Show less</span>
                      <ChevronUp className="h-4 w-4 ml-1 group-hover:translate-y-[-2px] transition-transform" />
                    </>
                  ) : (
                    <>
                      <span>View details</span>
                      <ChevronDown className="h-4 w-4 ml-1 group-hover:translate-y-[2px] transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  // IMPORTANT: Set to null so NO cards are open by default
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
