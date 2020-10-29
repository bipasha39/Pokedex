import React from 'react'
const BestPokemon = (props) => {
  console.log("BestPokemon",props);
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>{props.abilities.map(ability => <li key={ability}>{ability}</li>)}</ul>
    </div>
  )
}
export default BestPokemon;
