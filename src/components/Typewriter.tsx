import { useEffect, useState } from "react";

const DEFAULT_TEXTS = [
  "Building digital experiences",
  "Crafting clean interfaces",
  "Exploring AI frontiers",
  "Turning ideas into code",
];

function Typewriter({ texts = DEFAULT_TEXTS }: { texts?: string[] }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[textIndex];
      charIndex += deleting ? -1 : 1;
      setDisplay(current.substring(0, charIndex));

      let speed = deleting ? 40 : 80;
      if (!deleting && charIndex === current.length) {
        speed = 2000;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 400;
      }
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 80);
    return () => clearTimeout(timer);
  }, [texts]);

  return (
    <span className="typewriter" style={{ color: "var(--neon-cyan)", fontWeight: 600 }}>
      {display}
    </span>
  );
}

export default Typewriter;
