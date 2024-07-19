import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AllContext } from "./AllContext";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AllContext);

  if (!isLoggedIn) {
    return <Navigate to="/error" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
