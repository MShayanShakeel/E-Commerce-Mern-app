import React from "react";
import "./Banner.css";
import home from "../../images/home.png";

const Banner = () => {
  return (
    <>
      <div className="row home-main">
        <div className="col-5 home-main-left">
          <div className="home-context-main">
            <div className="home-content">
              <h1>Raining Offers For Hot Summer!</h1>
            </div>
            <div className="home-content">
              <h3>25% Off On All Products</h3>
            </div>
            <div className="home-content home-button">
              <button className="home-button-white">SHOP NOW</button>
              <button className="home-button-blue">FIND MORE</button>
            </div>
          </div>
        </div>
        <div className="col-7 home-main-right">
          <div className="home-main-image">
            <img src={home} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
