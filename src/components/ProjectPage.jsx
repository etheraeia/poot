import { useEffect } from "react";
import { projects } from "../content/ProjectContent";
import { TransitionLink } from "./TransitionLink";

function ImageHalfNHalf({ left_image, right_image }) {
  return (
    <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-6">
      <img
        src={left_image}
        alt="Left"
        className="flex-grow object-cover w-1/2"
      />
      <img
        src={right_image}
        alt="Right"
        className="flex-grow object-cover w-1/2"
      />
    </div>
  );
}

function ImageThirds({ left_image, right_image }) {
  return (
    <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-6">
      <img
        src={left_image}
        alt="Left"
        className="flex-grow object-cover w-1/3"
      />
      <img
        src={right_image}
        alt="Right"
        className="flex-grow object-cover w-2/3"
      />
    </div>
  );
}

function ProjectNavigationCard({ project, body_text_color, type }) {
  const alignment = type === "Previous" ? "text-left" : "text-right";
  const flexDirection = type === "Previous" ? "flex-row" : "flex-row-reverse";
  return (
    <TransitionLink to={project.url_name} className={`flex ${flexDirection} gap-2`}>
      <img
        src={project.hero_image}
        alt={`${type} Project Hero`}
        className="object-cover w-32"
      />
      <div className="flex flex-col justify-end">
        <p
          style={{ fontFamily: "IBM Plex Mono" }}
          className={`tracking-tighter text-5xl font-light ${alignment} ${body_text_color}`}
        >
          {project.index}
        </p>
        <p
          style={{ fontFamily: "IBM Plex Mono" }}
          className={`tracking-tighter text-xl font-light ${alignment} ${body_text_color}`}
        >
          {project.title}
        </p>
      </div>
    </TransitionLink>
  );
}

export function ProjectPage({
  index,
  intro_text,
  blurb,
  hero_image,
  wide_image,
  left_image,
  right_image,
  page_layout,
  intro_text_color,
  body_text_color,
  background_color,
  caption,
  elaboration,
  process_left_image,
  process_right_image,
}) {
  useEffect(() => {
    document.body.className = background_color;
  }, [background_color]);
  const nextProject = projects.find(
    (p) => p.index === (parseInt(index) + 1).toString().padStart(2, "0"),
  );
  const prevProject = projects.find(
    (p) => p.index === (parseInt(index) - 1).toString().padStart(2, "0"),
  );
  const homeProject = {
    url_name: "/",
    hero_image: "arrow.png",
    title: "Home",
    index: "",
  };
  return (
    <div
      className={`flex flex-col flex-grow-0 flex-shrink-0 h-[100%] justify-start items-center self-stretch relative`}
    >
      {/* SLIDE 1: Hero Image, Intro Text, Blurb */}
      <img
        src={hero_image}
        alt="Hero"
        className="flex-grow-0 flex-shrink-0 object-cover w-[100vw] h-2/3 self-stretch"
      />
      <div
        className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] py-6 px-[calc(100vw/4.5)] ${background_color} gap-6 justify-end items-end self-stretch relative`}
      >
        <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className={`flex-grow-0 flex-shrink-0 text-7xl font-thin text-left self-stretch ${intro_text_color}`}
        >
          {intro_text}
        </p>
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow-0 flex-shrink-0 text-2xl font-extralight tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
        >
          {blurb}
        </p>
      </div>
      <div
        className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] py-6 px-[calc(100vw/4.5)] ${background_color} gap-2 justify-end items-end self-stretch relative`}
      >
        {/* SLIDE 2: Glamour */}
        <p />
        {page_layout === "wide" && (
          <img
            src={wide_image}
            className="flex-grow-0 flex-shrink-0 object-cover w-[100%] h-[calc(100vh/] self-stretch"
          />
        )}
        {page_layout === "halfnhalf" && (
          <ImageHalfNHalf left_image={left_image} right_image={right_image} />
        )}
        {page_layout === "thirds" && (
          <ImageThirds left_image={left_image} right_image={right_image} />
        )}
        <p
          style={{ fontFamily: "IBM Plex Mono, sans-serif" }}
          className={`flex-grow-0 flex-shrink-0 text-lg font-extralight tracking-tighter leading-normal text-center ${body_text_color} self-stretch`}
        >
          {caption}
        </p>
      </div>
      <div
        className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] py-6 px-[calc(100vw/4.5)] ${background_color} gap-6 justify-end items-end self-stretch relative`}
      >
        {/* SLIDE 3: Process and Justifications */}
        <div className="flex overflow-hidden justify-start items-start self-stretch relative gap-6">
          <img
            src={process_left_image}
            alt="Left"
            className="flex-grow object-cover w-1/2"
          />
          <img
            src={process_right_image}
            alt="Right"
            className="flex-grow object-cover w-1/2"
          />
        </div>
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow text-2xl font-extralight tracking-tighter leading-normal text-left ${body_text_color} self-stretch`}
        >
          {elaboration}
        </p>
      </div>
      <div
        className={`flex justify-between p-12 ${background_color} self-stretch`}
      >
        {/* Footer Buttons */}
        { prevProject ? (
          <ProjectNavigationCard project={prevProject} body_text_color={body_text_color} type="Previous" />
        ) : (
          <ProjectNavigationCard project={homeProject} body_text_color={body_text_color} type="Previous" />
        )}
        { nextProject ? (
          <ProjectNavigationCard project={nextProject} body_text_color={body_text_color} type="Next" />
        ) :
        (
          <ProjectNavigationCard project={homeProject} body_text_color={body_text_color} type="Previous" />
        )}
      </div>
    </div>
  );
}
