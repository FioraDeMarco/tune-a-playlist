import React from "react";
import { Route, Switch, Router, Link, BrowserRouter } from "react-router-dom";
import App from "./App";
import Portfolio from "./Portfolio";

function Routes(props) {
  return (
    // <div>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} />
        <Route exact path='/Portfolio' component={Portfolio} />
      </Switch>
    </BrowserRouter>
    // </div>
  );
}

export default Routes;
