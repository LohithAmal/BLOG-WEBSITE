import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input type="text" placeholder="enter your username....." />
        <label>Email</label>
        <input type="text" placeholder="enter your email....." />
        <label>Password</label>
        <input type="text" placeholder="enter your password..." />
        <button className="register-btn">Register</button>
      </form>
      <button className="register-login-btn">Login</button>
      <Link className="link" to="/login">
        LOGIN
      </Link>
    </div>
  );
};

export default Register;
