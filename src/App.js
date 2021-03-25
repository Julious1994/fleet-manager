import React from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import FleetList from "./FleetList";
import CarList from "./CarList";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/cars/:fleetId">
            <CarList />
          </Route>
          <Route path="/">
            <FleetList />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
