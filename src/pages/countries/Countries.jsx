// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './Countries.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// components

// consts

// api
import { fetchCountries } from '../../api/fetchFuncs'

// store

function Countries() {
  const [countries, setCountries] = useState({})
  const [currentContinentActive, setCurrentContinentActive] = useState('Africa')

  useEffect(() => {
    async function getCountries() {
      const fectchedCountries = await fetchCountries()
      setCountries(prevCountries => fectchedCountries.reduce((acc, country) => {
        acc[country.region] = (acc[country.region] ?? []).concat(country);
        return acc;
      }, {}))
    }
    getCountries()
  }, [])

  const onBtnContinentHandler = (continentName) => {
    setCurrentContinentActive(continentName)
  }

  return (
    <div className="countries">
      <div className="btn-continents__box">
        <button type="button" 
          class={'btn-continent btn ' + (currentContinentActive === 'Africa' ? 'btn-primary' :  'btn-outline-primary')}
          onClick={() => onBtnContinentHandler('Africa')}
        
        >
          Africa
        </button>
        <button type="button" 
          class={'btn-continent btn ' + (currentContinentActive === 'Americas' ? 'btn-primary' :  'btn-outline-primary')}
          onClick={() => onBtnContinentHandler('Americas')}
          >
          Americas
        </button>
        <button type="button" 
          class={'btn-continent btn ' + (currentContinentActive === 'Asia' ? 'btn-primary' :  'btn-outline-primary')}
          onClick={() => onBtnContinentHandler('Asia')}
          >
          Asia
        </button>
        <button type="button" 
          class={'btn-continent btn ' + (currentContinentActive === 'Europe' ? 'btn-primary' :  'btn-outline-primary')}
          onClick={() => onBtnContinentHandler('Europe')}
          >
          Europe
        </button>
        <button type="button" 
          class={'btn-continent btn ' + (currentContinentActive === 'Oceania' ? 'btn-primary' :  'btn-outline-primary')}
          onClick={() => onBtnContinentHandler('Oceania')}
          >
          Oceania
        </button>
        <button type="button" 
          class={'btn-continent btn ' + (currentContinentActive === 'Polar' ? 'btn-primary' :  'btn-outline-primary')}
          onClick={() => onBtnContinentHandler('Polar')}
          >
          Polar
        </button>
      </div>
      
      <div className="continent__box">
        <div className="continent__name__box"><span>{currentContinentActive}</span></div>
        <div className="continent__countries__list">
          {countries[currentContinentActive] &&
           countries[currentContinentActive].sort().map(country =>
            <div className="country__box" key={uuidv4()}>
              <Link 
                to={{
                  pathname: `/country/${country.name}`,
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
