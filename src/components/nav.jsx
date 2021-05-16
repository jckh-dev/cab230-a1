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

    // states to manage the navbar dropdown when under the md breakpoint
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar className="my-3 p-0" light expand="md">

            <NavbarBrand tag={Link} to="/home"><i className="fas fa-globe-americas pr-3"></i>Global Happiness Rankings</NavbarBrand>

            <NavbarToggler onClick={toggle}/>

            <Collapse isOpen={isOpen} navbar block>
                {/* NavBar items, responsive collapse to dropdown menu @ md */}
                <Nav className="ml-auto" navbar >
                    <NavItem>
                        <NavLink tag={Link} to="/rankings" onClick={toggle}>Rankings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/factors" onClick={toggle}>Factors</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="mr-3" tag={Link} to="/register" onClick={toggle}>Register</NavLink>
                    </NavItem>

                    {/* login button component */}
                    <Login onClick={toggle} />
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavBarLinks;