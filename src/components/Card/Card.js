import React from "react";
import Button from "../Button/Button";
import "./Card.css";

function Card({ size, title, imgUrl, tag, content, date }) {
  return (
    <div className={`card ${size && size === "large" ? "large-card" : ""}`}>
      <div
        className="img-wrapper"
        style={{ backgroundImage: `url("${imgUrl}")` }}
      ></div>

      <div className="card-details">
        <span className="main-category">{tag}</span>

        <h1 className="title">{title}</h1>

        <p className="content-preview">{content}</p>

        <span className="post-details">
          Posted by <strong>Eugenia</strong>, on July 24, 2019
        </span>

        <Button>Continue reading</Button>
      </div>
    </div>
  );
}

export default Card;
