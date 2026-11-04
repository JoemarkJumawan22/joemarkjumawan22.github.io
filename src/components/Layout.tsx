import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Background from "./Background";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Nav from "./Nav";

/** Shared shell: cursor, background, nav, page transition overlay, footer. */
function Layout() {
  const { pathname } = useLocation();
  const [transitioning, setTransitioning] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    setTransitioning(true);
    const t = setTimeout(() => setTransitioning(false), 450);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <Cursor />
      <div className={`page-transition${transitioning ? " active" : ""}`}></div>
      <Background />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer showInboxLink={pathname === "/contact"} />
    </>
  );
}

export default Layout;
