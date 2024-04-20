import React from "react";
import "./LimiterOffer.css";
import LimiterOfferpic from "../../images/LimiterOfferpic-removebg-preview.png";
import { GiWorld } from "react-icons/gi";
import { PiEqualizerFill } from "react-icons/pi";
import { MdLocalOffer } from "react-icons/md";
import { GrSecure } from "react-icons/gr";

const LimiterOffer = () => {
  return (
    <>
      <div className="row LimiterOffer-main">
        <div className="LimiterOffer-second"> 
        <div className="col-6 LimiterOfferpic-second">
          <div className="gap-content">
            <h5>Limited Time Offer</h5>
            <h1>Special Edition</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              nobis quod deserunt nam enim, sint dolore quaerat asperiores
              suscipit placeat.
            </p>
            <h5>Buy This T-shirt At 20% Discount, Use Code OFF20</h5>
            <button className="home-button-white">SHOP NOW</button>
          </div>
        </div>
        <div className="col-6 LimiterOfferpic-second-img">
          <img src={LimiterOfferpic} alt="" />
        </div>
        </div>
        <div className="limitedOffer-icons-main">
          <div className="Limited-vertical-center">
            {" "}
            <h2>
              {" "}
              <GiWorld />
            </h2>
            <h4>Worldwide Shipping</h4>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            </p>
          </div>
          <div className="Limited-vertical-center">
            {" "}
            <h2>
              {" "}
              <PiEqualizerFill />
            </h2>
            <h4>Best Quality</h4>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            </p>
          </div>
          <div className="Limited-vertical-center">
            {" "}
            <h2>
              <MdLocalOffer />
            </h2>
            <h4>Best Offers</h4>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            </p>
          </div>
          <div className="Limited-vertical-center">
            {" "}
            <h2>
              <GrSecure />
            </h2>
            <h4>Secure Payments</h4>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimiterOffer;
