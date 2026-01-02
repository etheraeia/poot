import { useEffect } from "react";
import { projects } from "../content/ProjectContent";
import { TransitionLink } from "./TransitionLink";
import { Footer } from "./Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

function ImageHalfNHalf({ left_image, right_image }) {
  return (
    <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-6">
      <img
        src={left_image}
        alt="Left"
        className="flex-grow object-cover w-1/2 rounded-md"
      />
      <img
        src={right_image}
        alt="Right"
        className="flex-grow object-cover w-1/2 rounded-md"
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
        className="flex-grow object-cover w-1/3 rounded-md"
      />
      <img
        src={right_image}
        alt="Right"
        className="flex-grow object-cover w-2/3 rounded-md"
      />
    </div>
  );
}

function ProjectNavigationCard({ project, body_text_color, type }) {
  const alignment = type === "Previous" ? "text-left" : "text-right";
  const flexDirection = type === "Previous" ? "flex-row" : "flex-row-reverse";
  return (
    <TransitionLink
      to={project.url_name}
      direction={type === "Previous" ? "left" : "right"}
      className={`flex ${flexDirection} gap-2`}
    >
      <img
        src={project.hero_image}
        alt={`${type} Project Hero`}
        className="object-cover w-32 rounded-sm"
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
          className={`tracking-tighter text-lg font-light ${alignment} ${body_text_color}`}
        >
          {project.title}
        </p>
      </div>
    </TransitionLink>
  );
}

export function ProjectPage({
  index,
  page_type,
  url_name,
  intro_text,
  blurb,
  project_company,
  project_role,
  project_timeline,
  project_contributions,
  hero_image,
  wide_image,
  left_image,
  right_image,
  page_layout,
  intro_text_color,
  body_text_color,
  background_color,
  drop_bg_color,
  caption,
  elaboration,
  process_left_image,
  process_right_image,
  problem_text,
  research_text_1,
  research_text_2,
  research_text_3,
  iteration_text_1,
  iteration_text_2,
  iteration_text_3,
  results_text,
  reflections_text,
  research_image_1,
  research_image_2,
  research_image_3,
  process_image_1,
  process_image_2,
  figma_prototype,
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
  const homeProjectPrev = {
    url_name: "/",
    hero_image: "fish_arrow_L.png",
    title: "Home",
    index: "",
  };
  const homeProjectNext = {
    url_name: "/",
    hero_image: "fish_arrow_R.png",
    title: "Home",
    index: "",
  };
  return (
    <div
      className={`flex flex-col flex-grow-0 flex-shrink-0 h-[100%] justify-start items-center self-stretch relative`}
    >
      <ScrollToTopButton />
      {/* SLIDE 1: Hero Image, Intro Text, Blurb */}
      <img
        src={hero_image}
        alt="Hero"
        className="flex-grow-0 flex-shrink-0 object-cover h-2/3 self-stretch"
      />
      <div
        className={`flex flex-grow-0 flex-shrink-0 flex-col w-[100vw] py-6 px-[calc(100vw/9)] xl:px-[calc(100vw/4.5)] ${background_color} gap-6 justify-end items-end self-stretch relative`}
      >
        <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className={`flex-grow-0 flex-shrink-0 text-7xl font-thin text-left self-stretch ${intro_text_color}`}
        >
          {intro_text}
        </p>
        <div
          className={`flex flex-grow-0 flex-shrink-0 flex-row w-full py-6 gap-6 items-end self-stretch relative`}
        >
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className={`w-3/5 text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
          >
            {blurb}
          </p>
          <div className={`w-0.25 h-full ${drop_bg_color}`} />
          <div
            className={`flex flex-grow-0 flex-shrink-0 flex-col w-2/5 gap-1 items-end self-stretch relative`}
          >
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className={`text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
            >
              {project_company}
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className={`text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
            >
              {project_role}
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className={`text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
            >
              {project_timeline}
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className={`text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
            >
              {project_contributions}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] py-6 px-[calc(100vw/9)] xl:px-[calc(100vw/4.5)] ${background_color} gap-2 justify-end items-end self-stretch relative`}
      >
        {/* SLIDE 2: Glamour */}
        {page_layout === "wide" && (
          <img
            src={wide_image}
            className="flex-grow-0 flex-shrink-0 object-cover w-[100%] h-[calc(100vh/] rounded-md self-stretch"
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
          className={`flex-grow-0 flex-shrink-0 text-sm font-light tracking-tighter leading-normal text-center ${body_text_color} self-stretch`}
        >
          {caption}
        </p>
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow pt-3 text-lg font-light tracking-tighter leading-normal text-left ${body_text_color} self-stretch`}
        >
          {elaboration}
        </p>
      </div>
      <div
        className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] overflow-x-visible py-6 px-[calc(100vw/9)] xl:px-[calc(100vw/4.5)] ${background_color} gap-6 justify-end items-end self-stretch relative`}
      >
        {/* SLIDE 3 */}
        {page_type === "project overview" && (
          <div className="flex overflow-hidden justify-start items-start self-stretch relative gap-6">
            <img
              src={process_left_image}
              alt="Left"
              className="flex-grow object-cover w-1/2 rounded-md"
            />
            <img
              src={process_right_image}
              alt="Right"
              className="flex-grow object-cover w-1/2 rounded-md"
            />
          </div>
        )}
        {page_type === "case study" && (
          <div className="flex flex-col overflow-x-visible justify-start items-start self-stretch relative gap-6">
            <div className={`h-0.25 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`flex-grow-0 flex-shrink-0 text-3xl font-thin text-left self-stretch ${intro_text_color}`}
              >
                The Problem
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
              >
                {problem_text}
              </p>
            </div>
            <div className={`h-0.25 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`flex-grow-0 flex-shrink-0 text-3xl font-thin text-left self-stretch ${intro_text_color}`}
              >
                The Exploration
              </p>
              <div className="flex flex-row overflow-hidden justify-start items-start self-stretch relative gap-6">
                <p
                  style={{ fontFamily: "epilogue, sans-serif" }}
                  className={`w-1/2 text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
                >
                  {research_text_1}
                </p>
                <img
                  src={research_image_1}
                  className="flex-grow object-cover w-1/2 rounded-md"
                />
              </div>
              {research_text_2 && (
                <div className="flex flex-row overflow-hidden justify-start items-start self-stretch relative gap-6">
                  <img
                    src={research_image_2}
                    className="flex-grow object-cover w-1/2 rounded-md"
                  />
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-1/2 text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
                  >
                    {research_text_2}
                  </p>
                </div>
              )}
              {research_text_3 && (
                <div className="flex flex-row overflow-hidden justify-start items-start self-stretch relative gap-6">
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-1/2 text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
                  >
                    {research_text_3}
                  </p>
                  <img
                    src={research_image_3}
                    className="flex-grow object-cover w-1/2 rounded-md"
                  />
                </div>
              )}
            </div>
            <div className={`h-0.25 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`flex-grow-0 flex-shrink-0 text-3xl font-thin text-left self-stretch ${intro_text_color}`}
              >
                The Design
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`w-full text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
              >
                {iteration_text_1}
              </p>
              <img
                src={process_image_1}
                className="flex-grow object-cover w-full rounded-md"
              />
              {iteration_text_2 && (
                <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-full text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
                  >
                    {iteration_text_2}
                  </p>
                  <img
                    src={process_image_2}
                    className="flex-grow object-cover w-full rounded-md"
                  />
                </div>
              )}
              {iteration_text_3 && (
                <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-full text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
                  >
                    {iteration_text_3}
                  </p>
                </div>
              )}
              <div className="flex flex-row overflow-hidden justify-start items-start self-stretch relative gap-6">
                <img
                  src={process_left_image}
                  className="flex-grow object-cover w-1/2 rounded-md"
                />
                <img
                  src={process_right_image}
                  className="flex-grow object-cover w-1/2 rounded-md"
                />
              </div>
            </div>
            <div className={`h-0.25 w-full ${drop_bg_color}`} />
            <div className="flex flex-col justify-start overflow-x-visible items-start self-stretch relative gap-4">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`flex-grow-0 flex-shrink-0 text-3xl font-thin text-left self-stretch ${intro_text_color}`}
              >
                The Outcome
              </p>
              {figma_prototype && (
                <div className="flex flex-col justify-start overflow-x-visible items-start self-stretch relative gap-2">
                  {url_name === "/adtalk" &&
                    <div className="flex items-center overflow-hidden h-[53vw] xl:h-[38vw] self-center">
                      <iframe className="pt-17 w-[calc(100px+100vw-(200vw/9))] xl:w-[calc(100px+100vw-(200vw/4.5))] h-[102vh]" src={figma_prototype} allowfullscreen></iframe>
                    </div>
                  }
                  {url_name === "/cradlelist" &&
                    <div className="flex items-center overflow-hidden h-[46vw] xl:h-[32vw] self-center">
                      <iframe className="pt-17 w-[calc(100px+100vw-(200vw/9))] xl:w-[calc(100px+100vw-(200vw/4.5))] h-[100vh]" src={figma_prototype} allowfullscreen></iframe>
                    </div>
                  }
                  {url_name === "/facebook-homepage-customization" &&
                    <div className="flex items-center overflow-hidden h-[75vh] self-center">
                      <iframe className="pt-17 w-[calc(100px+100vw-(200vw/9))] xl:w-[calc(100px+100vw-(200vw/4.5))] h-[100vh]" src={figma_prototype} allowfullscreen></iframe>
                    </div>
                  }
                  <p
                    style={{ fontFamily: "IBM Plex Mono, sans-serif" }}
                    className={`text-sm font-light tracking-tighter leading-normal text-center self-stretch ${body_text_color}`}
                  >
                    Interact with the Figma prototype!
                  </p>
                </div>
              )}
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
              >
                {reflections_text}
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg font-light tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
              >
                {results_text}
              </p>
            </div>
          </div>
        )}
      </div>
      <div
        className={`flex p-12 justify-between ${background_color} self-stretch`}
      >
        {/* Footer Buttons */}
        {prevProject ? (
          <ProjectNavigationCard
            project={prevProject}
            body_text_color={body_text_color}
            type="Previous"
          />
        ) : (
          <ProjectNavigationCard
            project={homeProjectPrev}
            body_text_color={body_text_color}
            type="Previous"
          />
        )}
        {nextProject ? (
          <ProjectNavigationCard
            project={nextProject}
            body_text_color={body_text_color}
            type="Next"
          />
        ) : (
          <ProjectNavigationCard
            project={homeProjectNext}
            body_text_color={body_text_color}
            type="Next"
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
