import React from "react";
import logo from './logo.svg';
import './App.css';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import FleetList from "./FleetList";
import VehicleList from "./VehicleList";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/fleet-vehicles/:fleetId">
            <VehicleList />
          </Route>
          <Route path="/">
            <FleetList />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
