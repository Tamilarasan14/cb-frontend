import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HealthCheck from "./HealthCheck";
import { Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Kite Administrator Portal</h1>
      <BrowserRouter>
        <Link to="/health">Health Check</Link>
        <Route path="/health" component={HealthCheck} />
      </BrowserRouter>
    </div>
  );
}

export default App;
