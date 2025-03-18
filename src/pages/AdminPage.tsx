import { useEffect, useState } from "react";
import BookingTable from "../components/adminTable/BookingTable";
import AdminNav from "../components/adminTable/AdminNav";
import { deleteBooking, getBookings, getCustomer } from "../services/useApi";
import { IBookingResponse, ICustomerResponse } from "../models/interfaces";
import "../styles/admin-page.scss";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [bookingList, setBookingList] = useState<IBookingResponse[]>([]);
  const [filteredBookingList, setFilteredBookingList] = useState<
    IBookingResponse[]
  >([]);
  const [startUp, setStartUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookingsWithCustomers = async () => {
      try {
        const bookingsResponse: IBookingResponse[] = await getBookings();

        const bookingsWithCustomers: IBookingResponse[] = await Promise.all(
          bookingsResponse.map(async (booking) => {
            const customer: ICustomerResponse[] = await getCustomer(
              booking.customerId
            );
            return { ...booking, customer };
          })
        );
        console.log("Fetched Bookings:", bookingsWithCustomers);
        setBookingList(bookingsWithCustomers);
      } catch (error) {
        console.log("error message", error);
      } finally {
        setIsLoading(false);
      }
    };

    setStartUp(true);
    fetchBookingsWithCustomers();
  }, []);

  const handleFilter = (selectedDate: string) => {
    const filteredBookings = bookingList
      .filter((booking) => booking.date === selectedDate)
      .sort((a, b) => a.time.localeCompare(b.time));
    setStartUp(false);
    if (filteredBookings.length === 0) {
      setFilteredBookingList([]);
    } else {
      setFilteredBookingList(filteredBookings);
    }
  };

  const handleRemove = (id: string) => {
    setBookingList(bookingList.filter((b) => id !== b._id));
    setFilteredBookingList(filteredBookingList.filter((b) => id !== b._id));

    deleteBooking(id);
  };

  return (
    <div className="div-container">
      <div className="logo-container">
        <Link to={"/"}>
          <img src="/logga-camatheo.png" alt="logo camatheo" />
        </Link>
      </div>
      <div className="bookings-container">
        <div className="admin-nav">
          <AdminNav handleFilter={handleFilter} />
        </div>

        <div className={`admin-table ${isLoading && "loading-div"}`}>
          {startUp ? (
            <BookingTable
              isLoading={isLoading}
              bookingList={bookingList}
              setBookingList={setBookingList}
              handleRemove={handleRemove}
              filteredBookingList={filteredBookingList}
              setFilteredBookingList={setFilteredBookingList}
              typeOfList={"normal"}
            />
          ) : (
            <>
              {filteredBookingList.length === 0 ? (
                <p>Det finns inga bokningar för det valda datumet.</p>
              ) : (
                <BookingTable
                  bookingList={bookingList}
                  setBookingList={setBookingList}
                  handleRemove={handleRemove}
                  filteredBookingList={filteredBookingList}
                  setFilteredBookingList={setFilteredBookingList}
                  typeOfList={"filter"}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
