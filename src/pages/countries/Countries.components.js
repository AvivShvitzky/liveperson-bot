import { Link } from "react-router-dom";
import { OTHER } from '../../constants'

export const BtnContinent = ({ currentContext, buttonContext, onClickHandler}) => {
  return (
    <button type="button" 
      className={'btn-continent btn ' + (currentContext === buttonContext ? 'btn-primary' :  'btn-outline-primary')}
      onClick={() => onClickHandler(buttonContext)}
    >
    {buttonContext}
    </button>
  )
}

const Country = ({ country }) => {
  return <div className="country__box">
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

export const CountriesBycontinent = ({ continent, countries, countryName }) => {
  if (continent === OTHER) continent = '' // the api is broken and have one empty continent
  const Elemcountries = [...countries[continent]].sort().filter(country =>
    country.name.toLowerCase().includes(countryName)
  )

  if (Elemcountries.length !== 0) {
    if (continent === '') continent = OTHER // the api is broken and have one empty continent
    return <>
      <div className="continent__name__box"><span>{continent}</span></div>
      <div className="continent__countries__list">
        {Elemcountries.map(country => 
          <Country country={country} key={country.name}/>
        )}
      </div>
    </> 
  }
  return <></> 
}