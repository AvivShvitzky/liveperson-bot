// libraries and css
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './Countries.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Button from '../../components/button/Button'

// consts
import {AFRICA, AMERICAS, ASIA, ERUOPE, OCEANIA, POLAR} from '../../constants'

// api
import { fetchCountries } from '../../api/fetchFuncs'

// store

function Countries() {
  const [countries, setCountries] = useState({})
  const [currentContinentActive, setCurrentContinentActive] = useState(AFRICA)

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
        <Button 
          currentContext={currentContinentActive}
          buttonContext={AFRICA}
          onClickHandler={onBtnContinentHandler}
        />
        <Button 
          currentContext={currentContinentActive}
          buttonContext={AMERICAS}
          onClickHandler={onBtnContinentHandler}
        />
        <Button 
          currentContext={currentContinentActive}
          buttonContext={ASIA}
          onClickHandler={onBtnContinentHandler}
        />
        <Button 
          currentContext={currentContinentActive}
          buttonContext={ERUOPE}
          onClickHandler={onBtnContinentHandler}
        />
        <Button 
          currentContext={currentContinentActive}
          buttonContext={OCEANIA}
          onClickHandler={onBtnContinentHandler}
        />
        <Button 
          currentContext={currentContinentActive}
          buttonContext={POLAR}
          onClickHandler={onBtnContinentHandler}
        />
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
