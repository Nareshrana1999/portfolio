"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, ExternalLink, MapPin } from 'lucide-react'
import SectionNext from "@/components/section-next"

const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    specialization: "Computer Science and Engineering",
    institution: "Brindavan College of Engineering",
    location: "Bengaluru, India",
    period: "Feb 2022 – Jul 2025",
    grade: "CGPA: 8.31/10.0",
    credentialLink: "https://drive.google.com/file/d/1V4r9oJ6nTtAB-a4KThvIzGH7L7919EJT/view?usp=drive_link",
    color: "from-blue-500 to-blue-600",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "text-blue-400",
    dotColor: "from-blue-400 to-blue-600",
    borderColor: "border-blue-500/20",
    calendarColor: "text-blue-300 bg-blue-900/30 border-blue-800/50",
  },
  {
    id: 2,
    degree: "Diploma",
    specialization: "Computer Science and Engineering",
    institution: "Al Khateeb Polytechnic College",
    location: "Bengaluru, India",
    period: "Aug 2016 – May 2020",
    grade: "CGPA: 7.5/10.0",
    credentialLink: "https://drive.google.com/file/d/1gd9vI3Z1BxBlV8rqduqTXRoEKViUEIDi/view?usp=drive_link",
    color: "from-emerald-400 to-emerald-600",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "text-emerald-400",
    dotColor: "from-emerald-400 to-emerald-600",
    borderColor: "border-emerald-500/20",
    calendarColor: "text-emerald-300 bg-emerald-900/30 border-emerald-800/50",
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
}

const EducationItem = ({ item, index }: { item: any; index: number }) => {
  return (
    <div className="relative mb-10 group">
      {/* Timeline dot with animation */}
      <div 
        className={`absolute left-4 md:left-6 top-7 h-3.5 w-3.5 rounded-full z-10 bg-gradient-to-br ${item.dotColor} transition-all duration-300 group-hover:scale-125`}
      />

      {/* Animated timeline line */}
      <div 
        className={`absolute left-4.5 md:left-[26px] top-7 bottom-0 w-[3px] bg-gradient-to-b ${item.dotColor.replace("from-", "from-").replace("to-", "to-")}/20 transition-all duration-500`}
      />

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`education-card ml-14 md:ml-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-7 border ${item.borderColor} hover:border-opacity-60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10`}
      >
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className={`mt-1 p-2 rounded-lg ${item.iconColor.replace("text-", "bg-")}/10 flex-shrink-0`}>
              <GraduationCap className={`h-5 w-5 ${item.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-lg md:text-xl leading-tight">{item.degree}</h4>
                  <p className="text-base md:text-lg text-blue-200 mt-1 leading-tight">{item.specialization}</p>
                  <p className="text-sm text-gray-300 mt-1 leading-tight">{item.institution}</p>
                </div>
                <div className={`inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border ${item.calendarColor} w-fit shrink-0`}>
                  <Calendar className="h-3.5 w-3.5 opacity-80" />
                  <span className="font-mono text-xs whitespace-nowrap">{item.period}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 mt-3 text-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-3.5 w-3.5 mr-1.5 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400">
                    <Award className="h-3.5 w-3.5 mr-1.5 text-green-400" />
                    <span>{item.grade}</span>
                  </div>
                </div>
                <a
                  href={item.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-sm ${item.iconColor} hover:text-white transition-colors px-3 py-1.5 rounded-lg border ${item.iconColor.replace("text-", "border-")}/20 hover:bg-gray-800/50 w-fit`}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Credential
                  <ExternalLink className="h-3.5 w-3.5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 pb-24 bg-gradient-to-b from-gray-900 to-gray-900/95 relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800/90"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="education-heading text-center mb-12">
          <span className="section-index education-index">05 / THE FOUNDATION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"><span className="section-title-accent">Education</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* Education Section */}
            <div className="education-column space-y-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <EducationItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      <SectionNext targetId="ask" targetLabel="Ask Naresh" />
    </section>
  )
}

export default EducationSection
