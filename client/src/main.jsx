import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import TripPage from "./pages/TripPage";
import NewTripForm from "./components/trips/NewTripForm";
import FriendsGestion from "./pages/FriendsGestion";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/trip", element: <TripPage /> },
      { path: "/new-trip", element: <NewTripForm /> },
      {
        path: "/friends",
        element: <FriendsGestion />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
