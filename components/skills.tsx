"use client"

import { Code, Database, Cloud, Brain, Wrench, Zap } from "lucide-react"
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
} from "react-icons/si"
import { FaAmazon, FaJava, FaCode } from "react-icons/fa"

const skillsData = [
  {
    category: "Programming Languages",
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
    icon: Brain,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/5",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
    ],
  },
  {
    category: "Database & Storage",
    icon: Database,
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-gradient-to-br from-amber-500/10 to-yellow-600/5",
    borderColor: "border-amber-500/20",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQL", icon: Database, color: "#4479A1" },
    ],
  },
  {
    category: "DevOps & Cloud",
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
    icon: Wrench,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-rose-500/10 to-pink-600/5",
    borderColor: "border-rose-500/20",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Cursor", icon: FaCode, color: "#A855F7" },
      { name: "Claude", icon: FaCode, color: "#F97316" },
    ],
  },
]

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <div className="group">
      <div className="flex flex-col items-center p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-700/40 transition-all duration-200 min-h-[100px] justify-center">
        <skill.icon
          className="w-8 h-8 mb-2 transition-transform duration-200 group-hover:scale-110"
          style={{ color: skill.color }}
        />
        <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-200 text-center">
          {skill.name}
        </span>
      </div>
    </div>
  )
}

const CategorySection = ({ category, index }: { category: any; index: number }) => {
  return (
    <div className="group">
      <div
        className={`relative ${category.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${category.borderColor} hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20`}
      >
        {/* Category header */}
        <div className="flex items-center mb-6">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-md mr-4 group-hover:scale-105 transition-transform duration-200`}
          >
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{category.category}</h3>
            <p className="text-sm text-gray-400">{category.skills.length} technologies</p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(88px,1fr))] gap-3">
          {category.skills.map((skill: any, skillIndex: number) => (
            <SkillCard key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 scroll-mt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 blur-2xl rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/5 blur-2xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Technical Skills</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ml-3">
              Technologies
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Technologies and tools I use to bring ideas to life and build scalable solutions
          </p>

          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full w-32" />
        </div>

        {/* Skills grid - optimized for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {skillsData.map((category, index) => (
            <CategorySection key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm rounded-full">
            <span className="text-blue-300 font-medium">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
