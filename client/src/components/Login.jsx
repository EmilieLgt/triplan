import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
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
        </div>

        <form>
          <label htmlFor="e-mail">
            <div> E-mail</div>
            <input type="email" />
          </label>
          <label htmlFor="password">
            {" "}
            <div>Password</div>
            <input type="password" />
          </label>
          <button type="button">Login</button>
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
