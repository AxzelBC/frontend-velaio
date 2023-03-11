import React from "react";
import { createContext, useState } from "react";


const defaultValue = {
    login: {},
    setLogin: null
}

const LoginContext = createContext(defaultValue);

export function LoginProvider({ children }) {
    const [login, setLogin] = useState({})

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext;
