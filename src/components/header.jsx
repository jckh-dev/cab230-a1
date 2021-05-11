import React from 'react';
import { Container } from 'reactstrap';

import NavBarLinks from "./nav"

const Header = (props) => {
    return (
        <header>

            <NavBarLinks />

            <Container>
                <h4>Header with Search Bar that send result through to filtered rankings? or another results page?</h4>
            </Container>

        </header>
    );
};

export default Header;