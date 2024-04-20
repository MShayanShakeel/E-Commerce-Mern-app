import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Banner1 from "../../Components/Banner1/Banner1";
import Banner2 from "../../Components/Banner2/Banner2";
import LimiterOffer from "../../Components/LimitedOffer/LimiterOffer";
import Footer from "../../Components/Footer/Footer";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SiTransportforlondon } from "react-icons/si";
// import Footer from "../../../Components/Footer/Footer"

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Navbar />
          <Banner />
          <Banner1 />
          <Banner2 />
          <LimiterOffer />
          <Footer />
          <div className="last-copywrite-text container">
            <div>
              <span>
                <h5>Copyright @ 2022 BrandStore Powerred by BrandStore</h5>
              </span>
            </div>

            <div className="footer-icons">
              <span>
                <FaFacebookSquare />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <SiTransportforlondon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
