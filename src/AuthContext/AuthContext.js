import React, { createContext } from 'react'
import useFirebase from '../hooks/useFirebase';

export const Context = createContext();
const AuthContext = ({ children }) => {
    const allUser = useFirebase();
    return (
        <Context.Provider value={{ allUser }}>
            {children}
        </Context.Provider>
    )
}

export default AuthContext
