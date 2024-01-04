import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const nagivate = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    nagivate('/auth');
  };

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
            {isLoggedIn ? (
              <React.Fragment>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={logoutHandler}>Logout</button>
                </li>
              </React.Fragment>
            ) : (
              <li className="nav-item ms-auto">
                <Link to="/auth" className="nav-link ms-5">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
