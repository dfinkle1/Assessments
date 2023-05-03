import React from "react";
import { Link } from "react-router-dom";

const Color = ({ color, hex, history }) => {
  if (!hex) {
    history.push("/colors");
  }
  return (
    <div style={{ backgroundColor: color }}>
      <p>This is {color}</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Color;
