import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
const Pokedex = ({ pokemon }) => {
  return (
    <>
      <h1 className="Pokedex">PokeDex</h1>
      <div className="container">
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
