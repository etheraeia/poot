// Home.jsx
import { HeroSection } from "../components/HeroSection";
import { CurrentProject } from "../components/CurrentProject";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/ProjectContent";
import { useEffect, useState, useRef } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }

export default function Home() {
  useEffect(() => {
    document.body.className = "bg-[#fffbf1]";
  }, []);
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);
    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);
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
        <div className="flex bg-[#1029b4] h-[125vh] items-center justify-center">
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
        className={`transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"} flex flex-col py-20 px-2.5 gap-4`}>
          <p
            style={{ fontFamily: "ivypresto-display, serif" }}
            className={`text-7xl md:text-[5vw] font-thin text-left self-stretch text-[#1029b4]`}
          >
            Past Work
          </p>
          <div className="h-0.5 w-full bg-[#19255C]" />
          <div className="flex flex-col gap-1 py-2.5">
            {projects.map((p) => (
              <ProjectCard {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
