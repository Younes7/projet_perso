import React, { Component } from 'react';

class Register extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      email: '',
      password:'',
      password2:''
    };
  };

  onChangeRegister = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitRegister = e => {
    e.preventDefault();

    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Inscription</h1>
            <p className="lead text-center">Créer ton compte</p>
            <form onSubmit={this.onSubmitRegister}>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Nom" 
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeRegister} 
                  // required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email" 
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeRegister}
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Mot de passe" 
                  name="password" 
                  value={this.state.password}
                  onChange={this.onChangeRegister}
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Mot de passe2" 
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChangeRegister} 
                />
              </div>
              <input type="submit" className="btn btn-block mt-4 text-light colorP" value="Envoyer"/>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default Register;