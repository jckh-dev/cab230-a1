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

    if (!auth.isAuthenticated) {
        
        return (

            <Jumbotron>
                <Row className="mb-5">
                    <h1 className="display-6">You are not currently logged in.</h1>
                </Row>

                <Row className="">
                    <Col className="mt-3" sm="12" md="6">
                        <p className="lead">Please click here to log in:</p>
                        <hr className="" />
                        <Login />
                    </Col>
                    <Col className="mt-3" sm="12" md="6">
                        <p className="lead">Or click here to register:</p>
                        <hr className="" />
                        
                        <Button className="m-1" color="primary" tag={Link} to="/register" block>
                        Register</Button>
                    </Col>
                </Row>
            </Jumbotron >
        )
    }

    return (

        <FactorComp />

    )


}




