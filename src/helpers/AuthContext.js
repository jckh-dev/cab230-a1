import React, { useState } from 'react';

const AuthDataContext = React.createContext([{}, () => { }]);


const AuthDataProvider = (props) => {

    const [authState, getAuthState] = useState({});
    return (
        <AuthDataContext.Provider value={[authState, getAuthState]}>
            {props.children}
        </AuthDataContext.Provider>
    );
}

export { AuthDataContext, AuthDataProvider};