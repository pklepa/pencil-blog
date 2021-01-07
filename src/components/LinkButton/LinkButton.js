import React from "react";
import { Link } from "react-router-dom";

// import "./LinkButton.css";

function LinkButton({ children, href }) {
  return (
    <Link to={href}>
      <div className="btn">
        {children}
        <span className="btn-animated-background">{children}</span>
      </div>
    </Link>
  );
}

export default LinkButton;
