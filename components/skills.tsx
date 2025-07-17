"use client"

import { Code, Database, Cloud, Monitor, Server, Zap } from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiGit,
  SiVite,
  SiWebpack,
  SiPostman,
  SiLinux,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiAmazon,
  SiVercel,
  SiGithub,
  SiPhp,
  SiDotnet,
  SiRuby,
  SiGo,
  SiSalesforce,
  SiAdobe,
  SiOracle,
} from "react-icons/si"
import { FaJava, FaCode, FaTools, FaBrain } from "react-icons/fa"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-indigo-600/5",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
  {
    category: "Frontend Development",
    icon: Monitor,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-600/5",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "from-green-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-green-500/10 to-teal-600/5",
    borderColor: "border-green-500/20",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Ruby", icon: SiRuby, color: "#CC342D" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: FaBrain,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-red-600/5",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
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
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Oracle", icon: SiOracle, color: "#F80000" },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-indigo-500/10 to-violet-600/5",
    borderColor: "border-indigo-500/20",
    skills: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Terraform", icon: SiTerraform, color: "#623CE4" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
  {
    category: "Development Tools",
    icon: FaTools,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-rose-500/10 to-pink-600/5",
    borderColor: "border-rose-500/20",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
      { name: "Adobe", icon: SiAdobe, color: "#FF0000" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
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
