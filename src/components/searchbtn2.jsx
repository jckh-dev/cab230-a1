import React, { useState } from 'react';
import {
    // Dropdown, 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

// uncomment the below to implement state handling when ready... Placeholder only until uncommented.

const searchBtn2 = (props) => {

    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <UncontrolledDropdown>

            {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}> */}

            <DropdownToggle caret>
                Select Year
       </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>2020</DropdownItem>
                <DropdownItem>2019</DropdownItem>
                <DropdownItem>2018</DropdownItem>
                <DropdownItem>2017</DropdownItem>
                <DropdownItem>2016</DropdownItem>
                <DropdownItem>2015</DropdownItem>
            </DropdownMenu>
            {/* </Dropdown> */}
        </UncontrolledDropdown>
    );
}

export default searchBtn2;