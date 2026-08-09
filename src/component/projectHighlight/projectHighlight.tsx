import ThreeDSlider from "../threeDSlider/threedSlider";
import "./projectHighlight.scss";
import "../../variables.scss";

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights-section"
      className="project-highlights-section"
    >
      <h2 className="project-highlights-section__headline">
        Unsere Highlights
      </h2>
      <ThreeDSlider />
    </section>
  );
}
