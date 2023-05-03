import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
import Dog from "./Dog";

const FilterDog = ({ dogs }) => {
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
