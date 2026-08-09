import "../../variables.scss";
import "./aboutUs.scss";
import DeveloperIMG from "../../assets/Developer-IMG.jpg";

export default function AboutUs() {
  return (
    <section id="about-us" className="about-us-section">
      <h2 className="about-us-section__headline">Über Uns</h2>
      <div className="about-us-section__about-us-div">
        <div className="about-us-section__description-div">
          <p className="about-us-section__developer-headline">
            Softwareentwickler mit Schwerpunkt Webentwicklung
          </p>
          <br />
          <p className="about-us-section__text">
            Mein Name ist Sven Richter, bin Softwareentwickler mit Schwerpunkt
            im Bereich Webentwicklung aus Stralsund.
            <br />
            <br />
            Ich entwickle moderne Webseiten (Internetseiten) und Webanwendungen
            im anspruchsvollen Design mit Fokus auf benutzerfreundlichen
            Oberflächen (UI, UX).
            <br />
            <br />
            Im Bereich "Unsere-Highlights" erhalten Sie einen Überblick über
            meine wichtigsten Projekte.
          </p>
        </div>

        <div className="about-us-section__img-div">
          <img src={DeveloperIMG} alt="" className="about-us-section__img" />
        </div>
      </div>
    </section>
  );
}
