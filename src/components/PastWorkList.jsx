import { ProjectList } from "./ProjectList";
import { projects } from "../content/ProjectContent";

export default function PastWorkList() {
  return (
    <div className="flex flex-col px-2.5">
        {projects.map((p) => (
            <ProjectList {...p} />
        ))}
    </div>
    );
}