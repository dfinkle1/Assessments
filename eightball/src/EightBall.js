import React, { useState } from "react";
import "./EightBall.css";

function choice(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}
const Eightball = (props) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const restart = () => {
    setMsg("Think of a Question");
    setColor("black");
  };
  const handleClick = () => {
    const { msg, color } = choice(props.answers);
    setMsg(msg);
    setColor(color);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="EightBall"
        style={{ backgroundColor: color }}
      >
        {msg}
      </div>
      <button onClick={restart} className="">
        Restart Game
      </button>
    </>
  );
};

export default Eightball;
