// libraries and css
import React, { useEffect, useState } from 'react';
import './Countries.css'

// components
import { BtnContinent, CountriesBycontinent } from './Countries.components'

// consts
import {ALL, AFRICA, AMERICAS, ASIA, ERUOPE, OCEANIA} from '../../constants'

// api
import { fetchCountries } from '../../api/fetchFuncs'

function Countries() {
  const [countries, setCountries] = useState({})
  const [currentContinentActive, setCurrentContinentActive] = useState(ALL)
  const continents = [ALL, AFRICA, AMERICAS, ASIA, ERUOPE, OCEANIA]

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

  function renderCountries() {
    if (currentContinentActive === ALL) {
      return Object.keys(countries).map(continent => 
        <CountriesBycontinent 
          continent={continent} 
          countries={countries}
          key={continent} 
        />
      )
    } else {
      return <CountriesBycontinent 
        continent={currentContinentActive} 
        countries={countries}
        key={currentContinentActive} 
      />
    }
  }

  return (
    <div className="countries">
      <div className="btn-continents__box">
        {continents.map(continent =>
          <BtnContinent 
            currentContext={currentContinentActive}
            buttonContext={continent}
            onClickHandler={onBtnContinentHandler}
            key={continent}
          />
        )}
      </div>
      
      <div className="continent__box">
        {renderCountries()}
      </div>
    </div>
  );
};

export default Countries;
