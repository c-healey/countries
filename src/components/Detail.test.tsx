import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CountriesProvider } from "../context/CountriesContext";
import Detail from "./Detail";
const Peru = {
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
};

describe("test header", () => {
  test("render header", () => {
    render(
      <Router>
        <CountriesProvider country={Peru}>
          <Detail />
        </CountriesProvider>
      </Router>
    );
    expect(screen.getByText(/Peru/i)).toBeInTheDocument();
  });
});
