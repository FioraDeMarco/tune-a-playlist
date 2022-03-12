import React, { Component } from "react";
import Map from "./Map";
import App from "./App";
import Queens from "./Queens";
import Brooklyn from "./Brooklyn";
import Manhattan from "./Manhattan";
import StatenIsland from "./StatenIsland";
import Bx from "./Bx";
import AddEvent from "./AddEvent";
import MyMap from "./MyMap";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="nav">
          <nav className="links">
            <h2>Soundathon</h2>
            <Link to="/app">App</Link>
            <Link to="/map">Map</Link>
            <Link to="/queens">Queens</Link>
            <Link to="/brooklyn">Brooklyn</Link>
            <Link to="/manhattan">Manhattan</Link>
            <Link to="/statenIsland">StatenIsland</Link>
            <Link to="/bx">The Bronx</Link>
            <Link to="/AddEvent">Add Event</Link>
            <Link to="/MyMap">MyMap</Link>
          </nav>
          <Switch>
            <Route exact path="/app" component={App} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/queens" component={Queens} />
            <Route exact path="/brooklyn" component={Brooklyn} />
            <Route exact path="/manhattan" component={Manhattan} />
            <Route exact path="/statenIsland" component={StatenIsland} />
            <Route exact path="/bx" component={Bx} />
            <Route exact path="/AddEvent" component={AddEvent} />
            <Route exact path="/MyMap" component={MyMap} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
