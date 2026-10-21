export const certifications = [
  {
    slug: "machine-learning-specialist",
    title: "Machine Learning Specialist",
    issuer: "SkillDzire",
    period: "2025",
    credentialLink: "https://drive.google.com/file/d/1j20sEANxwU0XiuHNdnvUNLxHUHhSJFTs/view?usp=drive_link",
    accent: "blue",
  },
  {
    slug: "oracle-cloud-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    period: "2025",
    credentialLink: "https://drive.google.com/file/d/1b03rqz38flOhBVFBj77I2BVg42s6a2lV/view?usp=sharing",
    accent: "green",
  },
  {
    slug: "microsoft-azure-ai-essentials",
    title: "Microsoft Azure AI Essentials Professional Certificate",
    issuer: "Microsoft and LinkedIn Learning",
    period: "2025",
    credentialLink: "https://drive.google.com/file/d/1LjmTUXjt3TbxD16DHLkUe1oV5lcAX6_j/view?usp=sharing",
    accent: "cyan",
  },
  {
    slug: "ai-devops-engineer",
    title: "AI-DevOps Engineer",
    issuer: "Aitch Nu Global Technologies",
    period: "2024",
    credentialLink: "https://drive.google.com/file/d/1ChzK80W0p_obegfpq3P56IS4bafWmFtU/view?usp=drive_link",
    accent: "green",
  },
  {
    slug: "hardware-networking",
    title: "Hardware & Networking Certification",
    issuer: "Shree Nandi Computer Institute",
    period: "2016",
    credentialLink: "https://drive.google.com/file/d/14FpmWMuZMDm9-U4k9FXm1VpC4gsza53e/view?usp=drive_link",
    accent: "rose",
  },
  {
    slug: "fiber-optic-communication",
    title: "Fiber Optic Communication System Certification",
    issuer: "National Skill Training Institute",
    period: "2019",
    credentialLink: "https://drive.google.com/file/d/1NZombgWsh40POjzJ4mIrfQqaPr2Dj4Il/view?usp=drive_link",
    accent: "green",
  },
] as const

export type Certification = (typeof certifications)[number]

export function getCertification(slug: string) {
  return certifications.find((certification) => certification.slug === slug)
}
