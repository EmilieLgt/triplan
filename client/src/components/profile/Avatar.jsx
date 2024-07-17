import { useContext } from "react";
import { AllContext } from "../../AllContext";
import "./profile.scss";

export default function Avatar() {
  const { user } = useContext(AllContext);

  return (
    <div className="avatar-info-container">
      <img src={user.picture} alt="" />
      <div className="avatar-text">
        <div className="avatar-name">
          {user.firstname} {user.lastname}
        </div>
      </div>
      <div className="avatar-mail">{user.email}</div>
    </div>
  );
}
