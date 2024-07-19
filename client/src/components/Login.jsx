import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useRef } from "react";
import { AllContext } from "../AllContext";

export default function Login() {
  const { login, successMessage } = useContext(AllContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const pswRef = useRef();

  const handleLogin = async () => {
    const userLogged = {
      email: emailRef.current.value,
      password: pswRef.current.value,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/account/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userLogged),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        const tripsResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/travel/user/${data.account.id}`
        );
        const friendsFromRequestReponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/friend/friends/${data.account.id}`
        );
        const friendsPostRequestReponse = await fetch(
          `${import.meta.env.VITE_API_URL}/api/friend/request/${data.account.id}`
        );
        const tripsData = await tripsResponse.json();
        const friendsFromRequestData = await friendsFromRequestReponse.json();
        const friendsPostRequestData = await friendsPostRequestReponse.json();

        login(
          data.account,
          tripsData,
          friendsFromRequestData,
          friendsPostRequestData
        );

        navigate("/profile");
      } else {
        console.error(data.message || "Une erreur s'est produite");
      }
    } catch (err) {
      console.error("Une erreur s'est produite :", err);
    }
  };

  return (
    <div className="login-page">
      <section className="login-decorative">
        <h1>triplan</h1>
        <div className="login-decorative-yellow" />
        <div className="login-decorative-pink" />
        <div className="login-decorative-green" />
        <img
          src="/src/assets/images/triplan-logo.svg"
          alt="logo"
          className="logo"
        />
      </section>
      <section className="login-decorative-mobile">triplan</section>
      <section className="login-form">
        <div className="login-text">
          <span className="span-yellow">Plan</span> your activities for your
          next<span className="span-orange"> trip</span> with your friends or
          family!
          {successMessage ? (
            <div className="register-success-text">
              Your registration has been successful. You can now log in.
            </div>
          ) : (
            <span />
          )}
        </div>

        <form>
          <label htmlFor="e-mail">
            <div> E-mail</div>
            <input type="email" ref={emailRef} />
          </label>
          <label htmlFor="password">
            {" "}
            <div>Password</div>
            <input type="password" ref={pswRef} />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="register">
          No account yet ?{" "}
          <Link to="/register" className="link-register">
            {" "}
            Sign up !
          </Link>
        </div>
      </section>
    </div>
  );
}
