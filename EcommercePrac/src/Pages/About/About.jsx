import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Aboutus from "../../images/Aboutus.jpg";
import aboutSecond from "../../images/istockphoto-1286378180-612x612-removebg-preview.png";

const About = () => {
  
  return (
    <div
      style={{
        // backgroundImage: `url(${Aboutus})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        opacity: "0.9", // Adjust the opacity for the background image
      }}
    >
      <Navbar />

      <div className="row aboutUs-main">
        <h1 style={{ textAlign: "center" }}>About Us</h1>
        <div className="col-6 aboutus-text">
          <p>
            Welcome to [Your E-commerce Name], your ultimate destination for
            trendy and affordable fashion! At [Your E-commerce Name], we're
            passionate about providing you with the latest styles and trends in
            men's and women's clothing, all at prices that won't break the bank.
            Whether you're looking for everyday essentials, statement pieces, or
            that perfect outfit for a special occasion, we've got you covered.
            Our team is dedicated to curating a diverse collection of clothing
            items that cater to every style, size, and occasion. From casual
            streetwear to elegant formal wear, we believe that fashion should be
            accessible to everyone, regardless of gender or body type. We take
            pride in offering high-quality clothing from trusted brands and
            emerging designers, ensuring that you always receive garments that
            are not only stylish but also made to last. With a keen eye for
            detail and a commitment to customer satisfaction, we strive to
            provide you with a seamless shopping experience from start to
            finish. But [Your E-commerce Name] is more than just a place to shop
            for clothes. We're a community of fashion enthusiasts who celebrate
            individuality and self-expression. We believe that clothing is a
            powerful form of self-expression, and we're here to help you
            discover and embrace your unique style. Thank you for choosing [Your
            E-commerce Name] as your go-to destination for all things fashion.
            We're excited to embark on this style journey with you! Happy
            shopping! Feel free to customize and tailor this text to better fit
            the tone, style, and values of your e-commerce website.
          </p>
        </div>
        <div className="col-6">
          <img
            style={{ width: "100%", opacity: 1 }}
            src={aboutSecond}
            alt="aboutSecond"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
