import React from "react";

const PageFour = ({ setCurPer, setMoviePoster, setMovieTrailer }) => {
  return (
    <div className="Page-Four">
      <button onClick={() => setCurPer(50)}>Back</button>
      <input
        placeholder="Enter full poster URL"
        onChange={e => {
          e.preventDefault();
          setMoviePoster(e.target.value);
        }}
      />
      <input
        placeholder="Enter trailer URL"
        onChange={e => {
          e.preventDefault();
          setMovieTrailer(e.target.value);
        }}
      />
      <button onClick={() => setCurPer(100)}>Next</button>
    </div>
  );
};

export default PageFour;
