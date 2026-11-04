import LinkButton from "../components/LinkButton";
import Typewriter from "../components/Typewriter";
import useDocumentTitle from "../hooks/useDocumentTitle";

const stats = [
  { number: "2+", label: "Major Projects" },
  { number: "3rd", label: "Year CS Student" },
  { number: "10+", label: "Seminars Attended" },
  { number: "∞", label: "Ideas Brewing" },
];

function Home() {
  useDocumentTitle("Joemark S. Jumawan | Portfolio");

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          Available for opportunities
        </div>
        <h1>
          <span className="glitch" data-text="Joemark">Joemark</span>
          <br />
          <span className="highlight">S. Jumawan</span>
        </h1>
        <p className="hero-subtitle">
          20-year-old 3rd Year Computer Science Student crafting digital experiences that feel alive.
          <br />
          <Typewriter />
        </p>
        <div className="hero-cta">
          <LinkButton to="/work">
            View My Work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </LinkButton>
          <LinkButton to="/contact" variant="secondary">Get In Touch</LinkButton>
        </div>

        <div className="stats-bar">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
