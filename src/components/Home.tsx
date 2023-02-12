import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import Filter from "./Filter";

import { CountriesContext } from "../context/CountriesContext";
import Card from "./widgets/Card";

const Home = () => {
  const { countries, setCountryDetail } = useContext(CountriesContext);

  return (
    <main className="">
      <div className="row ">
        <div className="col-sm-6 mb-3">
          <SearchInput
            id={"search-input"}
            placeholder={"Search for a country..."}
          />
        </div>
        <div className="col-sm-6 mb-3 ms-auto">
          <Filter />
        </div>
      </div>
      <div className="row g-5">
        {countries.map((country, i) => (
          <div
            key={i}
            className="col-md-3 country-row-gap"
            onClick={() => setCountryDetail(country)}
          >
            <Link to="./country">
              <Card
                header={
                  <img
                    src={country.flag}
                    className="card-img-top"
                    alt={`flag of ${country.name}`}
                  />
                }
              >
                <h5 className="card-title mb-3">{country.name}</h5>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item ">
                    <span className="country-subtitle">Population:</span>
                    {country.population}
                  </li>
                  <li className="list-group-item">
                    <span className="country-subtitle">Region:</span>
                    {country.region}
                  </li>
                  <li className="list-group-item">
                    <span className="country-subtitle">Capital:</span>
                    {country.capital}
                  </li>
                </ul>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Home;
