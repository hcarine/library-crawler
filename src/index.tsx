import React from "react";
import ReactDOM from "react-dom";
import { Search } from "./components/Search";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <h1>Library crawler</h1>
    <Search />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
