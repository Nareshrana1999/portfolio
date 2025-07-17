"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, ExternalLink, FileText } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "nareshrana1999@outlook.com",
    href: "mailto:nareshrana1999@outlook.com",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-400/40",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 6363830414",
    href: "tel:+916363830414",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-400/40",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bengaluru, Karnataka, India",
    href: "https://maps.google.com/?q=Bengaluru,Karnataka,India",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:border-orange-400/40",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "View my code repositories",
    href: "https://github.com/Nareshrana1999",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    hoverColor: "hover:border-gray-400/40",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/5 blur-2xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ml-3">
              Collaborate
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, collaborating on projects, or simply connecting with
            fellow developers. Feel free to reach out through any of these channels!
          </p>

          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Phone className="h-4 w-4 text-white" />
              </div>
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group flex items-center p-4 rounded-xl ${info.bgColor} backdrop-blur-sm border ${info.borderColor} ${info.hoverColor} transition-all duration-300 hover:shadow-lg`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Resume View - Centered with Doc Icon */}
          <div className="flex items-center justify-center">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                View Resume
              </h3>

              <p className="text-gray-400 text-sm">Click below to view my resume directly:</p>

              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16PToaEATGAI8P9qANT5J2HlN_OXUyOVN/view?usp=drive_link",
                    "_blank"
                  )
                }
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
