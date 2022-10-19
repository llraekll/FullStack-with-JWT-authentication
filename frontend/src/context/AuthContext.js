import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {



    let [ authTokens, setauthTokens ] = useState(null)
    let [ user, setUser ] = useState(null)

    let loginUser = async (e) => {
        e.preventDefault()
        console.log('Submitted bruh')
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            setauthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            alert('Something is wrong and I dont like it')
        }
    }

    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}