import React from "react";
import { format } from "date-fns";
import Button from "../Button/Button";
import "./Card.css";

function Card({ size, title, imgUrl, tag, content, author, date }) {
  const formattedDate = format(new Date(date), "MMMM d, yyyy");

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
          Posted by <strong>{author}</strong>, on {formattedDate}
        </span>

        <Button>Continue reading</Button>
      </div>
    </div>
  );
}

export default Card;
