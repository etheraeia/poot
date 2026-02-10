import { TransitionLink } from "./TransitionLink";

// ProjectCard.jsx
export function ProjectList({ index, title, subtitle, hero_image, url_name, page_type, project_timeline }) {
  return (
    <div className="flex flex-col overflow-hidden px-4">
      <div className="flex md:py-8 md:px-8">
        <TransitionLink to={url_name} className="flex flex-col overflow-hidden md:flex-row">
          <img
            src={hero_image}
            alt={title}
            className="object-cover w-screen h-[36vh] md:h-auto rounded-sm md:w-[16vw]"
          />
          <div
            className={`flex flex-col overflow-hidden w-full py-8 px-4 relative gap-2`}
          >
            <p
              style={{ fontFamily: "IBM Plex Mono" }}
              className={`flex flex-col text-xl font-light tracking-tighter text-[#19255c] md:text-[1.2vw]`}
            >
                {index}: {title}
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className={`flex flex-col text-2xl font-light tracking-tighter text-[#19255c] md:text-[2vw]`}
            >
                {subtitle}
            </p>
            <p
                style={{ fontFamily: "IBM Plex Mono" }}
                className={`flex flex-col text-lg font-light tracking-tighter text-[#19255c] md:text-[0.8vw]`}
            >
               {page_type} · {project_timeline.split("- ").pop()}
            </p>
          </div>
        </TransitionLink>
      </div>
      <div className="h-0.5 w-full bg-[#19255C]" />
    </div>
  );
}
