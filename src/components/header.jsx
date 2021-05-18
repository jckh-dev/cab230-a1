import React, { useState } from 'react';
import NavBarLinks from "./nav";
import { Alert } from 'reactstrap';
import { useAuthentication } from "../helpers/authProvider";

// controls the 'signed in' pop up after completing a successful sign in 
const SignedInAlert = (props) => {
        const [visible, setVisible] = useState();
        const onDismiss = () => setVisible(!visible);
    
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
                {auth.isAuthenticated ? <SignedInAlert /> : null }
        </header>
    );
};

export default Header;