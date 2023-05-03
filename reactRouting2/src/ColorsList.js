import React, { useState } from "react";
import { Link } from "react-router-dom";

const ColorsList = ({ colors }) => {
  return (
    <div>
      <h1>List of Colors</h1>
      <h1>
        <Link to="/colors/new">Add a color</Link>
      </h1>
      {colors.map(({ color }) => (
        <div>
          <h1 style={{ color: color }}>
            <Link
              style={{ color: color }}
              to={`/colors/${color.toLowerCase()}`}
            >
              {color}
            </Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ColorsList;
