import React from "react";
import { Link } from "react-router-dom";

const PostSuccess = ({ setCurPer }) => {
  return (
    <div className="Post-Success">
      <h1>Success!</h1>
      <p onClick={() => setCurPer(0)}>
        <Link to="/addmovieform">Add another Film or Series</Link>
      </p>
    </div>
  );
};

export default PostSuccess;
