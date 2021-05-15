import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
} from 'reactstrap';

const Register = () => {

    const [error, setError] = useState(null);
    // setting states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [regError, setRegError] = useState(false);
    const [regMsg, setRegMsg] = useState("");
    const [loginMsg, setLoginMsg] = useState("");
    const [tknExp, setTknExp] = useState("");
    const [modalMsg, setModalMsg] = useState("");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // variables
    const url = "http://131.181.190.87:3000/user/register";

    const handlePWChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        //stop default behaviour
        e.preventDefault()

        // post login data to server, check for any errors and if no errors, confirm registration successful, and log the user in. 
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((res) => {
                setRegError(res.error);
                setRegMsg(res.message);
                // conditional statement here to manage error msg to display when modal pops up
                regError ? setModalMsg("Successful") : setModalMsg("Failed");
            })
            .catch((e) => {
                setRegError(e.error);
                setRegMsg(e.message);
            })

        // Log user on if registration is successful
        if (!regError) {
            fetch(url, {
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
                .catch((e) => {
                    setLoginMsg(e);
                })
        }
    }

    return (

        <form onSubmit={handleSubmit}>
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

            <Modal isOpen={modal} toggle={toggle} className={`${regError ? 'fail' : 'success'}`}> <ModalHeader toggle={toggle}>YOUR REGISTRATION REQUEST</ModalHeader>
                <ModalBody>
                    <Col>
                        <h2>REGISTRATION REQUEST {modalMsg}</h2>
                    </Col>
                    <Col>
                        <h4>{regMsg}</h4>
                    </Col>
                    <Col>
                        <Button onClick={toggle}>Submit New Request</Button>
                        <Button><Link to="/">Back Home</Link></Button>
                    </Col>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </form>

    )
}
export default Register;
