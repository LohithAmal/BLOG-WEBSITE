import React from "react";
import HomeImage from "../../Assets/home-2.jpg";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-sm">React & Node</span>
        <span className="header-title-lg">Blog</span>
      </div>
      <img className="header-image" src={HomeImage} alt="home image"></img>
    </div>
  );
}
