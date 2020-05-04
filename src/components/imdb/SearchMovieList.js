import React from "react";
import { Link } from "react-router-dom";

import "./SearchMovieList-style.scss";

const SearchMovieList = ({ movies }) => {
  const renderList = movies => {
    if (movies.length > 0) {
      return movies.map((movie, i) => {
        return (
          <div key={i} className="movie-search-list">
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
            <button>
              <Link to={`/choosemovie/${movie.imdbID}`}>Choose</Link>
            </button>
          </div>
        );
      });
    } else {
      return <p>No Results</p>;
    }
  };
  console.log(movies);
  return <div className="Search-Movie-List">{renderList(movies)}</div>;
};

export default SearchMovieList;
