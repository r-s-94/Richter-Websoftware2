import { useState } from "react";
import "../../index.scss";
import "../../variables.scss";
import "./threedSlider.scss";
import { projectHighlights } from "../../highlightProjectsDatabase";

export default function ThreeDSlider() {
  const [sliderDeg, setSliderDeg] = useState<number>(0);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  function moveSlider(direction: number) {
    if (direction === 1) {
      setSliderDeg(
        (prevSliderDeg) => prevSliderDeg - (360 / projectHighlights.length - 1),
      );

      if (sliderIndex >= projectHighlights.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex((prevSliderIndex) => prevSliderIndex + 1);
      }
    } else {
      setSliderDeg(
        (prevSliderDeg) => prevSliderDeg + (360 / projectHighlights.length - 1),
      );

      if (sliderIndex <= 0) {
        setSliderIndex(projectHighlights.length - 1);
      } else {
        setSliderIndex((prevSliderIndex) => prevSliderIndex - 1);
      }
    }
  }

  return (
    <section id="slider" className="slider-section">
      <div className="slider-section__buttons-and-slider">
        <button
          onClick={() => {
            moveSlider(-1);
          }}
          className="slider-section__prev-button hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="slider-section__prev-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="slider-section__canvas">
          <div
            style={{ transform: `rotateY(${sliderDeg}deg)` }}
            className="slider-section__slider"
          >
            {projectHighlights.map((project, index) => {
              const currentIMG = sliderIndex === index;
              const nextIMG = sliderIndex + 1 === index;
              const prevIMG = sliderIndex - 1 === index;

              const lastIMG =
                sliderIndex + projectHighlights.length - 1 === index;
              const firstIMG =
                sliderIndex - (projectHighlights.length - 1) === index;

              return (
                <div
                  style={{
                    display: `${currentIMG || nextIMG || prevIMG || lastIMG || firstIMG ? "flex" : "none"}`,
                  }}
                  className={`slider-section__cart ${project.style} ${currentIMG ? "active-cart" : ""} ${prevIMG || nextIMG || lastIMG || firstIMG ? "prev-card next-card" : ""}`}
                >
                  <div className="slider-section__img-container">
                    <img
                      onClick={() => {}}
                      src={project.projectIMG}
                      className="slider-section__img"
                      alt=""
                    />
                  </div>

                  <p className="slider-section__cart-headline">
                    {project.title}
                  </p>

                  <div className="slider-section__project-options">
                    <a
                      href={project.app}
                      target="blank"
                      className="slider-section__link no-link"
                    >
                      <button
                        className={`slider-section__project-button button primary-button ${prevIMG || nextIMG || lastIMG || firstIMG ? "prev-button next-button" : ""}`}
                      >
                        {project.appTitle}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="slider-section__arrow-right-icon"
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
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            moveSlider(1);
          }}
          className="slider-section__next-button hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="slider-section__next-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );

  /*
  
  */
}
