/** @format */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import "../src/App.css";

import Properties from "./pages/Properties";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/properties" component={Properties} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
