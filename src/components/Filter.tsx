import { useContext, useState, useEffect } from "react";
import axios from "../apis/countries";

import { CountriesContext } from "../context/CountriesContext";
import "./Filter.scss";
const filterRegions = [
  { value: "EU", label: "European Union" },
  { value: "EFTA", label: "European Free Trade Association" },
  { value: "CARICOM", label: "Caribbean Community" },
  { value: "PA", label: "Pacific Alliance" },
  { value: "AU", label: "African Union" },
  { value: "USAN", label: "Union of South American Nations" },
  { value: "EEU", label: "Eurasian Economic Union" },
  { value: "AL", label: "Arab League" },
  { value: "ASEAN", label: "Association of Southeast Asian Nations" },
  { value: "CAIS", label: "Central American Integration System" },
  { value: "CEFTA", label: "Central European Free Trade Agreement" },
  { value: "NAFTA", label: "North American Free Trade Agreement" },
  { value: "SAARC", label: "South Asian Association for Regional Cooperation" },
];
const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [region, setRegion] = useState("");
  const { setCountries } = useContext(CountriesContext);
  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await axios.get(`/regionalbloc/${region}`);

        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (region.length) {
      getCountries();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  const handleRegionClick = (e: any) => {
    setShowFilters(!showFilters);
    setRegion(e.target.dataset.value);
    e.stopPropagation();
  };
  return (
    <div className="filter mb-3 ">
      <div
        className="btn  filter-btn shadow ms-auto d-flex justify-content-between"
        onClick={() => setShowFilters(!showFilters)}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Filter by Region</span>
        <i className={`bi bi-chevron-${showFilters ? "up" : "down"}`}></i>
      </div>
      <div
        className={`dropdown-menu ${showFilters ? "show" : ""}`}
        onClick={(e) => handleRegionClick(e)}
      >
        {filterRegions.map((item, idx) => {
          return (
            <div
              key={`filter-${idx}`}
              className="dropdown-item"
              data-value={item.value}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Filter;
