/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import "../components/friendsGestion.scss";
import { AllContext } from "../AllContext";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";
import FriendsList from "../components/profile/FriendsList";

export default function FriendsGestion() {
  const { pendingFriends, user, setOtherFriends } = useContext(AllContext);
  const [requestStatus, setRequestStatus] = useState(null);
  const [friendID, setFriendID] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [messageConfirmations, setMessageConfirmations] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [friendIdAdded, setFriendIdAdded] = useState(null);
  const [showAddedFriend, setShowAddedFriend] = useState(false);
  const [newFriendName, setNewFriendName] = useState(null);
  const [newFriendLastName, setNewFriendLastName] = useState(null);

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

  // Search function (condition : user has to write 3 letters to get results)
  const [searchValue, setSearchValue] = useState();
  const [usersResults, setUserResults] = useState();

  const callUsersAfterSearch = async () => {
    if (searchValue.length < 3) {
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/account/search?query=${searchValue}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        const filteredData = data.filter((account) => account.id !== user.id);
        setUserResults(filteredData);
      } else {
        console.error(data.message || "Une erreur s'est produite");
      }
    } catch (err) {
      console.error("Une erreur s'est produite :", err);
    }
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      callUsersAfterSearch(searchValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchValue]);

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  // Add a friend
  const addAFriend = async (id, firstname, lastname) => {
    setFriendIdAdded(id);
    setNewFriendName(firstname);
    setNewFriendLastName(lastname);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/friend`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            status: "Pending",
            account_id1: user.id,
            account_id2: id,
          }),
        }
      );
      if (response.status === 201) {
        setShowAddedFriend(true);
      } else {
        console.error("Une erreur s'est produite là");
      }
    } catch (err) {
      console.error("Une erreur s'est produite :", err);
    }
  };
  return (
    <>
      <Header />
      <HeaderMobile />
      <div className="friends-gestion-page">
        <section className="friends-gestion-list">
          <h2>My triplan friends</h2>

          <div className="friends-list-container-gestion">
            <FriendsList />
          </div>
        </section>
        <div className="friends-request-and-research">
          <section className="friends-request-list">
            <h2>Friends requests</h2>
            <div className="container-friend-requests">
              {pendingFriends.map((friend) => (
                <div
                  className="one-friend-request-page"
                  key={friend.account_id1}
                >
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
                                <button
                                  type="button"
                                  onClick={handleFriendResponse}
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  onClick={goBack}
                                  id="no-button"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              Confirm aproval of friend request
                              <div className="btns-confirm">
                                <button
                                  type="button"
                                  onClick={handleFriendResponse}
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  onClick={goBack}
                                  id="no-button"
                                >
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
                                getStatusandFriend(
                                  "Accepted",
                                  friend.account_id1
                                )
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
                                getStatusandFriend(
                                  "Refused",
                                  friend.account_id1
                                )
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
          </section>
          <section className="friends-gestion-research">
            <h2>Find more friends !</h2>
            <div className="research-bar-and-img">
              <img
                src="../../src/assets/images/search-triplan.svg"
                alt="research"
                className="loupe"
              />
              <input
                type="search"
                className="research-bar"
                onChange={handleSearch}
              />
            </div>
            <div>
              <div>
                {/* If they are results, they are showing, otherwise nothing. If the user add someone, 
                it displays a confirmation message */}
                {usersResults ? (
                  showAddedFriend ? (
                    <div className="confirmation-message-friend">
                      Friend request sent to{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {newFriendName} {newFriendLastName}
                      </span>{" "}
                      !
                    </div>
                  ) : (
                    usersResults.map((account) => (
                      <div key={account.id} className="one-result-research">
                        {account.picture ? (
                          <img src={account.picture} alt={account.firstname} />
                        ) : (
                          <p>No image</p>
                        )}
                        {account.firstname} {account.lastname}
                        <button
                          type="button"
                          onClick={() =>
                            addAFriend(
                              account.id,
                              account.firstname,
                              account.lastname
                            )
                          }
                        >
                          Add +
                        </button>
                      </div>
                    ))
                  )
                ) : (
                  <span />
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
