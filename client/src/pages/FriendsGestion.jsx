import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import "../components/friendsGestion.scss";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";

export default function FriendsGestion() {
  const user = useLoaderData();
  return (
    <>
      <Header />
      <HeaderMobile />
      <div className="friends-gestion-page">
        <section className="friends-request-list">
          <h2>Friends requests</h2>
          <div className="one-friend-request">
            {" "}
            <img
              src={user.results[0].picture.large}
              alt=""
              className="avatar-gestion-page"
            />{" "}
            <p>
              {user.results[0].name.first} {user.results[0].name.last}
            </p>
            <button type="button">v</button>
            <button type="button">x</button>
          </div>
        </section>
        <section className="friends-gestion-research">
          {" "}
          <h2>Find more friends !</h2>
          <div className="research-bar-and-img">
            <img
              src="../../src/assets/images/search-triplan.svg"
              alt="research"
              className="loupe"
            />
            <input type="search" className="research-bar" />{" "}
          </div>
        </section>
        <section className="friends-gestion-list">
          <h2>My triplan friends</h2>

          <div className="friends-list-container-gestion">
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
            <div className="one-friend">
              {" "}
              <img
                src={user.results[0].picture.large}
                alt=""
                className="avatar-gestion-page"
              />{" "}
              <p>
                {user.results[0].name.first} {user.results[0].name.last}
              </p>
              <button type="button">x</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
