import { projects } from "../content/ProjectContent";
import { useLocation } from "react-router-dom";
import Pdf from "/CW_resume.pdf";
// onResumeClick(); {
//   window.open(Pdf);
// }

export function Footer() {
  const location = useLocation();
  const currentProject = projects.find((p) => p.url_name === location.pathname);
  const footerTextColor = currentProject?.drop_text_color || "text-[#fefbf2]";
  const footerBgColor = currentProject?.drop_bg_color || "bg-[#0c2fd8]";
  // ${(location.pathname === "/") || (location.pathname === "/about") ? "text-[#ffffff]" : drop_text_color} ${(location.pathname === "/") || (location.pathname === "/about") ? "bg-[#0c2fd8]" : drop_bg_color}

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
