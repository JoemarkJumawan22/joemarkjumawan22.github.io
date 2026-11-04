import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** "reveal" | "reveal-left" | "reveal-right" | "reveal-scale" | "" (when className already has its own .visible rule) */
  variant?: string;
  delay?: number;
  threshold?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

/** Adds the `.visible` class once the element scrolls into view (replaces the old initReveal()). */
function Reveal({
  as: Tag = "div",
  variant = "reveal",
  className = "",
  delay = 0,
  threshold = 0.12,
  style,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const classes = [variant, className, visible ? "visible" : ""].filter(Boolean).join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
