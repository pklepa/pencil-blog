import { useEffect, useState } from "react";
import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import { client } from "./client";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>hello mundo</h1>
      <div className="container">
        <header>
          <div className="wrapper">
            <span>React and Contentful</span>

            {articles.map((article, index) => {
              return <h2 key={index}>{article.fields.title}</h2>;
            })}
          </div>
        </header>
        <main>
          <div className="wrapper"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
