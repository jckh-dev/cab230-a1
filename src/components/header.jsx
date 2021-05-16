import React, { useState } from 'react';
import NavBarLinks from "./nav";
import { Container, Alert } from 'reactstrap';
import { useAuthentication } from "../helpers/authdataprovider";

const SignedInAlert = (props) => {
        const [visible, setVisible] = useState(true);

        const onDismiss = () => setVisible(false);

        return (
            <Alert className="lead transparentbackgr text-primary" isOpen={visible} toggle={onDismiss}>
              You are successfully logged on.
            </Alert>
        );
    }

const Header = () => {
    
    const auth = useAuthentication();
    
    return (
        <header>
                <NavBarLinks />
                {/* shows a message on the home screen when the user logs in successfully */}
                    {auth.isAuthenticated ? SignedInAlert(true) : null}
            
        </header>
    );
};

export default Header;