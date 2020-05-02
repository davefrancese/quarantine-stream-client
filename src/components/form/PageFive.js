import React from "react";

const PageFive = ({ setCurPer, setMovieRating }) => {
  return (
    <div className="Page-Five">
      <button onClick={() => setCurPer(75)}>Back</button>
      <input
        type="number"
        placeholder="10 scale rating"
        max="10"
        onChange={e => {
          e.preventDefault();
          setMovieRating(`${e.target.value}`);
        }}
      />
      <button className="finish-btn" onClick={() => setCurPer(200)}>
        Finish
      </button>
    </div>
  );
};

export default PageFive;
