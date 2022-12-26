import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../img/ef22fd4cf60fecb516605e79369b8851.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="imgLogo" src={img} alt="img" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item mt-2">
              <NavLink className="nav-link active titleHome" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mt-2">
              <NavLink className="nav-link active titleLogIn" to="/login">
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
