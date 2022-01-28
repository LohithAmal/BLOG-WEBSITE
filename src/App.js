import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Homepage/Home.jsx";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Singlepost from "./components/Singlepost/Singlepost";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route exact path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route exact path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
          <Route exact path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
