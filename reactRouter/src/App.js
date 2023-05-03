import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMacine";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from "./Chips";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route path="/soda" exact render={() => <Soda />} />
      <Route path="/chips" exact render={() => <Chips />} />
      <Route path="/sardines" exact render={() => <Sardines />} />
    </BrowserRouter>
  );
}

export default App;
