import React from "react";
import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Your Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-profile-picture">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              alt="profile-picture"
            />
            <label htmlFor="file-input">
              <i className="settings-profile-picture-icon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="amal" />
          <label>Email</label>
          <input type="email" placeholder="lohith05amal@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
