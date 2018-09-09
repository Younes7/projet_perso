import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4 colorP">
        <div className="container">
          <a className="navbar-brand" href="/">React App</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">{" "}Profil{" "}</a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Inscription</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Connexion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
};

export default Navbar;
