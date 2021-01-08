import React from "react";
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import FBCommentsContainer from "../FBCommentsContainer/FBCommentsContainer";

import "./ArticlePage.css";

function ArticlePage({ articleId }) {
  return (
    <div className="App">
      <Navbar />

      <Article articleId={articleId} />

      <FBCommentsContainer
        url={`https://localhost:3000/article/${articleId}`}
      />

      <Footer />
    </div>
  );
}

export default ArticlePage;
