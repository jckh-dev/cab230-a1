import React, { useState } from 'react';
import { useAuthentication } from "../helpers/authProvider";
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

    const url = `http://131.181.190.87:3000/user/login`;

    const auth = useAuthentication();

    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [tknExp, setTknExp] = useState("");
    const [modalColor, setModalColor] = useState("");
    const [modalMsg, setModalMessage] = useState(null);

    // handle modal toggle behaviour
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // handle form changes and submission
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
        // fetch data from API and process. Contains error handling, restricts the modal from closing on failed attempt
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then((res) => {
                if (res.error) {
                    setModalColor("fail");
                    setModalMessage(res.message);
                    throw new Error(res.message);
                }
                localStorage.setItem("token", res.token);
                setTknExp(res.expires_in);
                // reset modal in case an error was caught
                setModalColor();
                setModalMessage();
            })
            .then(auth.login)
            .then(toggle)
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

                <Modal className={modalColor} isOpen={modal} toggle={toggle} data-backdrop="static" autoFocus={false}>

                    <Form onSubmit={handleLoginSubmit}>

                        <ModalHeader toggle={toggle}>Login</ModalHeader>

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
                                <p className="lead">{modalMsg}</p>
                            </Col>
                        </ModalBody>

                        {/* button selectors for form and modal toggling */}
                        <ModalFooter>
                            <Button color="info" type="submit" >Login</Button>
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
            <Button color="light" onClick={auth.logout}>Logout</Button>
        </div>
    );
}

export default Login;