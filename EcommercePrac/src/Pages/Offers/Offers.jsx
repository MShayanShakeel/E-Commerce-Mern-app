import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Offers.css";

const Offers = () => {
  return (
    <div>
      <Navbar />
      <div className="Offers-main">
        <div className="Offers-second">
          <h2>"No Offers Available Today!"</h2>
          <h2>"Check Back Later for Exclusive Offers!"</h2>
          <h2>"New Offers Arriving Shortly!"</h2>
        </div>
      </div>
    </div>
  );
};

export default Offers;
