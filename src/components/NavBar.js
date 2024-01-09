import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/auth');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <div className="navbar-brand">E-Commerce</div>
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/home" className="navbar-brand">
              Home
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/movie" className="nav-link">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link me-5">
                    ContactUs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-5">
              <Link to="/auth" className="nav-link ms-5">
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
