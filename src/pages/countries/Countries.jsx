// libraries and css
import React, { useEffect, useState } from 'react';
import './Countries.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Button from '../../components/button/button-countries/BtnCountries'
import CountryItem from '../../components/country-item/CountryItem'

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

  const renderCountries = continent => {
    return <>
      <div className="continent__name__box"><span>{continent}</span></div>
      <div className="continent__countries__list">
        {[...countries[continent]].sort().map(country =>
          <CountryItem country={country} key={country.name}/>
        )}
      </div>
    </> 
  }

  const renderCountriesBycontinent = () => {
    return renderCountries(currentContinentActive)
  }

  const renderAllCountries = () => {
    return <>
    {Object.keys(countries).map(continent => 
      <div key={continent}>
        {renderCountries(continent)}
      </div>
    )}
  </>
  }

  return (
    <div className="countries">
      <div className="btn-continents__box">
        {continents.map(continent =>
          <Button 
            currentContext={currentContinentActive}
            buttonContext={continent}
            onClickHandler={onBtnContinentHandler}
            key={continent}
          />
        )}
      </div>
      
      <div className="continent__box">
        {currentContinentActive === ALL ? renderAllCountries() : renderCountriesBycontinent()}
      </div>
    </div>
  );
};

export default Countries;
