import React from "react";
import "./Sidebar.css";
import About from "../../Assets/about.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <div className="sidebar-title">ABOUT ME</div>
        <img className="about-image" src={About} alt="About image"></img>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          aspernatur!
        </p>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-title">CATEGORIES</div>
        <ul>
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-title">FOLLOW US</div>
        <div className="sidebar-social">
          <i className=" sidebar-icon fab fa-facebook"></i>
          <i className="sidebar-icon fab fa-twitter"></i>
          <i className="sidebar-icon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
