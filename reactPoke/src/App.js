import React from "react";
import logo from "./logo.svg";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import "./App.css";

function App() {
  return <Pokedex pokemon={Pokemon} />;
}

export default App;
