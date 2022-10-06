import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDo from "./ToDo";
import store from "./modules/redux/store";
import { Provider } from "react-redux";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToDo />
  </Provider>
);
