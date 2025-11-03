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
  const navBgColor = currentProject?.background_color || "bg-[#fefbf2]";

  return (
    <header
      className={`w-full fixed transition-all duration-500 z-10 ${window.scrollY > 600 ? navBgColor : "bg-transparent"} ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className={`flex mx-auto px-6.5 py-3 font-mono text-xl ${navTextColor} items-center justify-between`}>
        <TransitionLink to="/">
          <img src="./logo.png" className="max-h-12.5" alt="Logo" />
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
