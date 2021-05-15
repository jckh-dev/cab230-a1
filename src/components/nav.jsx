import React, { useState } from 'react';
import {
    Link
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
} from 'reactstrap';

import Login from "../pages/login"

const NavBarLinks = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

            <Navbar color="" light expand="lg">

           <NavbarBrand tag={Link} to="/"><i className="fas fa-globe-americas pr-3"></i>Global Happiness Rankings</NavbarBrand>

                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar >
                        <NavItem>
                        <NavLink tag={Link} to="/rankings" onClick={toggle}>Rankings</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink tag={Link} to="/factors" onClick={toggle}>Factors</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink tag={Link} to="/register" onClick={toggle}>Register</NavLink>
                        </NavItem>

                        <Login />
                        
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default NavBarLinks;