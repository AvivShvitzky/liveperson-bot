import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'

function Header({ children, iconType}) {
  return (
    <label>
      <FontAwesomeIcon icon={iconType} size="lg"/>
      {children}
    </label>
  )
}

export default Header