import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchMovieList from "./SearchMovieList";

import "./SearchImdb-style.scss";

const SearchImdb = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await fetch(
      `http://localhost:5000/imdb/${e.target.title.value}`
    );
    const res = await data.json();
    setMovies(res);
  };

  return (
    <div className="Search-Imdb">
      <p>
        <Link to="/howtoaddmovie">Back</Link>
      </p>
      <p>Search by Title</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input placeholder="search titles" name="title" />
        <button>Search</button>
      </form>
      <SearchMovieList movies={movies} />
    </div>
  );
};

export default SearchImdb;
