import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Container,

} from 'reactstrap';


import Login from "./login"


const NavBar = (props) => {
  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Container className="fluidCont" fluid="true">
                <Container>
                    <Navbar color="" light expand="md">
                        <NavbarBrand href="/"><i class="fas fa-globe-americas pr-3"></i>Global Happiness Rankings</NavbarBrand>

                        <NavbarToggler onClick={toggle} />

                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar >
                                <NavItem>
                                    <NavLink href="#">Rankings</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled href="#">Factors</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Register</NavLink>
                                </NavItem>
                                
                            </Nav>

                                <Login />

                            <Button color="danger" className="ml-4" type="button">LOGOUT</Button>
                        </Collapse>

                    </Navbar>
                </Container>
            </Container>
        </div>
    );
}

export default NavBar;