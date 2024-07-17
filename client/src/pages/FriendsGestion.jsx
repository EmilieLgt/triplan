import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../components/friendsGestion.scss";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";
import FriendsList from "../components/profile/FriendsList";

export default function FriendsGestion() {
  // Search function (condition : user has to write 3 letters to get results)
  const [searchValue, setSearchValue] = useState();
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

  return (
    <>
      <Header />
      <HeaderMobile />
      <div className="friends-gestion-page">
        <section className="friends-request-list">
          <h2>Friends requests</h2>

          <div>
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
            <FriendsList />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
