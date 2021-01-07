import React, { useEffect, useState } from "react";
import { client } from "../../client";
import ArticleContent from "../../components/ArticleContent/ArticleContent";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import TwitterLogo from "../../assets/images/bxl-twitter.svg";
import YoutubeLogo from "../../assets/images/bxl-youtube.svg";
import InstagramLogo from "../../assets/images/bxl-instagram.svg";
import PinterestLogo from "../../assets/images/bxl-pinterest.svg";

import "./AboutPage.css";

const SOCIAL_MEDIA_IMG_MAP = {
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  pinterest: PinterestLogo,
  twitter: TwitterLogo,
};

function AboutPage() {
  const [mainAuthor, setMainAuthor] = useState(false);

  useEffect(() => {
    client
      .getEntry("LzXckKAx0cIhXvTdbsW23")
      .then((res) => {
        console.log(res);
        setMainAuthor(res.fields);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        {mainAuthor && (
          <div className="about-intro">
            <div
              className="about-profile-pic"
              style={{
                backgroundImage: `url(${mainAuthor.profileImg.fields.file.url})`,
              }}
            ></div>
            <h1>{mainAuthor.name}</h1>
            <span>{mainAuthor.title}</span>
            <p>{mainAuthor.description}</p>

            <div className="social-media-icons">
              {Object.entries(mainAuthor.socialMedia).map((item, index) => {
                return (
                  <a
                    key={`social-${index}`}
                    href={item[1]}
                    className="social-media-icon"
                    style={{
                      backgroundImage: `url(${SOCIAL_MEDIA_IMG_MAP[item[0]]})`,
                    }}
                  ></a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
