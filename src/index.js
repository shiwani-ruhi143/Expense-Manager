import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import LoaderState from "./Context/LoaderState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <LoaderState>
      <App />
    </LoaderState>
  </Router>
);
