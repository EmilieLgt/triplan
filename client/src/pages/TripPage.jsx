import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Footer from "../components/Footer";
import OneTrip from "../components/trips/oneTrip";

export default function TripPage() {
  return (
    <div className="trip-page">
      <Header />
      <HeaderMobile />
      <OneTrip />
      <Footer />
    </div>
  );
}
