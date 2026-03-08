import { useEffect, useState, useRef } from "react";
import { projects } from "../content/ProjectContent";
import { TransitionLink } from "./TransitionLink";
import { Footer } from "./Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ImageHalfNHalf({ left_image, right_image }) {
  return (
    <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6 md:flex-row">
      <div className="md:w-1/2">
        <Zoom>
          <img
            src={left_image}
            alt="Left"
            className="flex-grow object-cover rounded-md"
          />
        </Zoom>
      </div>
      <div className="md:w-1/2">
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
    <div className="flex flex-col overflow-hidden justify-start items-stretch self-stretch relative gap-6 md:flex-row">
      <div className="md:w-1/3">
        <Zoom>
          <img
            src={left_image}
            alt="Left"
            className="flex-grow object-cover rounded-md"
          />
        </Zoom>
      </div>
      <div className="md:w-2/3">
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
  const alignment = type === "Previous" ? "text-left self-start" : "text-right self-end";
  const flexDirection =
    type === "Previous" ? "md:flex-row" : "md:flex-row-reverse";
  return (
    <TransitionLink
      to={project.url_name}
      direction={type === "Previous" ? "left" : "right"}
      className={`flex flex-col ${flexDirection} gap-2`}
    >
      <img
        src={project.hero_image}
        alt={`${type} Project Hero`}
        className={`object-cover w-32 rounded-sm ${alignment}`}
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
          className={`tracking-tighter text-lg font-light ${alignment} md:text-[1.1vw] ${body_text_color}`}
        >
          {project.title}
        </p>
      </div>
    </TransitionLink>
  );
}

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
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
  // var background_hex = background_color.substring(4, 11);
  // useEffect(() => {
  //   // 1. Update the meta theme-color (controls the top overscroll/address bar)
  //   let metaThemeColor = document.querySelector('meta[name="theme-color"]');

  //   // Create it if it doesn't exist in your index.html
  //   if (!metaThemeColor) {
  //     metaThemeColor = document.createElement('meta');
  //     metaThemeColor.name = "theme-color";
  //     document.head.appendChild(metaThemeColor);
  //   }

  //   const previousThemeColor = metaThemeColor.getAttribute('content');
  //   metaThemeColor.setAttribute('content', background_hex);

  //   // 2. Update the body background (controls the bottom/general overscroll)
  //   const previousBodyColor = document.body.style.backgroundColor;
  //   document.body.style.backgroundColor = background_hex;

  //   // Cleanup: Revert colors when leaving the page
  //   return () => {
  //     if (previousThemeColor) {
  //       metaThemeColor.setAttribute('content', previousThemeColor);
  //     }
  //     document.body.style.backgroundColor = previousBodyColor;
  //   };
  // }, [background_hex]);
  // useEffect(() => {
  // document.body.className = background_color;
  // document.head.querySelector('meta[name="theme-color"]').setAttribute("content", background_color.substring(4, 11));
  // }, [background_color]);
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
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div
      className={`flex flex-col h-[100%] justify-start items-center self-stretch relative`}
    >
      <ScrollToTopButton />
      {/* SLIDE 1: Hero Image, Intro Text, Blurb */}
      <img
        src={hero_image}
        alt="Hero"
        className="flex-grow-0 flex-shrink-0 object-cover h-4/5 self-stretch"
      />
      <div
        className={`flex flex-col w-[100vw] py-6 px-[10vw] ${background_color} gap-6 justify-end items-end self-stretch md:px-[20vw]`}
      >
        <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className={`text-6xl font-thin text-left self-stretch ${intro_text_color} md:text-[4vw]`}
        >
          {intro_text}
        </p>
        <div
          ref={ref1}
          className={`flex flex-col gap-6 justify-end items-end self-stretch transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
        >
          <div
            style={{ fontFamily: "epilogue, sans-serif" }}
            className={`flex flex-col w-full py-6 text-lg font-light tracking-tighter text-left gap-6 items-stretch relative ${body_text_color} items-stretch md:flex-row md:text-[1.1vw]`}
          >
            <p className={`md:w-3/5`}>{blurb}</p>
            <div className={`hidden w-0.5 ${drop_bg_color} md:block`} />
            <div
              className={`flex flex-col tracking-tighter text-left gap-1 self-stretch relative items-stretch md:w-2/5`}
            >
              <p> {project_company} </p>
              <p> {project_role} </p>
              <p> {project_timeline} </p>
              <p> {project_contributions} </p>
            </div>
          </div>
          <div
            className={`flex flex-col w-full py-6 ${background_color} gap-2 justify-end items-stretch self-stretch relative`}
          >
            {/* SLIDE 2: Glamour */}
            {page_layout === "wide" && (
              <Zoom>
                <img
                  src={wide_image}
                  className="object-cover w-full rounded-md"
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
              className={`text-sm font-light tracking-tighter text-center ${body_text_color} self-stretch md:text-[0.9vw]`}
            >
              {caption}
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className={`flex-grow pt-3 text-lg font-light tracking-tighter text-left ${body_text_color} self-stretch md:text-[1.1vw]`}
            >
              {elaboration}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col overflow-x-visible w-[100vw] px-[10vw] ${background_color} gap-6 justify-end items-end self-stretch relative md:px-[20vw]`}
      >
        {/* SLIDE 3 */}
        {page_type === "project overview" && (
          <ImageHalfNHalf
            left_image={process_left_image}
            right_image={process_right_image}
          />
        )}
        {page_type === "case study" && (
          <div className="flex flex-col overflow-x-visible justify-start items-start self-stretch relative gap-6">
            <div className={`h-0.5 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`text-3xl font-thin text-left self-stretch ${intro_text_color} md:text-[2vw]`}
              >
                The Problem
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg font-light tracking-tighter text-left self-stretch ${body_text_color} md:text-[1.1vw]`}
              >
                {problem_text}
              </p>
            </div>
            <div className={`h-0.5 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-hidden justify-start items-start self-stretch relative gap-6">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`text-3xl font-thin text-left self-stretch ${intro_text_color} md:text-[2vw]`}
              >
                The Exploration
              </p>
              <div className="flex flex-wrap gap-6">
                <p
                  style={{ fontFamily: "epilogue, sans-serif" }}
                  className={`flex-1 min-w-[300px] text-lg md:text-[1.1vw] font-light tracking-tighter text-left ${body_text_color}`}
                >
                  {research_text_1}
                </p>
                <div className="flex-1 min-w-[300px]">
                  <Zoom>
                    <img
                      src={research_image_1}
                      className="rounded-md"
                    />
                  </Zoom>
                </div>
              </div>
              {research_text_2 && (
                <div className="flex flex-wrap-reverse gap-6">
                  <div className="flex-1 min-w-[300px]">
                    <Zoom>
                      <img
                        src={research_image_2}
                        className="rounded-md"
                      />
                    </Zoom>
                  </div>
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`flex-1 min-w-[300px] text-lg font-light tracking-tighter text-left self-stretch ${body_text_color} md:text-[1.1vw]`}
                  >
                    {research_text_2}
                  </p>
                </div>
              )}
              {research_text_3 && (
                <div className="flex flex-wrap gap-6">
                  <p
                    style={{ fontFamily: "epilogue, sans-serif" }}
                    className={`flex-1 min-w-[300px] text-lg font-light tracking-tighter text-left self-stretch ${body_text_color} md:text-[1.1vw]`}
                  >
                    {research_text_3}
                  </p>
                  <div className="flex-1 min-w-[300px]">
                    <Zoom>
                      <img
                        src={research_image_3}
                        className="rounded-md"
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
                className={`text-3xl font-thin text-left ${intro_text_color} md:text-[2vw]`}
              >
                The Design
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`w-full text-lg font-light tracking-tighter text-left ${body_text_color} md:text-[1.1vw]`}
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
                    className={`w-full text-lg font-light tracking-tighter text-left ${body_text_color} md:text-[1.1vw]`}
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
                    className={`w-full text-lg font-light tracking-tighter text-left self-stretch ${body_text_color} md:text-[1.1vw]`}
                  >
                    {iteration_text_3}
                  </p>
                </div>
              )}
              <ImageHalfNHalf
                left_image={process_left_image}
                right_image={process_right_image}
              />
            </div>
            <div className={`h-0.5 w-full ${drop_bg_color}`} />
            <div className="flex flex-col overflow-x-visible justify-start items-start self-stretch relative gap-4">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`text-3xl font-thin text-left self-stretch ${intro_text_color} md:text-[2vw]`}
              >
                The Outcome
              </p>
              {figma_prototype && (
                <div className="flex flex-col overflow-x-visible justify-start items-start self-stretch relative gap-2">
                  {window.innerWidth > 720 && url_name === "/adtalk" && (
                    <div className="hidden overflow-hidden h-[53vw] items-center self-center md:flex md:h-[40vw]">
                      <iframe
                        src={figma_prototype}
                        allowfullscreen
                        className="w-[calc(100px+80vw)] h-[102vh] pt-17 md:w-[calc(100px+60vw)]"
                      ></iframe>
                    </div>
                  )}
                  {window.innerWidth > 720 && url_name === "/cradlelist" && (
                    <div className="hidden overflow-hidden h-[46vw] items-center self-center md:flex md:h-[34vw]">
                      <iframe
                        src={figma_prototype}
                        allowfullscreen
                        className="w-[calc(100px+80vw)] h-[100vh] pt-17 md:w-[calc(100px+60vw)]"
                      ></iframe>
                    </div>
                  )}
                  {window.innerWidth > 720 && url_name === "/facebook-homepage-customization" && (
                    <div className="hidden overflow-hidden h-[78vh] items-center self-center md:flex">
                      <iframe
                        src={figma_prototype}
                        allowfullscreen
                        className="w-[calc(100px+100vw-(200vw/9))] h-[100vh] pt-17 md:w-[calc(100px+100vw-(200vw/4.5))]"
                      ></iframe>
                    </div>
                  )}
                  <p
                    style={{ fontFamily: "IBM Plex Mono, sans-serif" }}
                    className={`hidden text-sm font-light tracking-tighter text-center self-stretch ${body_text_color} md:block md:text-[0.9vw]`}
                  >
                    Interact with the Figma prototype!
                  </p>
                  <a
                    href={figma_prototype}
                    style={{ fontFamily: "IBM Plex Mono, sans-serif" }}
                    className={`text-lg font-light tracking-tighter text-left underline self-stretch ${body_text_color} md:text-[1.1vw]`}
                  >
                    Check out the interactive prototype on Figma!
                  </a>
                </div>
              )}
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg font-light tracking-tighter text-left self-stretch ${body_text_color} md:text-[1.1vw]`}
              >
                {reflections_text}
              </p>
              <p
                style={{ fontFamily: "epilogue, sans-serif" }}
                className={`text-lg font-light tracking-tighter text-left self-stretch ${body_text_color} md:text-[1.1vw]`}
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
