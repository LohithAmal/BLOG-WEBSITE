import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Homepage/Home.jsx";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Write />
      </>
    </div>
  );
}

export default App;
