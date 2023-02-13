import React, { useState } from "react";
type Country = {
  name: string;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: Array<string>;
  capital: string;
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  population: number;
  latlng: Array<number>;
  demonym: string;
  area: number;
  gini: number;
  timezones: Array<string>;
  borders: Array<string>;
  nativeName: string;
  numericCode: string;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
  translations: {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
  };
  flag: string;
  regionalBlocs: Array<{
    acronym: string;
    name: string;
    otherAcronyms: Array<string>;
    otherNames: Array<string>;
  }>;
  cioc: string;
};
const countryTemplate = {
  name: "",
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

const initialValue = {
  countries: [countryTemplate],
  setCountries: () => {},
  countryDetail: countryTemplate,
  setCountryDetail: () => {},
};
interface CountriesContextInt {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  countryDetail: Country;
  setCountryDetail: React.Dispatch<React.SetStateAction<Country>>;
}

export const CountriesContext = React.createContext<CountriesContextInt>(
  {} as CountriesContextInt
);

export const CountriesProvider: React.FC<{
  countryList?: Array<Country>;
  country?: Country;
  children: any;
}> = ({ countryList, country, children }) => {
  const [countries, setCountries] = useState<Array<Country>>(
    countryList || ([] as Array<Country>)
  );
  const [countryDetail, setCountryDetail] = useState<Country>(
    country || ({} as Country)
  );

  return (
    <CountriesContext.Provider
      value={{
        countries: countries,
        setCountries: setCountries,
        countryDetail: countryDetail,
        setCountryDetail: setCountryDetail,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
