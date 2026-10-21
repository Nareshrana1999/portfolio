"use client"

import { Code, Database, Cloud, Brain, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import SectionNext from "@/components/section-next"
import {
  SiPython,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiLinux,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiGithub,
  SiCursor,
  SiClaude,
} from "react-icons/si"
import { FaAmazon, FaJava } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc"

const skillsData = [
  {
    category: "Programming Languages",
    summary: "Languages I use to build, query, and reason about software.",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-indigo-600/5",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: Database, color: "#4479A1" },
    ],
  },
  {
    category: "Core Computer Science",
    summary: "The foundations behind reliable systems and efficient solutions.",
    icon: Code,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-600/5",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "Data Structures & Algorithms", icon: Code, color: "#22D3EE" },
      { name: "Object-Oriented Programming", icon: Code, color: "#38BDF8" },
      { name: "DBMS", icon: Database, color: "#60A5FA" },
      { name: "Operating Systems", icon: Code, color: "#818CF8" },
      { name: "Computer Networks", icon: Cloud, color: "#A78BFA" },
    ],
  },
  {
    category: "AI & Machine Learning",
    summary: "Tools for data analysis, computer vision, and predictive models.",
    icon: Brain,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/5",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#aa9aff" },
      { name: "NumPy", icon: SiNumpy, color: "#38c9ed" },
    ],
  },
  {
    category: "Database & Storage",
    summary: "Relational and document databases for structured application data.",
    icon: Database,
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-gradient-to-br from-amber-500/10 to-yellow-600/5",
    borderColor: "border-amber-500/20",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#ed1e63" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#63b5e8" },
      { name: "MySQL", icon: SiMysql, color: "#69c9ed" },
    ],
  },
  {
    category: "DevOps & Cloud",
    summary: "Infrastructure, automation, containers, and cloud workflows.",
    icon: Cloud,
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-indigo-500/10 to-violet-600/5",
    borderColor: "border-indigo-500/20",
    skills: [
      { name: "AWS", icon: FaAmazon, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    category: "Development Tools",
    summary: "Everyday tools for collaboration, version control, and development.",
    icon: Wrench,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-rose-500/10 to-pink-600/5",
    borderColor: "border-rose-500/20",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Cursor", icon: SiCursor, color: "#F5F5F5" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
    ],
  },
]

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <motion.div
      className="skill-list-item group"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -3, transition: { duration: 0.18 } }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.32, delay: Math.min(index * 0.045, 0.22), ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="skill-list-icon" data-skill={skill.name}><skill.icon style={{ color: skill.color }} aria-hidden="true" /></span>
      <span className="skill-list-name">{skill.name}</span>
    </motion.div>
  )
}

const CategorySection = ({ category, index }: { category: any; index: number }) => (
  <motion.div
    className="skill-category-plain"
    data-index={String(index + 1).padStart(2, "0")}
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="skill-category-plain-heading">
      <category.icon aria-hidden="true" />
      <span className="skill-category-plain-index">{String(index + 1).padStart(2, "0")}</span>
      <h3>{category.category}</h3>
    </div>
    <div className="skill-list-grid">
      {category.skills.map((skill: any, skillIndex: number) => <SkillCard key={skill.name} skill={skill} index={skillIndex} />)}
    </div>
  </motion.div>
)

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="skills-section py-20 bg-gradient-to-b from-gray-900 to-gray-950 scroll-mt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="skills-circuit-grid absolute inset-0" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 blur-2xl rounded-full" />
        <div className="skills-glow-pink absolute top-1/2 left-1/3 w-24 h-24 blur-2xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="skills-heading skills-hero">
          <div className="skills-hero-copy">
            <span className="section-index skills-index">03 / THE TOOLKIT</span>
            <h2 className="skills-title text-4xl md:text-5xl font-bold text-white">
              Skills & <span className="section-title-accent">Technologies</span>
            </h2>
          </div>
        </div>

        <div className="skills-catalogue">
          {skillsData.map((category, index) => <CategorySection key={category.category} category={category} index={index} />)}
        </div>

        {/* Bottom section */}
        <div className="skills-footer text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm rounded-full">
            <span className="skills-footer-text text-blue-300 font-medium">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
      <SectionNext targetId="projects" targetLabel="Projects" />
    </section>
  )
}
