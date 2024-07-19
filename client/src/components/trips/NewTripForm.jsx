/* eslint-disable no-plusplus */
import "./newTripForm.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import HeaderMobile from "../HeaderMobile";
import { AllContext } from "../../AllContext";

export default function NewTripForm() {
  const { user, setUserTrips } = useContext(AllContext);
  const navigate = useNavigate();

  const [stateChoosen, setStateChoosen] = useState("planning");
  function changeState() {
    setStateChoosen("project");
  }
  const cityRef = useRef();
  const dateStartRef = useRef();
  const dateEndRef = useRef();
  const imageRef = useRef();

  // To get a random string for random id for travel

  function generateRandomString() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    let result = "";

    // Generate 4 random letters
    for (let i = 0; i < 4; i++) {
      const randomLetter = letters.charAt(
        Math.floor(Math.random() * letters.length)
      );
      result += randomLetter;
    }

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
      const randomNumber = numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
      result += randomNumber;
    }

    return result;
  }

  // upload images
  const handleUpload = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imageData = await response.json();
      return `/src/assets/images${imageData.filePath}`;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  // add a new trip
  const handleSubmit = async (event) => {
    event.preventDefault();

    let imagePath;
    const image1File = imageRef.current.files[0];

    if (image1File) {
      try {
        imagePath = await handleUpload(image1File);
      } catch (error) {
        console.error("Error uploading file:", error);
        imagePath = null;
      }
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/travel`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            city: cityRef.current.value,
            date_start: dateStartRef.current.value,
            date_end: dateEndRef.current.value,
            picture: imagePath || "/src/assets/images/default-picture.png",
            random: generateRandomString(),
            state: stateChoosen,
            account_id: user.id,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        const updatedTripsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/travel/user/${user.id}`
        );
        const updatedTrips = await updatedTripsResponse.json();
        setUserTrips(updatedTrips);
        navigate("/profile");
        console.info("register - success");
      } else {
        console.error(data.message || "Une erreur s'est produite");
      }
    } catch (err) {
      console.error("Une erreur s'est produite ici :", err);
    }
  };
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
                id="place"
                name="place"
                ref={cityRef}
                className="input-trip-placedate"
                required
              />
            </div>
            <div>
              <div>
                <label htmlFor="type" name="date_start">
                  From *
                </label>
              </div>
              <input
                type="date"
                id="date_start"
                name="date_start"
                ref={dateStartRef}
                className="input-trip-placedate"
                required
              />
            </div>
            <div>
              <div>
                <label htmlFor="type" name="date_end">
                  To *
                </label>
              </div>
              <input
                type="date"
                id="date_end"
                name="date_end"
                ref={dateEndRef}
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
                onChange={changeState}
              />
            </div>
            <div>
              <div className="picture-label">Add a picture</div>
            </div>
            <div>
              <input type="file" name="picture" ref={imageRef} />
            </div>
          </div>
        </form>
        <button className="add-trip" type="button" onClick={handleSubmit}>
          Add Trip
        </button>
      </section>
      <Footer />
    </>
  );
}
