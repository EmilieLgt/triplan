import { useState } from "react";
import "./trip.scss";

export default function NewActivityForm() {
  const [categoryChoosen, setCategoryChoosen] = useState();

  function handleChangeCategory(event) {
    setCategoryChoosen(event.target.value);
  }
  return (
    <section className="activity-form-section">
      <h2> Add a new activty</h2>
      <form>
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
            <option value="Parks and nature">Parks and nature</option>
            <option value="Art">Art</option>
            <option value="Events">Events</option>
            <option value="Other">Other</option>
          </select>
          {categoryChoosen}
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
            className="input-activity"
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="link">Link</label>
          </div>
          <input type="link" id="link" name="link" className="input-activity" />
        </div>
        <div>
          <div>
            <label htmlFor="comment">Comment</label>
          </div>
          <textarea
            type="comment"
            id="comment"
            name="comment"
            className="input-activity"
          />
        </div>
        <button type="button">Add Activity</button>
      </form>
    </section>
  );
}
