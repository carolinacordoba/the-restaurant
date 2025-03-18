import AltNav from "../components/navbar/AltNav";
import DatePicker from "../components/booking/DatePicker";
import { useEffect, useReducer, useState } from "react";
import { bookingReducer, initialBooking } from "../reducer/bookingReducer";
import TimePicker from "../components/booking/TimePicker";
import NumberOfGuests from "../components/booking/NumberOfGuests";
import CustomerForm from "../components/booking/CustomerForm";
import { useNavigate } from "react-router-dom";
import BookingConfirmation from "../components/booking/BookingConfirmation";
import { useBookingContext } from "../hooks/useBookingContext";


const BookingPage = () => {
  const [booking, dispatch] = useReducer(bookingReducer, initialBooking);
  const [pageNumber, setPageNumber] = useState(0);
  const { fetchBookings } = useBookingContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (booking.date) {
      fetchBookings();
    }
  }, [booking.date])

  const handleNextPageNumber = () => {
    setPageNumber(pageNumber + 1);
  };
  const handleBackPageNumber = () => {
    if (pageNumber === 0 || pageNumber === 4) {
      navigate("/");
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const pages = [
    <DatePicker dispatch={dispatch} handleNextPageNumber={handleNextPageNumber} />,
    <TimePicker booking={booking} dispatch={dispatch} handleNextPageNumber={handleNextPageNumber} />,
    <NumberOfGuests booking={booking} dispatch={dispatch} handleNextPageNumber={handleNextPageNumber} />,
    <CustomerForm handleNextPageNumber={handleNextPageNumber} booking={booking} dispatch={dispatch} />,
    <BookingConfirmation booking={booking} />
  ]

  return (
    <>
      <AltNav handleBackPageNumber={handleBackPageNumber} />
      <img
        className="side-img child-grid-two"
        src="/Colombian-Patacones-4-1024x683.webp"
        alt="colombian food"
      />
      {pages[pageNumber]}
    </>
  );
};

export default BookingPage;
