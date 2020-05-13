import React, { useState } from "react";
import { Link } from "react-router-dom";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import Overview from "./Overview";
import PostSuccess from "./PostSuccess";

import "./AddMovieForm-style.scss";

const AddMovieForm = () => {
  const [curPer, setCurPer] = useState(0);
  const [movieType, setMovieType] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDir, setMovieDir] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieStars, setMovieStars] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [movieNetwork, setMovieNetwork] = useState("");
  const [movieStream, setMovieStream] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");
  const [movieRating, setMovieRating] = useState("");

  const renderPage = () => {
    switch (curPer) {
      case 0:
        return <PageOne setCurPer={setCurPer} setMovieType={setMovieType} />;
      case 25:
        return (
          <PageTwo
            movieType={movieType}
            setCurPer={setCurPer}
            setMovieTitle={setMovieTitle}
            setMovieDir={setMovieDir}
            setMovieGenre={setMovieGenre}
            setMovieStars={setMovieStars}
            setMovieSummary={setMovieSummary}
          />
        );
      case 50:
        return (
          <PageThree
            setCurPer={setCurPer}
            setMovieNetwork={setMovieNetwork}
            setMovieStream={setMovieStream}
          />
        );
      case 75:
        return (
          <PageFour
            setCurPer={setCurPer}
            setMoviePoster={setMoviePoster}
            setMovieTrailer={setMovieTrailer}
          />
        );
      case 100:
        return (
          <PageFive setCurPer={setCurPer} setMovieRating={setMovieRating} />
        );
      case 200:
        return (
          <Overview
            setCurPer={setCurPer}
            movieType={movieType}
            movieTitle={movieTitle}
            movieDir={movieDir}
            movieNetwork={movieNetwork}
            movieStream={movieStream}
            moviePoster={moviePoster}
            movieRating={movieRating}
            movieGenre={movieGenre}
            movieStars={movieStars}
            movieSummary={movieSummary}
            movieTrailer={movieTrailer}
          />
        );
      case 201:
        return <PostSuccess setCurPer={setCurPer} />;
      default:
        return null;
    }
  };

  return (
    <div className="Add-Movie-Form">
      <p>
        <Link to="/howtoaddmovie">Back</Link>
      </p>
      <div className="add-movie-form-wrapper">
        {renderPage()}
        {curPer <= 100 ? (
          <div className="progress">
            <div
              className={`progress-bar w-${curPer}`}
              role="progressbar"
              aria-valuenow={curPer}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddMovieForm;
