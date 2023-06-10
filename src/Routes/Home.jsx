// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Student Portal</h1>
      <Link to="/student" data-testid="student-btn">
        <button className="home__button">All Students</button>
      </Link>
    </div>
  ); // TODO: replace this
};

export default Home;
