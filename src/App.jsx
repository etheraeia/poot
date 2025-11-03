import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectPage } from "./components/ProjectPage";
import { projects } from "./content/ProjectContent";
import TransitionProvider from "./components/TransitionProvider";

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
      <TransitionProvider>
        <ScrollToTop />
        <NavBar />
        <main className="h-screen scrollbar-thick">
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
                    page_layout={p.page_layout}
                    intro_text_color={p.intro_text_color}
                    body_text_color={p.body_text_color}
                    background_color={p.background_color}
                  />
                }
              />
            ))}
          </Routes>
        </main>
      </TransitionProvider>
    </Router>
  );
}
