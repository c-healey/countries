import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ModeContext } from "./context/ModeContext";
import axios from "./apis/countries";

import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import { CountriesContext } from "./context/CountriesContext";

const App = () => {
  const { darkMode } = useContext(ModeContext);
  const { setCountries } = useContext(CountriesContext);

  const getCountries = async () => {
    const { data } = await axios.get(`/all`);
    if (data) setCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className={`App   ${darkMode ? "dark" : "light"}-mode `}>
      <Header />
      <div className="container">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/country/:code?"} element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
