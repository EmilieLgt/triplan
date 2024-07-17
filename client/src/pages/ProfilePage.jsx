import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Avatar from "../components/profile/Avatar";
import "../components/profile/profile.scss";
import FriendsList from "../components/profile/FriendsList";
import TripsList from "../components/profile/trips/TripsList";
import HeaderMobile from "../components/HeaderMobile";

export default function ProfilePage() {
  return (
    <div className="profile-page-container">
      <Header />
      <HeaderMobile />
      <div className="whole-page-profile">
        <div className="avatar-and-friends">
          <Avatar />
          <div className="friends-and-and">
            <h3 className="triplan-friends-title">My triplan friends</h3>
            <FriendsList />
            <div className="add-friend-container">
              <Link to="/friends">
                <button type="button" className="add-friend">
                  +
                </button>
                Add a friend
              </Link>
            </div>
          </div>
        </div>
        <div>
          <TripsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
