import React, { useState } from 'react';
import { useAuthentication } from "../helpers/authdataprovider";
import { Link, Redirect } from "react-router-dom";
import {
    Col,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Jumbotron
} from 'reactstrap';

const Register = () => {

    const auth = useAuthentication();

    // setting states
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loginMsg, setLoginMsg] = useState("");
    const [tknExp, setTknExp] = useState("");
    const [modalMsg, setModalMsg] = useState("");
    const [modalColor, setModalColor] = useState("");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // variables
    const url = "http://131.181.190.87:3000/user/register";
    const loginURL = "http://131.181.190.87:3000/user/login";

    const handlePWChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        //stop default behaviour
        e.preventDefault();

        // post login data to server, check for any errors and if no errors, confirm registration successful, and log the user in. 

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((res) => {
                (console.log(res.error + "-"));
                (console.log(res.message + "--"));
                setError(res.error);
                setMessage(res.message);
                // conditional statement here to manage error msg to display when modal pops up
                res.error ? setModalMsg("Failed") : setModalMsg("Been Successful");
                res.error ? setModalColor("fail") : setModalColor("success");
                res.message === `User created` ? handleLogin(e) : <Redirect to="/" />;
            })
            .catch((e) => {
                setError(e);
                setMessage(e.message);
                console.log(e);
            })
            ;
    }

    // Function to Log user on if registration is successful if they choose to go back home
    const handleLogin = (e) => {

        e.preventDefault();

        fetch(loginURL, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then((res) => {
                localStorage.setItem("token", res.token);
                setTknExp(res.expires_in);
                setLoginMsg(res.message);
            })
            .then(auth.login)
            .then(toggle())
            .catch((e) => {
                setError(e);
                setMessage(e.message);
                console.log(e);
            })
            .finally(<Redirect to="/home" />);
    }

    return (
        <Jumbotron className="customJumbo">
            <Col>
                <h1 className="display-6">Please Register Your Details</h1>

                <p className="lead">You will need to register in order to access the "Factors" page</p>
                <hr className="my-3" />
            </Col>
            <Form onSubmit={handleSubmit}>
                <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="registration[email]"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="registration[password]"
                            value={password}
                            id="examplePassword"
                            placeholder="********"
                            onChange={handlePWChange} />
                    </FormGroup>

                    <Button color="info" type="submit" onClick={toggle}>Register</Button>
                </Col>

                {/* modal dialogue box for informing customer about the success or failure of their requrest */}
                <Modal isOpen={modal} toggle={toggle} className={modalColor}>

                    <ModalHeader toggle={toggle}>Registration Request</ModalHeader>
                    <ModalBody>
                        <Col>
                            <h1 className="display-6">Your Request Has {modalMsg}</h1>
                        </Col>
                        <Col>
                            <p className="lead">{message}</p>
                        </Col>
                        <Col>
                            <Button className="m-1" color="info" onClick={toggle} tag={Link} to="/register">Submit New Request</Button>
                            <Button className="m-1" color="primary" tag={Link} to="/home">Back Home</Button>
                        </Col>

                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Modal>
            </Form>
        </Jumbotron>
    )
}
export default Register;
