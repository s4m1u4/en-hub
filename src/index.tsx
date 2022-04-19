import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "App";
import { store } from "store";

import "assets/styles/index.css";

const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
