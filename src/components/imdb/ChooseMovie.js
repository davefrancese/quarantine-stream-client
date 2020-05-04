import React, { useState, useEffect } from "react";

const ChooseMovie = props => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      const data = await fetch(
        `http://localhost:5000/imdb/${props.match.params.imdbID}`
      );
      const res = data.json();
    };
  }, [props.match.params.imdbID]);
  console.log(props);
  return (
    <div>
      <p>choose movie edit</p>
    </div>
  );
};

export default ChooseMovie;
