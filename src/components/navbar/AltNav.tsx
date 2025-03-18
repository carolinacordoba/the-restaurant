import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../../styles/alt-nav.scss";
import { Link } from "react-router-dom";
import BookingPage from "../../pages/BookingPage";

interface AltNavProps {
  handleBackPageNumber: () => void;
}

const AltNav = ({ handleBackPageNumber }: AltNavProps) => {
  return (
    <div className="container child-grid-one">
      <div className="alt-nav">
        <IoIosArrowBack className="back-icon" onClick={handleBackPageNumber} />

        <div className="logo-container">
          <Link to={"/"}>
            <img src="/logga-camatheo.png" alt="logo camatheo" />
          </Link>
        </div>
      </div>
      <div>
        {/* <BookingPage></BookingPage> */}
      </div>
    </div>
  );
};

export default AltNav;
