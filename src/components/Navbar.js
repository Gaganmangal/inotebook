import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Navbar.css"; // Import your CSS file

const Navbar = () => {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    // eslint-disable-next-line
  }, [location]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-custom"
        style={{ fontSize: "1.2rem" }} // Increase font size here
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: "#82378d", fontSize: "1.5rem" }}
          >
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                  style={{ fontSize: "1.2rem" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                  style={{ fontSize: "1.2rem" }}
                >
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link
                className="btn btn-primary mx-1"
                to="/login"
                role="button"
                style={{ fontSize: "1.2rem" }}
              >
                Login
              </Link>
              <Link
                className="btn btn-primary mx-1"
                to="/signup"
                role="button"
                style={{ fontSize: "1.2rem" }}
              >
                Signup
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
