"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe, Heart, Sparkles } from "lucide-react"

const hobbiesData = [
  {
    name: "Playing Outdoor Sports",
    icon: "⚽",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    description: "Football, Cricket, Tennis, Kabaddi",
  },
  {
    name: "Trekking",
    icon: "🏔️",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    description: "Mountain adventures & nature exploration",
  },
  {
    name: "Gaming",
    icon: "🎮",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    description: "Strategy games & competitive gaming",
  },
  {
    name: "Traveling & Motor Biking",
    icon: "🏍️",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Road trips & exploring new places",
  },
  {
    name: "Movies, Series & Anime",
    icon: "🎬",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    description: "Sci-fi, thrillers & anime series",
  },
  {
    name: "Social Welfare Activities",
    icon: "🤝",
    color: "from-teal-500 to-green-600",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    description: "Community service & volunteering",
  },
]

const contactCards = [
  {
    icon: MapPin,
    title: "Location",
    value: "Bengaluru, Karnataka, India",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 6363830414",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: Mail,
    title: "Email",
    value: "nareshrana1999@outlook.com",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Globe,
    title: "Languages",
    value: "English, Hindi, Nepali, Kannada",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="h-6 sm:h-7 w-6 sm:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Professional Summary</h3>
                    <p className="text-gray-400 text-sm">My journey and expertise</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    I am a <span className="text-blue-400 font-semibold">Computer Science and Engineering graduate</span> with expertise in <span className="text-green-400 font-semibold">Full-Stack Development</span>, <span className="text-purple-400 font-semibold">Artificial Intelligence</span>, <span className="text-orange-400 font-semibold">Machine Learning</span>, and <span className="text-cyan-400 font-semibold">DevOps</span>.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    I bring hands-on experience in building <span className="text-blue-300 font-medium">scalable Web and Mobile Applications</span>, designing <span className="text-green-300 font-medium">robust systems</span>, and managing <span className="text-purple-300 font-medium">modern Databases</span>. My passion is creating innovative solutions with real-world impact.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    Recognized for <span className="text-yellow-400 font-medium">problem-solving</span>, <span className="text-pink-400 font-medium">teamwork</span>, and <span className="text-indigo-400 font-medium">communication skills</span>, I thrive in agile environments, delivering high-quality solutions.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700/50">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-400">2+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400">10+</div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-400">5+</div>
                      <div className="text-sm text-gray-400">Certifications</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Card key={index} className={`bg-${card.bgColor.replace("bg-", "")} border ${card.borderColor} hover:bg-opacity-20 transition-colors duration-300`}>
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className={`p-2 bg-gradient-to-r ${card.color} rounded-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{card.title}</h4>
                      <p className="text-gray-300 text-xs">{card.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mr-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">My Hobbies & Interests</h3>
              <p className="text-gray-400 text-sm">What I love doing in my free time</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {hobbiesData.map((hobby, index) => (
            <Card key={index} className={`bg-${hobby.bgColor.replace("bg-", "")} border ${hobby.borderColor} hover:bg-opacity-20 transition-colors duration-300`}>
              <CardContent className="p-4 text-center">
                <div className={`w-10 h-10 bg-gradient-to-r ${hobby.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <span className="text-xl">{hobby.icon}</span>
                </div>
                <h4 className="text-sm font-medium text-white mb-1">{hobby.name}</h4>
                <p className="text-gray-300 text-xs">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
