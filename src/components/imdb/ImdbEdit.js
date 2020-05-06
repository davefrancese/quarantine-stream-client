import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ImdbEdit-style.scss";

const ImdbEdit = props => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetch(
        `http://localhost:5000/imdbmovie/${props.match.params.imdbID}`
      );
      const res = await data.json();
      setMovie(res);
    };
    getMovie();
  }, [props.match.params.imdbID]);

  const handleSubmit = async e => {
    e.preventDefault();
    const update = {
      title: e.target.title.value,
      type: e.target.type.value,
      genre: e.target.genre.value,
      stars: e.target.stars.value,
      director_creator: e.target.director_creator.value,
      network: e.target.network.value,
      streamNetwork: e.target.streamNetwork.value,
      rating: e.target.rating.value,
      posterURL: e.target.posterURL.value,
      summary: e.target.summary.value,
      trailerURL: e.target.trailerURL.value
    };
    const post = await axios.post(`http://localhost:5000/postmovie/`, update);
    setStatus(post.status);
  };

  const seriesTrim = string => {
    return string.split(" ")[1];
  };

  const genreTrim = string => {
    const arr = string.split("");
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      let isCap = /[A-Z]/.test(arr[i]);
      if (i === 0) {
        resultArr.push(arr[i]);
      } else {
        if (isCap) {
          resultArr.push(",");
          resultArr.push(" ");
          resultArr.push(arr[i]);
        } else {
          resultArr.push(arr[i]);
        }
      }
    }
    return resultArr.join("");
  };

  const nameTrim = string => {
    const arr = string.split("");
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      let isCap = /[A-Z]/.test(arr[i]);
      let prevLo = /[a-z]/.test(arr[i - 1]);
      if (i === 0) {
        resultArr.push(arr[i]);
      } else {
        if (isCap && arr[i - 1] === " ") {
          resultArr.push(arr[i]);
        } else if (isCap && prevLo) {
          resultArr.push(",");
          resultArr.push(" ");
          resultArr.push(arr[i]);
        } else {
          resultArr.push(arr[i]);
        }
      }
    }
    return resultArr.join("");
  };

  const ratingTrim = string => {
    return string.split("/")[0];
  };

  const renderForm = () => {
    if (status === 200 || status === 201) {
      return (
        <div className="Imdb-Edit-success">
          <h3>Success!</h3>
          <p>
            <Link to="/mymoviedashboard">Dashboard</Link>
          </p>
          <p>
            <Link to="/howtoaddmovie">Add Another Film/Series</Link>
          </p>
        </div>
      );
    } else if (status === 0 && movie.type) {
      return (
        <div className="Imdb-Edit">
          <form onSubmit={e => handleSubmit(e)}>
            <p>Title</p>
            <input name="title" defaultValue={movie.title} />
            <p>Type (Film or Series)</p>
            <input name="type" defaultValue={seriesTrim(movie.type)} />
            <p>Director/Creator</p>
            <input
              name="director_creator"
              defaultValue={nameTrim(movie.director_creator)}
            />
            <p>Genre</p>
            <input name="genre" defaultValue={genreTrim(movie.genre)} />
            <p>Stars</p>
            <input name="stars" defaultValue={nameTrim(movie.stars)} />
            <p>Network</p>
            <input name="network" defaultValue={movie.network} />
            <p>Streaming on...</p>
            <input name="streamNetwork" defaultValue={movie.streamNetwork} />
            <p>Rating</p>
            <input name="rating" defaultValue={ratingTrim(movie.rating)} />
            <p>Poster URL</p>
            <input name="posterURL" defaultValue={movie.posterURL} />

            <p>Trailer URL</p>
            <input name="trailerURL" defaultValue={movie.trailerURL} />
            <p>Summary</p>
            <textarea name="summary" defaultValue={movie.summary} />
            <br />
            <button type="Submit">Submit</button>
            <button className="cancel-btn">
              <Link to="/addmoviewithimdb">Cancel</Link>
            </button>
          </form>
          <div>
            <img src={movie.posterURL} alt={`${movie.title} poster`} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="Imdb-Edit">
          <p>Something went wrong. Try again.</p>
        </div>
      );
    }
  };
  console.log(status);
  return renderForm();
};

export default ImdbEdit;
