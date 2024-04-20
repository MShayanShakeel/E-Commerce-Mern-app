import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const validUser = localStorage.getItem("user");
  const validToken = localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/singup");
  };
  return (
    <>
      <div>
        <div className="Navbar-second row">
          <div className="left-postion col-12">
            {" "}
            <Link to={"/"}>
              <h2 style={{cursor : "pointer"}}>Logo</h2>
            </Link>
            <ul>
              <Link to={"/"}>
                <li>EVERYTHING</li>
              </Link>
              <Link to={"/Products"}>
                <li>ALL PRODUCTS</li>
              </Link>
              <Link to={"/Offers"}>
                <li>Offers</li>
              </Link>
              <Link to={"/AddProduct"}>
                <li>AddProduct</li>
              </Link>
            </ul>
          </div>

          <div className="Right-postion">
            <div>
              <Link to={"/About"}>
                <span className="about-us">About Us</span>
              </Link>
            </div>
            <div>
              <Link to={"/Contact"}>
                <span className="about-us">Contact Us</span>
              </Link>
            </div>

            {validUser || validToken ? (
              <button onClick={handleLogOut}>LogOut</button>
            ) : (
              <>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/singup">
                  <button>Sing Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
