import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllContextProvider } from "./AllContext";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import TripPage from "./pages/TripPage";
import NewTripForm from "./components/trips/NewTripForm";
import FriendsGestion from "./pages/FriendsGestion";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/error", element: <ErrorPage /> },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/trip/:id",
        element: (
          <ProtectedRoute>
            <TripPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/new-trip",
        element: (
          <ProtectedRoute>
            <NewTripForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/friends",
        element: (
          <ProtectedRoute>
            <FriendsGestion />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AllContextProvider>
      <RouterProvider router={router} />
    </AllContextProvider>
  </React.StrictMode>
);
