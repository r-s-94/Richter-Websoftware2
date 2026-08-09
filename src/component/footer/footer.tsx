import "./footer.scss";
import "../../variables.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section id="footer" className="footer-section">
      <Link to="/imprint" className="footer-section__link link no-link">
        Impressum
      </Link>
      <p className="footer-section__copy-right">
        &copy; richter-websoftware.de
      </p>
    </section>
  );
}
