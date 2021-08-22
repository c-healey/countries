import { useContext, useState, useEffect } from "react";
import axios from 'axios';

import {CountriesContext} from '../context/CountriesContext';
import "./Filter.scss";
const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [region, setRegion] = useState('');
  const { setCountries} = useContext(CountriesContext);
  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/region/${
            region
          }`
        );

        // console.log('DATA = ', data);
        setCountries(data);
        // console.log('countries ', countries);
        
      } catch (err) {
        console.log(err);
      }
    };
    if (region.length){
        getCountries();
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);
 
  const handleRegionClick = (e: any) => {
      
    console.log("CLICK TARGET", e.target.innerHTML);
    setShowFilters(!showFilters);
    setRegion(e.target.innerHTML);
    e.stopPropagation();
  };
  return (
    <div className="filter mb-3 ">
      <div
        className="btn  filter-btn shadow ms-auto d-flex justify-content-between"
        onClick={()=>setShowFilters(!showFilters)}

        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Filter by Region</span><i className={`bi bi-chevron-${showFilters?'up':'down'}`}></i> 
      </div>
      <div
        className={`dropdown-menu ${showFilters ? "show" : ""}`}
        onClick={(e) => handleRegionClick(e)}
      >
        <div className="dropdown-item">Africa</div>
        <div className="dropdown-item">America</div>
        <div className="dropdown-item">Asia</div>
        <div className="dropdown-item">Europe</div>
        <div className="dropdown-item">Oceania</div>
      </div>
    </div>
  );
};
export default Filter;
