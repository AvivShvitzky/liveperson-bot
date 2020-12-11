// libraries and css
import React, { useEffect, useState } from 'react';
import './Countries.css'
// components

// consts

// api
import { fetchCountries } from '../../api/fetchFuncs'

// store

// const countriesByContinents = {
//   Africa: [],
//   Europe: [],
//   Asia: [],
//   Americas: [],
//   Oceania: [],
//   Polar: []
// }

const COUNTRIES_MODEL = {
  Africa: [],
  Americas: [],
  Asia: [],
  Europe: [],
  Oceania: [],
  Polar: [],
  '': []
}

function Countries() {
  const [countries, setCountries] = useState({})

  useEffect(async () => {
    const getCountries = async () => {
      const fectchedCountries = await fetchCountries()
      // setCountries(prevCountries => fectchedCountries.reduce((acc, country) => {
      //   acc[country.region] = (acc[country.region] ?? []).concat(country);
      //   return acc;
      // }, {...prevCountries}))

      const tmpCountries = {}
      fectchedCountries.forEach(country => {
          (tmpCountries[country.region] ?? []).concat(country)
        // if (tmpCountries[country.region] === undefined) {
        //   tmpCountries[country.region] = [country]
        // } else {
        //   tmpCountries[country.region].push(country)
        // }
      })
      setCountries(tmpCountries)
    }
    getCountries()
  }, [])

  return (
    <div className="countries">
      countries page
      <div className="continent__box">
        <div className="continent__name__box">Europe</div>
        <div className="continent__countries__list">
          {countries.Europe &&
           countries.Europe.map(country => <span key={country.name}>{country.name}</span>)
          }
        </div>
      </div>
    </div>
  );
};

export default Countries;
