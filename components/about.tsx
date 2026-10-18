"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Languages } from "lucide-react"

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

        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
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
                    Computer Science and Engineering graduate building practical software, machine learning, and DevOps solutions. I turn ideas into reliable applications, automate delivery, and enjoy solving problems that create real-world impact.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    I have developed machine learning and deep learning projects, built CI/CD workflows, containerized applications with Docker, and worked with AWS and Linux environments. I enjoy delivering clear, reliable solutions from development through deployment.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    Recognized for <span className="text-yellow-400 font-medium">problem-solving</span>, <span className="text-pink-400 font-medium">teamwork</span>, and <span className="text-indigo-400 font-medium">communication skills</span>, I thrive in agile environments, delivering high-quality solutions.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700/50">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-400">8+</div>
                      <div className="text-sm text-gray-400">Projects Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400">3</div>
                      <div className="text-sm text-gray-400">Work Experiences</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-400">4</div>
                      <div className="text-sm text-gray-400">Languages</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto mb-16 bg-gray-800/60 border border-indigo-500/20 shadow-lg">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Languages className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Languages</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                ["English", "Fluent"],
                ["Hindi", "Native"],
                ["Kannada", "Fluent"],
                ["Nepali", "Native"],
              ].map(([language, level]) => (
                <div key={language} className="flex items-center justify-between rounded-lg border border-gray-700/70 bg-gray-900/50 px-4 py-2.5">
                  <p className="font-semibold text-white">{language}</p>
                  <p className="text-sm text-indigo-300">{level}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
