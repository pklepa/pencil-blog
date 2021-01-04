import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="empty"></div>
        <div className="logo">pencil</div>
        <ul className="nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
