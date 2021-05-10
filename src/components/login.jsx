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
    // FormText, 
    // FormFeedback,
} from 'reactstrap';

const Login = (props) => {

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const [email, setEmail] = useState('');

const [password, setPassword] = useState('');

// const { email, password } = this.state;

return (
    <div>
        <Button color="info" className="ml-4" onClick={toggle}>LOGIN</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>LOGIN WITH YOUR DETAILS</ModalHeader>
            <ModalBody>
                <h2>Sign In</h2>
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
                    <Button>Submit</Button>
                </Form>
                </ModalBody>
            <ModalFooter>
                
            </ModalFooter>
        </Modal>
    </div>
);
}

export default Login;