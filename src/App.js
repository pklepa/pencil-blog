import { useEffect, useState } from "react";
import { client } from "./client";

import "./assets/styles/reset.css";
import "./assets/styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

import TwitterLogo from "../src/assets/images/bxl-twitter.svg";
import YoutubeLogo from "../src/assets/images/bxl-youtube.svg";
import InstagramLogo from "../src/assets/images/bxl-instagram.svg";
import PinterestLogo from "../src/assets/images/bxl-pinterest.svg";

const SOCIAL_MEDIA_IMG_MAP = {
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  pinterest: PinterestLogo,
  twitter: TwitterLogo,
};

function App() {
  const [articles, setArticles] = useState(false);
  const [mainAuthor, setMainAuthor] = useState(false);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        setArticles(response.items);
      })
      .catch(console.error);

    client
      .getEntry("LzXckKAx0cIhXvTdbsW23")
      .then((res) => {
        setMainAuthor(res.fields);
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
                      key={`card-${index}`}
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

          <nav className="side-nav-container">
            {mainAuthor && (
              <div className="author-preview">
                <div className="preview-header">
                  <div
                    className="profile-pic"
                    style={{
                      backgroundImage: `url("${mainAuthor.profileImg.fields.file.url}")`,
                    }}
                  ></div>
                  <div className="profile-details">
                    <h1>{mainAuthor.name}</h1>
                    <span>{mainAuthor.title}</span>
                  </div>
                </div>
                <p className="preview-description">{mainAuthor.description}</p>

                <div className="preview-footer">
                  <span>View on: </span>
                  <div className="social-media-icons">
                    {Object.entries(mainAuthor.socialMedia).map(
                      (item, index) => {
                        return (
                          <a
                            key={`social-${index}`}
                            href={item[1]}
                            className="social-media-icon"
                            style={{
                              backgroundImage: `url(${
                                SOCIAL_MEDIA_IMG_MAP[item[0]]
                              })`,
                            }}
                          ></a>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
