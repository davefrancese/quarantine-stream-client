import React from "react";
import { Link } from "react-router-dom";

const EditForm = ({ movie, handleSubmit, handleChange, handleDelete }) => {
  return (
    <div className="Edit-Template">
      <p>
        <Link to="/mymoviedashboard">Back to Dashboard</Link>
      </p>
      <h3>
        Editing {movie.title} {movie.type}
      </h3>
      <p>What would you like to edit?</p>
      <form onSubmit={e => handleSubmit(e)}>
        <p>Title</p>
        <input
          name="title"
          defaultValue={movie.title}
          onChange={e => handleChange(e)}
        />
        <p>Type (Film or Series)</p>
        <input
          name="type"
          defaultValue={movie.type}
          onChange={e => handleChange(e)}
        />
        <p>Director/Creator</p>
        <input
          name="director_creator"
          defaultValue={movie.director_creator}
          onChange={e => handleChange(e)}
        />
        <p>Genre</p>
        <input
          name="genre"
          defaultValue={movie.genre}
          onChange={e => handleChange(e)}
        />
        <p>Stars</p>
        <input
          name="stars"
          defaultValue={movie.stars}
          onChange={e => handleChange(e)}
        />
        <p>Network</p>
        <input
          name="network"
          defaultValue={movie.network}
          onChange={e => handleChange(e)}
        />
        <p>Streaming on...</p>
        <input
          name="streamNetwork"
          defaultValue={movie.streamNetwork}
          onChange={e => handleChange(e)}
        />
        <p>Rating</p>
        <input
          name="rating"
          defaultValue={movie.rating}
          onChange={e => handleChange(e)}
        />
        <p>Poster URL</p>
        <input
          name="posterURL"
          defaultValue={movie.posterURL}
          onChange={e => handleChange(e)}
        />
        <p>Trailer URL</p>
        <input
          name="trailerURL"
          defaultValue={movie.trailerURL}
          onChange={e => handleChange(e)}
        />
        <p>Summary</p>
        <textarea
          name="summary"
          defaultValue={movie.summary}
          onChange={e => handleChange(e)}
        />
        <br />
        <button type="Submit">Submit Changes</button>
        <button className="delete-btn" onClick={e => handleDelete(e)}>
          Delete Movie
        </button>
      </form>
    </div>
  );
};

export default EditForm;
