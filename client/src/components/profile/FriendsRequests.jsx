import { useContext } from "react";
import { AllContext } from "../../AllContext";
import "./profile.scss";

export default function FriendsRequests() {
  const { pendingFriends } = useContext(AllContext);
  return (
    <div className="friend-requests-container">
      <h3>Friends Requests</h3>
      {pendingFriends.map((friend) => (
        <div className="one-friend-request" key={friend.account_id1}>
          <img src={friend.picture} alt="profile" />
          {friend.firstname} {friend.lastname}
          <button className="validate-button-friend-request" type="button">
            v
          </button>
          <button className="suppress-button-friend-request" type="button">
            x
          </button>
        </div>
      ))}
    </div>
  );
}
