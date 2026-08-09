import { useState } from "react";
import "./nav.scss";

export default function Navigation() {
  const [transformationHamburgerMenu, setTransformationHamburgerMenu] =
    useState<boolean>(false);

  return (
    <section className="nav-section">
      <nav
        className={`nav-section__nav-bar ${transformationHamburgerMenu ? "" : "hidden"}`}
      >
        <a
          onClick={() => {
            setTransformationHamburgerMenu(false);
          }}
          href="#project-highlights-section"
          className="nav-section__link link no-link"
        >
          Highlights
        </a>
        <a
          onClick={() => {
            setTransformationHamburgerMenu(false);
          }}
          href="#all-projects"
          className="nav-section__link link no-link"
        >
          Projekte
        </a>
        <a
          onClick={() => {
            setTransformationHamburgerMenu(false);
          }}
          href="#technologies"
          className="nav-section__link link no-link"
        >
          Technologien
        </a>
        <a
          onClick={() => {
            setTransformationHamburgerMenu(false);
          }}
          href="#about-us"
          className="nav-section__link link no-link"
        >
          Über Uns
        </a>
        <a
          onClick={() => {
            setTransformationHamburgerMenu(false);
          }}
          href="#contact"
          className="nav-section__link link no-link"
        >
          Kontakte
        </a>
      </nav>

      <div
        onClick={() => {
          setTransformationHamburgerMenu(!transformationHamburgerMenu);
        }}
        className="nav-section__hamburger-menu"
      >
        <div
          className={`nav-section__bar1 ${
            transformationHamburgerMenu ? "transform-bar1" : ""
          } `}
        ></div>
        <div
          className={`nav-section__bar2 ${
            transformationHamburgerMenu ? "transform-bar2" : ""
          } `}
        ></div>
        <div
          className={`nav-section__bar3 ${
            transformationHamburgerMenu ? "transform-bar3" : ""
          } `}
        ></div>
      </div>
    </section>
  );
}
