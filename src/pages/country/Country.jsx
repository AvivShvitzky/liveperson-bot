// libraries and css
import React, { useEffect, useState } from 'react';
// components

// consts

function Country(props) {
  const [country, setCountry] = useState({})

  useEffect(() => {
     console.log(props);
  }, [])

  return (
    <div className="countries">
      country page
    </div>
  );
};

export default Country;
