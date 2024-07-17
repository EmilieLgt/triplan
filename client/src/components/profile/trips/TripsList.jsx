import { Link } from "react-router-dom";
import "../profile.scss";
import { useContext } from "react";
import { AllContext } from "../../../AllContext";

export default function TripsList() {
  const { userTrips } = useContext(AllContext);
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Gérer le cas où la date est undefined ou null
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const planningTrips = userTrips.filter((trip) => trip.state === "planning");
  const projectTrips = userTrips.filter((trip) => trip.state === "project");

  return (
    <>
      <div className="trip-list-section">
        {" "}
        <h2>My trips</h2>
        <div className="trip-list-all-trips">
          <Link to="/new-trip" className="link-new-trip">
            <div className="container-button-new-trip">
              <div>Plan a new trip</div> <div className="plus-button">+</div>
            </div>
          </Link>
          {planningTrips.length > 0 ? (
            planningTrips.map((trip) => (
              <div key={trip.id} className="trip-list-one-trip">
                <div className="trip-list-content">
                  <Link to="/trip">
                    <img src={trip.picture} alt="city" />
                  </Link>
                  <div className="trip-list-content">
                    <div className="trip-title-status">
                      <h4>{trip.city}</h4>{" "}
                      <div className="trip-list-statut">{trip.state}</div>
                    </div>
                    <p className="trip-list-dates-one-trip">
                      {formatDate(trip.date_start)} -{" "}
                      {formatDate(trip.date_end)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div> Nothing planned here yet !</div>
          )}
        </div>
      </div>

      <div className="trip-list-section">
        {" "}
        <h2>My drafts</h2>
        <div className="trip-list-all-trips">
          {projectTrips.length > 0 ? (
            projectTrips.map((trip) => (
              <div key={trip.id} className="trip-list-one-trip">
                <div className="trip-list-content">
                  <Link to="/trip">
                    <img src={trip.picture} alt="city" />
                  </Link>
                  <div className="trip-list-content">
                    <div className="trip-title-status">
                      <h4>{trip.city}</h4>
                      <div className="trip-list-statut">{trip.state}</div>
                    </div>
                    <p className="trip-list-dates-one-trip">
                      {formatDate(trip.date_start)} -{" "}
                      {formatDate(trip.date_end)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div> Nothing planned yet ! </div>
          )}
        </div>
      </div>
    </>
  );
}
