import { projects, type Project } from "../../projectsDatabase";
import "./projectWithSlider.scss";
import "../../variables.scss";
import { useState } from "react";

export default function ProjectWithSlider({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function slider(direction: number, index: number) {
    if (direction === 1) {
      if (currentIndex >= projects[index].projectIMG.length - 1) {
        setCurrentIndex(0);
        //setCurrentDootIndex(0);
      } else {
        setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
        //setCurrentDootIndex((prevCurrentDootIndex) => prevCurrentDootIndex + 1);
      }
    } else {
      if (currentIndex <= 0) {
        setCurrentIndex(projects[index].projectIMG.length - 1);
        //setCurrentDootIndex(projects[index].projectIMG.length - 1);
      } else {
        setCurrentIndex((prevCurrentIndex) => prevCurrentIndex - 1);
        //setCurrentDootIndex((prevCurrentDootIndex) => prevCurrentDootIndex - 1);
      }
    }
  }

  return (
    <div className="slider-project">
      <div className="slider-project__slider-main-div">
        <div className="slider-project__slider-and-button">
          <button
            onClick={() => {
              slider(-1, project.index);
            }}
            className="slider-project__left-button button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="slider-project__left-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="slider-project__slider">
            {project.projectIMG.map((img, index) => (
              <img
                src={img.img}
                className={`slider-project__img ${currentIndex === index ? "active-img" : ""}`}
                alt=""
              />
            ))}
          </div>

          <button
            onClick={() => {
              slider(1, project.index);
            }}
            className="slider-project__right-button button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="slider-project__right-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="slider-project__doots">
          {project.projectIMG.map((index) => (
            <span
              className={`slider-project__doot ${currentIndex === index.index ? "active-doot" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      <p className="slider-project__title">{project.title}</p>
      <div className="slider-project__technologies">
        {project.technologies.map((technology) => (
          <span className="slider-project__technology">{technology}</span>
        ))}
      </div>
      <p className="slider-project__description">{project.description}</p>
      <a
        href={project.app}
        target="blank"
        className="slider-project__link link no-link"
      >
        <button className="slider-project__app-button button primary-button">
          {project.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="slider-project__arrow-right-icon"
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
