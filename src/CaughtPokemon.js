import React,{useState} from 'react';

const CaughtPokemon = (props) =>{
  const [caught, setCaught]=useState(0);
  
  const catchPokemon = () => {
    setCaught(caught + 1)
  }
    
  return (
    <div> 
     <button onClick={catchPokemon}>Click me</button>
     <p>Caught {caught} Pokemon on {props.date}</p>
    </div>
  )

}

export default CaughtPokemon;