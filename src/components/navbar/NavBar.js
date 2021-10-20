import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbg navbar-dark">
      <Link to className="navbar-brand" href="#">
        <h2 className="color-green text-bold navcolor">Proper</h2>
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
          <li className="nav-item mx-5">
            <Link to className="nav-link navcolor" href="#">
              Contact
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link to className="nav-link navcolor" href="#">
              Jobs
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link to className="nav-link navcolor" href="#">
              Blog
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link to className="nav-link navcolor" href="#">
              Discover
            </Link>
          </li>
        </ul>
        <ul
          className="hidden nav justify-content-md-end justify-content-start"
          style={{ width: "100%" }}
        >
          <li className="nav-item mx-5">
            <Button />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
