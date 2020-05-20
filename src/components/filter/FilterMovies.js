import React from "react";

import "./FilterMovies-style.scss";

// filter by type (Film or Series)
// filter by networkStream (HBO, Netflix, Prime)
// filter by genre (Comedy, Drama, Reality TV)

// ex: Best Comedy Film on HBO
// ex: Best Series Drama on Netflix

const FilterMovies = ({ setFilterType, movies }) => {
  console.log("FilterMovies", movies);
  return (
    <div className="Filter-Movies">
      <p>Find the best</p>
      <div>
        <button>Genre</button>
        <button>Type (Film/Series)</button>
        <button>Streaming Platform</button>
        <button>Director/Creator</button>
      </div>
    </div>
  );
};

export default FilterMovies;
