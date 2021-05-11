import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './style.css';

// Components
import Header from "./components/header";

// Pages
import Home from "./pages/home";
import Factors from "./pages/factors";
import Rankings from "./pages/rankings";
import Register from "./pages/register"

export default function App() {

  return (
    <Router>

      <div className="App">

        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/factors" >
            <Factors />
          </Route>
          <Route path="/rankings">
            <Rankings />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>

      </div>

    </Router>
  )

}