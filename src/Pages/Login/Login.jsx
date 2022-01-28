import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input type="text" placeholder="enter your email....." />
        <label>Password</label>
        <input type="text" placeholder="enter your password..." />
        <button className="login-btn">Login</button>
      </form>
      <button className="login-register-btn">Register</button>
      <Link className="link" to="/register">
        Register
      </Link>
    </div>
  );
};

export default Login;
