import React from "react";

function Pokecard({id = 4, name='Charmander', type='fire', base_experience = 62}) {
  console.log(base_experience);
  console.log(id);
  return (
    <li className = "pokemon" key ={id}>
      <h3>Name: {name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>

    
    </li>


  )
}

export default Pokecard;
