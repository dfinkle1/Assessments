import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import FilterDog from "./FilterDog";
import Dog from "./Dog";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <Dog dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <FilterDog dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
