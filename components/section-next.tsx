"use client"

import { ArrowDownRight, ArrowUp } from "lucide-react"
import { scrollToSection } from "@/lib/scroll-to-section"

interface SectionNextProps {
  targetId: string
  targetLabel: string
  backToTop?: boolean
}

export default function SectionNext({ targetId, targetLabel, backToTop = false }: SectionNextProps) {
  const ScrollIcon = backToTop ? ArrowUp : ArrowDownRight
  const label = backToTop ? "BACK TO TOP" : `SCROLL TO ${targetLabel.toUpperCase()}`

  return (
    <div className="section-next-wrap">
      <a className="section-next-link" href={`#${targetId}`} onClick={(event) => { event.preventDefault(); window.history.pushState(null, "", `#${targetId}`); scrollToSection(targetId) }} aria-label={backToTop ? "Back to top" : `Scroll to ${targetLabel}`}>
        <span>{label}</span>
        <ScrollIcon aria-hidden="true" />
      </a>
    </div>
  )
}
