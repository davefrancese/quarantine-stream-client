import React from "react";

const PageThree = ({ setCurPer, setMovieNetwork, setMovieStream }) => {
  return (
    <div className="Page-Three">
      <button onClick={() => setCurPer(25)}>Back</button>
      <input
        placeholder="Network"
        onChange={e => {
          e.preventDefault();
          setMovieNetwork(e.target.value);
        }}
      />
      <input
        placeholder="Streaming on..."
        onChange={e => {
          e.preventDefault();
          setMovieStream(e.target.value);
        }}
      />
      <button onClick={() => setCurPer(75)}>Next</button>
    </div>
  );
};

export default PageThree;
