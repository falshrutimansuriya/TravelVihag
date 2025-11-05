import { Link } from "react-router-dom";
import React from "react";
import "./Header.css"; 

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🌴 TravelVihag</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
