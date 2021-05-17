import React, { useState, useContext, useMemo, createContext } from "react";

const noop = () => {};

const AuthContext = createContext({ isAuthenticated: false, login: noop, logout: noop });

const AuthenticationProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const auth = useMemo(() => ({
    isAuthenticated,
    login: isAuthenticated => setIsAuthenticated(!isAuthenticated),
    logout: () => setIsAuthenticated(false),
  }), [isAuthenticated]);

  return <AuthContext.Provider value={auth} {...props} />;
}

export default AuthenticationProvider;

export const useAuthentication = () => useContext(AuthContext);

// https://medium.com/trabe/implementing-private-routes-with-react-router-and-hooks-ed38d0cf93d5