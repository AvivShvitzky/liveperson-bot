import React from 'react'
import { Link } from "react-router-dom";

import './CountryItem.css'

function CountryItem({ country }) {
  return (
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

export default CountryItem