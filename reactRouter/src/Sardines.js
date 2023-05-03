import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sardines = () => {
  return (
    <div className="Sardines">
      <h1>Nasty Sardine</h1>
      <h1>
        <Link to="/">go back</Link>
      </h1>
    </div>
  );
};

export default Sardines;
