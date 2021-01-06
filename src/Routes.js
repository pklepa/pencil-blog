import React from "react";
import { Switch, Route } from "react-router-dom";
import ArticlePage from "./views/ArticlePage/ArticlePage";
import HomePage from "./views/HomePage/HomePage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/article" component={ArticlePage} />
      <Route
        exact
        path="/article/:id"
        render={(routerProps) => {
          return <ArticlePage articleId={routerProps.match.params.id} />;
        }}
      />
    </Switch>
  );
}

export default Routes;
