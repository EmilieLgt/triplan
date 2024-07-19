/* eslint-disable react/prop-types */
import { useContext, useState, useRef } from "react";
import "./trip.scss";
import { AllContext } from "../../AllContext";

export default function NewActivityForm({ trip }) {
  const [categoryChoosen, setCategoryChoosen] = useState();
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const { user } = useContext(AllContext);

  function handleChangeCategory(event) {
    setCategoryChoosen(event.target.value);
  }
  function closeMessage() {
    setConfirmationMessage(false);
  }

  const nameRef = useRef();
  const priceRef = useRef();
  const neighborhoodRef = useRef();
  const linkRef = useRef();
  const commentRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/activity`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: nameRef.current.value,
            category: categoryChoosen,
            price: priceRef.current.value,
            neighborhood: neighborhoodRef.current.value,
            link: linkRef.current.value,
            comment: commentRef.current.value,
            account_id: user.id,
            travel_id: trip.id,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        setConfirmationMessage(true);
        console.info("activity added");
      } else {
        console.error(data.message || "Une erreur s'est produite");
      }
    } catch (err) {
      console.error("Une erreur s'est produite ici :", err);
    }
  };

  return (
    <section className="activity-form-section">
      <h2> Add a new activty </h2>
      <form>
        {confirmationMessage ? (
          <div className="activity-added-container">
            <p>Activity added !</p>{" "}
            <button type="button" onClick={closeMessage}>
              Add another
            </button>
          </div>
        ) : (
          <>
            <div>
              <div>
                <label htmlFor="type">Category *</label>
              </div>
              <select
                id="name"
                name="name"
                className="input-activity"
                required
                onChange={handleChangeCategory}
              >
                <option value="">--</option>
                <option value="Food">Food</option>
                <option value="Park and nature">Park and nature</option>
                <option value="Art">Art</option>
                <option value="Events">Events</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              {" "}
              <div>
                <label htmlFor="name">Name *</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                ref={nameRef}
                className="input-activity"
                required
              />
            </div>
            <div>
              {" "}
              <div>
                <label htmlFor="email">Price (range)*</label>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                ref={priceRef}
                className="input-activity"
                required
              />
            </div>
            <div>
              {" "}
              <div>
                <label htmlFor="neighborhood">Neighborhood*</label>{" "}
              </div>
              <input
                type="text"
                id="neighborhood"
                name="neighborhood"
                ref={neighborhoodRef}
                className="input-activity"
                required
              />
            </div>
            <div>
              <div>
                <label htmlFor="link">Link</label>
              </div>
              <input
                type="link"
                id="link"
                name="link"
                ref={linkRef}
                className="input-activity"
              />
            </div>
            <div>
              <div>
                <label htmlFor="comment">Comment</label>
              </div>
              <textarea
                type="comment"
                id="comment"
                name="comment"
                ref={commentRef}
                className="input-activity"
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Add Activity
            </button>
          </>
        )}
      </form>
    </section>
  );
}
