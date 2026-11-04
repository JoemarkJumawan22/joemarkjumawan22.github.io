import { useEffect, useRef, useState } from "react";

const HOVER_TARGETS =
  "a, button, .btn, .skill-chip, .project-card, .contact-card, .meta-item, .form-submit, .btn-small, .logo, .project-link, .back-link";

/** Custom dot + trailing ring cursor. Only active for fine pointers (mouse). */
function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = -20;
    let ringY = -20;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX + "px";
        dot.current.style.top = mouseY + "px";
        dot.current.style.opacity = "1";
      }
      if (ring.current) ring.current.style.opacity = "1";
    };

    const onOver = (e: MouseEvent) => {
      setHover(!!(e.target as Element).closest?.(HOVER_TARGETS));
    };

    const loop = () => {
      ringX += (mouseX - 20 - ringX) * 0.15;
      ringY += (mouseY - 20 - ringY) * 0.15;
      if (ring.current) {
        ring.current.style.left = ringX + "px";
        ring.current.style.top = ringY + "px";
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className={`cursor${hover ? " hover" : ""}`}></div>
      <div ref={ring} className={`cursor-follower${hover ? " hover" : ""}`}></div>
    </>
  );
}

export default Cursor;
