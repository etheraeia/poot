// Home.jsx
import { HeroSection } from "../components/HeroSection";
import { CurrentProject } from "../components/CurrentProject";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/ProjectContent";
import { useEffect } from "react";

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
        arrowSrc="arrow.png"
      />

      <div className="flex flex-col bg-[#fffbf1] px-2.5 pb-[120px]">
        <CurrentProject
          title="The Greenback Club"
          description="A Denver-based startup reducing the environmental impact of the cannabis industry with a consumer-first rewards platform."
          image="Homepage-recycler.png"
        />

        <div className="flex flex-col gap-1">
          {projects.map((p) => (
            <ProjectCard {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}