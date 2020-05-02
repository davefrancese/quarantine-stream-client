import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import EditForm from "./EditForm";

import "./EditTemplate-style.scss";

const EditTemplate = props => {
  const [movie, setMovie] = useState({});
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [director_creator, setDirector_creator] = useState("");
  const [network, setNetwork] = useState("");
  const [streamNetwork, setStreamNetwork] = useState("");
  const [rating, setRating] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const id = props.match.params.movie;
    const getMovie = async () => {
      const res = await fetch(`http://localhost:5000/movie/${id}`);
      const data = await res.json();
      setMovie(data);
    };

    getMovie();
  }, [props.match.params.movie]);

  const handleChange = e => {
    e.preventDefault();
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "type":
        setType(e.target.value);
        break;
      case "director_creator":
        setDirector_creator(e.target.value);
        break;
      case "network":
        setNetwork(e.target.value);
        break;
      case "streamNetwork":
        setStreamNetwork(e.target.value);
        break;
      case "rating":
        setRating(`${e.target.value}/10`);
        break;
      case "posterURL":
        setPosterURL(e.target.value);
        break;
      default:
        return null;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const update = {
      id: movie.id,
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

    const put = await axios.put(
      `http://localhost:5000/movie/${movie.id}`,
      update
    );
    setStatus(put.status);
  };

  const handleDelete = async e => {
    e.preventDefault();
    const del = await axios.delete(`http://localhost:5000/movie/${movie.id}`);
    setStatus(del.status);
  };

  const renderPage = () => {
    if (status === 200 || status === 201) {
      return (
        <div>
          <h3>Success!</h3>
          <p>
            <Link to="/mymoviedashboard">Back to Dashboard</Link>
          </p>
        </div>
      );
    } else if (status === 0) {
      return (
        <EditForm
          movie={movie}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      );
    } else {
      return (
        <div>
          <h3>There was an error. Please try again.</h3>
          <p>
            <Link to="/mymoviedashboard">Back to Dashboard</Link>
          </p>
        </div>
      );
    }
  };

  return <div>{renderPage()}</div>;
};

export default EditTemplate;
