import React, { useState } from 'react';
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

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

// const [email, setEmail] = useState[''];

// const [password, setPassword] = useState[''];

// const [ email, password ] = this.state;

return (
    <div>
        <Button color="info" className="ml-4" onClick={toggle}>LOGIN</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>SIGN IN WITH YOUR DETAILS</ModalHeader>
            <ModalBody>
                <Col>
                <h2>LOGIN</h2>
                </Col>
                
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
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
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                    {/* attach POST request to submit button */}
                    <Button>Submit</Button>
                    </Col>
                </Form>
                </ModalBody>
            <ModalFooter>
                
            </ModalFooter>
        </Modal>
    </div>
);
}

export default Login;