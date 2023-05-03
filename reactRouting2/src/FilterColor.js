import React from "react";
import { useParams } from "react-router-dom";
import Color from "./Color";
import ColorsList from "./ColorsList";

const FilterColor = ({ color }) => {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />;
  }

  return null;
};

export default FilterDog;
