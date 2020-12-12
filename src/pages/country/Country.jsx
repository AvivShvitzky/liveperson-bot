// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Country.css'
// components

// consts

function Country(props) {
  const [country, setCountry] = useState({})

  useEffect(() => {
    setCountry(props.location.state.country)
  }, [props.location.state.country])

  return (
    <div className="country">
      <Link to="/countries">Go Back To Countries Page</Link>
      <img className="country__img" src={country.flag}/>
      <h1 className="country__name">{country.name}</h1>
      <label className="country__detail__label">Capital City</label>
      <span className="country__detail">
        {country.capital}
      </span>

      <div className="country__detail__box">
        <label className="country__detail__label">
          <FontAwesomeIcon icon="language" size="lg"/>
          Languages
        </label>
        <span className="country__detail">
          {country.languages &&
          country.languages.map(language => {
            return <span className="detail" key={language.name}>{language.name}</span>
          })}
        </span>
      </div>
      <hr className="hr"/>


      <div className="country__detail__box">
        <label className="country__detail__label">
          <FontAwesomeIcon icon="coins" size="lg"/>
          Currencies
        </label>
        <span className="country__detail">
          {country.currencies &&
          country.currencies.map(currency => {
            return <span className="detail" key={currency.name}>{currency.name}</span>
          })}
        </span>
      </div>
      <hr className="hr"/>

      <div className="country__detail__box">
        <label className="country__detail__label">
          <FontAwesomeIcon icon="clock" size="lg"/>
          Timezones
        </label>
        <span className="country__detail">
          {country.timezones &&
          country.timezones.map(timeZone => {
            return <span className="detail" key={timeZone}>{timeZone}</span>
          })}
        </span>
      </div>
      <hr className="hr"/>

      <div className="country__detail__box">
        <label className="country__detail__label">
          <FontAwesomeIcon icon="globe-africa" size="lg"/>
          Border Countries
        </label>
        <span className="country__detail">
          {country.borders &&
          country.borders.map(border => {
            return <span className="detail" key={border}>{border}</span>
          })}
        </span>
      </div>
      <hr className="hr"/>

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
  );
};

export default Country;
