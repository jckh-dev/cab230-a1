import React from 'react';
import { Container, Jumbotron, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useAuthentication } from '../helpers/authdataprovider';
import Login from './login';

let token = localStorage.getItem("token");

const authHeaders = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
}



export default function Factors() {

    const auth = useAuthentication();

    if (!auth.isAuthenticated) {
        console.log(auth.isAuthenticated)
        return (

            <Jumbotron >
                <Row className="mb-5 justify-content-center">
                    <h1 className="display-5">You are not currently logged in.</h1>
                </Row>
                
                <Row className="justify-content-center ">
                    <Col sm="12" md="6">
                        
                        <p className="lead">Please click here to log in:</p>
                        <hr className="my-2" />
                        <Login />
                    </Col>
                    <Col sm="12" md="6">
                        <p className="lead">Or click here to register:</p>
                        <hr className="my-2" />
                        <Button color="primary" className="ml-4 p-3" active>REGISTER</Button>
                    </Col>
                </Row>
            </Jumbotron>
        )
    }

    return (
        <Container>
            <h2>FACTORS PAGE</h2>
        </Container>
    )


}




