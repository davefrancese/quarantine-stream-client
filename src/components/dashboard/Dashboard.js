import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DashList from "./DashList";

import "./Dashboard-style.scss";

const Dashboard = () => {
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
    <div className="Dashboard">
      <p>
        <Link to="/addmovieform">Add a Film / Series</Link>
      </p>
      <div className="dashboard-list-wrapper">
        <DashList props={movies} />
      </div>
    </div>
  );
};

export default Dashboard;
