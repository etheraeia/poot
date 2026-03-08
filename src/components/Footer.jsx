import { projects } from "../content/ProjectContent";
import { useLocation } from "react-router-dom";
import Pdf from "/CW_resume.pdf";
import { useEffect, useRef } from "react";

export function Footer() {
  const location = useLocation();
  const currentProject = projects.find((p) => p.url_name === location.pathname);
  const footerTextColor = currentProject?.drop_text_color || "text-[#fefbf2]";
  const footerBgColor = currentProject?.drop_bg_color || "bg-[#0c2fd8]";

  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const backgroundColorFromFooter = footerBgColor.substring(4, 11);
      const backgroundColorFromPage = currentProject?.background_color?.substring(4, 11) || "#fffbf1";
      // const scrollingDown = window.scrollY >= lastScrollY.current;
      const pageEnd = document.body.scrollHeight - window.innerHeight;
      if (window.scrollY >= pageEnd - 100) {
        document.body.style.backgroundColor = backgroundColorFromFooter;
      } else {
        document.body.style.backgroundColor = backgroundColorFromPage;
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerBgColor]);

  return (
    <div
      style={{ fontFamily: "IBM Plex Mono" }}
      className={`flex flex-row w-full py-6 ${footerBgColor} justify-center items-center gap-4 ${footerTextColor} font-light md:text-[1vw]`}
    >
      <a
        href={Pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        RESUME
      </a>
      <p>|</p>
      <a href="mailto:berry8053@gmail.com" className="hover:underline">
        MAIL
      </a>
      <p>|</p>
      <a
        href="https://www.linkedin.com/in/corn-design/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        LINKEDIN
      </a>
    </div>
  );
}
