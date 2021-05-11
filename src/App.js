import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

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
        <Container>
          <Row className="justify-content-center">
            <Header />
          </Row>
          <Row className="justify-content-center">
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
          </Row>
        </Container>
      </div>

    </Router>
  )

}