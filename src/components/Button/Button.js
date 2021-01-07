import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

function Button({ children, href }) {
  return (
    <Link className="btn" to={href}>
      {children}
      <span className="btn-animated-background">{children}</span>
    </Link>
  );
}

export default Button;
