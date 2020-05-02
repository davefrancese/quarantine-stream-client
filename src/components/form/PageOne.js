import React from "react";

import "./AddMovieForm-style.scss";

const PageOne = ({ setCurPer, setMovieType }) => {
  const handleClick = e => {
    e.preventDefault();
    setMovieType(e.target.value);
    setCurPer(25);
  };
  return (
    <div className="Page-One">
      <button className="film-btn" value="Film" onClick={e => handleClick(e)}>
        Film
      </button>

      <button
        className="series-btn"
        value="Series"
        onClick={e => handleClick(e)}
      >
        Series
      </button>
    </div>
  );
};

export default PageOne;
