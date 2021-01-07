import React from "react";
import { format } from "date-fns";
import marked from "marked";
import { htmlToText } from "html-to-text";

import LinkButton from "../LinkButton/LinkButton";

import "./Card.css";

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

        <LinkButton href={`/article/${articleId}`}>Continue reading</LinkButton>
      </div>
    </div>
  );
}

export default Card;
