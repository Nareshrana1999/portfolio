"use client"

import { useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Bot, Send, Sparkles } from "lucide-react"
import SectionNext from "@/components/section-next"

type Message = { id: number; role: "assistant" | "visitor"; text: string }

const prompts = [
  "What projects has Naresh built?",
  "What are his strongest skills?",
  "Tell me about his experience.",
  "How can I contact him?",
]

function answerFor(question: string) {
  const q = question.toLowerCase()

  if (/contact|email|phone|reach|hire|available|availability/.test(q)) {
    if (/available|availability/.test(q)) {
      return "Availability details aren’t listed on this portfolio. You can reach Naresh at nareshrana2.nr@gmail.com or +91 6363830414 to discuss an opportunity."
    }
    return "You can contact Naresh by email at nareshrana2.nr@gmail.com or call +91 6363830414. He is based in Bengaluru, India."
  }
  if (/skill|technology|tech stack|tools|language/.test(q)) {
    return "His listed skills include Python, Java, C++, SQL, data structures and algorithms, object-oriented programming, TensorFlow, OpenCV, scikit-learn, Pandas, NumPy, MongoDB, PostgreSQL, MySQL, AWS, Docker, GitHub Actions, Linux, Git, GitHub, VS Code, Cursor, and Claude."
  }
  if (/experience|work|job|career|intern/.test(q)) {
    return "Naresh worked as a Machine Learning Trainee at SkillDzire (Jan–May 2025), an AI–DevOps Engineer at Aitch Nu Global Technologies (May–Dec 2024), and a Hardware and Network Technician at Shree Nandi Computer Institute (Sep 2015–May 2016). Details are in the Work Experience section."
  }
  if (/education|degree|college|study|cgpa|gpa|diploma/.test(q)) {
    return "Naresh completed a Bachelor of Engineering in Computer Science and Engineering at Brindavan College of Engineering (CGPA 8.31/10.0, 2022–2025). He also holds a Diploma in Computer Science and Engineering from Al Khateeb Polytechnic College (CGPA 7.5/10.0, 2016–2020)."
  }
  if (/project|built|portfolio|strongest|best/.test(q)) {
    return "The portfolio features Real-Time Object Detection (Python, OpenCV, YOLOv8), Heart Disease Prediction, COVID-19 Detection, Game Zone, Fishing Boat Safety System, Student Feedback System, Now Player, and Poker Game Collection. Open the Projects section for descriptions and repository links."
  }
  if (/about|background|who|introduce|summary/.test(q)) {
    return "Naresh Rana is a Computer Science and Engineering graduate focused on practical software, machine learning, and DevOps. His portfolio highlights projects, work experience, skills, education, and certifications."
  }
  return "I can answer questions using the information on this portfolio about Naresh’s projects, skills, experience, education, and contact details. Try one of the suggested questions below."
}

export default function AskSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hi! I’m the portfolio guide. Ask me about Naresh’s background, projects, skills, experience, or how to get in touch.",
    },
  ])
  const [question, setQuestion] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)

  useEffect(() => {
    if (messages.length <= 1) return
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages])

  const ask = (rawQuestion: string) => {
    const text = rawQuestion.trim()
    if (!text) return
    const id = nextId.current
    nextId.current += 2
    setMessages((current) => [
      ...current,
      { id, role: "visitor", text },
      { id: id + 1, role: "assistant", text: answerFor(text) },
    ])
    setQuestion("")
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    ask(question)
  }

  return (
    <section id="ask" className="ask-section scroll-mt-20">
      <div className="ask-section-glow" aria-hidden="true" />
      <div className="ask-wrap">
        <motion.div
          className="ask-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <span className="ask-index">06 / ASK THE PORTFOLIO</span>
          <h2>Ask <span>Naresh</span></h2>
          <p>Want a quick answer? Ask about Naresh’s projects, experience, skills, or education. Replies use information published on this portfolio.</p>
        </motion.div>

        <motion.div
          className="ask-panel"
          initial={{ opacity: 0, y: 20, scale: .99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: .5, delay: .08 }}
        >
          <div className="ask-panel-topbar">
            <span className="ask-status"><i /> NARESH.RANA · PORTFOLIO GUIDE</span>
            <span className="ask-grounded"><Sparkles aria-hidden="true" /> SITE CONTENT</span>
          </div>

          <div className="ask-messages" aria-live="polite" aria-label="Conversation">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`ask-message ask-message-${message.role}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .2 }}
              >
                {message.role === "assistant" && <span className="ask-bot-icon"><Bot aria-hidden="true" /></span>}
                <p>{message.text}</p>
              </motion.div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="ask-compose">
            <div className="ask-prompts" aria-label="Suggested questions">
              {prompts.map((prompt) => (
                <button key={prompt} type="button" onClick={() => ask(prompt)}>{prompt}<ArrowUpRight aria-hidden="true" /></button>
              ))}
            </div>
            <form className="ask-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="ask-question">Ask about Naresh</label>
              <input
                id="ask-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask about Naresh’s projects, skills, or experience…"
                autoComplete="off"
              />
              <button type="submit" aria-label="Send question" disabled={!question.trim()}>
                <span>Ask</span><Send aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="ask-panel-foot"><span>GROUNDED IN THIS PORTFOLIO</span><span>NO EXTERNAL AI SERVICE</span></div>
        </motion.div>
      </div>
      <SectionNext targetId="home" targetLabel="top" backToTop />
    </section>
  )
}
