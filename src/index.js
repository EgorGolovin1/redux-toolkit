import React from "react";
import ReactDOM from "react-dom/client";
import ToDo from "./ToDo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./modules/redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToDo />
    </PersistGate>
  </Provider>
);
