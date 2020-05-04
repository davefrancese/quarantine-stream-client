import React from "react";
import { Link } from "react-router-dom";

import "./AddChoose-style.scss";

const AddChoose = () => {
  return (
    <div className="Add-Choose">
      <p>
        <Link to="/mymoviedashboard">Back to Dashboard</Link>
      </p>
      <p>
        <Link to="/addmoviemanually">Add Manually</Link>
      </p>
      <p>
        <Link to="/addmoviewithimdb">Use IMDb</Link>
      </p>
    </div>
  );
};

export default AddChoose;
