export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (!section) return

  const headerOffset = window.matchMedia("(max-width: 767px)").matches ? 72 : 88
  const top = window.scrollY + section.getBoundingClientRect().top - headerOffset
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
}
