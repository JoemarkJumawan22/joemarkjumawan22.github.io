import { useState } from "react";
import LinkButton from "../components/LinkButton";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { formatTime, loadTransmissions, saveTransmissions } from "../lib/transmissions";

function Transmissions() {
  useDocumentTitle("Transmissions | Joemark S. Jumawan");
  const [messages, setMessages] = useState(loadTransmissions);

  const clearAll = () => {
    if (confirm("Clear all transmissions from this browser?")) {
      saveTransmissions([]);
      setMessages([]);
    }
  };

  // React escapes text automatically, so the old escapeHtml() helper isn't needed.
  const newestFirst = [...messages].reverse();

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <SectionHeader
          tag="Inbox"
          title="Transmissions"
          desc="Messages received from the contact form. Stored locally in this browser."
        />

        <Reveal className="inbox-header">
          <div className="inbox-count">
            {messages.length === 1 ? "1 transmission" : `${messages.length} transmissions`}
          </div>
          <div className="inbox-actions">
            <LinkButton to="/contact" variant="secondary">← Back to Contact</LinkButton>
            <button className="btn-small btn-danger" type="button" onClick={clearAll}>
              Clear All
            </button>
          </div>
        </Reveal>

        <div className="messages-list">
          {messages.length === 0 ? (
            <div className="empty-state reveal visible">
              <div className="icon">📡</div>
              <h3>No transmissions yet</h3>
              <p>When someone sends a message from the Contact page, it will appear here.</p>
              <LinkButton to="/contact">Go to Contact</LinkButton>
            </div>
          ) : (
            newestFirst.map((m, i) => (
              <article className="message-card visible" key={m.id} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="message-meta">
                  <div>
                    <div className="message-from">{m.name || "Anonymous"}</div>
                    <div className="message-email">{m.email || "—"}</div>
                  </div>
                  <div className="message-time">{formatTime(m.time)}</div>
                </div>
                {m.subject && <div className="message-subject">{m.subject}</div>}
                <div className="message-body">{m.message}</div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Transmissions;
