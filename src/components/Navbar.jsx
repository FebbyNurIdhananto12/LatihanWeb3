import React from "react";
import { Link } from "react-router-dom";
import "D:/code/WEB/Modul3/projectku/src/css/style.css";

function Navbar() {
  return (
    <nav>
      <h3>Navbar</h3>
      <ul>
        <li>
          <Link to="/" className="nav-button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-button">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-button">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
