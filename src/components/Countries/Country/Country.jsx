import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, capital, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  // const passWithParams = () => {
  //   handleVisitedCountry(country);
  // };

  // console.log(handleVisitedCountry);
  // console.log(country);
  return (
    <div className={`country ${visited && "visited"}`}>
      <img className="flag" src={flags.png} alt="" />

      <p>
        <span className="title">Country:</span> {name?.common}
      </p>
      <p>
        <span className="title">Capital:</span> {capital}
      </p>
      <p>
        <span className="title">Area:</span> {area}
      </p>
      <p>
        <span className="title">Code:</span> {cca3}
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.png)}>
        Visited Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <br />
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
