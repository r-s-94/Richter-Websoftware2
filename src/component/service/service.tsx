import "./service.scss";
import "../../variables.scss";
import PasswordGenerator from "../password-generator/password-generator";

export default function Service() {
  return (
    <div className="service-div">
      <PasswordGenerator />
    </div>
  );
}
