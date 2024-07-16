import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../components/friendsGestion.scss";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";

export default function FriendsGestion() {
  const user = useLoaderData();

  // Search function (condition : user has to write 3 letters to get results)
  const [searchValue, setSearchValue] = useState("e");
  const [usersResults, setUserResults] = useState();

  const callUsersAfterSearch = async () => {
    if (searchValue.length < 3) {
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/account/search?query=${searchValue}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setUserResults(data);
      } else {
        console.error(data.message || "Une erreur s'est produite");
      }
    } catch (err) {
      console.error("Une erreur s'est produite :", err);
    }
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      callUsersAfterSearch(searchValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchValue]);

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  // if (searchValueDelayed.length > 2) {
  //   callUsersAfterSearch(searchValue);
  // }

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
          <h2>Find more friends !</h2>
          <div className="research-bar-and-img">
            <img
              src="../../src/assets/images/search-triplan.svg"
              alt="research"
              className="loupe"
            />
            <input
              type="search"
              className="research-bar"
              onChange={handleSearch}
            />
          </div>
          {usersResults ? (
            usersResults.map((account) => (
              <div key={account.id}>
                {account.picture ? (
                  <img src={account.picture} alt={account.firstname} />
                ) : (
                  <p>No image</p>
                )}
                {account.firstname}
                {account.lastname}
              </div>
            ))
          ) : (
            <div> Pas de résultats !</div>
          )}
        </section>
        <section className="friends-gestion-list">
          <h2>My triplan friends</h2>

          <div className="friends-list-container-gestion">
            <div className="one-friend">
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
