import React, { useState, useEffect } from "react";

import "./MovieProfile-style.scss";

// Title, Director, Rating, Streaming Network, Poster
// Summary, Genre, Stars, Trailer
const MovieProfile = props => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(`http://localhost:5000/movie/${id}`);
      const json = await data.json();
      setMovie(json);
    };
    fetchMovie();
  }, [id]);

  console.log(movie);
  return (
    <div className="Movie-Profile">
      <div className="movie-profile-header">
        <main>
          <h1 className="movie-profile-title">{movie.title}</h1>
          <p>
            {movie.type === "Film" ? "Directed by" : "Created by"}
            <span className="movie-director"> {movie.director_creator}</span>
          </p>
          <h1 className="stream-network">
            <span className="pulse">•</span>
            {movie.streamNetwork}
          </h1>
        </main>
        <aside>
          <img src={movie.posterURL} alt={`${movie.title} poster`} />
          <h4 className="movie-rating">{movie.rating}</h4>
        </aside>
      </div>
      <div className="movie-profile-sub">
        <h3>{movie.genre}</h3>
        <p>{movie.summary}</p>
        <iframe
          width="560"
          height="315"
          title={movie.title}
          src={movie.trailerURL}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieProfile;
