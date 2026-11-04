import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { img } from "../lib/assets";

interface Props {
  title: string;
  tags: string[];
  desc: string;
  bg: string;
  icon: string;
  to: string;
  linkLabel: string;
  index?: number;
}

function ProjectCard({ title, tags, desc, bg, icon, to, linkLabel, index = 0 }: Props) {
  // 3D tilt following the mouse
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const rotateX = (e.clientY - rect.top - rect.height / 2) / 18;
    const rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 18;
    card.style.transform = `translateY(-12px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <Reveal
      as="article"
      variant=""
      className="project-card"
      delay={index * 0.12}
      onMouseMove={handleMove}
      onMouseLeave={(e: MouseEvent<HTMLElement>) => (e.currentTarget.style.transform = "")}
    >
      <div className="project-image">
        <img className="project-bg" src={img(bg)} alt="" />
        <div className="project-icon">
          <img src={img(icon)} alt={title} />
        </div>
      </div>
      <div className="project-body">
        <div className="project-tags">
          {tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <Link to={to} className="project-link">{linkLabel} →</Link>
      </div>
    </Reveal>
  );
}

export default ProjectCard;
