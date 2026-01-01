// Home.jsx
import { HeroSection } from "../components/HeroSection";
import { CurrentProject } from "../components/CurrentProject";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/ProjectContent";
import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  useEffect(() => {
    document.body.className = "bg-[#fffbf1]";
  }, []);
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
        <CurrentProject
          title="The Greenback Club"
          description="A Denver-based startup reducing the environmental impact of the cannabis industry with a consumer-first rewards platform."
          image="Homepage-recycler.png"
        />
        <div className="flex flex-col py-20 px-2.5 gap-4">
          <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className={`flex-grow-0 flex-shrink-0 text-7xl font-thin text-left self-stretch text-[#1029b4]`}
          >
            Past Work
          </p>
          <div className="h-0.5 w-full bg-[#1029b4]" />
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
