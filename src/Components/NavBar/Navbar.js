import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">VforVeggie</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>

            <li className="nav-item2" >
              <Link to="/BecomeVeggie" className="nav-link" >
                BecomeVeggie
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
