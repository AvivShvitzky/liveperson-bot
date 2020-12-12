// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Countries.css'

// components
import Button from '../../components/button/button-countries/BtnCountries'

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

  const ElemCountry = country => {
    return <div className="country__box" key={country.name}>
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
  }

  const renderCountries = continent => {
    return <div key={continent}>
      <div className="continent__name__box"><span>{continent}</span></div>
      <div className="continent__countries__list">
        {[...countries[continent]].sort().map(country =>
          ElemCountry(country)
        )}
      </div>
    </div> 
  }

  const renderCountriesBycontinent = () => {
    return renderCountries(currentContinentActive)
  }

  const renderAllCountries = () => {
    return Object.keys(countries).map(continent => 
      renderCountries(continent)
    )
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
