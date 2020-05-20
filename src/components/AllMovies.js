import React, { useState, useEffect } from "react";

import List from "./List";
import FilterMovies from "./filter/FilterMovies";

import "./AllMovies-style.scss";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      const res = await fetch("http://localhost:5000/allmovies");
      const data = await res.json();
      setMovies(data);
    };

    getAllMovies();
  }, []);

  return (
    <div className="All-Movies">
      {/* <FilterMovies
        filterType={filterType}
        setFilterType={setFilterType}
        movies={movies}
      /> */}
      <div className="all-movies-wrapper">
        <List props={movies} filterType={filterType} />
      </div>
    </div>
  );
};

export default AllMovies;
