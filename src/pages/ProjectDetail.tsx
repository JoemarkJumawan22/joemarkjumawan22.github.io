import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import LinkButton from "../components/LinkButton";
import Reveal from "../components/Reveal";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { projects } from "../data/projects";
import { img } from "../lib/assets";

/** One template for every project: /projects/shopzilla, /projects/registrack, ... */
function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [imgFailed, setImgFailed] = useState(false);

  useDocumentTitle(project ? `${project.title} | Joemark S. Jumawan` : "Project | Joemark S. Jumawan");

  if (!project) return <Navigate to="/work" replace />;

  return (
    <>
      <section className="project-hero">
        <div className="container">
          <Reveal>
            <Link to="/work" className="back-link">← Back to Work</Link>
          </Reveal>
          <Reveal className="project-tags-row">
            {project.heroTags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </Reveal>
          <Reveal as="h1">{project.title}</Reveal>
          <Reveal as="p" className="lead">{project.lead}</Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="detail-grid">
            <Reveal variant="reveal-left">
              <div className="preview-box">
                {imgFailed ? (
                  <div className="placeholder">{project.placeholder}</div>
                ) : (
                  <img src={img(project.preview)} alt={`${project.title} preview`} onError={() => setImgFailed(true)} />
                )}
              </div>
              <DetailCard title="Overview">
                {project.overview.map((para, i) => (
                  <p key={i} style={i > 0 ? { marginTop: "1rem" } : undefined}>{para}</p>
                ))}
              </DetailCard>
            </Reveal>

            <Reveal variant="reveal-right">
              <DetailCard title="Key Features" style={{ marginBottom: "1.5rem" }}>
                <ul>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </DetailCard>
              <DetailCard title="Tech & Skills" style={{ marginBottom: "1.5rem" }}>
                <div className="tech-chips">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </DetailCard>
              <DetailCard title="Role">
                <p>{project.role}</p>
              </DetailCard>
            </Reveal>
          </div>

          <Reveal className="cta-row">
            <LinkButton to="/work" variant="secondary">← All Projects</LinkButton>
            <LinkButton to="/contact">Get In Touch</LinkButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
