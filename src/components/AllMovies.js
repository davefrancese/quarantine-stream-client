import React, { useState, useEffect } from "react";

import List from "./List";

import "./AllMovies-style.scss";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

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
      <List props={movies} />
    </div>
  );
};

export default AllMovies;
