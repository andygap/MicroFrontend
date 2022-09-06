import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider, generateClassName } from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generateClassName = generateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </Router>
  );
};
