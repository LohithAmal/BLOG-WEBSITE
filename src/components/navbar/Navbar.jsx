import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = false;
  return (
    <div className="navbar">
      <div className="top-left">
        <i className=" topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="top-list-item">{user && "logout"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-image"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt=""
          ></img>
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className=" top-searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
