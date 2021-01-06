import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <p>Design by @{format(new Date(), "yyyy")} Logworks.</p>
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>
          Made by{" "}
          <a href="https://github.com/pklepa" target="_blank" rel="noreferrer">
            pklepa
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
