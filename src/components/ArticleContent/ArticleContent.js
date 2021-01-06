import React from "react";
import marked from "marked";

import "./ArticleContent.css";

function ArticleContent({ content }) {
  return (
    <div
      className="article-content"
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  );
}

export default ArticleContent;
