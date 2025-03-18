import { Link } from "react-router-dom";
import "../../styles/booking-confirmation.scss";
import { IBooking } from "../../models/interfaces";

interface bookingConfirmationProps {
  booking: IBooking;
}

const BookingConfirmation = ({ booking }: bookingConfirmationProps) => {
  return (
    <div className="booking-confirmation child-grid-four">
      <div className="top">
        <h3>Tack {booking.customer.name} för din bokning!</h3>
        <h4>
          Du (+{booking.numberOfGuests - 1} amigos) är mycket välkomna till oss
          på Dos Camatheo:
        </h4>
      </div>
      <div>
        <p>
          <strong>Datum:</strong> {booking.date}
        </p>
        <p>
          <strong>Tid:</strong> {booking.time}
        </p>
        <p>
          <strong>Antal gäster:</strong> {booking.numberOfGuests}
        </p>
      </div>
      <button>
        <Link to={"/"}>Stäng sidan</Link>
      </button>
    </div>
  );
};

export default BookingConfirmation;
