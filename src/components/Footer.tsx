import { Link } from "react-router-dom";

function Footer({ showInboxLink = false }: { showInboxLink?: boolean }) {
  return (
    <footer className="footer">
      <p className="footer-text">"If not YOU, then WHO? If not NOW, then WHEN?"</p>
      <p className="footer-text">Joemark S. Jumawan · Multimedia Project</p>
      {showInboxLink && (
        <p className="footer-text" style={{ marginTop: "0.75rem", fontSize: "0.75rem" }}>
          <Link to="/transmissions" style={{ color: "var(--neon-cyan)", opacity: 0.7 }}>
            View Transmissions →
          </Link>
        </p>
      )}
    </footer>
  );
}

export default Footer;
