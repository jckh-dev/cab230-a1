import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container, 
    Col, 
    Form,
    FormGroup, 
    Label, 
    Input,
    FormText, 
    FormFeedback,
} from 'reactstrap';





// constructor(props) {
//     super(props);
//     this.state = {
//         'email': '',
//         'password': '',
//         validate: {
//             emailState: '',
//         },
//       }
//       this.handleChange = this.handleChange.bind(this);
//   }




const Login = (props) => {

//     this.state = {
//         'email': '',
//         'password': '',
//         validate: {
//             emailState: '',
//         },
//     }
//     this.handleChange = this.handleChange.bind(this);

// function validateEmail(e) {
//     const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const { validate } = this.state
//     if (emailRex.test(e.target.value)) {
//         validate.emailState = 'has-success'
//     } else {
//         validate.emailState = 'has-danger'
//     }
//     this.setState({ validate })
// }

// handleChange = async (event) => {
//     const { target } = event;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const { name } = target;
//     await this.setState({
//         [name]: value,
//     });
// }

// function submitForm(e) {
//     e.preventDefault();
//     console.log(`Email: ${this.state.email}`)
// }


const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

// const [email, setEmail] = useState('');

// const [password, setPassword] = useState('');

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