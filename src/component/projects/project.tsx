import "./project.scss";
import WebProjectsOverview from "../webProject/webProjectsOverview";
import Service from "../service/service";
import "../../variables.scss";

export default function Project() {
  return (
    <section id="all-projects" className="project-section">
      <h2 className="project-section__headline">Projekte & Dienstleistungen</h2>
      <WebProjectsOverview />
      <Service />
    </section>
  );

  /*
 
  
  */
}
