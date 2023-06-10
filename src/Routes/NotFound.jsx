// TODO: answer here
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound">
      <h1>404 | Not Found</h1>
      <button data-testid="back" onClick={navigate}>
        Take Me Back
      </button>
      {/* TODO: answer here */}
    </div>
  );
};

export default NotFound;
