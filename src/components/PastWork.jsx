import { ProjectCard } from "./ProjectCard";
import { projects } from "../content/ProjectContent";

export default function PastWork() {
  return (
    <div className="flex flex-col gap-1 py-2.5">
        {projects.map((p) => (
            <ProjectCard {...p} />
        ))}
    </div>
    );
}