"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  Bot,
  ExternalLink,
  LoaderCircle,
  RotateCcw,
  Send,
  WandSparkles,
} from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"
import SectionNext from "@/components/section-next"

type Role = "assistant" | "user"
type Message = { id: number; role: Role; text: string; source?: { label: string; href: string } }
type Mode = "checking" | "ai" | "local"

const welcome: Message = {
  id: 0,
  role: "assistant",
  text: "Hello. I can provide information about Naresh’s projects, technical skills, professional experience, education, and contact details. What would you like to know?",
}

const topics = [
  { label: "About me", question: "Tell me about Naresh’s background and what he focuses on." },
  { label: "Projects", question: "Show me Naresh’s AI and software projects." },
  { label: "Experience", question: "Summarize Naresh’s work experience and impact." },
  { label: "Skills", question: "What technologies does Naresh work with?" },
  { label: "Education", question: "Tell me about Naresh’s education and certifications." },
  { label: "Contact", question: "How can I contact or hire Naresh?" },
]

const localAnswers: Array<{ test: RegExp; text: string; source: Message["source"] }> = [
  {
    test: /contact|email|phone|reach|hire|available|availability/i,
    text: "Naresh is based in Bengaluru, India. For professional inquiries, contact him at nareshrana2.nr@gmail.com or +91 6363830414. His current availability is not specified in the portfolio; please reach out directly to discuss opportunities.",
    source: { label: "Contact Naresh", href: "mailto:nareshrana2.nr@gmail.com" },
  },
  {
    test: /certification|certificate/i,
    text: "The portfolio lists certifications and training from SkillDzire, Oracle Cloud Infrastructure, Microsoft and LinkedIn Learning, GitHub, Docker, Aitch Nu Global Technologies, and the National Skill Training Institute. See the education section for further details.",
    source: { label: "Education & certifications", href: "#education" },
  },
  {
    test: /skill|technology|tech stack|tools|language/i,
    text: "Naresh’s technical toolkit includes Python, Java, C++, JavaScript, SQL, TensorFlow, OpenCV, scikit-learn, Pandas, and NumPy. He also works with MongoDB, PostgreSQL, MySQL, AWS, Docker, GitHub Actions, Linux, and Git. His core foundations include data structures and algorithms, object-oriented programming, databases, operating systems, and computer networks.",
    source: { label: "Explore skills", href: "#skills" },
  },
  {
    test: /experience|work|job|career|intern|achievement/i,
    text: "Naresh’s experience includes a Machine Learning Trainee role at SkillDzire (January–May 2025), an AI–DevOps Engineer role at Aitch Nu Global Technologies (May–December 2024), and work as a Hardware and Network Technician at Shree Nandi Computer Institute (September 2015–May 2016). In his AI–DevOps role, he developed CI/CD workflows, containerized applications with Docker, and worked with AWS and Linux deployments.",
    source: { label: "Work experience", href: "#experience" },
  },
  {
    test: /education|degree|college|study|cgpa|gpa|diploma/i,
    text: "Naresh earned a Bachelor of Engineering in Computer Science and Engineering from Brindavan College of Engineering, where he studied from 2022 to 2025 and graduated with a CGPA of 8.31/10.0. He previously completed a Diploma in Computer Science and Engineering at Al Khateeb Polytechnic College (2016–2020; CGPA 7.5/10.0).",
    source: { label: "Education & certifications", href: "#education" },
  },
  {
    test: /project|built|portfolio|strongest|best|machine learning|ai|computer vision|application/i,
    text: "Selected projects include a real-time object detection system built with Python, OpenCV, and YOLOv8; a heart disease prediction model reported at 88% accuracy; a COVID-19 detection project evaluating 11 machine-learning models; a browser-based game platform; and an IoT fishing-boat safety system. Additional work includes a student feedback system, a web music player, and a poker game collection.",
    source: { label: "Browse projects", href: "#projects" },
  },
  {
    test: /about|background|who|introduce|summary|strength/i,
    text: "Naresh Rana is a Computer Science and Engineering graduate based in Bengaluru, India. His work focuses on practical software development, machine learning, and DevOps, with experience across machine-learning projects, CI/CD, Docker, AWS, Linux, and full-stack applications. Explore the portfolio for examples of his projects and experience.",
    source: { label: "About Naresh", href: "#about" },
  },
]

function answerLocally(question: string) {
  const match = localAnswers.find((entry) => entry.test.test(question))
  if (match) return { text: match.text, source: match.source }
  return {
    text: "I can provide information about Naresh’s projects, technical skills, professional experience, education, certifications, and contact details. Please ask about one of these areas or choose a topic below.",
    source: undefined,
  }
}

function sourceFor(question: string): Message["source"] {
  if (/contact|email|phone|hire/i.test(question)) return { label: "Contact Naresh", href: "mailto:nareshrana2.nr@gmail.com" }
  if (/skill|technology|tool|language/i.test(question)) return { label: "Explore skills", href: "#skills" }
  if (/experience|work|job|career/i.test(question)) return { label: "Work experience", href: "#experience" }
  if (/education|degree|college|certification/i.test(question)) return { label: "Education & certifications", href: "#education" }
  if (/project|built|portfolio|machine learning|ai/i.test(question)) return { label: "Browse projects", href: "#projects" }
  return { label: "About Naresh", href: "#about" }
}

function TypingIndicator() {
  return (
    <motion.div className="ask-message ask-message-assistant ask-typing-row" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
      <span className="ask-bot-icon"><Bot aria-hidden="true" /></span>
      <div className="ask-typing" role="status" aria-label="Assistant is thinking">
        <span /><span /><span /><small>Thinking through the portfolio</small>
      </div>
    </motion.div>
  )
}

export default function AskSection() {
  const [messages, setMessages] = useState<Message[]>([welcome])
  const [question, setQuestion] = useState("")
  const [mode, setMode] = useState<Mode>("checking")
  const [busy, setBusy] = useState(false)
  const messagesRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)
  const conversationVersion = useRef(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    let cancelled = false
    fetch("/api/ask", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : { mode: "local" })
      .then((result: { mode?: string }) => { if (!cancelled) setMode(result.mode === "ai" ? "ai" : "local") })
      .catch(() => { if (!cancelled) setMode("local") })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const messagesElement = messagesRef.current
    if (messagesElement) {
      messagesElement.scrollTo({
        top: messagesElement.scrollHeight,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      })
    }
  }, [messages, busy, prefersReducedMotion])

  const clearConversation = useCallback(() => {
    conversationVersion.current += 1
    setMessages([{ ...welcome, id: nextId.current++ }])
    setQuestion("")
    setBusy(false)
  }, [])

  const ask = useCallback(async (rawQuestion: string) => {
    const text = rawQuestion.trim().slice(0, 500)
    if (!text || busy) return

    const activeConversation = conversationVersion.current
    const userMessage: Message = { id: nextId.current++, role: "user", text }
    const priorMessages = messages.filter((message) => message.id !== 0).slice(-10)
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setQuestion("")
    setBusy(true)

    let response = answerLocally(text)
    if (mode === "ai") {
      try {
        const apiResponse = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...priorMessages, userMessage].map(({ role, text: content }) => ({ role, content })),
          }),
        })
        if (!apiResponse.ok) throw new Error("AI service is unavailable")
        const result = await apiResponse.json() as { answer?: string }
        if (result.answer?.trim()) response = { text: result.answer.trim(), source: sourceFor(text) }
      } catch {
        response = {
          ...answerLocally(text),
          text: `${answerLocally(text).text}\n\nThe AI service is temporarily unavailable, so this response is based on the portfolio information available here.`,
        }
      }
    } else {
      await new Promise((resolve) => window.setTimeout(resolve, 380))
    }

    if (activeConversation === conversationVersion.current) {
      setMessages((current) => [...current, { id: nextId.current++, role: "assistant", ...response }])
      setBusy(false)
    }
  }, [busy, messages, mode])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void ask(question)
  }

  return (
    <section id="ask" className="ask-section scroll-mt-20">
      <div className="ask-section-glow" aria-hidden="true" />
      <div className="ask-wrap">
        <motion.div
          className="ask-heading"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: .45 }}
        >
          <span className="ask-index">06 / ASK THE PORTFOLIO</span>
          <h2>Ask <span>Naresh</span></h2>
        </motion.div>

        <motion.div
          className="ask-panel"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, scale: .99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: .5, delay: .08 }}
        >
          <div className="ask-panel-topbar">
            <span className={`ask-status ask-status-${mode}`}><i /> {mode === "ai" ? "NARESH AI · ONLINE" : mode === "checking" ? "CONNECTING TO NARESH AI" : "NARESH AI · PORTFOLIO MODE"}</span>
            <button type="button" className="ask-reset" onClick={clearConversation} aria-label="Start a new conversation" title="New conversation"><RotateCcw aria-hidden="true" /><span>New chat</span></button>
          </div>

          <div ref={messagesRef} className="ask-messages" aria-live="polite" aria-relevant="additions text" aria-label="Conversation">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`ask-message ask-message-${message.role}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: .985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -5 }}
                  transition={{ duration: .22, ease: "easeOut" }}
                >
                  {message.role === "assistant" && <span className="ask-bot-icon"><Bot aria-hidden="true" /></span>}
                  <div className="ask-message-content">
                    <p>{message.text}</p>
                    {message.role === "assistant" && message.source && <a className="ask-source-link" href={message.source.href}>{message.source.label}<ExternalLink aria-hidden="true" /></a>}
                  </div>
                </motion.div>
              ))}
              {busy && <TypingIndicator key="typing" />}
            </AnimatePresence>
          </div>

          <div className="ask-compose">
            <div className="ask-follow-up" aria-label="Suggested follow-up">
              <WandSparkles aria-hidden="true" /><span>Keep exploring</span>
              {topics.map((topic) => (
                <button key={topic.label} type="button" onClick={() => void ask(topic.question)} disabled={busy}>{topic.label}<ArrowUpRight aria-hidden="true" /></button>
              ))}
            </div>
            <form className="ask-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="ask-question">Ask about Naresh</label>
              <input
                id="ask-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value.slice(0, 500))}
                placeholder="Ask anything about Naresh’s portfolio…"
                autoComplete="off"
                maxLength={500}
                disabled={busy}
              />
              <button type="submit" aria-label="Send question" disabled={!question.trim() || busy}>
                {busy ? <LoaderCircle className="ask-send-spinner" aria-hidden="true" /> : <><span>Ask</span><Send aria-hidden="true" /></>}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <SectionNext targetId="home" targetLabel="top" backToTop />
    </section>
  )
}
