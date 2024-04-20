import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import ContactImage from "../../images/contact.jpg";
import Footer from "../../Components/Footer/Footer";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { SiTransportforlondon } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ContactImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          opacity: "0.8",
        }}
      >
        <Navbar />
        <div className="contact-main">
          <div className="contact-second">
            <label>
              <h5 style={{ textAlign: "center" }}>
                How Can We Help You Today?
              </h5>
            </label>
            <br />
            <textarea type="search" />
            <div className="Contact-social-icons">
              <FaFacebook />
              <FaYoutube />
              <FaLinkedin />
              <SiTransportforlondon />
              <FaWhatsappSquare />
            </div>
            <div className="contact-button">
              <button>Send</button>
            </div>
          </div>
        </div>
        {/* <div className="Contact-social-icons">
          <FaFacebook />
          <FaYoutube />
          <FaLinkedin />
          <SiTransportforlondon />
          <FaWhatsappSquare />
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
