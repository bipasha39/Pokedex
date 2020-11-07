import React,{useState} from 'react';

const CaughtPokemon = (props) =>{
  const [caught, setCaught]=useState([]);
  const[pokemonNameInput,setPokemonNameInput]= useState("");
  
  const catchPokemon = () => {
    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("")}

    //stretch goal

  //   const catchPokemon = () => {
  //   if(pokemonNameInput !== ""){
  //     return{
  //       setCaught(caught.concat(pokemonNameInput));
  //       setPokemonNameInput("")}
  //   }
    
  // }

  function handleInputChange(event){
   setPokemonNameInput (event.target.value)

  }
  return (
    <div>
      <input type="text" 
      value={pokemonNameInput}
      onChange={handleInputChange}
      /> 
     <button onClick={catchPokemon}>Click me</button>
     <p>Caught {caught.length} Pokemon on {props.date}</p>
     <ul>
     {caught.map((pokemon,index) => {
     return<li key={index}>{pokemon}</li>})}
     </ul>
    </div>
  )

}

export default CaughtPokemon ;