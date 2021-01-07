import React from "react";

import "./Button.css";

function Button({ children, secondary, onClick, type }) {
  return (
    <button
      type={type && type}
      className={`btn ${secondary && "secondary"}`}
      onClick={onClick && onClick}
    >
      {children}
      <span className="btn-animated-background">{children}</span>
    </button>
  );
}

export default Button;
