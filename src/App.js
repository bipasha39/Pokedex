
import React from 'react'
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from "./PokemonCity";




const App = () => {
  let abilities = ["Anticipation", "Adaptability", "Run-Away"];
  let date = new Date().toLocaleDateString();
  function logWhenClicked() {
    console.log("Button was clicked!");
  }

  return (
    <div>
      <Logo appName={"Pokedex"} handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;