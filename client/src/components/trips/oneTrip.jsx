import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../AllContext";
import NewActivityForm from "./NewActivityForm";

import "./trip.scss";

export default function OneTrip() {
  const {
    userTrips,
    formatDate,
    userFriends,
    team,
    setTeam,
    user,
    setAllTeams,
  } = useContext(AllContext);

  // to get acitivties related to the right trip
  const [tripActivities, setTripActivities] = useState();
  const tripId = useParams();
  const trueId = tripId.id;

  const tripChoosen = userTrips.filter((t) => t.id === parseInt(trueId, 10));

  const trip = tripChoosen[0];

  // Deal with opening / closing friends list
  const [openFriends, setOpenFriends] = useState(false);
  const openFriendsList = () => {
    setOpenFriends(true);
  };

  const closeFriendsList = () => {
    setOpenFriends(false);
  };

  // to display travel team

  const addFriendtoTeam = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/association`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            account_id: id,
            travel_id: parseInt(tripId.id, 10),
          }),
        }
      );
      if (response.status === 201) {
        console.info("activity added");
        setOpenFriends(false);
      } else {
        console.error("Une erreur s'est produite là");
      }
    } catch (err) {
      console.error("Une erreur s'est produite ici :", err);
    }
  };

  useEffect(() => {
    const callTeam = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/association/travel?travel_id=${tripId.id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();
        if (response.status === 200) {
          setTeam(data);
          setAllTeams((prevTeams) => ({ ...prevTeams, [tripId.id]: data }));
          console.info("team completed - success");
        } else {
          console.error(data.message || "Une erreur s'est produite");
        }
      } catch (err) {
        console.error(
          "Une erreur s'est produite ici dans l'appel de la team :",
          err
        );
      }
    };
    const callActivities = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/activity/travel?travel_id=${tripId.id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();
        if (response.status === 200) {
          setTripActivities(data);
          console.info("activities - success");
        } else {
          console.error(data.message || "Une erreur s'est produite");
        }
      } catch (err) {
        console.error("Une erreur s'est produite ici :", err);
      }
    };
    callTeam();
    callActivities();
  }, [setAllTeams, setTeam, tripId.id]);

  return (
    <section className="one-trip-section">
      <h2 className="one-trip-title">
        {" "}
        <Link to="/profile" className="link-to-profile">
          {" "}
          &lsaquo;{" "}
        </Link>
        Trip planning
      </h2>
      {trip && (
        <div key={trip.id} className="trip-presentation">
          <div className="trip-pres2">
            <img src={trip.picture} alt="city" />
            <div className="trip-details">
              <h4>{trip.city}</h4>
              <p className="trip-date">
                {formatDate(trip.date_start)} - {formatDate(trip.date_end)}
              </p>
              <div className="trip-status">{trip.status}</div>
            </div>
          </div>
          <div className="trip-friends-trip">
            <h3 className="trip-tiles-orange">trip team</h3>{" "}
            <div className="trip-avatars-container">
              <img key={user.id} src={user.picture} alt="profile" />
              {team &&
                team.map((person) => (
                  <img key={person.id} src={person.picture} alt="profile" />
                ))}{" "}
            </div>
          </div>
          {openFriends && (
            <div className="friends-list-container-trip">
              <h4>Add some friends </h4>
              {userFriends.map((friend) => (
                <div
                  key={friend.account_id2 || friend.account_id1}
                  className="one-line-friend"
                >
                  <img src={friend.picture} alt="friend" /> {friend.firstname}{" "}
                  {friend.lastname}
                  <button
                    type="button"
                    className="add-friend"
                    onClick={async () => {
                      await addFriendtoTeam(
                        friend.account_id2 || friend.account_id1
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="close-btn-friends"
                onClick={closeFriendsList}
              >
                Close
              </button>
            </div>
          )}

          <div>
            <button
              type="button"
              className="add-friend"
              onClick={openFriendsList}
            >
              +
            </button>{" "}
            Add other friends
          </div>
        </div>
      )}{" "}
      <h3 className="trip-tiles-orange" id="activity-title">
        activities
      </h3>
      <div className="all-activities-container">
        <div className="activity-category">
          <h5 className="activities-titles"> 🍕 Food</h5>
          <div className="activities-container">
            {tripActivities &&
              tripActivities
                .filter((activity) => activity.category === "Food")
                .map((activity) => (
                  <div key={activity.id} className="one-activity">
                    <div>
                      <span className="activity-price">{activity.price}</span>

                      <span className="one-activity-title">
                        {activity.name}{" "}
                      </span>
                      <span className="one-activity-neigh">
                        {activity.neighborhood}
                      </span>
                      <a
                        href={activity.link}
                        target="blank"
                        className="one-activity-link"
                      >
                        More info
                      </a>
                    </div>
                    <div>
                      <img src={activity.picture} alt="friendimg" />
                      <img src="/src/assets/images/comment.svg" alt="comment" />
                      <div className="comment-one-trip">
                        {" "}
                        <p>
                          {activity.firstname} {activity.lastname} said
                        </p>
                        <span>'{activity.comment}' </span>{" "}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="activity-category">
          <h5 className="activities-titles"> 🌳 Park and nature</h5>
          <div className="activities-container">
            {tripActivities &&
              tripActivities
                .filter((activity) => activity.category === "Park and nature")
                .map((activity) => (
                  <div key={activity.id} className="one-activity">
                    <div>
                      <span className="activity-price">{activity.price}</span>

                      <span className="one-activity-title">
                        {activity.name}{" "}
                      </span>
                      <span className="one-activity-neigh">
                        {activity.neighborhood}
                      </span>
                      <a
                        href={activity.link}
                        target="blank"
                        className="one-activity-link"
                      >
                        More info
                      </a>
                    </div>
                    <div>
                      <img src={activity.picture} alt="friendimg" />
                      <img src="/src/assets/images/comment.svg" alt="comment" />
                      <div className="comment-one-trip">
                        {" "}
                        <p>
                          {activity.firstname} {activity.lastname} said
                        </p>
                        <span>'{activity.comment}' </span>{" "}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="activity-category">
          <h5 className="activities-titles"> 🎨 Art</h5>
          <div className="activities-container">
            {tripActivities &&
              tripActivities
                .filter((activity) => activity.category === "Art")
                .map((activity) => (
                  <div key={activity.id} className="one-activity">
                    <div>
                      <span className="activity-price">{activity.price}</span>

                      <span className="one-activity-title">
                        {activity.name}{" "}
                      </span>
                      <span className="one-activity-neigh">
                        {activity.neighborhood}
                      </span>
                      <a
                        href={activity.link}
                        target="blank"
                        className="one-activity-link"
                      >
                        More info
                      </a>
                    </div>
                    <div>
                      <img src={activity.picture} alt="friendimg" />
                      <img src="/src/assets/images/comment.svg" alt="comment" />
                      <div className="comment-one-trip">
                        {" "}
                        <p>
                          {activity.firstname} {activity.lastname} said
                        </p>
                        <span>'{activity.comment}' </span>{" "}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>{" "}
        <div className="activity-category">
          <h5 className="activities-titles"> 🎫 Event</h5>
          <div className="activities-container">
            {tripActivities &&
              tripActivities
                .filter((activity) => activity.category === "Event")
                .map((activity) => (
                  <div key={activity.id} className="one-activity">
                    <div>
                      <span className="activity-price">{activity.price}</span>

                      <span className="one-activity-title">
                        {activity.name}{" "}
                      </span>
                      <span className="one-activity-neigh">
                        {activity.neighborhood}
                      </span>
                      <a
                        href={activity.link}
                        target="blank"
                        className="one-activity-link"
                      >
                        More info
                      </a>
                    </div>
                    <div>
                      <img src={activity.picture} alt="friendimg" />
                      <img src="/src/assets/images/comment.svg" alt="comment" />
                      <div className="comment-one-trip">
                        {" "}
                        <p>
                          {activity.firstname} {activity.lastname} said
                        </p>
                        <span>'{activity.comment}' </span>{" "}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="activity-category">
          <h5 className="activities-titles"> 🗺️ Other</h5>
          <div className="activities-container">
            {tripActivities &&
              tripActivities
                .filter((activity) => activity.category === "Other")
                .map((activity) => (
                  <div key={activity.id} className="one-activity">
                    <div>
                      <span className="activity-price">{activity.price}</span>

                      <span className="one-activity-title">
                        {activity.name}{" "}
                      </span>
                      <span className="one-activity-neigh">
                        {activity.neighborhood}
                      </span>
                      <a
                        href={activity.link}
                        target="blank"
                        className="one-activity-link"
                      >
                        More info
                      </a>
                    </div>
                    <div>
                      <img src={activity.picture} alt="friendimg" />
                      <img src="/src/assets/images/comment.svg" alt="comment" />
                      <div className="comment-one-trip">
                        {" "}
                        <p>
                          {activity.firstname} {activity.lastname} said
                        </p>
                        <span>'{activity.comment}' </span>{" "}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <NewActivityForm trip={trip} />
    </section>
  );
}
