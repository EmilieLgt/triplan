import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OneTrip from "../components/trips/oneTrip";
import NewActivityForm from "../components/trips/NewActivityForm";

export default function TripPage() {
  const user = useLoaderData();
  return (
    <>
      <Header />
      <OneTrip user={user} />
      <NewActivityForm />
      <Footer />
    </>
  );
}
