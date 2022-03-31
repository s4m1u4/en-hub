import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { Header } from "components";
import { RoutesList } from "routes";

export const App = () => {
  return (
    <BrowserRouter>
      {/*<Header />*/}
      <RoutesList />
    </BrowserRouter>
  );
};
