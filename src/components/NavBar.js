// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <div className="navbar-brand">React Auth</div>
        </Link>
        <Link to="/home" className="navbar-brand">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/movie" className="nav-link">Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link me-5">ContactUs</Link>
            </li>
            <li className="nav-item ms-auto">
              <Link to='/auth' className="nav-link ms-5">Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/profile' className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-danger">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
