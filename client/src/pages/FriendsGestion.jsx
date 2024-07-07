import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import "../components/friendsGestion.scss";

export default function FriendsGestion() {
  const user = useLoaderData();
  return (
    <div className="friends-gestion-page">
      <Header />
      <section className="friends-gestion-list">
        <h2>My triplan friends</h2>
      </section>
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
        </div>
      </div>
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
    </div>
  );
}
