import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
import {CountriesContext} from './context/CountriesContext';


import ModeSwitch from "./components/ModeSwitch";
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import CountryCard from './components/CountryCard';

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

// import { countries } from "./data/data";

const App = () =>{
  const { darkMode } = useContext(ModeContext);
  const {countries} =useContext(CountriesContext);
  return (
    <div className="App">
      <div className={`${darkMode ? "dark" : "light"}-mode`}>
        <header>
          <nav className=" container-fluid shadow ">
            <div className="container d-flex justify-content-between align-items-center">
              <h1 className="">Where in the world?</h1>
              <ModeSwitch />
            </div>
          </nav>
        </header>
        <main className="container ">
        <div className="row ">
          <div className='col-sm-6 mb-4'>
            <SearchInput id={'search-input'} placeholder={'Search for a country...'}/>
          </div>
          <div className='col-sm-6 mb-4 ms-auto'>
            <Filter/>
          </div>
          </div>
          < div className="row">
          
            {countries.map((country, i) => (
              <div key={i} className="col-md-3 mb-4">
                <CountryCard country={country} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}


export default App;
