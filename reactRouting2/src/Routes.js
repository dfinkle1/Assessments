import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Color from "./Color";
import ColorsList from "./ColorsList";
import NewColorForm from "./NewColorForm";

const Routes = () => {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
  ];

  const [colors, setColors] = useState(initialColors);

  useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [
    colors,
  ]);

  const renderCurrentColor = (props) => {
    const { color } = props.match.params;
    // console.log(color);
    const hex = colors.some((c) => c.color === color);
    // console.log(hex);
    return <Color {...props} hex={hex} color={color} />;
  };

  function handleAdd(newColorObj) {
    setColors((prevColors) => [...prevColors, newColorObj]);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorsList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:color" render={renderCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
