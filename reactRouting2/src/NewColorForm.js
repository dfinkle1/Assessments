import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [form, updateForm] = useState({ color: "#ffffff" });
  const history = useHistory();

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.name, e.target.value);
    updateForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    addColor(form);
    history.push("/colors");
  };

  const { color } = form;

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="text"
            name="color"
            id="color"
            onChange={handleChange}
            value={color}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
  );
};

export default NewColorForm;
