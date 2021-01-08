import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./views/AboutPage/AboutPage";
import ArticlePage from "./views/ArticlePage/ArticlePage";
import CategoriesPage from "./views/CategoriesPage/CategoriesPage";
import ContactPage from "./views/ContactPage/ContactPage";
import HomePage from "./views/HomePage/HomePage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route
        exact
        path="/article/:id"
        render={(routerProps) => {
          return <ArticlePage articleId={routerProps.match.params.id} />;
        }}
      />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/categories" component={CategoriesPage} />
      <Route
        exact
        path="/category/:id"
        render={(routerProps) => {
          return <CategoriesPage categoryId={routerProps.match.params.id} />;
        }}
      />
    </Switch>
  );
}

export default Routes;
