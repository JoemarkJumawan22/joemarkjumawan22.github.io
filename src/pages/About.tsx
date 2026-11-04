import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { profileMeta, skills, timeline } from "../data/about";
import { img } from "../lib/assets";

function About() {
  useDocumentTitle("About | Joemark S. Jumawan");

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <SectionHeader
          tag="Who I Am"
          title="About Me"
          desc="A curious mind navigating the intersection of code, design, and emerging tech."
        />

        <div className="about-grid">
          <Reveal variant="reveal-left" className="about-visual">
            <div className="profile-card">
              <div className="avatar-ring">
                <div className="avatar-inner">
                  <img src={img("siDos_Suit.png")} alt="Joemark S. Jumawan" className="avatar-img" />
                </div>
              </div>
              <h3 className="profile-name">Joemark S. Jumawan</h3>
              <p className="profile-role">Computer Science Student</p>
              <div className="profile-meta">
                {profileMeta.map((m) => (
                  <div className="meta-item" key={m.label}>
                    <div className="meta-icon">{m.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{m.label}</div>
                      <div>{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="reveal-right" className="about-content">
            <h3>The Story So Far</h3>
            <p>
              I'm Joemark — a 20-year-old third-year Computer Science student who treats every project like a
              playground for ideas. I don't just write code; I design experiences that feel intentional, fluid,
              and a little bit unexpected.
            </p>
            <p>
              From building full applications like <strong style={{ color: "var(--neon-cyan)" }}>Shopzilla</strong>{" "}
              to crafting web systems such as <strong style={{ color: "var(--neon-magenta)" }}>RegisTrack</strong>,
              I thrive at the point where clean architecture meets bold visual thinking.
            </p>
            <p>
              Beyond the screen, I actively seek growth through seminars and workshops — constantly updating my
              digital toolkit with modern communication, safety practices, and AI essentials.
            </p>

            <div className="skills-grid">
              {skills.map((s, i) => (
                <Reveal key={s} variant="" className="skill-chip" delay={i * 0.06}>
                  {s}
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <div style={{ marginTop: "5rem" }}>
          <SectionHeader
            tag="Growth Path"
            title="Seminars & Learning"
            desc="I show up where knowledge is shared. Continuous learning is non-negotiable."
          />
          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.title} variant="" className="timeline-item" delay={i * 0.12} threshold={0.2}>
                <div className="timeline-date">{t.date}</div>
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-desc">{t.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
