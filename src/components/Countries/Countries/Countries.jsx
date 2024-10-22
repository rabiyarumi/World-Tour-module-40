import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    console.log("add this to visited");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    console.log("vitert Flag");
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Flags</h4>

        {visitedFlags.map((flag, idx) => (
          <img className="visited-flag" key={idx} src={flag} alt="" />
        ))}
      </div>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="countries-coutainer">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
