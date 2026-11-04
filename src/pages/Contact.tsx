import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { addTransmission } from "../lib/transmissions";

const info = [
  { icon: "📍", label: "Location", value: "Philippines" },
  { icon: "🎓", label: "Status", value: "3rd Year CS Student" },
  { icon: "💡", label: "Open To", value: "Collaborations & Opportunities" },
  { icon: "⚡", label: "Response", value: "Usually within 24–48 hrs" },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };
type Status = "idle" | "sending" | "sent";

function Contact() {
  useDocumentTitle("Contact | Joemark S. Jumawan");
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTransmission({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
    setTimeout(() => navigate("/transmissions"), 900 + 700 + 500);
  };

  const buttonStyle =
    status === "sending"
      ? { background: "linear-gradient(135deg, #00ff9d, #00f0ff)" }
      : status === "sent"
      ? { background: "linear-gradient(135deg, #00ff9d, #00b8d4)" }
      : undefined;

  const buttonLabel =
    status === "sending" ? "TRANSMITTING..." : status === "sent" ? "MESSAGE SENT ✓" : "Send Transmission";

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <SectionHeader
          tag="Connect"
          title="Get In Touch"
          desc="Have an idea, a project, or just want to say hello? The signal is open."
        />

        <div className="contact-grid">
          <div className="contact-info">
            {info.map((c, i) => (
              <Reveal key={c.label} variant="" className="contact-card" delay={i * 0.1}>
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="" className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your idea, project, or just say hi..." required value={form.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="form-submit" disabled={status !== "idle"} style={buttonStyle}>
                {buttonLabel}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
