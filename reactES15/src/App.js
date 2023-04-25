import React from "react";
import logo from "./logo.svg";
import { choice, remove } from "./Helpers";
import fruits from "./Foods";
import "./App.css";

function App() {
  return (
    <div>
      <h1>{choice(fruits)}</h1>
      <h1>I'd like one {choice(fruits)}, please</h1>
      <p>Here you go: {choice(fruits)}</p>
      <p>Delicious! May I have another?</p>
      <p>{remove(fruits, choice(fruits))}</p>
      <p>{remove(fruits, choice(fruits))}</p>
      <p>I'm sorry, we're all out. We have {fruits.length + 1} left</p>
    </div>
  );
}

export default App;
