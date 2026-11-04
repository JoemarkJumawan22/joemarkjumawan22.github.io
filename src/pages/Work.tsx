import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { projects } from "../data/projects";

function Work() {
  useDocumentTitle("Work | Joemark S. Jumawan");

  return (
    <section className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <SectionHeader
          tag="Selected Works"
          title="Projects"
          desc="A glimpse into the systems and experiences I've built — from concept to working product."
        />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              index={i}
              title={p.title}
              tags={p.cardTags}
              desc={p.cardDesc}
              bg={p.bg}
              icon={p.icon}
              to={`/projects/${p.slug}`}
              linkLabel="Explore Project"
            />
          ))}
          <ProjectCard
            index={projects.length}
            title="Future Builds"
            tags={["In Progress", "Experimental"]}
            desc="More experiments are brewing — AI-assisted tools, interactive interfaces, and systems that push beyond the ordinary. The next chapter is already being written."
            bg="background.png"
            icon="logo.png"
            to="/contact"
            linkLabel="Collab With Me"
          />
        </div>
      </div>
    </section>
  );
}

export default Work;
