import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { client } from "../../client";

import "./Article.css";

import TwitterLogo from "../../assets/images/bxl-twitter.svg";
import YoutubeLogo from "../../assets/images/bxl-youtube.svg";
import InstagramLogo from "../../assets/images/bxl-instagram.svg";
import PinterestLogo from "../../assets/images/bxl-pinterest.svg";
import ArticleContent from "../ArticleContent/ArticleContent";

const SOCIAL_MEDIA_IMG_MAP = {
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  pinterest: PinterestLogo,
  twitter: TwitterLogo,
};

function Article({ articleId }) {
  const [article, setArticle] = useState(false);
  const [articleAuthor, setArticleAuthor] = useState(false);

  useEffect(() => {
    client
      .getEntry(articleId)
      .then((res) => {
        console.log(res);
        setArticle(res);
        setArticleAuthor(res.fields.author);
      })
      .catch(console.error);
  }, [articleId]);

  return (
    <div className="container article-container">
      {article && articleAuthor && (
        <>
          <header className="article-header">
            <h1 className="article-title">{article.fields.title}</h1>

            <div className="author-details-container">
              <div
                className="author-profile-pic"
                style={{
                  backgroundImage: `url("${articleAuthor.fields.profileImg.fields.file.url}")`,
                }}
              ></div>

              <div className="author-details-wrapper">
                <div className="author-details-left">
                  <span className="author-name">
                    {articleAuthor.fields.name}
                  </span>
                  <span className="article-date">
                    {format(new Date(article.sys.createdAt), "MMMM d, yyyy")}
                  </span>
                </div>

                <div className="author-details-right">
                  <div className="social-media-icons">
                    {Object.entries(articleAuthor.fields.socialMedia).map(
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
            </div>
          </header>
          <div
            className="featured-image"
            style={{
              backgroundImage: `url("${article.fields.featuredImage.fields.file.url}")`,
            }}
          ></div>

          <ArticleContent content={article.fields.content} />
        </>
      )}
    </div>
  );
}

export default Article;
