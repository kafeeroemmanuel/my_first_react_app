/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            EDISON ESTATES <i className="fas fa-house-user" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-links">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Properties" className="nav-links">
                Properties
              </Link>
            </li>
            <li className="nav-item mobile">
              <Link to="/signup " className="nav-links">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
