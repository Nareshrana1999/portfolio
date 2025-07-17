"use client"

import { Calendar, Award, ExternalLink, GraduationCap } from "lucide-react"

const education = [
  {
    id: 1,
    degree: "B.E. Computer Science Engineering",
    institution: "Brindavan College of Engineering",
    location: "Bangalore, Karnataka",
    period: "2022-2025",
    grade: "CGPA: 8.42",
    color: "from-blue-500 to-blue-600",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "text-blue-400",
    dotColor: "from-blue-400 to-blue-600",
    borderColor: "border-blue-500/20",
    calendarColor: "text-blue-300 bg-blue-900/30 border-blue-800/50",
  },
  {
    id: 2,
    degree: "Diploma in Computer Science",
    institution: "Al Khateeb Polytechnic College",
    location: "Bangalore, Karnataka",
    period: "2016-2019",
    grade: "Percentage: 75%",
    color: "from-green-500 to-green-600",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "text-emerald-400",
    dotColor: "from-emerald-400 to-emerald-600",
    borderColor: "border-emerald-500/20",
    calendarColor: "text-emerald-300 bg-emerald-900/30 border-emerald-800/50",
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    institution: "Niveditha English School",
    location: "Bangalore, Karnataka",
    period: "2015",
    grade: "Percentage: 68%",
    color: "from-purple-500 to-purple-600",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "text-violet-400",
    dotColor: "from-violet-400 to-violet-600",
    borderColor: "border-violet-500/20",
    calendarColor: "text-violet-300 bg-violet-900/30 border-violet-800/50",
  },
]

const certifications = [
  {
    id: 1,
    title: "Machine Learning Specialist",
    issuer: "SkillDzire",
    period: "2025",
    link: "https://drive.google.com/file/d/1j20sEANxwU0XiuHNdnvUNLxHUHhSJFTs/view?usp=drive_link",
    iconColor: "text-blue-400",
    dotColor: "from-blue-400 to-blue-600",
    borderColor: "border-blue-500/20",
    calendarColor: "text-blue-300 bg-blue-900/30 border-blue-800/50",
  },
  {
    id: 2,
    title: "AI-DevOps Engineer",
    issuer: "Aitch Nu Global Technologies",
    period: "2024",
    link: "https://drive.google.com/file/d/1ChzK80W0p_obegfpq3P56IS4bafWmFtU/view?usp=drive_link",
    iconColor: "text-emerald-400",
    dotColor: "from-emerald-400 to-emerald-600",
    borderColor: "border-emerald-500/20",
    calendarColor: "text-emerald-300 bg-emerald-900/30 border-emerald-800/50",
  },
  {
    id: 3,
    title: "Fiber Optic Communication",
    issuer: "Skill India",
    period: "2019",
    link: "https://drive.google.com/file/d/1NZombgWsh40POjzJ4mIrfQqaPr2Dj4Il/view?usp=drive_link",
    iconColor: "text-amber-400",
    dotColor: "from-amber-400 to-amber-600",
    borderColor: "border-amber-500/20",
    calendarColor: "text-amber-300 bg-amber-900/30 border-amber-800/50",
  },
  {
    id: 4,
    title: "Hardware and Networking",
    issuer: "Certified Professional",
    period: "2016",
    link: "https://drive.google.com/file/d/14FpmWMuZMDm9-U4k9FXm1VpC4gsza53e/view?usp=drive_link",
    iconColor: "text-rose-400",
    dotColor: "from-rose-400 to-rose-600",
    borderColor: "border-rose-500/20",
    calendarColor: "text-rose-300 bg-rose-900/30 border-rose-800/50",
  },
  {
    id: 5,
    title: "Computer Applications",
    issuer: "MS Office Suite",
    period: "2011",
    link: "https://drive.google.com/file/d/1CKB4SLUTQFdhZEKt666Zf9Nc2YmSWjcW/view?usp=drive_link",
    iconColor: "text-violet-400",
    dotColor: "from-violet-400 to-violet-600",
    borderColor: "border-violet-500/20",
    calendarColor: "text-violet-300 bg-violet-900/30 border-violet-800/50",
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
    <div className="relative mb-8 last:mb-0">
      {/* Timeline dot */}
      <div className={`absolute left-4 md:left-6 top-6 h-3 w-3 rounded-full z-10 bg-gradient-to-br ${item.dotColor}`} />

      {/* Timeline line */}
      <div
        className={`absolute left-5 md:left-7 top-6 bottom-0 w-0.5 bg-gradient-to-b ${item.dotColor.replace("from-", "from-").replace("to-", "to-")}/20`}
      ></div>

      <div
        className={`ml-12 md:ml-16 bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border ${item.borderColor} hover:border-opacity-60 transition-all duration-300 hover:shadow-lg`}
      >
        {/* Mobile-optimized layout */}
        <div className="space-y-3">
          {/* Header with icon and degree */}
          <div className="flex items-start gap-3">
            <div className={`mt-1 p-2 rounded-lg ${item.iconColor.replace("text-", "bg-")}/10 flex-shrink-0`}>
              <GraduationCap className={`h-5 w-5 ${item.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-white text-base md:text-lg leading-tight">{item.degree}</h4>
              <p className="text-sm md:text-base text-gray-300 mt-1 leading-tight">{item.institution}</p>
            </div>
          </div>

          {/* Details section - Single line layout */}
          <div className="ml-11 md:ml-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="flex items-center gap-2 text-sm mb-2 sm:mb-0">
                <span className="text-orange-400">{item.location}</span>
                <span className="text-gray-500">•</span>
                <span className="text-green-400 font-medium">{item.grade}</span>
              </div>

              <div
                className={`inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border ${item.calendarColor} w-fit`}
              >
                <Calendar className="h-3.5 w-3.5 opacity-70" />
                <span className="font-mono">{item.period}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CertificationItem = ({ cert, index }: { cert: any; index: number }) => {
  return (
    <div className="relative mb-8 last:mb-0">
      {/* Timeline dot */}
      <div className={`absolute left-4 md:left-6 top-6 h-3 w-3 rounded-full z-10 bg-gradient-to-br ${cert.dotColor}`} />

      {/* Timeline line */}
      <div
        className={`absolute left-5 md:left-7 top-6 bottom-0 w-0.5 bg-gradient-to-b ${cert.dotColor.replace("from-", "from-").replace("to-", "to-")}/20`}
      ></div>

      <div
        className={`ml-12 md:ml-16 bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border ${cert.borderColor} hover:border-opacity-60 transition-all duration-300 hover:shadow-lg`}
      >
        {/* Mobile-optimized layout */}
        <div className="space-y-3">
          {/* Header with icon and title */}
          <div className="flex items-start gap-3">
            <div className={`mt-1 p-2 rounded-lg ${cert.iconColor.replace("text-", "bg-")}/10 flex-shrink-0`}>
              <Award className={`h-5 w-5 ${cert.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-white text-base md:text-lg leading-tight">{cert.title}</h4>
              <p className="text-sm md:text-base text-gray-300 mt-1 leading-tight">{cert.issuer}</p>
            </div>
          </div>

          {/* Details section - Single line layout */}
          <div className="ml-11 md:ml-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center text-sm ${cert.iconColor} hover:text-white transition-colors px-3 py-2 rounded-lg border border-${cert.iconColor.replace("text-", "")}/20 hover:border-${cert.iconColor.replace("text-", "")}/40 bg-${cert.iconColor.replace("text-", "")}/5 hover:bg-${cert.iconColor.replace("text-", "")}/10 w-fit mb-2 sm:mb-0`}
              >
                View Credential
                <ExternalLink className="h-3.5 w-3.5 ml-2" />
              </a>

              <div
                className={`inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border ${cert.calendarColor} w-fit`}
              >
                <Calendar className="h-3.5 w-3.5 opacity-70" />
                <span className="font-mono">{cert.period}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-900/95 relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800/90"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-blue-400 mb-3 px-4 py-1.5 rounded-full bg-blue-500/10">
            Qualifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education Section */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 shadow-lg hover:shadow-blue-500/10 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-3 md:mr-4">
                  <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Education</h3>
                  <p className="text-xs md:text-sm text-gray-400">Academic journey</p>
                </div>
              </div>

              <div className="relative">
                <div>
                  <div className="space-y-0">
                    {education.map((edu, index) => (
                      <EducationItem key={edu.id} item={edu} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-3 md:mr-4">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Certifications</h3>
                  <p className="text-xs md:text-sm text-gray-400">Professional credentials</p>
                </div>
              </div>

              <div className="relative">
                <div>
                  <div className="space-y-0">
                    {certifications.map((cert, index) => (
                      <CertificationItem key={cert.id} cert={cert} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      </div>
    </section>
  )
}

export default EducationSection
