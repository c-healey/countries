import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSearchContext } from "../context/SearchContext";
import { CountriesContext } from "../context/CountriesContext";
import { BASE_URL } from "../constants/appConstants";

interface SearchInputProps {
  id: string;
  styleClass?: string;
  placeholder?: string;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  id,
  styleClass,
}) => {
  const { searchTerm, setSearchTerm } = useSearchContext();
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);
  const { setCountries } = useContext(CountriesContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}${debounceTerm ? "/name/" + debounceTerm : "/all"}`
        );

        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceTerm]);

  return (
    <div className="input-group flex-nowrap shadow search-input-group">
      <span className="input-group-text" id="addon-wrapping">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className={`form-control search-input ${styleClass}`}
        id={id}
        placeholder={placeholder}
        aria-label={placeholder ? placeholder : "search input"}
        aria-describedby="addon-wrapping"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
