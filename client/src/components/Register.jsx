import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="text-register">
        <h2>
          Welcome to <span className="span-orange">triplan</span>
        </h2>

        <img
          src="/src/assets/images/whole-dec-register.svg"
          className="register-logo"
          alt="decorative img"
        />

        <div className="register-p1">
          Discover a new way to <span className="span-orange">plan trips</span>{" "}
          with your friends{" "}
        </div>
        <div className="register-p2">
          Establish your own{" "}
          <span className="span-green">holiday planning</span>.
        </div>
        <div className="register-p3">
          Start your own trip projects to{" "}
          <span className="span-yellow">gather ideas</span> !{" "}
        </div>
      </div>{" "}
      <div className="form-register">
        <h2>Register</h2>
        <p className="legals">
          Your name, surname and picture will be visible by other users
        </p>
        <form>
          <div>
            <div>
              {" "}
              <label htmlFor="name">Name *</label>{" "}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="input-register"
              required
            />
          </div>
          <div>
            {" "}
            <div>
              <label htmlFor="surname">Surname *</label>
            </div>
            <input
              type="text"
              id="surname"
              name="surname"
              className="input-register"
              required
            />
          </div>
          <div>
            {" "}
            <div>
              <label htmlFor="email">Email *</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="input-register"
              required
            />
          </div>
          <div>
            {" "}
            <div>
              <label htmlFor="password">Password *</label>{" "}
            </div>
            <input
              type="password"
              id="password"
              name="password"
              className="input-register"
              required
            />
          </div>
        </form>
        <div className="register-picture-container">
          <label htmlFor="profilePicture">Profile Picture </label>
          <input type="file" id="profilePicture" name="profilePicture" />
        </div>
        <Link to="/profile">
          <button type="submit">Submit</button>
        </Link>
      </div>
    </>
  );
}
