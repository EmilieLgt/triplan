import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import TripPage from "./pages/TripPage";
import NewTripForm from "./components/trips/NewTripForm";

const getData = async () => {
  const result = await fetch("https://randomuser.me/api/?nat=gb");
  const datas = await result.json();
  return datas;
};

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/profile", element: <ProfilePage />, loader: () => getData() },
  { path: "/trip", element: <TripPage />, loader: () => getData() },
  { path: "/new-trip", element: <NewTripForm />, loader: () => getData() },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
