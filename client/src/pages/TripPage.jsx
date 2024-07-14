import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";
import OneTrip from "../components/trips/oneTrip";
import NewActivityForm from "../components/trips/NewActivityForm";

export default function TripPage() {
  const user = useLoaderData();
  return (
    <>
      <Header />
      <HeaderMobile />
      <OneTrip user={user} />
      <NewActivityForm />
      <Footer />
    </>
  );
}
