import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Avatar from "../components/profile/Avatar";
import "../components/profile/profile.scss";
import FriendsRequests from "../components/profile/FriendsRequests";
import FriendsList from "../components/profile/FriendsList";
import TripsList from "../components/profile/trips/TripsList";

export default function ProfilePage() {
  const user = useLoaderData();

  return (
    <>
      <Header />
      <div className="whole-page-profile">
        <div>
          <Avatar user={user} />
          <FriendsRequests user={user} />
          <FriendsList user={user} />
          <div className="add-friend-container">
            {" "}
            <button type="button" className="add-friend">
              +
            </button>{" "}
            Add a friend
          </div>
        </div>
        <div>
          <TripsList user={user} />
        </div>
      </div>
      <Footer />
    </>
  );
}
