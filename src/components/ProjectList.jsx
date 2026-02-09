import { TransitionLink } from "./TransitionLink";

// ProjectCard.jsx
export function ProjectList({ index, title, subtitle, hero_image, url_name }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex py-4 md:py-8 md:px-2.5">
        <TransitionLink to={url_name} className="flex flex-col overflow-hidden md:flex-row">
          <img
            src={hero_image}
            alt={title}
            className="object-cover w-full h-auto rounded-sm md:w-64 md:h-48"
          />
          <div
            className={`flex flex-col overflow-hidden w-full pt-8 px-4 relative md:pt-16`}
          >
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className={`flex flex-col text-2xl font-light tracking-tighter text-[#19255c] md:text-[2vw]`}
            >
              <span>
                {index}: {title}
                {subtitle && " - "}
                {subtitle}
              </span>
            </p>
          </div>
        </TransitionLink>
      </div>
      <div className="h-0.5 w-full bg-[#19255C]" />
    </div>
  );
}
