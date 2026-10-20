import { ArrowDownRight, ArrowUp } from "lucide-react"

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
      <a className="section-next-link" href={`#${targetId}`} aria-label={backToTop ? "Back to top" : `Scroll to ${targetLabel}`}>
        <span>{label}</span>
        <ScrollIcon aria-hidden="true" />
      </a>
    </div>
  )
}
