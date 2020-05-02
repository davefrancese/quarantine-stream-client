import React from "react";
import { Link } from "react-router-dom";

import "./DashList-style.scss";

const DashList = ({ props }) => {
  if (props.length > 0) {
    return props
      .sort((a, b) => {
        return a.id - b.id;
      })
      .map((movie, i) => {
        return (
          <div className="Dash-List" key={i}>
            <Link to={`/dashboard/${movie.id}`}>
              <img
                className=""
                src={movie.posterURL}
                alt={`Movie poster of ${movie.title}`}
              />
              <p className="edit-btn">edit</p>
            </Link>
          </div>
        );
      });
  }
  return (
    <div>
      <p>Nothing to show</p>
    </div>
  );
};

export default DashList;
