import PropTypes from "prop-types";
import "./profile.scss";

export default function Avatar({ user }) {
  return (
    <div className="avatar-info-container">
      <img src={user.results[0].picture.large} alt="" />
      <div className="yellow-round" />
      <div className="avatar-text">
        <div className="avatar-name">
          {user.results[0].name.first} {user.results[0].name.last}
        </div>
        <div className="avatar-mail">{user.results[0].email}</div>
      </div>
    </div>
  );
}

Avatar.propTypes = {
  user: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        picture: PropTypes.shape({
          large: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.shape({
          first: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired,
        }).isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
