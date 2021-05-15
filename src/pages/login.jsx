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

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [regMsg, setRegMsg] = useState("");
    const [tknExp, setTknExp] = useState("");
    const [successMessage, setSuccssMessage] = useState("");

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

    const handleLoginSubmit = (e) => {

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
                console.log(localStorage.getItem("token"))
                setTknExp(res.expires_in);
                setRegMsg(res.message);
                setSuccssMessage("Success! You Are Logged In!");
                setTimeout(function () { toggle(); }, 1000);
            })
            // .then(token.onLogin)
            .then(auth.login)
            .catch((e) => {
                console.log(e.message)
                setError(e.message);
            })
            ;
    }

    if (!auth.isAuthenticated) {
        return (

            <div>

                <Button color="info" className="ml-4" onClick={toggle}>LOGIN</Button>


                <Modal className={`${error ? 'fail' : 'success'}`} isOpen={modal} toggle={toggle} autoFocus={false}>

                    <ModalHeader toggle={toggle}>SIGN IN WITH YOUR DETAILS</ModalHeader>
                    <form onSubmit={handleLoginSubmit}>
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
                            <Button color="primary" type="submit">LOGIN</Button>
                            <Button onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>

            </div>
        )
    }
    return (
        <div>
            <Button onClick={auth.logout}>LOG OUT</Button>
            {console.log(auth.isAuthenticated)}
        </div>
    );
}

export default Login;