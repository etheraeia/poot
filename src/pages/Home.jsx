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
  return (
    <div className="scroll-container">
      <HeroSection
        firstName="Corrine"
        lastName="Wang"
        tagline="is two cats in a trenchcoat designing humanity a whiskered, fish-eating future."
        arrowSrc="arrow_curve_R.png"
      />
      <ScrollToTopButton />
      <div className="flex flex-col">
        <div className="flex h-[110vh] md:h-[125vh] bg-[#1029b4] items-center justify-center">
          <div
            ref={ref1}
            className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
          >
            <CurrentProject
              title="Austin Parks and Recreation Signage"
              description="Collaborating with Austin Parks and Recreation to redefine sustainability storytelling in Austin parks at wkrm, a student-run, faculty-led design studio."
              image="wkrm.JPG"
            />
          </div>
        </div>
        <div
          ref={ref2}
          className={`flex flex-col py-20 transition-opacity ease-in duration-1000 gap-8 md:gap-0 ${isVisible2 ? "opacity-100" : "opacity-0"}`}
        >
          <div>
          <div className="flex flex-row justify-between items-center">
            <p
              style={{ fontFamily: "ivypresto-display, serif" }}
              className={`text-7xl font-thin text-left text-[#1029b4] self-stretch px-2.5 md:text-[8dvw]`}
            >
              Past Work
            </p>
            <div className="flex flex-row gap-2.5">
              <button
                aria-label="Card view"
                onClick={() => setPastWorkLayout("default")}
                className={`hidden h-[6vh] w-[8vh] pt-[1.1vh] p-[1.5vh] rounded-full cursor-pointer md:block ${pastWorkLayout === "list" ? "" : "bg-[#1029b4]"}`}
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
                className={`hidden h-[6vh] w-[8vh] pt-[1.1vh] p-[1.5vh] rounded-full cursor-pointer md:block ${pastWorkLayout === "default" ? "" : "bg-[#1029b4]"}`}
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
            ref={ref3}
            className={`transition-opacity ease-in duration-500 ${isVisible3 ? "opacity-100" : "opacity-0"} ${pastWorkLayout === "default" ? "hidden md:block" : "hidden"}`}
          >
            <PastWork />
          </section>
          <section
            ref={ref4}
            className={`transition-opacity ease-in duration-500 ${isVisible4 ? "opacity-100" : "opacity-0"} ${pastWorkLayout === "default" ? "block md:hidden" : "block"}`}
          >
            <PastWorkList />
          </section>
        </div>
      </div>
    </div>
  );
}
