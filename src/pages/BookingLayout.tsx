
import { Outlet } from "react-router-dom";
import AltFooter from "../components/footer/AltFooter";
import "../styles/booking-page.scss"

const BookingLayOut = () => {
  return (
    <div className="grid-container">
      <Outlet />
      <AltFooter />
    </div>
  );
};

export default BookingLayOut;
