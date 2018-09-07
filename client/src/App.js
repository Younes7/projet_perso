import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <h1>Welcome to React</h1> */}
          <Navbar />
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
