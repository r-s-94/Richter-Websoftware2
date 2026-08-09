import "./webProjectsOverview.scss";
import "../../variables.scss";
import { projects } from "../../projectsDatabase";
import ProjectWithSlider from "../projectWithSlider/projectWithSlider";
import ProjectWithoutSlider from "../projectWithoutSlider/projectWithoutSlider";

export default function WebProjectsOverview() {
  return (
    <div className="web-projects-overview">
      <div className="web-projects-overview__project-overview">
        {projects.map((project) => {
          return (
            <>
              {project.imgQuantity > 1 ? (
                <ProjectWithSlider project={project} />
              ) : (
                <ProjectWithoutSlider project={project} />
              )}
            </>
          );
        })}{" "}
      </div>
    </div>
  );
}
