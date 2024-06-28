import PropTypes from "prop-types";

export default function OneTrip({ user }) {
  const tripsFake = [
    {
      id: 0,
      trip_picture: "../src/assets/images/paris.jpg",
      trip_name: "Paris",
      date_start: "2 septembre 2024",
      date_end: "7 septembre 2024",
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
  ];

  const activities = [
    {
      id: 0,
      activity_name: "Jardin du Luxembourg",
      activity_type: "Park and nature",
      price: "Free",
      neighborhood: "6th arr.",
    },
    {
      id: 1,
      activity_name: "Centre Pompidou",
      activity_type: "Art",
      price: "15€",
      neighborhood: "4th arr.",
    },
    {
      id: 2,
      activity_name: "No-Glu",
      activity_type: "Food",
      price: "20€-30€",
      neighborhood: "7th arr.",
    },
  ];
  return (
    <>
      {tripsFake.map((trip) => (
        <>
          <img src={trip.trip_picture} alt="city" />
          <h4>{trip.trip_name}</h4>
          <p>
            {trip.date_start}-{trip.date_end}
          </p>
        </>
      ))}
      <h3>trip team</h3>
      {team.map((person) => (
        <img key={person.id} src={person.picture} alt="profile" />
      ))}
      <h3>activities</h3>
      <h5>Food</h5>
      {activities
        .filter((activity) => activity.activity_type === "Food")
        .map((activity) => (
          <div key={activity.id}>
            {activity.price}
            {activity.activity_name} {activity.neighborhood}
          </div>
        ))}
      <h5>Park and nature</h5>
      {activities
        .filter((activity) => activity.activity_type === "Park and nature")
        .map((activity) => (
          <div key={activity.id}>
            {activity.price}
            {activity.activity_name} {activity.neighborhood}
          </div>
        ))}
      <h5>Art</h5>
      {activities
        .filter((activity) => activity.activity_type === "Art")
        .map((activity) => (
          <div key={activity.id}>
            {activity.price}
            {activity.activity_name} {activity.neighborhood}
          </div>
        ))}
    </>
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
