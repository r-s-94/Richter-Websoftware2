import "./head.scss";
import "../../variables.scss";
import Favorit_IMG from "../../assets/favorit.png";
import Apps_IMG from "../../assets/apps(1).png";
//import LogoIMG from "../../assets/file-XBj6JrxCs3gTULQ1McmxVX.webp";

export default function Head() {
  return (
    <section className="head-section">
      <h1 className="head-section__headline">Richter Websoftware</h1>
      <p className="head-section__slogan">
        Moderne Webseiten und leistungsstarke Webanwendunden für Unternehmen.
      </p>
      <div className="head-section__action-buttons">
        <a href="/#project-highlights-section" className="no-link">
          <button className="head-section__highlight-button button primary-button">
            Projekt-Highlights
            <img
              src={Favorit_IMG}
              className="head-section__favorite-icon"
              alt=""
            />
          </button>
        </a>

        <a href="/#all-projects" className="no-link">
          <button className="head-section__project-button button secondary-button">
            Alle Projekte{" "}
            <img src={Apps_IMG} className="head-section__apps-icon" alt="" />
          </button>
        </a>
      </div>
    </section>
  );
  /*     
   
  */
}
