import React from "react";
import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, newBoxes] = useState([
    { color: "green", width: 200, height: 50 },
    { color: "purple", width: 200, height: 50 },
    ,
  ]);
  const addBox = (newBox) => {
    newBoxes((boxes) => [...boxes, { ...newBox }]);
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({ color, height, width }) => (
        <Box color={color} height={parseInt(height)} width={parseInt(width)} />
      ))}
      <Box color="yellow" height={200} width={200} />
    </div>
  );
};

export default BoxList;
