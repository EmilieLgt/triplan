import { useContext } from "react";
import { AllContext } from "../../AllContext";

import "./profile.scss";

export default function FriendsList() {
  const { userFriends } = useContext(AllContext);

  return (
    <div className="friends-list-profile">
      {Array.isArray(userFriends) && userFriends.length > 0 ? (
        userFriends.map((friend) => (
          <div
            className="one-friend-desktop"
            key={friend.account_id2 ? friend.account_id2 : friend.account_id1}
          >
            <img src={friend.picture} alt="friend" />
            {friend.firstname} {friend.lastname}
          </div>
        ))
      ) : (
        <p> No friend ... Yet !</p>
      )}
    </div>
  );
}
