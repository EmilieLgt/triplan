import PropTypes from "prop-types";
import "./profile.scss";

export default function FriendsList({ user }) {
  return (
    <>
      <div className="friends-list-profile">
        <h3>My triplan friends</h3>
        <div className="one-friend-request">
          <img src={user.results[0].picture.thumbnail} alt="friend" />
          {user.results[0].name.first} {user.results[0].name.last}
        </div>
        <div className="one-friend-request">
          <img src={user.results[0].picture.thumbnail} alt="friend" />
          {user.results[0].name.first} {user.results[0].name.last}
        </div>
        <div className="one-friend-request">
          <img src={user.results[0].picture.thumbnail} alt="friend" />
          {user.results[0].name.first} {user.results[0].name.last}
        </div>
        <div className="add-friend-container">
          {" "}
          <button type="button" className="add-friend">
            +
          </button>{" "}
          Add a friend
        </div>
      </div>
      <div className="orange-round" />
    </>
  );
}

FriendsList.propTypes = {
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
