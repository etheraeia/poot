import { useEffect } from "react";
import { projects } from "../content/ProjectContent";
import { TransitionLink } from "./TransitionLink";
import { Footer } from "./Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function ImageHalfNHalf({ left_image, right_image }) {
  return (
    <div className="flex   overflow-hidden justify-start items-start self-stretch relative gap-6">
      <div className="w-1/2">
        <Zoom>
          <img
            src={left_image}
            alt="Left"
            className="flex-grow object-cover rounded-md"
          />
        </Zoom>
      </div>
      <div className="w-1/2">
        <Zoom>
          <img
            src={right_image}
            alt="Right"
            className="flex-grow object-cover rounded-md"
          />
        </Zoom>
      </div>
    </div>
  );
}

function ImageThirds({ left_image, right_image }) {
  return (
    <div className="flex   overflow-hidden justify-start items-stretch self-stretch relative gap-6">
      <div className="w-1/3">
        <Zoom>
          <img
            src={left_image}
            alt="Left"
            className="flex-grow object-cover rounded-md"
          />
        </Zoom>
      </div>
      <div className="w-2/3">
        <Zoom>
          <img
            src={right_image}
            alt="Right"
            className="flex-grow object-cover rounded-md"
          />
        </Zoom>
      </div>
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
          className={`tracking-tighter text-lg md:text-[1.1vw] font-light ${alignment} ${body_text_color}`}
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
      className={`flex flex-col   h-[100%] justify-start items-center self-stretch relative`}
    >
      <ScrollToTopButton />
      {/* SLIDE 1: Hero Image, Intro Text, Blurb */}
      <img
        src={hero_image}
        alt="Hero"
        className=" flex-grow-0 flex-shrink-0 object-cover h-4/5 self-stretch"
      />
      <div
        className={`flex flex-col w-[100vw] py-6 px-[10vw] md:px-[20vw] ${background_color} gap-6 justify-end items-end self-stretch relative`}
      >
        <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className={`  text-6xl md:text-[4vw] font-thin text-left self-stretch ${intro_text_color}`}
        >
          {intro_text}
        </p>
        <div
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex flex-row w-full py-6 gap-6 items-stretch relative text-lg md:text-[1.1vw] font-light tracking-tighter text-left ${body_text_color} items-stretch`}
        >
          <p
            className={`w-3/5`}
          >
            {blurb}
          </p>
          <div className={`w-0.5 h-full ${drop_bg_color}`} />
          <div
            className={`flex flex-col w-2/5 gap-1 self-stretch relative tracking-tighter text-left items-stretch`}
          >
            <p> {project_company} </p>
            <p> {project_role} </p>
            <p> {project_timeline} </p>
            <p> {project_contributions} </p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col w-[100vw] py-6 px-[10vw] md:px-[20vw] ${background_color} gap-2 justify-end items-stretch self-stretch relative`}
      >
        {/* SLIDE 2: Glamour */}
        {page_layout === "wide" && (
          <Zoom>
            <img
              src={wide_image}
              className="object-cover rounded-md w-full"
            />
          </Zoom>
        )}
        {page_layout === "halfnhalf" && (
          <ImageHalfNHalf left_image={left_image} right_image={right_image} />
        )}
        {page_layout === "thirds" && (
          <ImageThirds left_image={left_image} right_image={right_image} />
        )}
        <p
          style={{ fontFamily: "IBM Plex Mono, sans-serif" }}
          className={`text-sm md:text-[0.9vw] font-light tracking-tighter text-center ${body_text_color} self-stretch`}
        >
          {caption}
        </p>
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow pt-3 text-lg md:text-[1.1vw] font-light tracking-tighter text-left ${body_text_color} self-stretch`}
        >
          {elaboration}
        </p>
      </div>
      <div
        className={`flex flex-col w-[100vw] overflow-x-visible py-6 px-[10vw] md:px-[20vw] ${background_color} gap-6 justify-end items-end self-stretch relative`}
      >
        {/* SLIDE 3 */}
        {page_type === "project overview" && (
          <ImageHalfNHalf left_image={process_left_image} right_image={process_right_image} />
        )}
        {page_type === "case study" && (
          <div className="flex flex-col overflow-x-visible justify-start items-start self-stretch relative gap-6">
            <div className={`h-0.5 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`  text-3xl md:text-[2vw] font-thin text-left self-stretch ${intro_text_color}`}
              >
                The Problem
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg md:text-[1.1vw] font-light tracking-tighter text-left self-stretch ${body_text_color}`}
              >
                {problem_text}
              </p>
            </div>
            <div className={`h-0.5 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`  text-3xl md:text-[2vw] font-thin text-left self-stretch ${intro_text_color}`}
              >
                The Exploration
              </p>
              <div className="flex flex-row overflow-hidden justify-start items-start self-stretch relative gap-6">
                <p
                  style={{ fontFamily: "epilogue, sans-serif" }}
                  className={`w-1/2 text-lg md:text-[1.1vw] font-light tracking-tighter text-left self-stretch ${body_text_color}`}
                >
                  {research_text_1}
                </p>
                <div className="w-1/2">
                  <Zoom>
                    <img
                      src={research_image_1}
                      className="flex-grow object-cover rounded-md"
                    />
                  </Zoom>
                </div>
              </div>
              {research_text_2 && (
                <div className="flex flex-row overflow-hidden justify-start items-start self-stretch relative gap-6">
                  <div className="w-1/2">
                    <Zoom>
                      <img
                        src={research_image_2}
                        className="flex-grow object-cover rounded-md"
                      />
                    </Zoom>
                  </div>
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-1/2 text-lg md:text-[1.1vw] font-light tracking-tighter text-left self-stretch ${body_text_color}`}
                  >
                    {research_text_2}
                  </p>
                </div>
              )}
              {research_text_3 && (
                <div className="flex flex-row overflow-hidden justify-start items-start self-stretch relative gap-6">
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-1/2 text-lg md:text-[1.1vw] font-light tracking-tighter text-left self-stretch ${body_text_color}`}
                  >
                    {research_text_3}
                  </p>
                  <div className="w-1/2">
                    <Zoom>
                      <img
                        src={research_image_3}
                        className="flex-grow object-cover rounded-md"
                      />
                    </Zoom>
                  </div>
                </div>
              )}
            </div>
            <div className={`h-0.5 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-stretch self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`  text-3xl md:text-[2vw] font-thin text-left ${intro_text_color}`}
              >
                The Design
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`w-full text-lg md:text-[1.1vw] font-light tracking-tighter text-left ${body_text_color}`}
              >
                {iteration_text_1}
              </p>
              <Zoom>
                <img
                  src={process_image_1}
                  className="object-cover w-full rounded-md"
                />
              </Zoom>
              {iteration_text_2 && (
                <div className="flex flex-col overflow-hidden justify-start items-stretch relative gap-6">
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-full text-lg md:text-[1.1vw] font-light tracking-tighter text-left ${body_text_color}`}
                  >
                    {iteration_text_2}
                  </p>
                  <Zoom>
                    <img
                      src={process_image_2}
                      className="object-cover w-full rounded-md"
                    />
                  </Zoom>
                </div>
              )}
              {iteration_text_3 && (
                <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`w-full text-lg md:text-[1.1vw] font-light tracking-tighter text-left self-stretch ${body_text_color}`}
                  >
                    {iteration_text_3}
                  </p>
                </div>
              )}
              <ImageHalfNHalf left_image={process_left_image} right_image={process_right_image} />
            </div>
            <div className={`h-0.5 w-full ${drop_bg_color}`} />
            <div className="flex flex-col justify-start overflow-x-visible items-start self-stretch relative gap-4">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`  text-3xl md:text-[2vw] font-thin text-left self-stretch ${intro_text_color}`}
              >
                The Outcome
              </p>
              {figma_prototype && (
                <div className="flex flex-col justify-start overflow-x-visible items-start self-stretch relative gap-2">
                  {url_name === "/adtalk" &&
                    <div className="flex items-center overflow-hidden h-[53vw] md:h-[40vw] self-center">
                      <iframe className="pt-17 w-[calc(100px+80vw)] md:w-[calc(100px+60vw)] h-[102vh]" src={figma_prototype} allowfullscreen></iframe>
                    </div>
                  }
                  {url_name === "/cradlelist" &&
                    <div className="flex items-center overflow-hidden h-[46vw] md:h-[34vw] self-center">
                      <iframe className="pt-17 w-[calc(100px+80vw)] md:w-[calc(100px+60vw)] h-[100vh]" src={figma_prototype} allowfullscreen></iframe>
                    </div>
                  }
                  {url_name === "/facebook-homepage-customization" &&
                    <div className="flex items-center overflow-hidden h-[78vh] self-center">
                      <iframe className="pt-17 w-[calc(100px+100vw-(200vw/9))] md:w-[calc(100px+100vw-(200vw/4.5))] h-[100vh]" src={figma_prototype} allowfullscreen></iframe>
                    </div>
                  }
                  <p
                    style={{ fontFamily: "IBM Plex Mono, sans-serif" }}
                    className={`text-sm md:text-[0.9vw]  font-light tracking-tighter text-center self-stretch ${body_text_color}`}
                  >
                    Interact with the Figma prototype!
                  </p>
                </div>
              )}
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg md:text-[1.1vw] font-light tracking-tighter text-left self-stretch ${body_text_color}`}
              >
                {reflections_text}
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg md:text-[1.1vw] font-light tracking-tighter text-left self-stretch ${body_text_color}`}
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
