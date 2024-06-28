/* eslint-disable import/no-unresolved */
import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OneTrip from "../components/trips/OneTrip";

export default function TripPage() {
  const user = useLoaderData();
  return (
    <>
      <Header />
      <h2>My trips</h2>
      <OneTrip user={user} />
      <Footer />
    </>
  );
}
