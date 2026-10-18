"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, FileText } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "nareshrana2.nr@gmail.com",
    href: "mailto:nareshrana2.nr@gmail.com",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-400/40",
    action: "Send an email",
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
    action: "Call now",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bengaluru, India",
    href: "https://maps.google.com/?q=Bengaluru,Karnataka,India",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:border-orange-400/40",
    action: "Open in Maps",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "View my code repositories",
    href: "https://github.com/nareshrana1999",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/20",
    hoverColor: "hover:border-gray-400/40",
    action: "Open GitHub",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/nareshrana1999",
    href: "https://linkedin.com/in/nareshrana1999",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    hoverColor: "hover:border-sky-400/40",
    action: "Open LinkedIn",
  },
]

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyValue = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(null), 1800)
    } catch {
      setCopied(null)
    }
  }

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

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let's Connect &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Collaborate
            </span>
          </h2>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 mb-16">
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
                const isCopyable = info.title === "Email" || info.title === "Phone"
                return (
                  <div
                    key={index}
                    className={`group flex items-center gap-3 p-4 rounded-xl ${info.bgColor} backdrop-blur-sm border ${info.borderColor} ${info.hoverColor} transition-all duration-300 hover:shadow-lg`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex-1 min-w-0"
                    >
                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors truncate">{info.value}</p>
                      <span className="text-xs text-gray-500">{info.action}</span>
                    </a>
                    {isCopyable ? (
                      <button
                        type="button"
                        onClick={() => copyValue(info.value, info.title)}
                        className="shrink-0 rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-gray-300 hover:border-blue-400/50 hover:text-white transition-colors"
                      >
                        {copied === info.title ? "Copied" : "Copy"}
                      </button>
                    ) : (
                      <ExternalLink className="h-4 w-4 shrink-0 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Resume View - Centered with Doc Icon */}
          <div className="flex items-center justify-center">
            <div className="w-full rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8 text-center space-y-6">
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
                    "https://drive.google.com/file/d/1lqwqs_kSa1meQUFlkjB_pDUxVDdX052t/view?usp=drive_link",
                    "_blank"
                  )
                }
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg group"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
              <p className="text-xs text-gray-500">Available for software engineering, AI/ML, and DevOps opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
