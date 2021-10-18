import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link to className="navbar-brand" href="#">
        <h2 className="color-green">proper</h2>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item navcolor mx-5">
            <Link to className="nav-link" href="#">
              Contact
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link to className="nav-link" href="#">
              Jobs
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link to className="nav-link" href="#">
              Blog
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link to className="nav-link" href="#">
              Discover
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
