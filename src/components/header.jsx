import React from 'react';

import NavBarLinks from "./nav"

const Header = (props) => {
    return (
        <header>
            <NavBarLinks />
            <h4>Header with Search Bar that send result through to filtered rankings? or another results page?</h4>
        </header>
    );
};

export default Header;