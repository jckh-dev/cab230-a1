import React, { useState } from 'react';
import { useAuthentication } from "../helpers/authdataprovider";
// import jwt from "jsonwebtoken";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';


const Login = () => {

    const auth = useAuthentication();

    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [tknExp, setTknExp] = useState("");

    const [modalColor, setModalColor] = useState("");
    // modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const url = `http://131.181.190.87:3000/user/login`;

    const handlePWChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // form logic to process a sign in request by the user
    const handleLoginSubmit = (e) => {

        //stop default behaviour
        e.preventDefault();

        fetch(url, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then((res) => {
                if (res.error) {
                    setModalColor("fail");
                    throw new Error(res.message);
                }
                localStorage.setItem("token", res.token);
                // console.log(localStorage.getItem("token"));
                setTknExp(res.expires_in);
                setMessage("Success! You Are Logged In!");
                setModalColor("success")
                auth.login();
                setTimeout(function () { toggle(); }, 1000);
            })
            .catch((e) => {
                
                console.log(e.message);
                setError(e.message);
            })
            ;
    }

    // boolean operation to decide what to display depending on if user is logged in or not
    if (!auth.isAuthenticated) {
        return (

            <div>
                <Button color="info" onClick={toggle} block>Login</Button>

                <Modal className={modalColor} isOpen={modal} toggle={toggle} autoFocus={false}>

                    <ModalHeader toggle={toggle}>Login</ModalHeader>
                    <Form onSubmit={handleLoginSubmit}>
                        <ModalBody>
                            <Col>
                                <h1 className="display-6">Sign In With Your Details</h1>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label className="lead">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="myemail@email.com"
                                        onChange={handleEmailChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label className="lead" for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                        onChange={handlePWChange}
                                    />
                                </FormGroup>
                            </Col>
                            {/* ternary decisions for displaying success or error messages upon attepting to login */}
                            <Col>
                                {error ? (<p className="lead">There Was An Error Processing Your Request</p>, <p className="lead">{error}</p>) : null}
                                {message ? <p className="lead">{message}</p> : null}
                            </Col>
                        </ModalBody>

                        {/* button selectors for form and modal toggling */}
                        <ModalFooter>
                            <Button color="info" type="submit">Login</Button>
                            <Button color="primary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }
    // boolean return to display in place of the login button if logged in 
    return (
        <div>
            <Button color="light" onClick={auth.logout} block>Logout</Button>
            {console.log(auth.isAuthenticated)}
        </div>
    );
}

export default Login;