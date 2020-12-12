import React from 'react'
import './Button.css'

function Button({ currentContext, buttonContext, onClickHandler}) {
  return (
    <button type="button" 
      className={'btn-continent btn ' + (currentContext === buttonContext ? 'btn-primary' :  'btn-outline-primary')}
      onClick={() => onClickHandler(buttonContext)}
    >
    {buttonContext}
    </button>
  )
}

export default Button