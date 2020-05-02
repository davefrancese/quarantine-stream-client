import React from "react";

import "./AddMovieForm-style.scss";

const PageOne = ({
  movieType,
  setCurPer,
  setMovieTitle,
  setMovieDir,
  setMovieGenre,
  setMovieStars,
  setMovieSummary
}) => {
  const handleClick = e => {
    e.preventDefault();
    setCurPer(50);
  };
  return (
    <div className="Page-Two">
      <button onClick={() => setCurPer(0)}>Back</button>
      <input
        placeholder="Title"
        onChange={e => {
          e.preventDefault();
          setMovieTitle(e.target.value);
        }}
      />
      <input
        placeholder={movieType === "Film" ? "Director" : "Creator"}
        onChange={e => {
          e.preventDefault();
          setMovieDir(e.target.value);
        }}
      />
      <input
        placeholder="Genre"
        onChange={e => {
          e.preventDefault();
          setMovieGenre(e.target.value);
        }}
      />
      <input
        placeholder="Stars"
        onChange={e => {
          e.preventDefault();
          setMovieStars(e.target.value);
        }}
      />
      <textarea
        placeholder="Summary"
        onChange={e => {
          e.preventDefault();
          setMovieSummary(e.target.value);
        }}
      />
      <button onClick={e => handleClick(e)}>Next</button>
    </div>
  );
};

export default PageOne;
