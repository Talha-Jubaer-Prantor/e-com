import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "cadetblue", height: "75px" }}
      >
        <div
          className="container-fluid container"
          style={{ backgroundColor: "blueviolet", borderRadius: "10px" }}
        >
          <Link style={{ color: "white" }} className="navbar-brand" to="/">
            Navbar
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ paddingLeft: "26%" }}>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/signup"
                >
                  SignUp/Login
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "white" }} className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "white" }} className="nav-link" to="/">
                  Others
                </Link>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0 nav-search"
              style={{ borderRadius: "10px" }}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to="/">
                <i
                  style={{ fontSize: "25px", padding: "6px", color: "purple" }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
