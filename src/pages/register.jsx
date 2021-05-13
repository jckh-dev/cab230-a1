import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
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

const Register = props => {

    // setting states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [regError, setRegError] = useState(false);
    const [regMsg, setRegMsg] = useState("");
    const [modalMsg, setModalMsg] = useState("");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // const [isValid, setIsValid] = useState(false);
    // const [message, setMessage] = useState('');

    // variables
    const url = "http://131.181.190.87:3000/user/register";

    // const emailRegex = /\S+@\S+\.\S+/;
    // const validateEmail = (e) => {
    //     setEmail(e.target.value);
    //     const emailVal = e.target.value;
    //     if (emailRegex.test(emailVal)) {
    //         setIsValid(true);
    //         setMessage('Your email looks good!');
    //         setEmail(e.target.value);
    //     } else {
    //         setIsValid(false);
    //         setMessage('Please enter a valid email!');
    //     }

    // };
    // can copy and paste the if/else conditional into the below to get the drop down, have to try and validate it first against the button onClick to stop the 'toggle' action occuring if there is an error.

    const handlePWChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        //stop default behaviour
        e.preventDefault()

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
                console.log(res);
                console.log(regMsg);
                console.log(regError);
                regError ? setModalMsg("Successful") : setModalMsg("Failed");
            })
            .catch((e) => {
                setRegError(e);
                // setLoading(false);
            })
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
                        {/* <div className={`message ${isValid ? 'success' : 'error'}`}></div> */}
                        {/* {message} */}
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
