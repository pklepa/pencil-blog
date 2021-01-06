import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

function Button({ children, href }) {
  return (
    <Link to={href} className="btn">
      {children}
    </Link>
  );
}

export default Button;
