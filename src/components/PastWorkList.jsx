import { ProjectList } from "./ProjectList";
import { projects } from "../content/ProjectContent";

export default function PastWorkList() {
  return (
    <div className="flex flex-col gap-8 md:gap-0">
        {projects.map((p) => (
            <ProjectList {...p} />
        ))}
    </div>
    );
}