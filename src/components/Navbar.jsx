// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const NavBar = () => {
  return (
    // TODO: answer here
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/" data-testid="home-page">
          Student Portal
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/student" data-testid="student-page">
          All Students
        </Link>
        <Link to="/add" data-testid="add-page">
          Add Student
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
