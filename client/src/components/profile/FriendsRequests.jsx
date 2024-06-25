import PropTypes from "prop-types";
import "./profile.scss";

export default function FriendsRequests({ user }) {
  return (
    <div className="friend-requests-container">
      <h3>Friends Requests</h3>
      <div className="one-friend-request">
        <img src={user.results[0].picture.thumbnail} alt="profile" />
        {user.results[0].name.first} {user.results[0].name.last}
        <button className="validate-button-friend-request" type="button">
          v
        </button>
        <button className="suppress-button-friend-request" type="button">
          x
        </button>
      </div>
    </div>
  );
}

FriendsRequests.propTypes = {
  user: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        picture: PropTypes.shape({
          thumbnail: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.shape({
          first: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
