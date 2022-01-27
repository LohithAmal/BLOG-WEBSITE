import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Singlepost from "../../components/Singlepost/Singlepost";
import "./Single.css";

function Single() {
  return (
    <div className="single">
      {/* post */}
      <Singlepost />
      <Sidebar />
    </div>
  );
}

export default Single;
