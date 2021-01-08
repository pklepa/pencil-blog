import React, { useEffect, useState } from "react";
import { client } from "../../client";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

import TwitterLogo from "../../assets/images/bxl-twitter.svg";
import YoutubeLogo from "../../assets/images/bxl-youtube.svg";
import InstagramLogo from "../../assets/images/bxl-instagram.svg";
import PinterestLogo from "../../assets/images/bxl-pinterest.svg";
import Button from "../../components/Button/Button";

const SOCIAL_MEDIA_IMG_MAP = {
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  pinterest: PinterestLogo,
  twitter: TwitterLogo,
};

function HomePage() {
  const [articles, setArticles] = useState(false);
  const [mainAuthor, setMainAuthor] = useState(false);
  const [categories, setCategories] = useState(false);
  const [limit, setLimit] = useState(7);
  const [total, setTotal] = useState(7);

  // Listens for limit changes in order to update the articles displayed
  useEffect(() => {
    // Fetch every blogPost up to the defined limit
    client
      .getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt",
        limit: limit,
      })
      .then((response) => {
        console.log(response);
        setTotal(response.total);
        setArticles(response.items);
      })
      .catch(console.error);
  }, [limit]);

  // Fetches the unique data when the component loads
  useEffect(() => {
    // Fetch the main author
    client
      .getEntry("LzXckKAx0cIhXvTdbsW23")
      .then((res) => {
        setMainAuthor(res.fields);
      })
      .catch(console.error);

    // Fetch every category for the tags sidebar
    client
      .getEntries({ content_type: "category" })
      .then((response) => {
        // Order categories alphabetically
        response.items.sort((a, b) =>
          a.fields.name.localeCompare(b.fields.name)
        );
        setCategories(response.items);
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
            tag={articles[0].fields.categories[0].fields.name}
            content={articles[0].fields.content}
            author={articles[0].fields.author.fields.name}
            date={articles[0].sys.createdAt}
            articleId={articles[0].sys.id}
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
                      tag={article.fields.categories[0].fields.name}
                      content={article.fields.content}
                      author={article.fields.author.fields.name}
                      date={article.sys.createdAt}
                      articleId={article.sys.id}
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

            <div className="sidebar-content">
              <h1>Tags</h1>

              <div className="tags-container">
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <Link
                        to="/categories"
                        className="tag"
                        key={`tag-${index}`}
                      >
                        {category.fields.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </nav>
        </div>

        {limit < total && (
          <div className="load-btn-wrapper">
            <Button secondary onClick={() => setLimit(limit + 6)}>
              Load more
            </Button>
          </div>
        )}
      </Main>

      <Footer />
    </div>
  );
}

export default HomePage;
