import React from "react";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

import Home from '../pages/home';
import Factors from "../pages/factors";
import Rankings from "../pages/rankings";
import Register from "../pages/register";
import Login from "../pages/login"
import { useAuthDataContext } from "../helpers/authdataprovider";


const PrivateRoute = ({ component, ...options }) => {
    const { user } = useAuthDataContext();
    const finalComponent = user ? component : Login;

    return <Route {...options} component={finalComponent} />;
};

const PageRouter = () => (
    <Switch>
        
        <Route exact path="/" component={Home} />
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
)
export default PageRouter;