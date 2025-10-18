import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <header
      className={`w-full bg-[#fefbf2] fixed transition-transform duration-500 z-50 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex mx-auto px-6.5 py-4.5 font-mono text-xl text-[#1029b4] bg-[#fefbf2] items-center justify-between">
        <Link to="/">
          <img src="./logo.png" className="max-h-12.5" alt="Logo" />
        </Link>
        <div
          className="relative flex-grow-0 flex-shrink-0 ml-auto"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="flex items-center gap-2 px-4 py-2 text-2xl tracking-tighter font-light text-[#1029b4] bg-transparent hover:bg-[#e6e3d7] rounded transition-colors"
            style={{ fontFamily: "epilogue, sans-serif" }}
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
            Projects
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5" stroke="#1029b4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-96 bg-white border border-[#e6e3d7] rounded shadow-lg z-10"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {projects.map((p) => (
                <Link to= {p.url_name}
                className="block px-4 py-2 text-xl tracking-tighter font-light text-[#1029b4] hover:bg-[#fefbf2] transition-colors"
                style={{ fontFamily: "epilogue, sans-serif" }}
                >
                { p.title }
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/About">
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className="flex-grow-0 flex-shrink-0 tracking-tighter text-2xl font-light text-left text-[#1029b4] self-stretch"
          >
            About me
          </p>
        </Link>
      </div>
    </header>
  );
}
