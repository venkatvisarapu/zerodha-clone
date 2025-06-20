import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container py-2 px-3">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="zerodha-images/logo.svg"
            alt="logo"
            style={{ maxHeight: "24px", width: "auto" }}
          />
        </Link>

        {/* Toggler for mobile */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 small">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
