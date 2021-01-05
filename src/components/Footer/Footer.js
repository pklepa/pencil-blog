import React from "react";
import { format } from "date-fns";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <p>Design by @{format(new Date(), "yyyy")} Logworks.</p>
        <div className="footer-nav">
          <a href="https://google.com">Home</a>
          <a href="https://google.com">About</a>
          <a href="https://google.com">Contact</a>
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
