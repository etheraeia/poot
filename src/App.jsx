import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectPage } from "./components/ProjectPage";
import { projects } from "./content/ProjectContent";

export default function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <main className="pt-22 h-screen scrollbar-thick">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {projects.map((p) => (
            <Route path={p.url_name} element={
              <ProjectPage 
                intro_text={p.intro_text} 
                blurb={p.blurb}
                hero_image={p.hero_image}
                wide_image={p.wide_image}
                left_image={p.left_image}
                right_image={p.right_image}
              />
            }/>
          ))}
        </Routes>
      </main>
    </Router>
  );
}
