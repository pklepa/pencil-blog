import React from "react";
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function ArticlePage({ articleId }) {
  return (
    <div className="App">
      <Navbar />

      <Article articleId={articleId} />

      <Footer />
    </div>
  );
}

export default ArticlePage;
