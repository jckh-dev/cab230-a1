import React, { useState } from 'react';
import {
    Col,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const Register = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submit = e => {
        e.preventDefault()
        fetch("http://131.181.190.87:3000/register", {
            method: 'POST',
            body: JSON.stringify({ email: "" }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then((res) => {
                // if res.error == "True"
                    // store error in some state
                console.log(res)
            })
            .then(json => setEmail(json.email))
            .then(json => setPassword(json.email))
    }

    return (
        <form onSubmit={submit}>
            <Col>
                {/* <FormGroup> */}
                    <Label>Email</Label>
                    <input
                        type="email"
                        name="registration[email]"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                {/* </FormGroup> */}
            </Col>
            <Col>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <input
                        type="password"
                        name="registration[password]"
                        value={password}
                        id="examplePassword"
                        placeholder="********"
                        onChange={e => setPassword(e.target.value)} />
                   
                </FormGroup>
                {/* insert error message here */}
                {/* {email.error.name && <p>ERROR: {email.error.name}</p>} */}
                <Button type="submit">Register</Button>
            </Col>
        </form>
    )
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
