import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="landing-image">
        <div className="banner landing text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Réseau K-social Oostaoo</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link to="/register" className="btn btn-lg mr-2 text-light colorP">Inscription</Link>
                <Link to="/login" className="btn btn-lg btn-light">Connexion</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Home;
