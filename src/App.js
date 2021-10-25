import './App.css';
import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ViewOne from "./views/ViewOne";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/plant/:id">
          <ViewOne />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
