import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
} from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            validate: {
                emailState: '',
            },
        }
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`)
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="App">
                <Col>
                    <h2>REGISTER</h2>
                </Col>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                value={email}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateEmail(e)
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                That's a tasty looking email you've got there.
                            </FormFeedback>
                            <FormFeedback>
                                Uh oh! Looks like there is an issue with your email. Please input a correct email.
                            </FormFeedback>
                            <FormText>Your username is most likely your email.</FormText>
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
                                value={password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        {/* Do I add an event handler here to store the valid or invalid response? */}
                        <Button>Submit</Button>

                    </Col>


                </Form>
            </Container>
        );
    }
}

export default Register;


// ORIGINAL FORM.....
        // <Container>
        //     <h1>REGISTRATION</h1>
        //     <h4>Use your details to register here:</h4>
        //     <Form className="form">
        //         <Col>
        //             <FormGroup>
        //                 <Label>Email</Label>
        //                 <Input
        //                     type="email"
        //                     name="email"
        //                     id="exampleEmail"
        //                     placeholder="myemail@email.com"
        //                 />
        //             </FormGroup>
        //         </Col>
        //         <Col>
        //             <FormGroup>
        //                 <Label for="examplePassword">Password</Label>
        //                 <Input
        //                     type="password"
        //                     name="password"
        //                     id="examplePassword"
        //                     placeholder="********"
        //                 />
        //             </FormGroup>

        //             <Button>Submit</Button>
        //         </Col>

        //     </Form>
        // </Container>
