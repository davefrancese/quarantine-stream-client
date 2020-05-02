import React from "react";
import axios from "axios";

import "./AddMovieForm-style.scss";

const Overview = ({
  setCurPer,
  movieType,
  movieTitle,
  movieDir,
  movieNetwork,
  movieStream,
  moviePoster,
  movieRating,
  movieGenre,
  movieStars,
  movieSummary,
  movieTrailer
}) => {
  const newMovie = {
    title: movieTitle,
    type: movieType,
    director_creator: movieDir,
    network: movieNetwork,
    streamNetwork: movieStream,
    rating: movieRating,
    posterURL: moviePoster,
    genre: movieGenre,
    stars: movieStars,
    summary: movieSummary,
    trailerURL: movieTrailer
  };
  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/postmovie", newMovie);
    if (res.status === 200 || res.status === 201) {
      setCurPer(201);
    } else {
      setCurPer(300);
    }
  };

  return (
    <div className="Overview">
      <img src={moviePoster} alt={`${movieTitle} ${movieType} poster`} />
      <h1>{movieTitle}</h1>
      <h2>
        <span>a</span> {movieType} <span>by {movieDir}</span>
      </h2>
      <h3>Genre: {movieGenre}</h3>
      <h3>Featuring: {movieStars}</h3>
      <h3>From {movieNetwork} studios</h3>
      <h4>Streaming on {movieStream}</h4>
      <h5>Your rating is {movieRating}</h5>
      <p>{movieSummary}</p>
      <p>{movieTrailer}</p>
      <button onClick={() => setCurPer(100)}>Back</button>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default Overview;
