import React,{useState} from 'react';

const CaughtPokemon = (props) =>{
  const [caught, setCaught]=useState([]);
  
  const catchPokemon = () => {
    setCaught(caught.concat("pokemon"));
    console.log(caught.length);
  }
    
  return (
    <div> 
     <button onClick={catchPokemon}>Click me</button>
     <p>Caught {caught.length} Pokemon on {props.date}</p>
     <ul>
     {caught.map((pokemon,index) => {
     return<li key={index}>{pokemon}</li>})}
     </ul>
    </div>
  )

}

export default CaughtPokemon;