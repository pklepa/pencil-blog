import React from "react";
import Article from "../../components/Article/Article";
import FacebookComments from "../../components/FacebookComments/FacebookComments";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import useWindowDimensions from "../../assets/utils/useWindowDimensions";

import "./ArticlePage.css";

function ArticlePage({ articleId }) {
  const { width } = useWindowDimensions();

  return (
    <div className="App">
      <Navbar />

      <Article articleId={articleId} />

      <FacebookComments
        url={`https://localhost:3000/article/${articleId}`}
        width={width}
      />

      <Footer />
    </div>
  );
}

export default ArticlePage;
