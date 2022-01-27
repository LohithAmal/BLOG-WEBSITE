import React from "react";
import Header from "../../Header/Header";
import Post from "../../Posts/Post";
import Sidebar from "../../Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
}
