import { useContext } from "react";
import { AllContext } from "../../AllContext";

import "./profile.scss";

export default function FriendsList() {
  const { userFriends } = useContext(AllContext);
  return (
    <div className="friends-list-profile">
      {userFriends &&
        userFriends.map((friend) => (
          <div className="one-friend-request" key={friend.account2_id}>
            <img src={friend.picture} alt="friend" />
            {friend.firstname} {friend.lastname}
          </div>
        ))}
    </div>
  );
}
