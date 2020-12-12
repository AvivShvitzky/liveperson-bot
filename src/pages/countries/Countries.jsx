// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Countries.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const renderBycontinent = () => {
    return <>
      <div className="continent__name__box"><span>{currentContinentActive}</span></div>
      <div className="continent__countries__list">
        {countries[currentContinentActive] &&
          [...countries[currentContinentActive]].sort().map(country =>
            <div className="country__box" key={country.name}>
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
    </>
  }

  const renderAll = () => {
    return <>
    {Object.keys(countries).map(continent => {
      return <>
        <div className="continent__name__box"><span>{continent}</span></div>
        <div className="continent__countries__list">
          {countries[continent] &&
            [...countries[continent]].sort().map(country =>
              <div className="country__box" key={country.name}>
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
      </>
    })}
  </>
  }

  return (
    <div className="countries">
      <div className="btn-continents__box">
        {continents.map(continent => {
          return (
            <Button 
              currentContext={currentContinentActive}
              buttonContext={continent}
              onClickHandler={onBtnContinentHandler}
              key={continent}
            />
          )
        })}
      </div>
      
      <div className="continent__box">
        {currentContinentActive === ALL ? renderAll() : renderBycontinent()}
        {/* {renderBycontinent()} */}
        {/* {renderAll()} */}
      </div>
    </div>
  );
};

export default Countries;
