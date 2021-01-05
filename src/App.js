import { useEffect, useState } from "react";
import { client } from "./client";

import "./assets/styles/reset.css";
import "./assets/styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

function App() {
  const [articles, setArticles] = useState(false);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        console.log("response >> ", response);
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Main>
        {articles && (
          <Card
            isFeatured
            title={articles[0].fields.title}
            imgUrl={articles[0].fields.featuredImage.fields.file.url}
            tag={articles[0].fields.category[0]}
            content={articles[0].fields.content}
            author={articles[0].fields.author.fields.name}
            date={articles[0].sys.createdAt}
          />
        )}

        <div className="inner-grid">
          <div className="articles-container">
            {articles &&
              articles.map((article, index) => {
                return (
                  index > 0 && (
                    <Card
                      title={article.fields.title}
                      imgUrl={article.fields.featuredImage.fields.file.url}
                      tag={article.fields.category[0]}
                      content={article.fields.content}
                      author={article.fields.author.fields.name}
                      date={article.sys.createdAt}
                    />
                  )
                );
              })}
          </div>
          <nav className="side-nav-container"></nav>
        </div>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
