import React, { useState } from 'react';
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Container, Col, Form,
    FormGroup, Label, Input,
    FormText, FormFeedback,
   
} from 'reactstrap';

    



    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         'email': '',
    //         'password': '',
    //         validate: {
    //             emailState: '',
    //         },
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // validateEmail(e) {
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

    // submitForm(e) {
    //     e.preventDefault();
    //     console.log(`Email: ${this.state.email}`)
    // }
    // const {
    //     buttonLabel,
    //     className
    // } = props;
    
const Login = (props) => {    

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // const { email, password } = this.state;

    return (
        <div>
            <Button color="info" className="ml-4" onClick={toggle}>LOGIN</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>LOGIN WITH YOUR DETAILS</ModalHeader>
                <ModalBody>
                    TESTER
                </ModalBody>
                <ModalFooter>
                    TESTEEES
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Login;