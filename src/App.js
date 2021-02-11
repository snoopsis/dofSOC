import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ObsCard from "./components/ObsCard";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/obscard" component={ObsCard} />
          <Route exact path="/appbar" component={AppBar} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
