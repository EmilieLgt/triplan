import "./newTripForm.scss";
import { useLoaderData } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import FriendsList from "../profile/FriendsList";
import HeaderMobile from "../HeaderMobile";

export default function NewTripForm() {
  const user = useLoaderData();

  return (
    <>
      <Header />
      <HeaderMobile />
      <section className="trip-form-section">
        <h2> Add a new trip</h2>
        <form>
          <div className="date-place-trip-plan">
            <div>
              <div>
                <label htmlFor="type" name="place">
                  Place *
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="place"
                className="input-trip-placedate"
                required
              />
            </div>
            <div>
              <div>
                <label htmlFor="type" name="date">
                  Date *
                </label>
              </div>
              <input
                type="date"
                id="date"
                name="date"
                className="input-trip-placedate"
                required
              />
            </div>
          </div>
          <div className="part-2-form">
            <div className="checkbox-div">
              This is just a draft, not a trip yet
              <input
                type="checkbox"
                id="link"
                name="check-box"
                className="input-trip"
              />
            </div>
            <div>
              <div className="picture-label">Add a picture</div>
            </div>
            <div>
              <input type="file" name="picture" />
            </div>
          </div>
        </form>
        <p className="add-friends-txt">Add some friends to your trip !</p>
        <div className="friends-section-trip-plan">
          {" "}
          <FriendsList user={user} />
          <div className="friends-list-added-trip">
            <h3>Friends added</h3>
            <div>
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-trip-form"
              />
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-trip-form"
              />
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-trip-form"
              />
            </div>
          </div>
        </div>

        <button className="add-trip" type="button">
          Add Trip
        </button>
      </section>
      <Footer />
    </>
  );
}
