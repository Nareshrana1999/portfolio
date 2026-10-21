"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Award, CalendarDays, ExternalLink } from "lucide-react"
import { certifications } from "@/lib/certifications"

export default function CertificationsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pointerStart, setPointerStart] = useState<{ x: number; y: number } | null>(null)
  const current = certifications[activeIndex]
  const move = (step: number) => setActiveIndex((index) => (index + step + certifications.length) % certifications.length)

  return (
    <div className="certification-carousel" aria-label="Certification showcase">
      <div
        className="certification-carousel-stage"
        onPointerDown={(event) => {
          if (event.button !== 0 || (event.target as HTMLElement).closest("a,button")) return
          setPointerStart({ x: event.clientX, y: event.clientY })
        }}
        onPointerUp={(event) => {
          if (!pointerStart) return
          const dx = event.clientX - pointerStart.x
          const dy = event.clientY - pointerStart.y
          setPointerStart(null)
          if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.15) move(dx < 0 ? 1 : -1)
        }}
        onPointerCancel={() => setPointerStart(null)}
      >
        <article className={`certification-feature-card certification-accent-${current.accent}`} key={current.slug}>
          <div className="certification-feature-icon"><Award aria-hidden="true" /></div>
          <div className="certification-feature-content">
            <div className="certification-feature-heading-row">
              <Link className="certification-feature-title" href={`/certifications/${current.slug}`} aria-label={`View details for ${current.title}`}>
                <h4>{current.title}</h4>
              </Link>
              <span className="certification-feature-year"><CalendarDays aria-hidden="true" /> {current.period}</span>
            </div>
            <p className="certification-feature-issuer">{current.issuer}</p>
            <div className="certification-feature-actions">
            <a
              href={current.credentialLink.startsWith("https://drive.google.com/file/") ? current.credentialLink : `/certifications/${current.slug}`}
              target={current.credentialLink.startsWith("https://drive.google.com/file/") ? "_blank" : undefined}
              rel={current.credentialLink.startsWith("https://drive.google.com/file/") ? "noopener noreferrer" : undefined}
            >
                View Credential <ExternalLink aria-hidden="true" />
            </a>
            </div>
          </div>
        </article>

        <button type="button" className="certification-carousel-arrow certification-carousel-arrow-left" onClick={() => move(-1)} aria-label="Previous certification"><ArrowLeft /></button>
        <button type="button" className="certification-carousel-arrow certification-carousel-arrow-right" onClick={() => move(1)} aria-label="Next certification"><ArrowRight /></button>
      </div>
      <div className="certification-carousel-pagination" aria-label={`Showing certification ${activeIndex + 1} of ${certifications.length}`}>
        {certifications.map((certification, index) => (
          <button key={certification.slug} type="button" aria-label={`Show ${certification.title}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => setActiveIndex(index)} />
        ))}
      </div>
    </div>
  )
}
