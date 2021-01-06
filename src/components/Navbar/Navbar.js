import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="empty"></div>
        <Link to="/" className="logo">
          pencil
        </Link>
        <ul className="nav">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
