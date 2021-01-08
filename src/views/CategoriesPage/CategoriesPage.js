import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../client";
import Card from "../../components/Card/Card";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TagsContainer from "../../components/TagsContainer/TagsContainer";

import "./CategoriesPage.css";

function CategoriesPage({ categoryId }) {
  const [categories, setCategories] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(false);
  const [categoryEntries, setCategoryEntries] = useState(false);

  // Fetches the unique data when the component loads
  useEffect(() => {
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

  useEffect(() => {
    // Fetch the every entry for current category
    client
      .getEntries({
        links_to_entry: categoryId,
      })
      .then((res) => {
        console.log("Entries in the current category: ", res);
        setCategoryEntries(res.items);
      })
      .catch(console.error);
  }, [currentCategory]);

  return (
    <div className="App">
      <Navbar />

      <div className="container categories-container">
        <TagsContainer>
          {categories &&
            categories.map((category, index) => {
              return (
                <Link
                  onClick={() => setCurrentCategory(category.sys.id)}
                  to={`/category/${category.sys.id}`}
                  className={`tag ${
                    category.sys.id === categoryId ? "selected" : ""
                  }`}
                  key={`tag-${index}`}
                >
                  {category.fields.name}
                </Link>
              );
            })}
        </TagsContainer>

        <div className="articles-container">
          {categoryEntries &&
            categoryEntries.map((article, index) => {
              return (
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
              );
            })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CategoriesPage;
