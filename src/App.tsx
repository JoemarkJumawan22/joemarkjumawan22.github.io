import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Transmissions from "./pages/Transmissions";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="transmissions" element={<Transmissions />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
