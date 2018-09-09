import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password:''
    };
  };

  onChangeLogin = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitLogin = e => {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Connexion</h1>
            <p className="lead text-center">Connecte toi à ton compte</p>
            <form onSubmit={this.onSubmitLogin}>
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email" 
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeLogin}
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Mot de passe" 
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeLogin} 
                />
              </div>
              <input type="submit" className="btn btn-block mt-4 text-light colorP" />
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default Login;
