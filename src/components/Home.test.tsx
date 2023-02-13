import { ModeProvider } from "../context/ModeContext";
import { SearchProvider } from "../context/SearchContext";
import { CountriesProvider } from "../context/CountriesContext";
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
const Peru = [
  {
    name: "Peru",
    topLevelDomain: [""],
    alpha2Code: "",
    alpha3Code: "",
    callingCodes: [""],
    capital: "",
    altSpellings: [""],
    region: "",
    subregion: "",
    population: 0,
    latlng: [0, 0],
    demonym: "",
    area: 0,
    gini: 0,
    timezones: [""],
    borders: [""],
    nativeName: "",
    numericCode: "",
    currencies: [
      {
        code: "",
        name: "",
        symbol: "",
      },
    ],
    languages: [
      {
        iso639_1: "",
        iso639_2: "",
        name: "",
        nativeName: "",
      },
    ],
    translations: {
      de: "",
      es: "",
      fr: "",
      ja: "",
      it: "",
      br: "",
      pt: "",
      nl: "",
      hr: "",
      fa: "",
    },
    flag: "",
    regionalBlocs: [
      {
        acronym: "",
        name: "",
        otherAcronyms: [""],
        otherNames: [""],
      },
    ],
    cioc: "",
  },
];
describe("test home page", () => {
  test("renders Home", () => {
    render(
      <Router>
        <SearchProvider>
          <ModeProvider>
            <CountriesProvider countryList={Peru}>
              <Home />
            </CountriesProvider>
          </ModeProvider>
        </SearchProvider>
      </Router>
    );
    const linkElement = screen.getByText(/Peru/i);
    expect(linkElement).toBeInTheDocument();
  });
});
