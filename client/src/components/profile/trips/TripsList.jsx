import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../profile.scss";

export default function TripsList() {
  const tripsFake = [
    {
      id: 0,
      trip_picture: "../src/assets/images/paris.jpg",
      trip_name: "Paris",
      date_start: "2 septembre 2024",
      date_end: "7 septembre 2024",
      status: "planning",
    },
    {
      id: 0,
      trip_picture: "../src/assets/images/paris.jpg",
      trip_name: "Paris",
      date_start: "2 septembre 2024",
      date_end: "7 septembre 2024",
      status: "planning",
    },
    {
      id: 0,
      trip_picture: "../src/assets/images/paris.jpg",
      trip_name: "Paris",
      date_start: "2 septembre 2024",
      date_end: "7 septembre 2024",
      status: "planning",
    },
  ];

  /* const team = [
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
  ] */
  return (
    <>
      <div className="trip-list-section">
        {" "}
        <h2>My trips</h2>
        <div className="trip-list-all-trips">
          {tripsFake.map((trip) => (
            <div key={trip.id} className="trip-list-one-trip">
              <div className="trip-list-content">
                <Link to="/trip">
                  <img src={trip.trip_picture} alt="city" />
                </Link>
                <div className="trip-list-content">
                  <div className="trip-title-status">
                    <h4>{trip.trip_name}</h4>{" "}
                    <div className="trip-list-statut">{trip.status}</div>
                  </div>
                  <p className="trip-list-dates-one-trip">
                    {trip.date_start} - {trip.date_end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/new-trip" className="link-new-trip">
          <span className="plus-button">+</span> Plan a new trip !
        </Link>
      </div>

      <div className="trip-list-section">
        {" "}
        <h2>My drafts</h2>
        <div className="trip-list-all-trips">
          {tripsFake.map((trip) => (
            <div key={trip.id} className="trip-list-one-trip">
              <div className="trip-list-content">
                <Link to="/trip">
                  <img src={trip.trip_picture} alt="city" />
                </Link>
                <div className="trip-list-content">
                  <div className="trip-title-status">
                    <h4>{trip.trip_name}</h4>{" "}
                    <div className="trip-list-statut">{trip.status}</div>
                  </div>
                  <p className="trip-list-dates-one-trip">
                    {trip.date_start} - {trip.date_end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

TripsList.propTypes = {
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
      }).isRequired
    ).isRequired,
  }).isRequired,
};
