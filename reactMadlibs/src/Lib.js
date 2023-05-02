import React from "react";
import { useState } from "react";

const Lib = ({ noun, noun2, adjective, color }) => {
  return (
    <div className="lib">
      There was a {color} {noun} who loved a {adjective} {noun2}.
    </div>
  );
};

export default Lib;
