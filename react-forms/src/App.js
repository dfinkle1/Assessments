import React from "react";
import logo from "./logo.svg";
import BoxList from "./BoxList";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BoxList />
      <TodoList />
    </div>
  );
}

export default App;
