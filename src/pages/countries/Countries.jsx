// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './Countries.css'
// components

// consts

// api
import { fetchCountries } from '../../api/fetchFuncs'

// store

function Countries() {
  const [countries, setCountries] = useState({})

  useEffect(() => {
    async function getCountries() {
      const fectchedCountries = await fetchCountries()
      setCountries(prevCountries => fectchedCountries.reduce((acc, country) => {
        acc[country.region] = (acc[country.region] ?? []).concat(country);
        return acc;
      }, {...prevCountries}))
    }
    getCountries()
  }, [])

  return (
    <div className="countries">
      countries page
      <div className="continent__box">
        <div className="continent__name__box"><span>Europe</span></div>
        <div className="continent__countries__list">
          {countries.Europe &&
           countries.Europe.sort().map(country =>
            <div className="country__box" key={uuidv4()}>
              <Link 
                to={{
                  pathname: `/country/${country.name + country.capital}`,
                  state: {country} 
                }}
              >
                <img className="country__image" src={country.flag} alt=""/>
                {country.name}
              </Link>
            </div> 
           )
          }
        </div>
      </div>
    </div>
  );
};

export default Countries;
