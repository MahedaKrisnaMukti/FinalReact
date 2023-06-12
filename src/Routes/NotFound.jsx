// TODO: answer here
import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

const NotFound = () => {
  const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
      };

  return (
    <div className="notfound">
      <h1>404 | Not Found</h1>
      <button data-testid="back" onClick={handleBack}>
        Take Me Back
      </button>
      {/* TODO: answer here */}
    </div>
  );
};

export default NotFound;
