import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function ArticlePage({ articleId }) {
  return (
    <div className="App">
      <Navbar />

      <h1>hello mundo from {articleId}</h1>
      <Footer />
    </div>
  );
}

export default ArticlePage;
