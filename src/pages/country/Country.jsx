// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Country.css'

// components
import Header from '../../components/header/Header'

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

      <div className="country__detail__box">
        <Header iconType="university">Capital City</Header>
        <span className="country__detail">
          {country.capital}
        </span>
      </div>
      <hr/>

      <div className="country__detail__box">
        <Header iconType="language">Languages</Header>
        <span className="country__detail">
          {country.languages &&
          country.languages.map(language => {
            return <span className="detail" key={language.name}>{language.name}</span>
          })}
        </span>
      </div>
      <hr/>

      <div className="country__detail__box">
        <Header iconType="coins">Currencies</Header>
        <span className="country__detail">
          {country.currencies &&
          country.currencies.map(currency => {
            return <span className="detail" key={currency.name}>{currency.name}</span>
          })}
        </span>
      </div>
      <hr/>

      <div className="country__detail__box">
        <Header iconType="clock">Timezones</Header>
        <span className="country__detail">
          {country.timezones &&
          country.timezones.map(timeZone => {
            return <span className="detail" key={timeZone}>{timeZone}</span>
          })}
        </span>
      </div>
      <hr/>

      <div className="country__detail__box">
        <Header iconType="globe-africa">Borders</Header>
        <span className="country__detail">
          {country.borders &&
          country.borders.map(border => {
            return <span className="detail" key={border}>{border}</span>
          })}
        </span>
      </div>
      <hr/>
    </div>
  );
};

export default Country;
