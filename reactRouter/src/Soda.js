import React, { useState } from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div className="Sardines">
      <h1>Here is a coca-cola</h1>
      <h1>
        <Link to="/">go back</Link>
      </h1>
    </div>
  );
};

export default Soda;
