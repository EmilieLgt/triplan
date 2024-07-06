import { Link } from "react-router-dom";
import "./header-footer.scss";

export default function Header() {
  return (
    <div className="destktop-header">
      <div className="logo-title-header">
        <img src="../src/assets/images/triplan-logo.svg" alt="logo" />
        <Link to="/profile" className="profile-button-header">
          <h1>triplan</h1>
        </Link>
      </div>
      <Link to="/profile" className="profile-button-header" id="profile-header">
        <img
          src="../src/assets/images/user-profile2.svg"
          id="profile-pic-header"
          alt="profile"
        />
        Profil
      </Link>
    </div>
  );
}
