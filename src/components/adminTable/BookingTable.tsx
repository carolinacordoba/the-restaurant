import { FaPen, FaTrashAlt } from "react-icons/fa";
import { IBookingResponse, IBookingUpdate } from "../../models/interfaces";
import { VscLoading } from "react-icons/vsc";
import { ChangeEvent, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { getBookings, updateBooking } from "../../services/useApi";
import React from "react";

interface IBookingData {
  bookingList: IBookingResponse[];
  setBookingList: React.Dispatch<React.SetStateAction<IBookingResponse[]>>;
  filteredBookingList: IBookingResponse[];
  setFilteredBookingList: React.Dispatch<
    React.SetStateAction<IBookingResponse[]>
  >;
  typeOfList: "filter" | "normal";
  handleRemove: (id: string) => void;
  isLoading?: boolean;
}

interface IEditMode {
  edit: boolean;
  id: string;
}

const BookingTable = (props: IBookingData) => {
  const [editMode, setEditMode] = useState<IEditMode>({ edit: false, id: "" });

  const [editedBooking, setEditedBooking] = useState<IBookingResponse>({
    _id: "",
    restaurantId: "",
    date: "",
    time: "",
    numberOfGuests: 0,
    customerId: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingChange = async () => {
    console.log("jag körs");
    const updatedBooking: IBookingUpdate = {
      id: editedBooking._id,
      restaurantId: editedBooking.restaurantId,
      date: editedBooking.date,
      time: editedBooking.time,
      numberOfGuests: editedBooking.numberOfGuests,
      customerId: editedBooking.customerId,
    };

    setEditMode((prev) => ({
      ...prev,
      edit: false,
      id: "",
    }));

    const checkDateForBookings = async () => {
      const existingBookings = await getBookings();
      const datePickedBookings = existingBookings.filter(
        (existingBooking) => existingBooking.date === editedBooking.date
      );
      if (datePickedBookings.length >= 30) return false;
      const timePickedBookings = existingBookings.filter(
        (existingBookings) => existingBookings.time === editedBooking.time
      );
      if (timePickedBookings.length >= 15) return false;
    };

    const available = await checkDateForBookings();

    if (!available) {
      return alert("Denna tiden eller datumet är fullbokad");
    } else {
      props.setBookingList((prev) =>
        prev.map((b) =>
          b._id === editedBooking._id ? { ...b, ...editedBooking } : b
        )
      );

      if (
        props.filteredBookingList.find((b) => b.date === editedBooking.date)
      ) {
        props.setFilteredBookingList((prev) =>
          prev.map((b) =>
            b._id === editedBooking._id ? { ...b, ...editedBooking } : b
          )
        );
      } else {
        props.setFilteredBookingList(
          props.filteredBookingList.filter((b) => b._id !== editedBooking._id)
        );
      }

      updateBooking(updatedBooking.id, updatedBooking);
    }
  };

  if (props.isLoading)
    return (
      <>
        <VscLoading className="loading" />
        <p>Laddar bokningar</p>
      </>
    );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>E-postadress</th>
            <th>Antal gäster</th>
            <th>Tid</th>
            <th>Datum</th>
            <th>Hantera bokningar</th>
          </tr>
        </thead>
        <tbody>
          {(props.typeOfList === "normal"
            ? props.bookingList
            : props.filteredBookingList
          ).map((b) => (
            <tr key={b._id}>
              {b.customer?.map((c) => (
                <React.Fragment key={c._id}>
                  <td>{c.name}</td>
                  <td>{c.lastname}</td>
                  <td>{c.email}</td>
                </React.Fragment>
              ))}
              <td>
                {editMode.edit && editMode.id === b._id ? (
                  <select
                    value={editedBooking.numberOfGuests}
                    name="numberOfGuests"
                    onChange={handleSelectChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                ) : (
                  b.numberOfGuests
                )}
              </td>
              <td>
                {editMode.edit && editMode.id === b._id ? (
                  <select
                    value={editedBooking.time}
                    name="time"
                    onChange={handleSelectChange}
                  >
                    <option value="18:00">18:00</option>
                    <option value="21:00">21:00</option>
                  </select>
                ) : (
                  b.time
                )}
              </td>
              <td>
                {editMode.edit && editMode.id === b._id ? (
                  <input
                    type="date"
                    value={editedBooking.date}
                    name="date"
                    onChange={handleInputChange}
                  ></input>
                ) : (
                  b.date
                )}
              </td>
              <td>
                <div className="admin-icons">
                  <div className="icon-pen">
                    {editMode.edit && editMode.id === b._id ? (
                      <IoMdCheckmark onClick={handleBookingChange} />
                    ) : (
                      <FaPen
                        onClick={() => {
                          setEditedBooking((prev) => ({
                            ...prev,
                            _id: b._id,
                            restaurantId: b.restaurantId,
                            date: b.date,
                            time: b.time,
                            numberOfGuests: b.numberOfGuests,
                            customerId: b.customerId,
                          }));
                          setEditMode((prev) => ({
                            ...prev,
                            edit: true,
                            id: b._id,
                          }));
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="icon-trash"
                    onClick={() => props.handleRemove(b._id)}
                  >
                    <FaTrashAlt />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
