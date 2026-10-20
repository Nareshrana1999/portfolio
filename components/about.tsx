import SectionNext from "@/components/section-next"

const languages = ["English", "Hindi", "Kannada", "Nepali"]

const interests = ["Football · Cricket · Tennis · Kabaddi", "Trekking", "Hiking", "Walking", "Gaming", "Motor biking & travel", "Film & anime", "Community service"]

export default function AboutSection() {
  return (
    <section id="about" className="about-section scroll-mt-16">
      <div className="about-wrap">
        <header className="about-heading">
          <span className="section-index">01 / ENGINEERING PROFILE</span>
          <h2>About <span>me</span></h2>
        </header>

        <div className="about-layout">
        <div className="about-main">
          <article className="about-summary">
            <div className="about-card-label"><span className="status-led" /> COMPUTER SCIENCE & ENGINEERING</div>
            <h3>Building useful software from idea to deployment.</h3>
            <p>I’m a Computer Science and Engineering graduate focused on practical software, machine learning, and DevOps. I enjoy turning real problems into clear, dependable applications.</p>
            <p>My project work includes machine learning and deep learning, CI/CD workflows, Docker containers, and deployment in AWS and Linux environments. I value readable code, thoughtful collaboration, and steady iteration.</p>
            <div className="about-strengths" aria-label="Professional strengths">
              <span>Problem solving</span><span>Teamwork</span><span>Communication</span>
            </div>
          </article>

          <div className="about-side-stack">
            <aside className="about-facts" aria-label="Professional overview">
              <div className="about-facts-head"><span>AT A GLANCE</span></div>
              <div className="about-metric"><strong>08<span>+</span></strong><span>Projects built</span></div>
              <div className="about-metric"><strong>03</strong><span>Professional experiences</span></div>
              <div className="about-metric"><strong>08</strong><span>Certifications</span></div>
              <div className="about-facts-foot">SOFTWARE <i>·</i> AI/ML <i>·</i> DEVOPS</div>
            </aside>

            <div className="about-languages">
              <div className="about-detail-title"><h3>Languages</h3></div>
              <div className="language-list">
                {languages.map((language) => <div className="language-row" key={language}><span>{language}</span></div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="about-details">
          <div className="about-interests">
            <div className="about-detail-title"><h3>Outside work</h3></div>
            <div className="interest-list">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
          </div>
        </div>
        </div>
      </div>
      <SectionNext targetId="experience" targetLabel="Work experience" />
    </section>
  )
}
