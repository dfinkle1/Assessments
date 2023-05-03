import React from "react";
import { Link } from "react-router-dom";

const Dog = ({ dogs }) => {
  return (
    <div>
      <h1 className="text-center">List of Dogs</h1>

      <div>
        {dogs.map((d) => (
          <div className="col-3 text-center" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dog;
