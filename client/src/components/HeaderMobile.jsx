import { Link } from "react-router-dom";
import "./header-mobile.scss";

export default function HeaderMobile() {
  return (
    <div className="mobile-header">
      <div>
        <Link to="/profile">
          <h1>triplan</h1>
        </Link>
      </div>
      <div className="logo-header">
        <Link to="/friends" className="links-header">
          <img
            src="../src/assets/images/plus-circle.svg"
            id="profile-pic-header-mobile"
            alt="profile"
          />
          Add trip
        </Link>
        <Link to="/friends" className="links-header">
          <img
            src="../src/assets/images/add-friend-orange.svg"
            id="profile-pic-header-mobile"
            alt="profile"
          />
          Friends
        </Link>
        <Link to="/profile" className="links-header">
          <img
            src="../src/assets/images/profile-orange.svg"
            id="profile-pic-header-mobile"
            alt="profile"
          />
          Profil
        </Link>
      </div>
    </div>
  );
}
