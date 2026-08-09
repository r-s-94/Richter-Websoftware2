import { HashLink } from "react-router-hash-link";
import "../../variables.scss";
import "./imprint.scss";

export default function Imprint() {
  return (
    <section className="imprint-section">
      <HashLink to="/#footer" className="imprint-section__link link no-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="imprint-section__back-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </HashLink>

      <h2 className="imprint-section__headline">Impressum</h2>

      <div className="imprint-section__imprint">
        <p className="imprint-section__note">Angaben gemäß § 5 DDG</p>

        <div className="imprint-section__person-div">
          <p className="imprint-section__person">Sven Richter</p>
          <p className="imprint-section__address-part1">Wartislawstraße 10</p>
          <p className="imprint-section__address-part2">18437 Stralsund</p>
          <p className="imprint-section__country">Deutschland</p>{" "}
          <p className="imprint-section__mail">
            E-Mail: richter-websoftware@web.de
          </p>
        </div>
      </div>
    </section>
  );
}
