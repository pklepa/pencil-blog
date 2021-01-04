import { useEffect, useState } from "react";
import { client } from "./client";
import "./assets/styles/reset.css";
import "./assets/styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";

function App() {
  const [articles, setArticles] = useState([]);

  const [tmp, setTmp] = useState();

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        console.log("response >> ", response);
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (articles[0] !== undefined) {
      setTmp(articles[0].fields);
    }
    console.log("tmp >> ", tmp);
  }, [articles, tmp]);

  return (
    <div className="App">
      <Navbar />

      <Main>
        {tmp && (
          <Card
            title={tmp.title}
            imgUrl={tmp.featuredImage.fields.file.url}
            tag={tmp.category[0]}
            content={tmp.content}
            author={tmp.author.fields.name}
            date={articles[0].sys.createdAt}
          />
        )}
      </Main>

      <div className="temp">
        <main>
          <div className="wrapper">
            <span>React and Contentful</span>

            {articles.map((article, index) => {
              return <h2 key={index}>{article.fields.title}</h2>;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
