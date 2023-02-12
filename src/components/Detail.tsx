import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";

const Detail = () => {
  const { countryDetail } = useContext(CountriesContext);
  const {
    flag,
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = countryDetail;

  const pop = `${population
    .toFixed(1)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    .slice(0, -2)}`;

  if (!countryDetail) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container country ">
      <div className="row ">
        <div className="col-sm-12">
          <div className="btn  shadow mb-4 px-4">
            <Link to="/">
              <i className="bi bi-arrow-left"></i> Back
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img src={flag} className="card-img-top" alt={`flag of ${name}`} />
        </div>

        <div className="col-lg-5 ms-auto d-flex flex-column justify-content-center">
          <h2 className="mb-4 fw-bold">{name}</h2>
          <div className="row mb-4">
            <div className="col-sm-6 ">
              <ul className="list-group list-group-flush ">
                <li className="">
                  <span className="country-subtitle capitalize">
                    Population:
                  </span>
                  {pop}
                </li>
                <li className="">
                  <span className="country-subtitle">Region:</span>
                  {region}
                </li>
                <li className="">
                  <span className="country-subtitle">Sub Region:</span>
                  {subregion}
                </li>
                <li className="">
                  <span className="country-subtitle">Capital:</span>
                  {capital}
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-group list-group-flush">
                <li className=" ">
                  <span className="country-subtitle">top level domain:</span>
                  {topLevelDomain.map((item) => item).join(",")}
                </li>
                <li className="">
                  <span className="country-subtitle">currencies:</span>
                  {currencies.map((item) => item.name).join(",")}
                </li>
                {languages && (
                  <li className="">
                    <span className="country-subtitle">languages</span>
                    {languages?.map((item) => item.name).join(", ")}
                  </li>
                )}
              </ul>
            </div>
          </div>
          {borders && (
            <div>
              Border countries:
              {borders.map((border, i) => {
                return (
                  <div key={i} className="btn shadow ms-1">
                    <Link to={`/country/${border}`}>{border}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Detail;
