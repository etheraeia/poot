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
        arrowSrc="arrow_curve_R.png"
      />
      {/* <button
        className={`${window.scrollY > 1200 ? "opacity-100" : "opacity-0"} transition-all duration-200 z-999 p-6 fixed bottom-10 left-10 bg-[#1029b4] rounded-full cursor-pointer`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="arrow_straight_up.png"
          alt="Top"
          loading="lazy"
          decoding="async"
          className="block object-contain w-16 h-16"
        />
      </button> */}
      <div className="flex flex-col px-2.5 pb-[120px] bg-[#fffbf1]">
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