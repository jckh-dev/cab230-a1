import React, { useState } from 'react';
import {
    BrowserRouter as
        Router,
    Switch,
    Link,
    Route
}
    from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

import Login from "./login"

const NavBarLinks = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav>
            <Navbar color="" light expand="md">
                <NavLink tag={Link} to="/"><NavbarBrand><i class="fas fa-globe-americas pr-3"></i>Global Happiness Rankings</NavbarBrand></NavLink>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar >
                        <NavItem>
                            <NavLink tag={Link} to="/rankings">Rankings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/factors">Factors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/register">Register</NavLink>
                        </NavItem>
                    </Nav>

                    <Login />

                    <Button color="danger" className="ml-4" type="button">LOGOUT</Button>

                </Collapse>
            </Navbar>
        </nav>
    );
}

export default NavBarLinks;