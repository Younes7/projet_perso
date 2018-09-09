import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/Register";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
