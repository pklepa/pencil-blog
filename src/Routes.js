import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./views/AboutPage/AboutPage";
import ArticlePage from "./views/ArticlePage/ArticlePage";
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
    </Switch>
  );
}

export default Routes;
