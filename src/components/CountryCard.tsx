import './CountryCard.scss';

const CountryCard = ({ country }: any) => {
    

    // console.log(country.name);
    const { name, population, region, capital } = country;
    const pop = `${population
      .toFixed(1)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      .slice(0, -2)}`;
    return (
      <div className="card h-100">
        <div className="country-img">
          <img src={country.flag} className="card-img-top" alt="..." />
        </div>
  
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
  
          <ul className="list-group list-group-flush">
            <li className="list-group-item ">
              <span className="country-subtitle">Population:</span>
              {pop}
            </li>
            <li className="list-group-item">
              <span className="country-subtitle">Region:</span>
              {region}
            </li>
            <li className="list-group-item">
              <span className="country-subtitle">Capital:</span>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    );
  };
  export default CountryCard;