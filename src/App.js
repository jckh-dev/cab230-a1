import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import './style.css';

// Components
import Footer from "./components/footer";
import Header from "./components/header";
// Pages
import Home from './pages/home';
import Factors from "./pages/factors";
import Rankings from "./pages/rankings";
import Register from "./pages/register";

//Helpers
import AuthenticationProvider from "./helpers/authProvider";

const App = () => {

  return (

    // router initialisation around entire tree structure
    <Router>
      {/* authentication provider wrapper for the context state functionality */}
      <AuthenticationProvider>
        <div className="App">
          <Container className="header_cnt border-bottom mb-3">
            <Header />
          </Container>

          <Container fluid className="content_cnt">
            <Container>
              {/* routing paths */}
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/rankings">
                  <Rankings />
                </Route>
                <Route path="/factors" >
                  <Factors />
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
      </AuthenticationProvider>
    </Router>

  )

}
export default App;