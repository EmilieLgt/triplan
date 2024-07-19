import { Link } from "react-router-dom";
import "./App.scss";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1>triplan</h1>
      <p> Nothing to find here !</p>{" "}
      <p>
        You have to{" "}
        <Link to="/register">
          {" "}
          <span className="span-yellow">register</span>
        </Link>{" "}
        or{" "}
        <Link to="/">
          {" "}
          <span className="span-yellow">login</span>
        </Link>{" "}
        to access this page.
      </p>
    </div>
  );
}
