import { useContext, useState } from "react";
import { AllContext } from "../../AllContext";
import "./profile.scss";

export default function FriendsRequests() {
  const { pendingFriends, user, setOtherFriends } = useContext(AllContext);
  const [requestStatus, setRequestStatus] = useState(null);
  const [friendID, setFriendID] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [messageConfirmations, setMessageConfirmations] = useState({});

  function getStatusandFriend(value, id) {
    setShowConfirmation(!showConfirmation);
    setRequestStatus(value);
    setFriendID(id);
  }

  function goBack() {
    setShowConfirmation(false);
  }

  const handleFriendResponse = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/friend`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            state: requestStatus,
            account_id1: friendID,
            account_id2: user.id,
          }),
        }
      );

      if (response.status === 204) {
        setMessageConfirmations((prevState) => ({
          ...prevState,
          [friendID]: true,
        }));
        const updatedFriendsFromRequestResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/travel/friend/request/${user.id}`
        );
        const updatedFriendsFromRequest =
          await updatedFriendsFromRequestResponse.json();
        setOtherFriends(updatedFriendsFromRequest);

        console.info("Success: Friend request updated");
      } else {
        console.error("Error: Friend request update failed");
      }
    } catch (err) {
      console.error("Network error occurred:", err);
    }
  };

  return (
    <div className="friend-requests-container">
      <h3>Friends Requests</h3>
      {pendingFriends.map((friend) => (
        <div className="one-friend-request" key={friend.account_id1}>
          {messageConfirmations[friend.account_id1] ? (
            <div className="confirmation-request"> ✅ Done ! </div>
          ) : (
            <>
              <img src={friend.picture} alt="profile" />

              {showConfirmation && friendID === friend.account_id1 ? (
                <div>
                  {requestStatus === "Refused" ? (
                    <div>
                      Confirm decline of friend request
                      <div className="btns-confirm">
                        <button type="button" onClick={handleFriendResponse}>
                          Yes
                        </button>
                        <button type="button" onClick={goBack} id="no-button">
                          No
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      Confirm aproval of friend request
                      <div className="btns-confirm">
                        <button type="button" onClick={handleFriendResponse}>
                          Yes
                        </button>
                        <button type="button" onClick={goBack} id="no-button">
                          {" "}
                          No
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {" "}
                  {friend.firstname} {friend.lastname}
                  <div className="button-container-request">
                    <button
                      className="validate-button-friend-request"
                      type="button"
                      value="Accepted"
                      onClick={() =>
                        getStatusandFriend("Accepted", friend.account_id1)
                      }
                    >
                      Accept
                    </button>
                    <button
                      className="suppress-button-friend-request"
                      type="button"
                      value="Refused"
                      id="friend-not-ok"
                      onClick={() =>
                        getStatusandFriend("Refused", friend.account_id1)
                      }
                    >
                      Decline
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
