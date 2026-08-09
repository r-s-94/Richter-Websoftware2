import { type Project } from "../../projectsDatabase";
import "./projectWithoutSlider.scss";
import "../../variables.scss";

export default function ProjectWithoutSlider({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="project">
      <div className="project__img-div">
        {project.projectIMG.map((img) => (
          <img src={img.img} className="project__img" alt="" />
        ))}
      </div>
      <p className="project__title">{project.title}</p>
      <div className="project__technologies">
        {project.technologies.map((technology) => (
          <span className="project__technology">{technology}</span>
        ))}
      </div>
      <p className="project__description">{project.description}</p>
      <a
        href={project.app}
        target="blank"
        className="project__link link no-link"
      >
        <button className="project__app-button button primary-button">
          {project.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="project__arrow-right-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
