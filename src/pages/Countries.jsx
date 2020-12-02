// libraries and css
import React, { useEffect } from 'react';

// components
import Carousel from '../components/carousel/Carousel'

// consts

// api
import { fetchCountries } from '../api/fetchFuncs'

// store


function Countries() {
  // useEffect(async () => {
  //   const test = await fetchCountries()
  //   console.log(test);
  // }, [])

  return (
    <div className="countries">
      countries page
      <Carousel />
    </div>
  );
};

export default Countries;
