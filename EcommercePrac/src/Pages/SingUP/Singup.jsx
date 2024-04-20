import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Singup.css";
import { Link, useNavigate } from "react-router-dom";
import UserHerders from "../../UserHerders";

const Singup = () => {
  const validUser = localStorage.getItem("user");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  console.log(userName, userEmail, userPass);
  useEffect(() => {
    const validUser = localStorage.getItem("user");
    if (!validUser) {
      navigate("/singup");
    } else {
      navigate("/");
    }
  }, []);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleShowAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  // API FUNCTION
  const register = () => {
    if (!userName || !userEmail || !userPass) {
      console.log("Some thing is missing");
      return;
    }
    const data = {
      name: userName,
      email: userEmail,
      password: userPass,
    };

    axios
      .post(`${window.location.origin}/register`, data)
      .then((res) => {
        console.log(res, "success response");
        handleShowAlert(res?.data);
        alert(res?.data);
        localStorage.setItem("user", JSON.stringify(res?.data));
        navigate("/login");
      })
      .catch((err) => {
        console.log(err, "error response");
      });
  };

  return (
    <>
      {showAlert && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="sing-up-main">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form action="#">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
            />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
            <Link to="/login">
              <p>I have Already Account</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Singup;
