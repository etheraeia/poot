// Home.jsx
import { HeroSection } from "../components/HeroSection";
import { CurrentProject } from "../components/CurrentProject";
import PastWorkList from "../components/PastWorkList";
import PastWork from "../components/PastWork";
import { useEffect, useState, useRef } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

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

export default function Home() {
  const [pastWorkLayout, setPastWorkLayout] = useState("default");

  useEffect(() => {
    document.body.className = "bg-[#fffbf1]";
  }, []);
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);
  return (
    <div className="scroll-container">
      <div
        ref={ref1}
        className={`transition-opacity ease-in delay-150 duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
      >
        <HeroSection
          firstName="Corrine"
          lastName="Wang"
          tagline="is two cats in a trenchcoat designing humanity a systematic, fish-eating future."
          arrowSrc="arrow_curve_R.png"
        />
      </div>
      <ScrollToTopButton />
      <div className="flex flex-col items-center">
        <div className="hidden w-full md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="138.949"
            height="69.474"
            viewBox="0 0 138.949 69.474"
            className="w-full absolute bottom-10"
          >
            <path
              d="M0,69.474C27.79,69.474,69.474,27.79,69.474,0c0,27.79,41.685,69.474,69.474,69.474H0Z"
              className="fill-[#1029b4]"
            />
          </svg>
          <div className={`h-10 w-full bg-[#1029b4] absolute bottom-0`} />
        </div>
        <div className="flex h-[110vh] bg-[#1029b4] items-center justify-center md:h-[125vh]">
          <div
            ref={ref2}
            className={`transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}
          >
            <CurrentProject
              title="Medtech Company Design System (Confidential)"
              description="Collecting, auditing, and polishings interface components and patterns to create a design system. This design system ensures visual cohesion within operating room products and reduces workflow friction for designers, devs, and doctors alike."
              image="medtech.JPG"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="138.949"
            height="69.474"
            viewBox="0 0 138.949 69.474"
            className="hidden rotate-180 md:block"
          >
            <path
              d="M0,69.474C27.79,69.474,69.474,27.79,69.474,0c0,27.79,41.685,69.474,69.474,69.474H0Z"
              className="fill-[#1029b4]"
            />
          </svg>
        </div>
        <div
          ref={ref3}
          className={`flex flex-col w-full py-20 bg-[#fffbf1] transition-opacity ease-in duration-1000 gap-8 md:gap-0 ${isVisible3 ? "opacity-100" : "opacity-0"}`}
        >
          <div>
            <div className="flex flex-row px-2.5 justify-between items-end">
              <p
                style={{ fontFamily: "ivypresto-display, serif" }}
                className={`text-7xl font-thin text-left text-[#1029b4] self-stretch md:text-[8dvw]`}
              >
                Past Work
              </p>
              <div className="flex flex-row gap-2.5 mb-2">
                <button
                  aria-label="Card view"
                  onClick={() => setPastWorkLayout("default")}
                  className={`hidden h-[8vh] w-[10vh] pt-[1.1vh] pb-[1.5vh] px-[2vh]  rounded-full cursor-pointer md:block ${pastWorkLayout === "list" ? "" : "bg-[#1029b4]"}`}
                >
                  <img
                    src={`${pastWorkLayout === "list" ? "Icon_card_b.png" : "Icon_card_w.png"}`}
                    alt="toggle card view"
                    className="object-cover w-full rounded-sm"
                  />
                </button>
                <button
                  aria-label="List view"
                  onClick={() => setPastWorkLayout("list")}
                  className={`hidden h-[8vh] w-[10vh] pt-[1.1vh] pb-[1.5vh] px-[2vh] rounded-full cursor-pointer md:block ${pastWorkLayout === "default" ? "" : "bg-[#1029b4]"}`}
                >
                  <img
                    src={`${pastWorkLayout === "default" ? "Icon_list_b.png" : "Icon_list_w.png"}`}
                    alt="toggle list view"
                    className="object-cover w-full rounded-sm"
                  />
                </button>
              </div>
            </div>
            <div className="h-0.5 w-full bg-[#1029b4]" />
          </div>
          <section
            ref={ref4}
            className={`transition-opacity ease-in duration-500 ${isVisible4 ? "opacity-100" : "opacity-0"} ${pastWorkLayout === "default" ? "hidden md:block" : "hidden"}`}
          >
            <PastWork />
          </section>
          <section
            ref={ref5}
            className={`transition-opacity ease-in duration-500 ${isVisible5 ? "opacity-100" : "opacity-0"} ${pastWorkLayout === "default" ? "block md:hidden" : "block"}`}
          >
            <PastWorkList />
          </section>
        </div>
      </div>
    </div>
  );
}
