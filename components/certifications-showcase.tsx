"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { certifications } from "@/lib/certifications"

const CertificationPreview = ({ index }: { index: number }) => {
  const certification = certifications[index]
  return (
    <article className={`certification-preview certification-accent-${certification.accent}`} aria-hidden="true">
      <p>{certification.issuer.toUpperCase()} · {certification.period}</p>
      <h4>{certification.title}</h4>
    </article>
  )
}

export default function CertificationsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pointerStart, setPointerStart] = useState<{ x: number; y: number } | null>(null)
  const current = certifications[activeIndex]
  const previousIndex = (activeIndex - 1 + certifications.length) % certifications.length
  const nextIndex = (activeIndex + 1) % certifications.length
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
        <div className="certification-carousel-peeks" aria-hidden="true">
          <div className="certification-carousel-peek certification-carousel-peek-previous"><CertificationPreview index={previousIndex} /></div>
          <div className="certification-carousel-peek certification-carousel-peek-next"><CertificationPreview index={nextIndex} /></div>
        </div>

        <article className={`certification-feature-card certification-accent-${current.accent}`} key={current.slug}>
          <div className="certification-feature-topline">
            <span>PROFESSIONAL CERTIFICATION</span>
            <span className="certification-feature-count">{String(activeIndex + 1).padStart(2, "0")} <i>/</i> {String(certifications.length).padStart(2, "0")}</span>
          </div>
          <Link className="certification-feature-title" href={`/certifications/${current.slug}`} aria-label={`View details for ${current.title}`}>
            <h4>{current.title}</h4>
          </Link>
          <div className="certification-feature-metrics">
            <div><strong>{current.period}</strong><span>YEAR AWARDED</span></div>
            <div><strong>{current.issuer}</strong><span>ISSUING ORGANIZATION</span></div>
          </div>
          <div className="certification-feature-actions">
            {current.credentialLink.startsWith("https://drive.google.com/file/") && (
              <a href={current.credentialLink} target="_blank" rel="noopener noreferrer"><ExternalLink aria-hidden="true" /> OPEN CREDENTIAL</a>
            )}
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
