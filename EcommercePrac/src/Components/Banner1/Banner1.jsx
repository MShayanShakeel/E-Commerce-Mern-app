import React from "react";
import "./Banner1.css";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";
import logo3 from "../../images/logo3.svg";
import logo4 from "../../images/logo4.svg";
import logo5 from "../../images/logo5.svg";
import banner1 from "../../images/banner1-removebg-preview.png";
import banner12 from "../../images/banner12-removebg-preview.png";
import banner3 from "../../images/banner3-removebg-preview.png";

const Banner1 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner1-main-images">
              <div className="banner1-images">
                <img src={logo1} alt="logoimage" />
              </div>
              <div className="banner1-images">
                <img src={logo2} alt="logo2" />
              </div>
              <div className="banner1-images">
                <img src={logo5} alt="logo1" />
              </div>
              <div className="banner1-images">
                <img src={logo4} alt="logo4" />
              </div>
              <div className="banner1-images">
                <img src={logo3} alt="logo3" />
              </div>
            </div>
            <div className="banner1-main-images-second">
              <div className="banner1-second" style={{ background: "#7B5E62" }}>
                <img src={banner1} alt="" />
                <div className="image-upper-content-div">
                  <h4>20% Off On Tank Tops</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem sed.
                  </p>
                  <button className="home-button-white">SHOP NOW</button>
                </div>
              </div>
              <div className="banner1-second" style={{ background: "#164E66" }}>
                <img src={banner12} alt="" />
                <div className="image-upper-content-div">
                  <h4>Latest Collection for you</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem sed.
                  </p>
                  <button className="home-button-white">SHOP NOW</button>
                </div>
              </div>

              <div className="banner1-second" style={{ background: "#7E646F" }}>
                <img src={banner3} alt="" />
                <div className="image-upper-content-div">
                  <h4>Kids Special Collection</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem sed.
                  </p>
                  <button className="home-button-white">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
