import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};