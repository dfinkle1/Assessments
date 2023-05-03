import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine" style={{ backgroundColor: "white" }}>
      <h1>hello i am a vending machine. what would you like to eat?</h1>

      <h1>
        <Link to="/soda">soda</Link>
      </h1>
      <h1>
        <Link to="/chips">chips</Link>
      </h1>
      <h1>
        <Link to="/sardines">fresh sardines</Link>
      </h1>
    </div>
  );
};

export default VendingMachine;
