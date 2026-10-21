import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Award, CalendarDays } from "lucide-react"
import { certifications, getCertification } from "@/lib/certifications"

export function generateStaticParams() {
  return certifications.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const certification = getCertification(slug)
  return { title: certification ? `${certification.title} | Certifications` : "Certification not found" }
}

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const certification = getCertification(slug)
  if (!certification) notFound()

  const hasDirectCredential = certification.credentialLink.startsWith("https://drive.google.com/file/")

  return (
    <main className={`credential-page certification-accent-${certification.accent}`}>
      <div className="credential-page-inner">
        <Link href="/#education" className="credential-back"><ArrowLeft aria-hidden="true" /> Back to portfolio</Link>
        <article className="credential-detail-card">
          <div className="credential-detail-eyebrow"><Award aria-hidden="true" /> CERTIFICATION / {certification.period}</div>
          <h1>{certification.title}</h1>
          <p className="credential-detail-issuer">Issued by <strong>{certification.issuer}</strong></p>
          <div className="credential-detail-meta">
            <div><span>ISSUER</span><strong>{certification.issuer}</strong></div>
            <div><span>YEAR</span><strong><CalendarDays aria-hidden="true" /> {certification.period}</strong></div>
          </div>
          {hasDirectCredential ? (
            <a className="credential-open-link" href={certification.credentialLink} target="_blank" rel="noopener noreferrer">
              Open credential <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <p className="credential-unavailable">The portfolio currently has no direct certificate document linked for this item.</p>
          )}
        </article>
        <nav className="credential-siblings" aria-label="Other certifications">
          <span>MORE CERTIFICATIONS</span>
          <div>{certifications.filter((item) => item.slug !== certification.slug).map((item) => (
            <Link key={item.slug} href={`/certifications/${item.slug}`}>{item.title}<ArrowUpRight aria-hidden="true" /></Link>
          ))}</div>
        </nav>
      </div>
    </main>
  )
}
