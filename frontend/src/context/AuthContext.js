import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    let contextData = {
        
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}