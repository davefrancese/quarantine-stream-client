import React from "react";
import { Link } from "react-router-dom";

import "./List-style.scss";

const List = ({ props, filterType, setFilterType }) => {
  // console.log("List", props);
  if (props.length > 0) {
    return props
      .sort((a, b) => {
        return b.rating - a.rating;
      })
      .map((movie, i) => {
        return (
          <div className="movie-card" key={i}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="movie-poster"
                src={movie.posterURL}
                alt={`Movie poster of ${movie.title}`}
              />
            </Link>
          </div>
        );
      });
  }
  return null;
};

export default List;
