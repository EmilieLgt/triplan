import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./trip.scss";

export default function OneTrip({ user }) {
  const tripsFake = [
    {
      id: 0,
      trip_picture: "../src/assets/images/paris.jpg",
      trip_name: "Paris",
      date_start: "2 septembre 2024",
      date_end: "7 septembre 2024",
      status: "planning",
    },
  ];

  const team = [
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 1,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 2,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
    {
      id: 0,
      firtsname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      picture: user.results[0].picture.thumbnail,
    },
  ];

  const activities = [
    {
      id: 0,
      activity_name: "Jardin du Luxembourg",
      activity_type: "Park and nature",
      price: "Free",
      neighborhood: "6th arr.",
      link: "https://www.louvre.fr/visiter/plan-acces-transports",
    },
    {
      id: 1,
      activity_name: "Centre Pompidou",
      activity_type: "Art",
      price: "15€",
      neighborhood: "4th arr.",
      link: "https://www.louvre.fr/visiter/plan-acces-transports",
    },
    {
      id: 2,
      activity_name: "No-Glu",
      activity_type: "Food",
      price: "20€-30€",
      neighborhood: "7th arr.",
      link: "https://www.louvre.fr/visiter/plan-acces-transports",
    },
    {
      id: 3,
      activity_name: "Louvres",
      activity_type: "Art",
      price: "22€",
      neighborhood: "1st arr.",
      link: "https://www.louvre.fr/visiter/plan-acces-transports",
    },
  ];
  return (
    <section className="one-trip-section">
      <h2 className="one-trip-title">
        {" "}
        <Link to="/profile"> &lsaquo; </Link>Trip planning
      </h2>
      {tripsFake.map((trip) => (
        <div key={trip.id} className="trip-presentation">
          <div className="trip-pres2">
            <img src={trip.trip_picture} alt="city" />
            <div className="trip-details">
              <h4>{trip.trip_name}</h4>
              <p className="trip-date">
                {trip.date_start} - {trip.date_end}
              </p>
              <div className="trip-status">{trip.status}</div>
            </div>
          </div>

          <div className="trip-friends-trip">
            <h3 className="trip-tiles-orange">trip team</h3>{" "}
            <div className="trip-avatars-container">
              {team.map((person) => (
                <img key={person.id} src={person.picture} alt="profile" />
              ))}{" "}
            </div>
            <button type="button" className="add-friend">
              +
            </button>{" "}
          </div>
        </div>
      ))}

      <h3 className="trip-tiles-orange" id="activity-title">
        activities
      </h3>
      <div className="all-activities-container">
        <div className="activity-category">
          <h5 className="activities-titles"> 🍕 Food</h5>
          <div className="activities-container">
            {activities
              .filter((activity) => activity.activity_type === "Food")
              .map((activity) => (
                <div key={activity.id} className="one-activity">
                  <div className="activity-price">{activity.price}</div>
                  <span className="one-activity-title">
                    {activity.activity_name}{" "}
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
              ))}
          </div>
        </div>
        <div className="activity-category">
          <h5 className="activities-titles"> 🌳 Park and nature</h5>
          <div className="activities-container">
            {activities
              .filter(
                (activity) => activity.activity_type === "Park and nature"
              )
              .map((activity) => (
                <div key={activity.id} className="one-activity">
                  <div className="activity-price">{activity.price}</div>
                  <span className="one-activity-title">
                    {activity.activity_name}{" "}
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
              ))}
          </div>
        </div>
        <div className="activity-category">
          <h5 className="activities-titles"> 🎨 Art</h5>
          <div className="activities-container">
            {activities
              .filter((activity) => activity.activity_type === "Art")
              .map((activity) => (
                <div key={activity.id} className="one-activity">
                  <div className="activity-price">{activity.price}</div>
                  <span className="one-activity-title">
                    {activity.activity_name}{" "}
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
              ))}
          </div>
        </div>{" "}
        <div className="activity-category">
          <h5 className="activities-titles"> 🎫 Event</h5>
          <div className="activities-container">
            {activities
              .filter((activity) => activity.activity_type === "Event")
              .map((activity) => (
                <div key={activity.id} className="one-activity">
                  <div className="activity-price">{activity.price}</div>
                  <span className="one-activity-title">
                    {activity.activity_name}{" "}
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
              ))}
          </div>
        </div>
        <div className="activity-category">
          <h5 className="activities-titles"> 🗺️ Other</h5>
          <div className="activities-container">
            {activities
              .filter((activity) => activity.activity_type === "Other")
              .map((activity) => (
                <div key={activity.id} className="one-activity">
                  <div className="activity-price">{activity.price}</div>
                  <span className="one-activity-title">
                    {activity.activity_name}{" "}
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
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
OneTrip.propTypes = {
  user: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.shape({
          first: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired,
        }).isRequired,
        picture: PropTypes.shape({
          thumbnail: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
