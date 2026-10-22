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
  text: "Hi, I’m Naresh’s portfolio assistant. I can help with his background, projects, experience, technical skills, education, and professional links. I can also provide a concise recruiter summary. What would you like to know?",
}

const topics = [
  { label: "About", question: "Tell me about Naresh’s background and professional strengths." },
  { label: "Projects", question: "Show me Naresh’s AI and software projects." },
  { label: "Experience", question: "Summarize Naresh’s work experience and impact." },
  { label: "Skills", question: "What technologies does Naresh work with?" },
  { label: "Education", question: "Summarize Naresh’s academic background." },
  { label: "Contact", question: "How can I contact Naresh or view his professional links?" },
  { label: "Recruiters", question: "Give me a concise recruiter summary of Naresh’s profile and relevant roles." },
]

const localAnswers: Array<{ test: RegExp; text: string; source: Message["source"] }> = [
  {
    test: /education.*certification|certification.*education/i,
    text: "Naresh completed a Bachelor of Engineering in Computer Science and Engineering at Brindavan College of Engineering, affiliated with Visvesvaraya Technological University (February 2022–July 2025; CGPA 8.31/10). He also earned a Diploma in Computer Science and Engineering from Al Khateeb Polytechnic College (August 2016–May 2020; CGPA 7.5/10). His recorded credentials include Machine Learning Specialist (SkillDzire, 2025), Oracle Cloud Infrastructure AI Foundations Associate (2025), Microsoft Azure AI Essentials Professional Certificate (2025), AI–DevOps Engineer (Aitch Nu Global Technologies, 2024), Fiber Optic Communication System Certification (National Skill Training Institute, 2019), and Hardware & Networking Certification (Shree Nandi Computer Institute, 2016).",
    source: { label: "Education", href: "#education" },
  },
  {
    test: /contact|email|phone|reach|hire|available|availability/i,
    text: "Naresh is based in Bengaluru, India. For professional inquiries, email nareshrana2.nr@gmail.com or call +91 6363830414. His portfolio links include GitHub (github.com/nareshrana1999) and LinkedIn (linkedin.com/in/nareshrana1999). The site also provides a résumé download. His current availability is not specified; please contact him directly to discuss an opportunity.",
    source: { label: "Contact Naresh", href: "mailto:nareshrana2.nr@gmail.com" },
  },
  {
    test: /certification|certificate/i,
    text: "Naresh’s recorded credentials include the Machine Learning Specialist certification from SkillDzire (2025), Oracle Cloud Infrastructure AI Foundations Associate (2025), Microsoft Azure AI Essentials Professional Certificate (2025), AI–DevOps Engineer certification from Aitch Nu Global Technologies (2024), Fiber Optic Communication System Certification from the National Skill Training Institute (2019), and Hardware & Networking Certification from Shree Nandi Computer Institute (2016).",
    source: { label: "Browse credentials", href: "/certifications/machine-learning-specialist" },
  },
  {
    test: /spoken language|speak|languages does|language does he speak/i,
    text: "The portfolio lists English, Hindi, Kannada, and Nepali.",
    source: { label: "About Naresh", href: "#about" },
  },
  {
    test: /leadership|football|kabaddi|aicte|activity points|community service/i,
    text: "The portfolio notes that Naresh served as a football team captain and kabaddi vice-captain. It also records 450+ AICTE activity points earned through community service, sustainability, and digital awareness initiatives.",
    source: { label: "About Naresh", href: "#about" },
  },
  {
    test: /recruiter|suitable roles?|roles? is he suited|best fit|role match|strongest areas/i,
    text: "Naresh is a Computer Science and Engineering graduate (CGPA 8.31/10) with experience in machine learning, AI–DevOps, and hardware and networking. His background includes Python-based ML projects, CI/CD and Docker workflows, AWS and Linux deployments, and full-stack applications. Relevant opportunities to consider include junior software engineering, Python development, machine learning, and junior DevOps or cloud roles; fit depends on each role’s requirements.",
    source: { label: "Experience", href: "#experience" },
  },
  {
    test: /resume|résumé|\bcv\b/i,
    text: "Naresh’s résumé is available from the portfolio homepage. Use the link below to open the current résumé file.",
    source: { label: "Download résumé", href: "https://drive.google.com/file/d/1lqwqs_kSa1meQUFlkjB_pDUxVDdX052t/view?usp=drive_link" },
  },
  {
    test: /github|repository|repo|linkedin|leetcode|professional links/i,
    text: "Naresh’s professional profiles are GitHub at github.com/nareshrana1999, LinkedIn at linkedin.com/in/nareshrana1999, and LeetCode at leetcode.com/u/Nareshrana1999.",
    source: { label: "GitHub profile", href: "https://github.com/nareshrana1999" },
  },
  {
    test: /portfolio website|his portfolio|portfolio link|website link/i,
    text: "Naresh’s portfolio is available at naresh-rana-1999.vercel.app.",
    source: { label: "Open portfolio", href: "https://naresh-rana-1999.vercel.app" },
  },
  {
    test: /what did he do at skilldzire|skilldzire|machine learning trainee/i,
    text: "As a Machine Learning Trainee at SkillDzire from January to May 2025, Naresh developed 8+ machine-learning and deep-learning projects using Python, scikit-learn, and TensorFlow. The documented work includes object detection, COVID-19 detection, and heart disease prediction, as well as data preprocessing, feature engineering, model training, and evaluation.",
    source: { label: "Work experience", href: "#experience" },
  },
  {
    test: /devops experience|what did he do at aitch|aitch nu|ci\/cd|docker experience/i,
    text: "At Aitch Nu Global Technologies (May–December 2024), Naresh worked on CI/CD pipelines and automated deployments with GitHub Actions, containerized applications with Docker, and supported deployments in AWS and Linux environments.",
    source: { label: "Work experience", href: "#experience" },
  },
  {
    test: /hardware|network technician|shree nandi/i,
    text: "At Shree Nandi Computer Institute (September 2015–May 2016), Naresh assembled, configured, and upgraded desktop computers; installed Windows, drivers, software, and peripherals; and troubleshot hardware and network issues.",
    source: { label: "Work experience", href: "#experience" },
  },
  {
    test: /object detection/i,
    text: "The Real-Time Object Detection project detects and tracks objects in images and live video using Python, OpenCV, and YOLOv8. The portfolio does not document exact performance results or model configuration, so those details should not be assumed.",
    source: { label: "Browse projects", href: "#projects" },
  },
  {
    test: /fishing boat|boat safety/i,
    text: "The Fishing Boat Safety System is an IoT project focused on location tracking, accident detection, and emergency alerts. The portfolio does not specify the hardware or communication modules, so I can’t confirm those implementation details.",
    source: { label: "Browse projects", href: "#projects" },
  },
  {
    test: /heart disease|clinically|medical advice/i,
    text: "The Heart Disease Prediction project uses patient health parameters and machine-learning methods to assess potential risk. The portfolio reports an 88% model accuracy figure, but does not establish clinical validation; it should not be treated as a diagnostic tool or medical advice.",
    source: { label: "Browse projects", href: "#projects" },
  },
  {
    test: /programming language/i,
    text: "The programming languages listed in Naresh’s portfolio are Python, Java, C++, and SQL. His web development toolkit also includes JavaScript, HTML, CSS, React, and Node.js.",
    source: { label: "Explore skills", href: "#skills" },
  },
  {
    test: /skill|technolog(?:y|ies)|tech stack|tools|language/i,
    text: "Naresh’s toolkit spans Python, Java, C++, JavaScript, and SQL; machine learning and computer vision with TensorFlow, scikit-learn, OpenCV, Pandas, and NumPy; and databases and deployment tools including MongoDB, PostgreSQL, MySQL, AWS, Docker, Linux, Git, and GitHub Actions. His computer science foundations include data structures and algorithms, object-oriented programming, databases, operating systems, and computer networks.",
    source: { label: "Explore skills", href: "#skills" },
  },
  {
    test: /experience|work|job|career|intern|achievement/i,
    text: "Naresh has worked as a Machine Learning Trainee at SkillDzire (January–May 2025), an AI–DevOps Engineer at Aitch Nu Global Technologies (May–December 2024), and a Hardware and Network Technician at Shree Nandi Computer Institute (September 2015–May 2016). At SkillDzire, he completed 8+ machine-learning and deep-learning projects. At Aitch Nu, he built CI/CD workflows and containerized 5+ applications with Docker, supporting deployments in AWS and Linux environments.",
    source: { label: "Work experience", href: "#experience" },
  },
  {
    test: /education|academic|qualification|degree|college|study|cgpa|gpa|diploma|university/i,
    text: "Naresh completed a Bachelor of Engineering in Computer Science and Engineering at Brindavan College of Engineering, affiliated with Visvesvaraya Technological University (February 2022–July 2025), with a CGPA of 8.31/10. He previously earned a Diploma in Computer Science and Engineering from Al Khateeb Polytechnic College (August 2016–May 2020), with a CGPA of 7.5/10.",
    source: { label: "Education", href: "#education" },
  },
  {
    test: /project|built|portfolio|strongest|best|machine learning|ai|computer vision|application/i,
    text: "Selected work includes a real-time object detection system using Python, OpenCV, and YOLOv8; a heart disease prediction model reported at 88% accuracy; and a COVID-19 prediction project evaluated across 11 machine-learning models. Other projects include a browser-based game platform, an IoT fishing-boat safety system, a student feedback application, a web music player, and a poker game collection.",
    source: { label: "Browse projects", href: "#projects" },
  },
  {
    test: /about|background|who|introduce|summary|strength/i,
    text: "Naresh Rana is a Computer Science and Engineering graduate based in Bengaluru, India. He focuses on building practical software across machine learning, DevOps, and full-stack development. His experience includes applied ML projects, CI/CD workflows, and deployments using Docker, AWS, and Linux. The portfolio also lists communication, teamwork, and problem-solving strengths, as well as football and kabaddi leadership roles.",
    source: { label: "About Naresh", href: "#about" },
  },
]

function answerLocally(question: string) {
  const match = localAnswers.find((entry) => entry.test.test(question))
  if (match) return { text: match.text, source: match.source }
  return {
    text: "I can help with Naresh’s background, projects, work history, technical skills, education, credentials, or professional links. For information beyond the portfolio, I’ll say when it isn’t documented. Try one of the suggested topics below.",
    source: undefined,
  }
}

function sourceFor(question: string): Message["source"] {
  if (/certification|certificate/i.test(question)) return { label: "Browse credentials", href: "/certifications/machine-learning-specialist" }
  if (/portfolio website|his portfolio|portfolio link|website link/i.test(question)) return { label: "Open portfolio", href: "https://naresh-rana-1999.vercel.app" }
  if (/github|repository|repo/i.test(question)) return { label: "GitHub profile", href: "https://github.com/nareshrana1999" }
  if (/linkedin/i.test(question)) return { label: "LinkedIn profile", href: "https://linkedin.com/in/nareshrana1999" }
  if (/leetcode/i.test(question)) return { label: "LeetCode profile", href: "https://leetcode.com/u/Nareshrana1999" }
  if (/resume|résumé|\bcv\b/i.test(question)) return { label: "Download résumé", href: "https://drive.google.com/file/d/1lqwqs_kSa1meQUFlkjB_pDUxVDdX052t/view?usp=drive_link" }
  if (/recruiter|suitable roles?|roles? is he suited|best fit|role match|strongest areas/i.test(question)) return { label: "Experience", href: "#experience" }
  if (/contact|email|phone|hire/i.test(question)) return { label: "Contact Naresh", href: "mailto:nareshrana2.nr@gmail.com" }
  if (/skill|technolog(?:y|ies)|tech stack|tool|language/i.test(question)) return { label: "Explore skills", href: "#skills" }
  if (/experience|work|job|career/i.test(question)) return { label: "Work experience", href: "#experience" }
  if (/education|academic|qualification|degree|college|certification/i.test(question)) return { label: "Education", href: "#education" }
  if (/project|built|portfolio|machine learning|ai/i.test(question)) return { label: "Browse projects", href: "#projects" }
  return { label: "About Naresh", href: "#about" }
}

function TypingIndicator() {
  return (
    <motion.div className="ask-message ask-message-assistant ask-typing-row" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
      <span className="ask-bot-icon"><Bot aria-hidden="true" /></span>
      <div className="ask-typing" role="status" aria-label="Assistant is thinking">
        <span /><span /><span /><small>Preparing a concise answer</small>
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
                    {message.role === "assistant" && message.source && <a className="ask-source-link" href={message.source.href} target={message.source.href.startsWith("http") ? "_blank" : undefined} rel={message.source.href.startsWith("http") ? "noopener noreferrer" : undefined}>{message.source.label}<ExternalLink aria-hidden="true" /></a>}
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
