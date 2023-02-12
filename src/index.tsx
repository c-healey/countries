import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ModeProvider } from "./context/ModeContext";
import { SearchProvider } from "./context/SearchContext";
import { CountriesProvider } from "./context/CountriesContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <SearchProvider>
        <ModeProvider>
          <CountriesProvider>
            <App />
          </CountriesProvider>
        </ModeProvider>
      </SearchProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
