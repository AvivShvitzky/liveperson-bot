// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Country.css'
// components

// consts

function Country(props) {
  const [country, setCountry] = useState({})

  useEffect(() => {
    setCountry(props.location.state.country)
  }, [])

  return (
    <div className="country">
      <div className="country__header">
        <div>
          <Link to="/countries">Go Back To Countries Page</Link>
        </div>
        <div>
          <img className="country__img" src={country.flag}/>
          <h1 className="country__header">{country.name}</h1>
        </div>
      </div>

      <div className="country__details">
        <div className="country__detail">
          <label>Capital City</label>
          {country.capital}
        </div>
        <div className="country__detail">
          <label>Languages</label>
          {country.languages}
        </div>
        {/* <div className="country__detail">
          <label>Currencies</label>
          {country.currencies}
        </div>
        <div className="country__detail">
          <label>Timezone</label>
          {country.timezones}
        </div>
        <div className="country__detail">
          <label>Border Countries</label>
          {country.borders}
        </div> */}
      </div>
    </div>
  );
};

export default Country;
