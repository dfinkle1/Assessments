import React from "react";
import { useState } from "react";
import Lib from "./Lib";
import useToggleState from "./hooks/useToggleState";
import Madforms from "./Madforms";

const Madlib = () => {
  const [madlib, setMadlibs] = useState([
    {
      color: "green",
      noun: "pedram",
      noun2: "shayan",
      adjective: "hungry",
    },
  ]);
  const [showForm, hideForm] = useToggleState(false);
  const addLib = (newLib) => {
    setMadlibs([{ ...newLib }]);
    hideForm();
  };
  return (
    <>
      <div className="Madlib">
        <Madforms addLib={addLib} />
        {showForm &&
          madlib.map(({ noun, noun2, adjective, color }) => (
            <Lib
              noun={noun}
              noun2={noun2}
              adjective={adjective}
              color={color}
            />
          ))}
      </div>
    </>
  );
};

export default Madlib;
