import React from 'react'
import './../App.css';

export const HeaderComp = () => {

  const NAME = "Judit Quirós Violero";

  return (
    <div className='header-container'>
      <div className='header-img'>
        <img alt='' src='' />
      </div>
      <div className='header-text'>
        <h1> Bienvenido/a a mi Portfolio!!</h1>
      </div>
    </div>
  )
}

