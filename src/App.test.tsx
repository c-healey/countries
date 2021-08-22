import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ModeProvider } from "./context/ModeContext";
import { SearchProvider } from "./context/SearchContext";
import { CountriesProvider } from "./context/CountriesContext";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(
    <SearchProvider>
      <ModeProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ModeProvider>
    </SearchProvider>
  );
  const linkElement = screen.getByText(/where in the world/i);
  expect(linkElement).toBeInTheDocument();
});
