import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Encrypt from "./Pages/Encrypt";
import Decrypt from "./Pages/Decrypt";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Encrypt></Encrypt>}></Route>
          <Route
            exact
            path="/decrypt"
            render={() => <Decrypt></Decrypt>}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
