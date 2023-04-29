import React, { useState } from "react";

/* Renders a single playing card. */
const useFlip = (initialState = true) => {
  const [flip, setFlip] = useState(initialState);
  const toggleState = () => {
    setFlip((state) => !state);
  };
  return [flip, toggleState];
};

export default useFlip;
