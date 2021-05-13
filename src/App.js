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
import Register from "./pages/register";
import Footer from "./components/footer";

export default function App() {

  let token = localStorage.getItem("token");

  return (
    <Router>

      <div className="App">
        <Container className="header_cnt border-bottom mb-3">
          <Header />
        </Container>

        <Container fluid className="content_cnt">
          <Container>

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

          </Container>
        </Container>

        <Container className="footer_cnt border-top mt-3">
          <Footer />
        </Container>
      </div>

    </Router>
  )

}