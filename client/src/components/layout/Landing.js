import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing-image">
        <div className="banner landing text-light">
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
                <hr />
                <a href="/" className="btn btn-lg btn-info mr-2">
                  Inscription
                </a>
                <a href="/" className="btn btn-lg btn-light">
                  Connexion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
