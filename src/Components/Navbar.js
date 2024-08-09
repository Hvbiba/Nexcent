import React from "react";
import Logo from "./logo";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h4>{<Logo />}</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "fit-content" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#home-page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service-section">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feature-section">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#grid-cards">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bottom-text">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
