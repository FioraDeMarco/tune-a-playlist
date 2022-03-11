import React, { Component } from "react";
import Map from "./Map";
import App from "./App";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h2>Sounds Block</h2>
            <Link to="/app">App</Link>
            <Link to="/map">Map</Link>
          </nav>
          <Switch>
            <Route exact path="/app" component={App} />
            <Route exact path="/map" component={Map} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
