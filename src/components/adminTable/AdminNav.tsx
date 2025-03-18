import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IAdminNav {
  handleFilter: (selectedDate: string) => void;
}

const AdminNav = (props: IAdminNav) => {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.handleFilter(selectedDate);
  };

  return (
    <nav>
      <input type="date" onChange={handleDateChange} value={date} />
      <h3>ALLA BOKNINGAR</h3>
      <button className="goToNewBooking"><Link to={"/boka"} >Lägg till ny bokning</Link></button>
    </nav>
  );
};

export default AdminNav;
