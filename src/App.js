import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/reset.css";
import "./assets/styles/global.css";

import Routes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
