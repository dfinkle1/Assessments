import React from "react";
import "./Pokecard.css";
const Pokecard = ({ id, name, type, base_experience }) => (
  <div className="Pokecard">
    <p>{name}</p>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt="pokemonhere"
    />
    <p>Type:{type}</p>
    <p>Exp:{base_experience}</p>
  </div>
);
export default Pokecard;
