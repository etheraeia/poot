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
                  <ProjectPage {...p} />
                }
              />
            ))}
          </Routes>
        </main>
      </TransitionProvider>
    </Router>
  );
}
