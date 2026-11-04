import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../data/projects";

function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // shrink/blur nav after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // close dropdown on outside click / Escape
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".dropdown")) setDropdownOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdownOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || (to === "/work" && pathname.startsWith("/projects"));

  const link = (to: string, label: string) => (
    <li>
      <Link to={to} className={isActive(to) ? "active" : undefined}>
        {label}
      </Link>
    </li>
  );

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <Link to="/" className="logo">
        {pathname === "/" ? (
          <>WEL<span>COME</span></>
        ) : (
          <>JOE<span>MARK</span></>
        )}
      </Link>

      <button
        className={`menu-toggle${menuOpen ? " active" : ""}`}
        aria-label="Menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {link("/", "Home")}
        {link("/about", "About")}
        {link("/work", "Work")}
        <li className="dropdown">
          <button
            type="button"
            className={`dropdown-btn${dropdownOpen ? " active" : ""}`}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((o) => !o)}
          >
            Projects <span className="dropdown-arrow" aria-hidden="true">▾</span>
          </button>
          <ul className={`dropdown-menu${dropdownOpen ? " show" : ""}`}>
            {projects.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/work">All Projects</Link>
            </li>
          </ul>
        </li>
        {link("/contact", "Contact")}
      </ul>
    </nav>
  );
}

export default Nav;
