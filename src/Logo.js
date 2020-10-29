import React from 'react';

const Logo = (props) => {
  
  console.log("Logo",props)
    return (
      <header>
        <h1>Welcome to the {props.appName}</h1>
        <button></button>
        <img onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt ="pokemon"/>
      </header>
    )
  }

export default Logo;