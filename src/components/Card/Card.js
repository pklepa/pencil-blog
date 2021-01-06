import React from "react";
import { format } from "date-fns";
import marked from "marked";
import { htmlToText } from "html-to-text";

import "./Card.css";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Card({
  isFeatured,
  title,
  imgUrl,
  tag,
  content,
  author,
  date,
  articleId,
}) {
  const formattedDate = format(new Date(date), "MMMM d, yyyy");

  return (
    <div className={`card ${isFeatured && "featured-card"}`}>
      <div
        className="img-wrapper"
        style={{ backgroundImage: `url("${imgUrl}")` }}
      ></div>

      <div className="card-details">
        <span className="main-category">{tag}</span>

        <h1 className="title">{title}</h1>

        <p className="content-preview">
          {htmlToText(marked(content), { baseElement: "p" })}
        </p>

        <span className="post-details">
          Posted by <strong>{author}</strong>, on {formattedDate}
        </span>

        <Button href={`/article/${articleId}`}>Continue reading</Button>
      </div>
    </div>
  );
}

export default Card;
