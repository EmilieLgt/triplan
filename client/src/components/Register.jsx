import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { AllContext } from "../AllContext";

export default function Register() {
  const { setSuccessMessage } = useContext(AllContext);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const pswRef = useRef();
  const imageRef = useRef();

  const navigate = useNavigate();

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

  const handleRegister = async (event) => {
    event.preventDefault();
    const image1File = imageRef.current.files[0];

    try {
      const image1Path = await handleUpload(image1File);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/account`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password: pswRef.current.value,
            picture: image1Path,
          }),
        }
      );

      const data = await response.json();
      if (response.status === 201) {
        navigate("/");
        setSuccessMessage(true);
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
      <div className="text-register">
        <h2>
          Welcome to <span className="span-orange">triplan</span>
        </h2>

        <img
          src="/src/assets/images/drawing-register.png"
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
          Your first name, last name and picture will be visible by other users
        </p>
        <form>
          <div>
            <div>
              {" "}
              <label htmlFor="name">First name *</label>{" "}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="input-register"
              ref={firstnameRef}
              required
            />
          </div>
          <div>
            {" "}
            <div>
              <label htmlFor="surname">Last surname *</label>
            </div>
            <input
              type="text"
              id="surname"
              name="surname"
              className="input-register"
              ref={lastnameRef}
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
              ref={emailRef}
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
              ref={pswRef}
              required
            />
          </div>
        </form>
        <div className="register-picture-container">
          <label htmlFor="profilePicture">Profile Picture </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            ref={imageRef}
          />
        </div>
        <Link to="/profile">
          <button type="submit" onClick={handleRegister}>
            Submit
          </button>
        </Link>
      </div>
    </>
  );
}
