import React from 'react';
import { Jumbotron, Col, Row, Button } from 'reactstrap';
import {
    Link
}
    from "react-router-dom";
import { useAuthentication } from '../helpers/authProvider';
import Login from '../components/login';
import FactorComp from '../helpers/api';


export default function Factors() {

    const auth = useAuthentication();

    // checks to see if user is logged in, if not- display prompt to log in or register
    if (!auth.isAuthenticated) {
        return (
            <Jumbotron>
                <Row className="mb-5">
                    <h1 className="display-6">You are not currently logged in.</h1>
                </Row>

                <Row>
                    <Col className="mt-3" sm="12" md="6">
                        <p className="lead">Please click here to log in:</p>
                        <hr className="my4" />
                        <Login />
                    </Col>
                    <Col className="mt-3" sm="12" md="6">
                        <p className="lead">Or click here to register:</p>
                        <hr className="my4" />

                        <Button className="m-1" color="primary" tag={Link} to="/register" block>
                            Register</Button>
                    </Col>
                </Row>
            </Jumbotron >
        )
    }

    // otherwise, display the factors component:
    return (

        <FactorComp />

    )


}




