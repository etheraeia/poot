import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TransitionLink } from "./TransitionLink";
import { projects } from "../content/ProjectContent";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // Hide on scroll down
      } else {
        setShow(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const currentProject = projects.find((p) => p.url_name === location.pathname);
  const navTextColor = currentProject?.body_text_color || "text-[#1029b4]";
  const navLogoColor = currentProject?.logo_color || "fill-[#1029b4]";
  const navBgColor = currentProject?.background_color || "bg-[#fefbf2]";

  return (
    <header
      className={`w-full fixed transition-all duration-500 z-10 ${window.scrollY > 600 ? navBgColor : "bg-transparent"} ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className={`flex mx-auto px-6.5 py-3 font-mono text-xl ${navTextColor} items-center justify-between`}>
        <TransitionLink to="/">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.92 751.55" className={`w-12 h-12 ${navLogoColor}`}>
              <path class="cls-1" d="M355.39,682.7l-226.14-117.09c-6.85-3.55-11.15-10.62-11.15-18.34V76.32c0-3.5,3.52-5.89,6.78-4.61l107.92,42.62c2.5.99,4.8,2.42,6.78,4.24l18.11,16.61c2.88,2.64,7.11,3.21,10.58,1.41,19.14-9.91,80.39-41.64,101.33-52.49,3.45-1.79,4.06-6.46,1.2-9.08l-18.19-16.69c-1.43-1.31-3.02-2.43-4.75-3.32L246.05,2.31c-5.95-3.08-13.03-3.08-18.99,0L11.15,114.1c-6.85,3.55-11.15,10.62-11.15,18.34v486.68c0,7.72,4.3,14.79,11.15,18.34l215.91,111.79c5.95,3.08,13.03,3.08,18.99,0l109.33-56.61c4.03-2.09,4.03-7.85,0-9.93Z"/>
              <path class="cls-1" d="M355.39,682.7l-226.14-117.09c-6.85-3.55-11.15-10.62-11.15-18.34V76.32c0-3.5,3.52-5.89,6.78-4.61l107.92,42.62c2.5.99,4.8,2.42,6.78,4.24l18.11,16.61c2.88,2.64,7.11,3.21,10.58,1.41,19.14-9.91,80.39-41.64,101.33-52.49,3.45-1.79,4.06-6.46,1.2-9.08l-18.19-16.69c-1.43-1.31-3.02-2.43-4.75-3.32L246.05,2.31c-5.95-3.08-13.03-3.08-18.99,0L11.15,114.1c-6.85,3.55-11.15,10.62-11.15,18.34v486.68c0,7.72,4.3,14.79,11.15,18.34l215.91,111.79c5.95,3.08,13.03,3.08,18.99,0l109.33-56.61c4.03-2.09,4.03-7.85,0-9.93Z"/>
              <path class="cls-1" d="M439.32,563.83c-.86-2.65-1.29-5.41-1.29-8.19V145.77c0-5.79-2.43-11.31-6.69-15.22l-27.76-25.46c-4.39-4.02-10.82-4.88-16.11-2.14l-5.71,2.95c-.23.13-.46.26-.69.39l-92.51,47.92c-2.92,1.99-3.3,6.26-.61,8.73l32,29.34v360.48c0,4.6-1.44,9.08-4.13,12.81l-32.12,44.64c-1.99,2.77-1.06,6.66,1.97,8.23l51.91,26.88h0l45.4,23.5c5.95,3.08,13.03,3.08,18.99,0l36.07-18.68,20.87-10.8c2.43-1.26,3.59-4.09,2.75-6.69l-22.32-68.83Z"/>
            </svg>
        </TransitionLink>
        <div
          className="relative flex-grow-0 flex-shrink-0 ml-auto"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className={`flex items-center gap-2 px-4 py-0 text-xl underline tracking-tighter font-light ${navTextColor} transition-colors`}
            style={{ fontFamily: 'IBM Plex Mono' }}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            // Prevent dropdown from closing when hovering the button
            onMouseEnter={e => {
              e.stopPropagation();
              setDropdownOpen(true);
            }}
            onMouseLeave={e => {
              e.stopPropagation();
            }}
          >
            WORK
          </button>
          {dropdownOpen && (
            <div
              className={`absolute right-2 w-115 z-10 ${navBgColor}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {projects.map((p) => (
                <TransitionLink
                  key={p.url_name}
                  to={p.url_name}
                  className={`block px-2 text-xl text-right tracking-tighter font-light ${navTextColor} ${p.url_name == location.pathname ? "underline" : "hover:underline"} transition-colors`}
                  style={{ fontFamily: 'IBM Plex Mono' }}
                >
                  {p.title}
                </TransitionLink>
              ))}
            </div>
          )}
        </div>
        <TransitionLink to="/about">
          <p
            style={{ fontFamily: 'IBM Plex Mono' }}
            className={`flex-grow-0 flex-shrink-0 tracking-tighter text-xl font-light text-left ${navTextColor} hover:underline self-stretch`}
          >
            ABOUT
          </p>
        </TransitionLink>
      </div>
    </header>
  );
}
