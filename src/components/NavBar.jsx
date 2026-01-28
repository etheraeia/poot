import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TransitionLink } from "./TransitionLink";
import { projects } from "../content/ProjectContent";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY <= lastScrollY || window.scrollY < 100);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const currentProject = projects.find((p) => p.url_name === location.pathname);
  const navTextColor =
    currentProject?.nav_text_color ||
    currentProject?.body_text_color ||
    "text-[#1029b4]";
  const navLogoColor = currentProject?.logo_color || "fill-[#1029b4]";
  const navBgColor =
    currentProject?.background_color || "bg-[#fefbf2] fill-[#fefbf2]";
  const dropdownTextColor = currentProject?.drop_text_color || "text-[#fefbf2]";
  const dropdownBgColor =
    currentProject?.drop_bg_color || "bg-[#1029b4] fill-[#1029b4]";
  return (
    <header
      className={`flex flex-row z-100 w-full transition-all justify-between fixed duration-500 ${location.pathname === "/" && scrollY > 600 ? navBgColor : "bg-transparent"} ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      <TransitionLink to="/" className="px-2 py-3">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 461.92 751.55"
          className={`w-[10vw] h-[10vw] md:w-[2.8vw] md:h-[2.8vw] ${navLogoColor}`}
        >
          <path
            d="M355.39,682.7l-226.14-117.09c-6.85-3.55-11.15-10.62-11.15-18.34V76.32c0-3.5,3.52-5.89,6.78-4.61l107.92,42.62c2.5.99,4.8,2.42,6.78,4.24l18.11,16.61c2.88,2.64,7.11,3.21,10.58,1.41,19.14-9.91,80.39-41.64,101.33-52.49,3.45-1.79,4.06-6.46,1.2-9.08l-18.19-16.69c-1.43-1.31-3.02-2.43-4.75-3.32L246.05,2.31c-5.95-3.08-13.03-3.08-18.99,0L11.15,114.1c-6.85,3.55-11.15,10.62-11.15,18.34v486.68c0,7.72,4.3,14.79,11.15,18.34l215.91,111.79c5.95,3.08,13.03,3.08,18.99,0l109.33-56.61c4.03-2.09,4.03-7.85,0-9.93Z"
            className="cls-1"
          />
          <path
            d="M355.39,682.7l-226.14-117.09c-6.85-3.55-11.15-10.62-11.15-18.34V76.32c0-3.5,3.52-5.89,6.78-4.61l107.92,42.62c2.5.99,4.8,2.42,6.78,4.24l18.11,16.61c2.88,2.64,7.11,3.21,10.58,1.41,19.14-9.91,80.39-41.64,101.33-52.49,3.45-1.79,4.06-6.46,1.2-9.08l-18.19-16.69c-1.43-1.31-3.02-2.43-4.75-3.32L246.05,2.31c-5.95-3.08-13.03-3.08-18.99,0L11.15,114.1c-6.85,3.55-11.15,10.62-11.15,18.34v486.68c0,7.72,4.3,14.79,11.15,18.34l215.91,111.79c5.95,3.08,13.03,3.08,18.99,0l109.33-56.61c4.03-2.09,4.03-7.85,0-9.93Z"
            className="cls-1"
          />
          <path
            d="M439.32,563.83c-.86-2.65-1.29-5.41-1.29-8.19V145.77c0-5.79-2.43-11.31-6.69-15.22l-27.76-25.46c-4.39-4.02-10.82-4.88-16.11-2.14l-5.71,2.95c-.23.13-.46.26-.69.39l-92.51,47.92c-2.92,1.99-3.3,6.26-.61,8.73l32,29.34v360.48c0,4.6-1.44,9.08-4.13,12.81l-32.12,44.64c-1.99,2.77-1.06,6.66,1.97,8.23l51.91,26.88h0l45.4,23.5c5.95,3.08,13.03,3.08,18.99,0l36.07-18.68,20.87-10.8c2.43-1.26,3.59-4.09,2.75-6.69l-22.32-68.83Z"
            className="cls-1"
          />
        </svg>
      </TransitionLink>
      {/* Text Buttons */}
      <div
        onMouseEnter={() => setDropdownOpen(dropdownOpen && show)}
        onMouseLeave={() => setDropdownOpen(false)}
        style={{ fontFamily: "IBM Plex Mono" }}
        className={`flex flex-row px-5 text-xl tracking-tighter font-light items-center ${navTextColor} md:text-[1.2vw]`}
      >
        <div
          className={`flex flex-row px-2 rounded-lg items-center gap-1 ${navBgColor}`}
        >
          <TransitionLink to="/about" className={`hover:underline`}>
            ABOUT
          </TransitionLink>
          <p>·</p>
          <p
            aria-haspopup="true"
            aria-expanded={dropdownOpen && show}
            onMouseEnter={() => setDropdownOpen(show)}
            className={`transition-colors hover:underline`}
          >
            WORK
          </p>
        </div>
      </div>
      {/* DROPDOWN */}
      <div
        onMouseEnter={() => setDropdownOpen(dropdownOpen && show)}
        onMouseOver={() => setDropdownOpen(dropdownOpen && show)}
        onMouseLeave={() => setDropdownOpen(false)}
        className={`pt-15 absolute top-2 right-2 -z-100 grow`}
      >
        <div 
        className={`overflow-hidden`}
        >
          <div
            className={`flex flex-col transition-all duration-500 ${dropdownOpen ? "translate-y-0 " : "-translate-y-[100%]"}`}
          >
            {/* <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-16 border-b-blue-500"></div> */}
            <div className="flex w-full px-9 justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.977"
                height="17.713"
                viewBox="0 0 16.977 17.713"
                className="block"
              >
                <polygon
                  points="16.977 17.713 8.488 0 0 17.713 16.977 17.713"
                  className={`${dropdownBgColor}`}
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden py-4 px-4 rounded-lg transition-all duration-500 ${dropdownOpen ? dropdownBgColor : "bg-transparent"}`}
            >
              {projects.map((p) => (
                <TransitionLink
                  key={p.url_name}
                  to={p.url_name}
                  style={{ fontFamily: "IBM Plex Mono" }}
                  className={`block py-0.5 md:py-0 text-xl tracking-tighter font-light ${dropdownTextColor} md:text-[1.2vw] ${p.url_name == location.pathname ? "underline" : "hover:underline"}`}
                >
                  {p.index} {p.title}
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
