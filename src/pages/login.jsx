import React, { useState, useEffect } from 'react';
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

const Login = (props) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [regMsg, setRegMsg] = useState("");
    const [tknExp, setTknExp] = useState("");
    const [modalMsg, setModalMsg] = useState("");
    const [successMessage, setSuccssMessage] = useState(""); 
    // modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // const [loading, setLoading] = useState("");

    const url = `http://131.181.190.87:3000/user/login`;

    const handlePWChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    let token = localStorage.getItem("token");

    const authHeaders = {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }

    function handleSubmit(e) {
        //stop default behaviour
        e.preventDefault()

        fetch(url, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then((res) => {
                if (res.error) {
                    throw new Error(res.message)
                }

                localStorage.setItem("token", res.token)
                setTknExp(res.expires_in);
                setRegMsg(res.message);

                setSuccssMessage("Success! Modal will automatically close in 3 seconds.")
                setTimeout(function(){ toggle(); }, 3000);
                
                // setLoading(false);
            })
            .catch((e) => {
                console.log(e.message)
                setError(e.message);
            })
            ;
    }

    return (
        <div>
            <Form>

                <Button color="info" className="ml-4" onClick={toggle}>LOGIN</Button>
                <Modal className={`${error ? 'fail' : 'success'}`} isOpen={modal} toggle={toggle} autoFocus={false}>

                    <ModalHeader toggle={toggle}>SIGN IN WITH YOUR DETAILS</ModalHeader>
                    <ModalBody>
                        <Col>
                            <h2>LOGIN</h2>
                        </Col>


                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
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
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                    onChange={handlePWChange}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            {/* INSERT CONDITIONAL FAILURE MESSAGE HERE.... */}
                            {/* <h4>{regMsg}</h4> */}
                            {error ? <p>{error}</p> : null}
                            {successMessage ? <p>{successMessage}</p> : null}</Col>

                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                        <Button onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </Form>
            {/* { console.log(regMsg)}
            { console.log(regError)}
            { console.log(token)}
            { console.log(tknExp)} */}
        </div >
    );
}

export default Login;