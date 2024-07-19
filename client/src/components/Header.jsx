import { Link } from "react-router-dom";
import "./header-footer.scss";
import { useContext, useState } from "react";
import { AllContext } from "../AllContext";
import FriendsRequests from "./profile/FriendsRequests";

export default function Header() {
  const { pendingFriends, logout } = useContext(AllContext);

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <div className="destktop-header">
        <div className="logo-title-header">
          <img src="../src/assets/images/triplan-logo.svg" alt="logo" />
          <Link to="/profile" className="profile-button-header">
            <h1>triplan</h1>
          </Link>
        </div>

        <div className="buttons-header">
          {pendingFriends.length > 0 ? (
            <>
              <div className="counter-friends-request">
                {pendingFriends.length} friend requests !
              </div>
              <button
                type="button"
                className="friends-button-header"
                onClick={handleOpen}
              >
                <img
                  src="../src/assets/images/friends-request.svg"
                  alt="log out"
                />
              </button>
            </>
          ) : (
            <span />
          )}

          <Link
            to="/"
            className="profile-button-header"
            id="profile-header"
            onClick={logout}
          >
            Log out <img src="../src/assets/images/log-out.svg" alt="log out" />
          </Link>
        </div>
      </div>
      {open && (
        <div className="friends-request-container-header">
          <FriendsRequests />
        </div>
      )}
    </>
  );
}
