// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const NavBar = () => {
  return (
    // TODO: answer here
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" data-testid="home-page">
          Student Portal
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/student" data-testid="student-page">
          <button className="student">Student</button>
        </Link>
        <Link to="/add" data-testid="add-page">
          <button className="add-student">Add Student</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
