import Reveal from "./Reveal";

interface Props {
  tag: string;
  title: string;
  desc: string;
}

function SectionHeader({ tag, title, desc }: Props) {
  return (
    <Reveal className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{desc}</p>
    </Reveal>
  );
}

export default SectionHeader;
