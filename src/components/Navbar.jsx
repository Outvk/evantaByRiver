import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="nav-logo">
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            <span className="shadow"></span>
          </div>
        </div>
        EVANTA
      </Link>
      <div className="nav-links">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
 