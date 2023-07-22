// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link  to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
