import React, { useState } from "react";
import "../Singup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      console.log("some thing is missing ");
      return;
    }
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(`${window.location.origin}/login`, data)
      .then((res) => {
        console.log(res, "Login success RES");
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", JSON.stringify(res.data.auth));
        navigate("/");
      })
      .catch((err) => {
        console.log(err, "login error");
      });
  };

  console.log(email, password, "emailpassword ");
  return (
    <>
      <div className="sing-up-main">
        <div className="signup-form">
          <h2>Login Here</h2>
          <form action="#">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <Link to="/singup">
              <p>Create Account</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
