import React from "react";
import "./Madforms.css";
import useToggleState from "./hooks/useToggleState";
import { useState } from "react";

const Madforms = ({ addLib }) => {
  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [showForm, hideForm] = useToggleState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addLib({ ...formData });
    setFormData(INITIAL_STATE);
    hideForm();
  };

  if (showForm) {
    return (
      <div className="Madform">
        <button onClick={handleSubmit}>Reset</button>
      </div>
    );
  }
  return (
    <div className="Madform">
      <form onSubmit={handleSubmit}>
        <input
          id="noun"
          type="text"
          name="noun"
          placeholder="noun"
          value={formData.noun}
          onChange={handleChange}
        />

        <input
          id="noun2"
          type="text"
          name="noun2"
          placeholder="noun2"
          value={formData.noun2}
          onChange={handleChange}
        />

        <input
          id="adjective"
          type="text"
          name="adjective"
          placeholder="adjective"
          value={formData.adjective}
          onChange={handleChange}
        />

        <input
          id="color"
          type="text"
          name="color"
          placeholder="color"
          value={formData.color}
          onChange={handleChange}
        />
        {console.log(formData)}
        <button>Get Story</button>
      </form>
    </div>
  );
};

export default Madforms;
